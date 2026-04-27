import type { ReactNode } from 'react';

export type TimelineType<T = number> = {
  id: T;
  component: ReactNode;
};
