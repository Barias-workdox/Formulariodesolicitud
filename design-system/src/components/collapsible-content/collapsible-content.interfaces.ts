import type { ReactNode } from 'react';

import type { Override, Overrides } from '@themes/theme.interfaces';
import type { StyleObject } from 'styletron-react';

export interface SharedProps {
  $isOpen: boolean;
  $height?: StyleObject['height'];
  children?: ReactNode;
  $onToggle(): void;
}

export interface CollapsibleContentOverrides extends Overrides {
  Root?: Override<SharedProps>;
  Header?: Override<SharedProps>;
  Body?: Override<SharedProps>;
  ActionIcons?: Override<SharedProps>;
}

export interface CollapsibleContentProps {
  dataTestId?: string;
  title?: ReactNode;
  initialState: boolean;
  children?: ReactNode;
  overrides?: CollapsibleContentOverrides;
}
