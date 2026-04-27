import { memo, useEffect, useRef, useState } from 'react';

import { styled } from 'styletron-react';

const ReactPanZoomWrapper = styled<'div', { $isPanning: boolean }>('div', ({ $isPanning }) => ({
  width: '100%',
  height: '100%',
  cursor: $isPanning ? 'grabbing' : 'grab',
  position: 'relative',
}));

const ReactPanZoomChildrenContainer = styled('div', {
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
});

type ReactPanZoomProps = {
  children: React.ReactNode;
};

/**
 * A component that enables panning and zooming of its children.
 */
function ReactPanZoom({ children }: ReactPanZoomProps): JSX.Element {
  const panZoom = useRef(null);
  const [isPanning, setIsPanning] = useState(false);
  const matrix = [1, 0, 0, 1, 0, 0]; // current view transform
  const m = matrix; // alias
  let scale = 1; // current scale
  const pos = { x: 0, y: 0 }; // current position of origin
  let dirty = true;
  const mouse = { x: 0, y: 0, oldX: 0, oldY: 0, button: false };

  /**
   * Updates the transformation matrix based on the current scale and position.
   */
  function update(): void {
    dirty = false;
    m[3] = m[0] = scale;
    m[2] = m[1] = 0;
    m[4] = pos.x;
    m[5] = pos.y;
  }

  /**
   * Applies the current transformation matrix to the component.
   */
  function apply(): void {
    if (dirty) {
      update();
    }

    panZoom.current.style.transform = `matrix(${m[0]},${m[1]},${m[2]},${m[3]},${m[4]},${m[5]})`;
  }

  /**
   * Pans the component by a given amount.
   */
  function pan(amount): void {
    if (dirty) {
      update();
    }

    pos.x += amount.x;
    pos.y += amount.y;
    dirty = true;
  }

  /**
   * Scales the component at a given point by a given amount.
   */
  function scaleAt(at, amount): void {
    // at in screen coords
    if (dirty) {
      update();
    }

    scale *= amount;
    pos.x = at.x - (at.x - pos.x) * amount;
    pos.y = at.y - (at.y - pos.y) * amount;
    dirty = true;
  }

  /**
   * Handles mouse events for panning.
   */
  function mouseEvent(event): void {
    if (event.type === 'mousedown') {
      setIsPanning(true);
      mouse.button = true;
    }
    if (event.type === 'mouseup') {
      setIsPanning(false);
      mouse.button = false;
    }

    mouse.oldX = mouse.x;
    mouse.oldY = mouse.y;
    mouse.x = event.pageX;
    mouse.y = event.pageY;
    if (mouse.button) {
      // pan
      pan({ x: mouse.x - mouse.oldX, y: mouse.y - mouse.oldY });
      apply();
    }

    event.preventDefault();
  }

  /**
   * Handles mouse wheel events for zooming.
   */
  function mouseWheelEvent(event): void {
    const x =
      event.pageX - panZoom.current.parentElement.offsetLeft - panZoom.current.offsetWidth / 2;
    const y =
      event.pageY - panZoom.current.parentElement.offsetTop - panZoom.current.offsetHeight / 2;
    const scroll_ratio = Math.abs(event.deltaY) / 100 + 1;
    if (event.deltaY < 0) {
      scaleAt({ x, y }, scroll_ratio);
      apply();
    } else {
      scaleAt({ x, y }, 1 / scroll_ratio);
      apply();
    }

    event.preventDefault();
  }

  useEffect(() => {
    panZoom.current.parentElement.addEventListener('mousemove', mouseEvent, { passive: false });
    panZoom.current.parentElement.addEventListener('mousedown', mouseEvent, { passive: false });
    document.addEventListener('mouseup', mouseEvent, { passive: false });
    panZoom.current.parentElement.addEventListener('wheel', mouseWheelEvent, { passive: false });

    // TODO: Evaluate removing event listeners on unmount
    // TODO: Evaluate if we can add the missing dependencies
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ReactPanZoomWrapper $isPanning={isPanning}>
      <ReactPanZoomChildrenContainer ref={panZoom}>{children}</ReactPanZoomChildrenContainer>
    </ReactPanZoomWrapper>
  );
}

export default memo(ReactPanZoom);
