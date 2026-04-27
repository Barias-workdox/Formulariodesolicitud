import { forwardRef, useState } from 'react';
import type { LegacyRef } from 'react';

import { TruncatedText } from '@components/truncated-text';
import { useCss } from '@components/utils/hooks/use-css';
import { AITag } from '@components/webdox-ai/components';
import { getOverride, getOverrideProps } from '@utils/overrides.utils';

import {
  StyledButtonRoot,
  StyledListItemIconWrap,
  StyledListItemInfo,
  StyledListItemInner,
  StyledListItemRoot,
  propertiesBySize,
  styles,
} from './list-item.styles';

import type { ListItemProps } from './list-item.interfaces';

/**
 * Component that represents an item for a list.
 * It supports different interactive states and allows customization through
 * overrides and special properties.
 */
export const ListItem = forwardRef<HTMLButtonElement | HTMLLIElement, ListItemProps>(
  function ListItemInner(
    {
      'data-testid': dataTestId,
      size = 'md',
      $withBorderBottom,
      isActive = false,
      details,
      disabled,
      endEnhancer,
      label,
      overrides,
      startEnhancer,
      tooltipProps,
      textProps,
      aiGenerated,
      onClick,
    }: ListItemProps,
    ref,
  ): JSX.Element {
    const [isHovered, setIsHovered] = useState(false);

    const { theme, labelContainer } = useCss(styles);

    const { Root: RootOverride } = overrides || {};

    const isClickable = onClick !== undefined;

    const Root = getOverride(RootOverride) || (isClickable ? StyledButtonRoot : StyledListItemRoot);

    const baseTextProps: ListItemProps['textProps'] = {
      label: {
        variant: propertiesBySize[size].label,
        margin: 0,
        color: 'inherit',
        ...textProps?.label,
      },
      details: {
        variant: propertiesBySize[size].details,
        margin: 0,
        $style: styles.textDetails({
          $isClickable: isClickable,
          $active: isActive,
          $isHovered: isHovered,
          $disabled: disabled,
          theme,
        }),
        ...textProps?.details,
      },
    };

    return (
      <Root
        role={isClickable ? 'button' : 'listitem'}
        aria-selected={isActive}
        $disabled={disabled}
        $withBorderBottom={$withBorderBottom}
        $size={size}
        $active={isActive}
        data-testid={dataTestId}
        onClick={!disabled ? onClick : undefined}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        tabIndex={isClickable ? 0 : undefined}
        ref={
          ref as typeof onClick extends undefined
            ? LegacyRef<HTMLLIElement>
            : LegacyRef<HTMLButtonElement>
        }
        {...getOverrideProps(RootOverride)}
      >
        <StyledListItemInner>
          {startEnhancer && <StyledListItemIconWrap>{startEnhancer}</StyledListItemIconWrap>}
          <StyledListItemInfo>
            {typeof label === 'string' ? (
              <div className={labelContainer}>
                <TruncatedText
                  tooltipProps={{
                    content: label,
                    showArrow: true,
                    ...tooltipProps,
                  }}
                  textProps={baseTextProps.label}
                  zIndex={10}
                >
                  {label}
                </TruncatedText>
                {aiGenerated && (
                  <AITag
                    variant="light"
                    shape="rounded"
                    size="sm"
                  />
                )}
              </div>
            ) : (
              label
            )}
            {typeof details === 'string' ? (
              <TruncatedText
                tooltipProps={{
                  content: details,
                }}
                textProps={baseTextProps.details}
                zIndex={5}
              >
                {details}
              </TruncatedText>
            ) : (
              details
            )}
          </StyledListItemInfo>
          {endEnhancer && <StyledListItemIconWrap>{endEnhancer}</StyledListItemIconWrap>}
        </StyledListItemInner>
      </Root>
    );
  },
);

ListItem.displayName = 'ListItem';
