import type { ReactNode } from 'react';

import type { BackgroundIconProps } from '@components/background-icon';
import type { DocumentType, UserType } from '@interfaces/common.interfaces';
import type { StepOverrides } from 'baseui/progress-steps';

/** @deprecated Use the `Timeline` API instead */
export type ActivityType =
  | 'flag'
  | 'view'
  | 'upload'
  | 'download'
  | 'comment'
  | 'document'
  | 'request'
  | 'flow'
  | 'warning'
  | 'approved'
  | 'rejected'
  | 'new-user'
  | 'new-document'
  | 'delete'
  /** When `type` is 'custom', you have the option to provide a custom Icon using the overrides property. */
  | 'custom';

/** @deprecated Use the `Timeline` API instead */
export interface IActivity {
  id: number;
  type?: ActivityType;
  description: string | ReactNode;
  createdAt: string;
  extraData?: {
    comment?: string;
    users?: Pick<UserType, 'id' | 'email' | 'firstName' | 'lastName'>[];
    documents?: Pick<DocumentType, 'id' | 'name' | 'fileExt' | 'negotiable'>[];
  };
  overrides?: {
    /** Use the Icon override to provide a custom icon. */
    Icon?: StepOverrides['Icon'];
  };
}

/** @deprecated Use the `Timeline` API instead */
export type IconConfigurationType = Pick<
  BackgroundIconProps,
  'iconColor' | 'Icon' | 'backgroundColor'
>;

/** @deprecated Use the `Timeline` API instead */
export type IconsByActivityType = Record<Exclude<ActivityType, 'custom'>, IconConfigurationType>;
