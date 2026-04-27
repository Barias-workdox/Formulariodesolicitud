/**
 * Type to indicate the side for rendering tabs when they are arranged vertically.
 */
export type SideType = 'left' | 'right';

export interface IGetTabsOverrides {
  showPanels: boolean;
  showTabList: boolean;
  /** To determine in which side the tabs has to be rendered: `left` or `right` */
  side: SideType;
  onClickTab(): void;
}

export interface IGetTabOverrides {
  showPanels?: boolean;
  tabPanelWidth: string;
  /** To determine in which side the tabs has to be rendered: `left` or `right` */
  side: SideType;
}
