import { forwardRef } from 'react';

import { ChevronDown, ChevronUp } from '@carbon/icons-react';

import { IconButton } from '@components/button';
import { Text } from '@components/text';

import {
  CollapsibleBoxHeaderContainer,
  CollapsibleBoxIconContainer,
  SectionContainer,
  textStyles,
} from './collapsible-box-header.styles';

import type { CollapsibleBoxProps } from '../../collapsible-box';

export type CollapsibleBoxHeaderProps = Pick<
  CollapsibleBoxProps,
  'title' | 'collapsedTitle' | 'Icon' | 'options' | 'overrides'
> & {
  dataTestId?: string;
  $expanded: boolean;
  onClick(): void;
};

/**
 * Custom header for the overrides of the Collapsible Box accordion
 */
export const CollapsibleBoxHeader = forwardRef<HTMLDivElement, CollapsibleBoxHeaderProps>(
  function CollapsibleBoxHeaderComponent(
    {
      dataTestId = 'collapsible-box__header',
      $expanded,
      title,
      collapsedTitle = title,
      Icon,
      options,
      onClick,
      overrides: {
        HeaderContainer: { style: headerContainerStyles = {} } = {},
        Title: { style: titleStyles = {} } = {},
      } = {},
    },
    ref,
  ): JSX.Element {
    return (
      <CollapsibleBoxHeaderContainer
        ref={ref}
        $expanded={$expanded}
        $headerOverrides={headerContainerStyles}
      >
        <SectionContainer>
          {Icon ? <CollapsibleBoxIconContainer>{Icon}</CollapsibleBoxIconContainer> : <></>}

          <Text
            variant="h2"
            margin={0}
            $style={textStyles(titleStyles)}
          >
            {$expanded ? title : collapsedTitle}
          </Text>
        </SectionContainer>

        <SectionContainer>
          {options}

          <IconButton
            data-testid={`${dataTestId}--toggle-button`}
            aria-label={`${title} toggle button`}
            size="32px"
            type="button"
            onClick={onClick}
          >
            {$expanded ? <ChevronUp /> : <ChevronDown />}
          </IconButton>
        </SectionContainer>
      </CollapsibleBoxHeaderContainer>
    );
  },
);
