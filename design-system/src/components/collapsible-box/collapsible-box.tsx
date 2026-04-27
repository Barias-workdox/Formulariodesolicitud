import { useMemo } from 'react';
import type { ReactNode } from 'react';

import { Accordion as BaseAccordion, Panel } from 'baseui/accordion';

import { mergeOverridesDeep } from '@components/utils/baseui/helpers';

import { defaultOverrides } from './collapsible-box.overrides';

import type { CollapsibleOverrides } from './interfaces';
import type { AccordionOnChangeHandler, AccordionProps, AccordionState } from 'baseui/accordion';

// Key required to handle the initial state of the accordion
const PANEL_KEY = 'collapsible-box__accordion--panel';

export type CollapsibleBoxProps = Pick<AccordionProps, 'children'> & {
  dataTestId?: string;
  title: string;
  /** Title that is going to be shown if the accordion is collapsed, the default value would the the `title` */
  collapsedTitle?: string;
  Icon?: ReactNode;
  /** Optional component that can be used to display options for the collapsible box */
  options?: ReactNode;
  /** You can customize the initial value to display the panel in an expanded state. */
  initialState?: {
    isExpanded?: boolean;
  };
  overrides?: CollapsibleOverrides;
  /** Optional onChange handle that return expanded box key to enable consumer trigger actions based on accordion state */
  onChange?: AccordionOnChangeHandler;
};

/**
 * Collapsible box that has a `title`, `Icon` and a panel with dynamic content (`children`).
 * The box is useful for grouping information as independent accordions.
 *
 * @deprecated The `CollapsibleBox` component has been updated to a new implementation.
 * Please migrate to the new version, which uses a context provider (`CollapsibleBoxContext`)
 * for size configuration and simplifies the API.
 */
export const CollapsibleBox = ({
  dataTestId = 'collapsible-box',
  title,
  collapsedTitle = title,
  Icon,
  options = <></>,
  overrides = {},
  initialState: { isExpanded } = { isExpanded: true },
  children,
  onChange,
}: CollapsibleBoxProps): JSX.Element => {
  const accordionInitialState: AccordionState = {
    expanded: isExpanded ? [PANEL_KEY] : [],
  };

  const mergeOverrides = useMemo(
    () =>
      mergeOverridesDeep(
        defaultOverrides({
          dataTestId,
          title,
          collapsedTitle,
          Icon,
          options,
          overrides,
        }),
        overrides,
      ),
    [dataTestId, title, collapsedTitle, Icon, options, overrides],
  );

  return (
    <BaseAccordion
      initialState={accordionInitialState}
      overrides={mergeOverrides}
      onChange={onChange}
    >
      <Panel key={PANEL_KEY}>{children}</Panel>
    </BaseAccordion>
  );
};
