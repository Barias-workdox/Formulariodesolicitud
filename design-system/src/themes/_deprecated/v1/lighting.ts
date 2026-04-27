export interface Lighting {
  shadowDefault: string;
  shadowBox: string;
  shadowBoxDoc: string;
  /**
   * Default shadow for component [Switch](../components/switch/switch.tsx)
   */
  shadowBoxSwitch: string;
}

export const lighting: Lighting = {
  shadowDefault: '0 2px 14px rgba(0, 0, 0, 0.12)',
  shadowBox: '0 2px 1px rgba(0, 0, 0, 0.12)',
  shadowBoxDoc: '0 3px 2px -1px rgba(0, 0, 0, 0.1)',
  shadowBoxSwitch: '0px 1px 4px rgba(55, 71, 79, 0.4)',
};
