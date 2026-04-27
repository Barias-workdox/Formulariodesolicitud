import type { SyntheticEvent } from 'react';
import { useCallback, useMemo } from 'react';

import { Misuse } from '@carbon/icons-react';

import { IconButton } from '@components/button';
import { CopyToClipboardButton } from '@components/copy-to-clipboard-button';
import { Spinner } from '@components/spinner';
import { StatefulTooltipNext } from '@components/tooltip-next';
import { useTranslation } from '@components/utils';
import { noop } from '@utils/noop';

import { resolveEnhancer } from '../../utils/resolve-enhancer.util';
import { PositiveOrNegativeIcon } from '../positive-or-negative-icon';

import { StyledContainer } from './styled-components';

import type { InputProps } from '../../input.interfaces';
import type { WithTestId, WithZIndex } from '@interfaces/common.interfaces';
import type { SharedProps } from 'baseui/input';

export type CompoundEndEnhancerProps = WithZIndex &
  WithTestId &
  SharedProps & {
    value?: InputProps['value'];
    positive?: boolean;
    error?: boolean;
    canClear?: boolean;
    canCopy?: boolean;
    isLoading?: boolean;
    endEnhancer?: InputProps['endEnhancer'];
    onClear?(): void;
  };

/**
 * Component that renders the end enhancer of the input.
 * It can include a loading spinner, an end enhancer, a copy to clipboard button, and a clear button.
 */
export const CompoundEndEnhancer = ({
  'data-testid': dataTestId,
  positive,
  error,
  canClear,
  canCopy,
  isLoading,
  endEnhancer,
  onClear = noop,
  value = '',
  zIndex,
  ...rest
}: CompoundEndEnhancerProps): JSX.Element => {
  const { t } = useTranslation();

  const { $isReadOnly } = rest;

  const endEnhancerElement = useMemo(() => resolveEnhancer(endEnhancer, rest), [endEnhancer, rest]);

  /**
   * Handles the clear button click event.
   */
  const handleClear = useCallback(
    (event: SyntheticEvent<HTMLButtonElement>) => {
      event.preventDefault();
      onClear();
    },
    [onClear],
  );

  const shouldRender =
    isLoading || canCopy || canClear || positive || error || !!endEnhancerElement;

  if (!shouldRender) return null;

  return (
    <StyledContainer>
      {isLoading && (
        <Spinner
          size="sm"
          data-testid={`${dataTestId}--spinner`}
        />
      )}
      {canCopy && (
        <CopyToClipboardButton
          text={String(value)}
          data-testid={`${dataTestId}--copy-to-clipboard-button`}
          buttonKind="ghost-tertiary"
          buttonSize="24px"
          tooltipText={t('copyToClipboardButton.copyContent')}
          copiedTooltipText={t('copyToClipboardButton.contentCopied')}
        />
      )}
      {canClear && !$isReadOnly && (
        <StatefulTooltipNext
          content={t('general.clearContent')}
          showArrow
          placement="top"
          zIndex={zIndex}
        >
          <IconButton
            data-testid={`${dataTestId}--clear-button`}
            onClick={handleClear}
            size="24px"
            kind="ghost-tertiary"
          >
            <Misuse />
          </IconButton>
        </StatefulTooltipNext>
      )}
      <PositiveOrNegativeIcon
        data-testid={dataTestId}
        positive={positive}
        error={error}
      />
      {endEnhancerElement}
    </StyledContainer>
  );
};
