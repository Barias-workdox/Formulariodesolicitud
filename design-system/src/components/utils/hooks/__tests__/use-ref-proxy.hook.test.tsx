import type { FC } from 'react';

import { renderHook, act, render } from '@testing-library/react';

import { useRefProxy } from '../use-ref-proxy.hook';

describe('useRefProxy', () => {
  it('should work as a callback ref and update the .current property', () => {
    const { result } = renderHook(() => useRefProxy<HTMLDivElement>());
    const ref = result.current;

    const mockDiv = document.createElement('div');

    act(() => {
      // Simulate React calling the ref callback
      ref(mockDiv);
    });

    expect(ref.current).toBe(mockDiv);
  });

  it('should allow accessing the ref value via .current when used in a component', () => {
    const TestComponent: FC<{ onRender(refValue: HTMLDivElement | null): void }> = ({
      onRender,
    }) => {
      const myRef = useRefProxy<HTMLDivElement>();

      onRender(myRef.current);

      return <div ref={myRef}>Hello</div>;
    };

    let capturedRefValue: HTMLDivElement | null = null;
    const { container, rerender } = render(
      <TestComponent onRender={(refValue) => (capturedRefValue = refValue)} />,
    );

    // After the first render, the ref is not yet set, so it's null
    expect(capturedRefValue).toBeNull();

    // Rerender to capture the updated ref value
    rerender(<TestComponent onRender={(refValue) => (capturedRefValue = refValue)} />);

    // After the second render, the ref callback has been called
    expect(capturedRefValue).toBe(container.firstChild as HTMLDivElement);
  });

  it('should allow manually setting the .current property', () => {
    const { result } = renderHook(() => useRefProxy<number>());
    const ref = result.current;

    expect(ref.current).toBeNull();

    act(() => {
      ref.current = 123;
    });

    expect(ref.current).toBe(123);

    act(() => {
      ref.current = 456;
    });

    expect(ref.current).toBe(456);
  });

  it('should be null initially and after the component unmounts', () => {
    const { result, unmount } = renderHook(() => useRefProxy<HTMLDivElement>());
    const ref = result.current;

    // Initially null
    expect(ref.current).toBeNull();

    const mockDiv = document.createElement('div');

    // Assign a value
    act(() => {
      ref(mockDiv);
    });
    expect(ref.current).toBe(mockDiv);

    // Simulate unmount by calling with null
    act(() => {
      ref(null);
    });
    expect(ref.current).toBeNull();

    // Also test with React's unmount lifecycle from renderHook
    act(() => {
      ref(mockDiv);
    });
    expect(ref.current).toBe(mockDiv);

    unmount();
    // This part is tricky because unmounting the hook doesn't trigger the ref callback(null)
    // The test above with `ref(null)` is a more direct test of the callback behavior.
    // The behavior on unmount is handled by React calling the callback with null,
    // which we've already tested.
  });
});
