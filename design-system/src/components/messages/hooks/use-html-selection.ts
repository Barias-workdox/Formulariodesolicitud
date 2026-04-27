import { useCallback, useEffect, useState } from 'react';

/**
 * Html selection algorithm that identifies the selection range within a start and end
 * Obtained from a stackoverflow answer:
 * https://stackoverflow.com/questions/6249095/how-to-set-the-caret-cursor-position-in-a-contenteditable-element-div/41034697#41034697
 * Creator: Nikolay Makhonin - https://github.com/NikolayMakhonin
 */

/**
 * Return true if node found
 */
function searchNode(
  container: Node,
  startNode: Node,
  predicate: (node: Node) => boolean,
  excludeSibling?: boolean,
): boolean {
  if (predicate(startNode as Text)) {
    return true;
  }

  for (let i = 0, len = startNode.childNodes.length; i < len; i++) {
    if (searchNode(startNode, startNode.childNodes[i], predicate, true)) {
      return true;
    }
  }

  if (!excludeSibling) {
    let parentNode: Node | null = startNode;
    while (parentNode && parentNode !== container) {
      let { nextSibling } = parentNode;
      while (nextSibling) {
        if (searchNode(container, nextSibling, predicate, true)) {
          return true;
        }

        ({ nextSibling } = nextSibling);
      }

      ({ parentNode } = parentNode);
    }
  }

  return false;
}

/**
 * Create a selection range of html
 */
function createRange(container: Node, start: number, end: number): Range {
  let startNode: Node | null = null;

  searchNode(container, container, (node): boolean => {
    if (node.nodeType === Node.TEXT_NODE) {
      const dataLength = (node as Text).data.length;
      if (start <= dataLength) {
        startNode = node;

        return true;
      }

      start -= dataLength;
      end -= dataLength;
    }

    return false;
  });

  let endNode;
  if (startNode) {
    searchNode(container, startNode, (node): boolean => {
      if (node.nodeType === Node.TEXT_NODE) {
        const dataLength = (node as Text).data.length;
        if (end <= dataLength) {
          endNode = node;

          return true;
        }

        end -= dataLength;
      }

      return false;
    });
  }

  const range = document.createRange();
  if (startNode) {
    if (start < (startNode as Text).data.length) {
      range.setStart(startNode, start);
    } else {
      range.setStartAfter(startNode);
    }
  } else {
    if (start === 0) {
      range.setStart(container, 0);
    } else {
      range.setStartAfter(container);
    }
  }

  if (endNode) {
    if (end < endNode.data.length) {
      range.setEnd(endNode, end);
    } else {
      range.setEndAfter(endNode);
    }
  } else {
    if (end === 0) {
      range.setEnd(container, 0);
    } else {
      range.setEndAfter(container);
    }
  }

  return range;
}

/**
 * Get the selection offset as a sum of the text length by each child node.
 */
function getAbsoluteOffset(container: Node, offset: number): number {
  if (container.nodeType === Node.TEXT_NODE) {
    return offset;
  }

  let absoluteOffset = 0;
  for (let i = 0, len = Math.min(container.childNodes.length, offset); i < len; i++) {
    const childNode = container.childNodes[i];

    searchNode(childNode, childNode, (node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        absoluteOffset += (node as Text).data.length;
      }

      return false;
    });
  }

  return absoluteOffset;
}

/**
 * Get the current selection range of a node
 */
function _getSelectionOffset(container: Node): [number, number] {
  let start = 0;
  let end = 0;

  const selection = window.getSelection();
  for (let i = 0, len = selection?.rangeCount ?? 0; i < len; i++) {
    const range = selection?.getRangeAt(i);
    if (range?.intersectsNode(container)) {
      const startNode = range.startContainer;

      searchNode(container, container, (node) => {
        if (startNode === node) {
          start += getAbsoluteOffset(node, range.startOffset);

          return true;
        }

        const dataLength = node.nodeType === Node.TEXT_NODE ? (node as Text).data.length : 0;

        start += dataLength;
        end += dataLength;

        return false;
      });

      const endNode = range.endContainer;

      searchNode(container, startNode, (node) => {
        if (endNode === node) {
          end += getAbsoluteOffset(node, range.endOffset);

          return true;
        }

        const dataLength = node.nodeType === Node.TEXT_NODE ? (node as Text).data.length : 0;

        end += dataLength;

        return false;
      });

      break;
    }
  }

  return [start, end];
}

/**
 * Set the selection of the html content within a node.
 * Is selected with a range; start and end, this selection will be from left to right.
 */
function _setSelectionOffset(node: Node, start: number, end: number): void {
  const range = createRange(node, start, end);
  const selection = window.getSelection();

  if (selection) {
    selection.removeAllRanges();
    selection.addRange(range);
  }
}

/**
 * Selects the content of an element by click,
 * This functionality will be applied to all the elements found by the given css class.
 */
function _addSelectionListenersByClassName(container: Element, className: string): void {
  [].slice.call(container.getElementsByClassName(className)).forEach((mentionNode: Element) =>
    mentionNode.addEventListener('click', () => {
      const range = document.createRange();

      range.selectNode(mentionNode);
      window.getSelection()?.removeAllRanges();
      window.getSelection()?.addRange(range);
    }),
  );
}

/**
 * Take the scroll to the position of the cursor in a content editable div.
 */
const scrollSelectionIntoView = (): void => {
  // Get current selection
  const selection = window.getSelection();

  // Check if there are selection ranges
  if (!selection.rangeCount) {
    return;
  }

  // Get the first selection range. There's almost never can be more (instead of firefox)
  const firstRange = selection.getRangeAt(0);

  // Sometimes if the editable element is getting removed from the dom you may get a HierarchyRequest error in safari
  if (firstRange.commonAncestorContainer === document) {
    return;
  }

  // Create an empty br that will be used as an anchor for scroll, because it's impossible to do it with just text nodes
  const tempAnchorEl = document.createElement('br');

  // Put the br right after the caret position
  firstRange.insertNode(tempAnchorEl);

  // Scroll to the br.
  if (tempAnchorEl.scrollIntoView) {
    tempAnchorEl.scrollIntoView({
      block: 'end',
    });
  }

  // Remove the anchor because it's not needed anymore
  if (tempAnchorEl.remove) {
    tempAnchorEl.remove();
  }
};

/**
 * Hook that creates a state with the selection range of the html element passed by the params.
 */
export const useHtmlSelection = (
  _node: Element,
): {
  selectionRange: [number, number];
  updateSelection(nodeUpdated: Element): void;
  setSelectionOffset(start: number, end: number): void;
  getSelectionOffset(): [number, number];
  addSelectionListenersByClassName(className: string): void;
} => {
  const [node, setNode] = useState(_node);
  const [selectionRange, setSelectionRange] = useState<[number, number]>([0, 0]);

  useEffect(() => {
    setNode(_node);
  }, [_node]);

  /**
   * Updates the cursor selection
   */
  function updateSelection(nodeUpdated: Element): void {
    setNode(nodeUpdated);
    setSelectionRange(_getSelectionOffset(nodeUpdated));
  }

  /**
   * {@link _setSelectionOffset}
   */
  function setSelectionOffset(start: number, end: number): void {
    if (node) {
      const selection = _setSelectionOffset(node, start, end);

      scrollSelectionIntoView();

      return selection;
    }
  }

  /**
   * {@link _getSelectionOffset}
   */
  const getSelectionOffset = useCallback((): [number, number] => {
    if (node) {
      return _getSelectionOffset(node);
    }

    return [0, 0];
  }, [node]);

  /**
   * {@link _addSelectionListenersByClassName}
   */
  function addSelectionListenersByClassName(className: string): void {
    if (node) {
      _addSelectionListenersByClassName(node, className);
    }
  }

  return {
    selectionRange,
    updateSelection,
    setSelectionOffset,
    getSelectionOffset,
    addSelectionListenersByClassName,
  };
};
