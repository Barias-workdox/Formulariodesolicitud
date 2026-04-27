import { breakpoints } from '@tokens/breakpoints';

/** Mocks the window.innerWidth to simulate different breakpoints for testing purposes. */
export const mockBreakpoints = (selectedBreakpoint: keyof typeof breakpoints): void => {
  const breakpointSize = breakpoints[selectedBreakpoint];

  if (breakpointSize === undefined) {
    throw new Error(`The breakpoint "${breakpointSize}" does not exist`);
  }

  global.innerWidth = breakpoints[breakpointSize];
  global.dispatchEvent(new Event('resize'));
};
