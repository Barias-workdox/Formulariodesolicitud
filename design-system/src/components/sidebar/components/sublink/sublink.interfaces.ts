import type { CarbonIconType } from '@carbon/icons-react/lib/CarbonIcon';

export type SublinkPosition = {
  top: number;
  left: number;
};

export type SublinkItem = {
  id: string;
  label: string;
  href: string;
  counter?: number;
  disabled: boolean;
  icon?: CarbonIconType;
};

export interface SublinkProps {
  title: string;
  items: SublinkItem[];
  position: SublinkPosition;
  startEnhancer?: CarbonIconType;
  onItemClick?(item: SublinkItem): void;
}
