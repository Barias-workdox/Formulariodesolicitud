import { useEffect, useState } from 'react';
import type { Key, PropsWithChildren } from 'react';

import { StatelessAccordion as Accordion } from 'baseui/accordion';

import { noop } from '@utils/noop';

import { CollapsibleBoxProvider } from './collapsible-box.context';
import { getCollapsibleBoxOverrides } from './collapsible-box.overrides';

import type { Size } from './collapsible-box.interfaces';
import type { StatelessAccordionProps } from 'baseui/accordion';
import type { StyleObject } from 'styletron-react';

export type CollapsibleBoxProps = PropsWithChildren<{
  size?: Size;
  gap?: StyleObject['gap'];
  accordion?: StatelessAccordionProps['accordion'];
  expanded?: StatelessAccordionProps['expanded'];
  onChange?: StatelessAccordionProps['onChange'];
}>;

const defaultInitialExpanded: Key[] = [];

/**
 * Component that provides a collapsible container using an `Accordion` component.
 * It uses a context provider (`CollapsibleBoxContext`) to share the size configuration across its children.
 */
export const CollapsibleBox = ({
  children,
  size = 'large',
  gap,
  accordion = true,
  expanded: initialExpanded = defaultInitialExpanded,

  onChange = noop,
}: CollapsibleBoxProps): JSX.Element => {
  const [expandedPanels, setExpandedPanels] = useState(initialExpanded);

  useEffect(() => {
    setExpandedPanels(initialExpanded);
  }, [initialExpanded]);

  return (
    <CollapsibleBoxProvider size={size}>
      <Accordion
        accordion={accordion}
        expanded={expandedPanels}
        overrides={getCollapsibleBoxOverrides({ gap })}
        onChange={(event) => {
          const { expanded } = event;

          setExpandedPanels(expanded);
          onChange(event);
        }}
      >
        {children}
      </Accordion>
    </CollapsibleBoxProvider>
  );
};
