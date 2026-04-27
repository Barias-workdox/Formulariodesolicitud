/** Declare the types of the svg files  */
declare module '*.svg' {
  import type { SvgComponentType } from '@types/svg-component.interface';

  const content: string;
  const ReactComponent: SvgComponentType;

  export default content;

  export { ReactComponent };
}
