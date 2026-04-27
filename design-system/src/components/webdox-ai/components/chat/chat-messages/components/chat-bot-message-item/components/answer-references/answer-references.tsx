import { useMemo } from 'react';
import type { PropsWithChildren } from 'react';

import { StatefulTooltipNext } from '@components/tooltip-next';
import { useTranslation } from '@components/utils';
import { noop } from '@utils/noop';

import { StyledContainer, StyledRangeItem } from './styled-components';

import type { AnswerReference } from '@components/webdox-ai/interfaces';
import type { WithTestId, WithZIndex } from '@interfaces/common.interfaces';

export type AnswerReferencesProps = PropsWithChildren<
  WithZIndex<
    WithTestId<{
      disabled?: boolean;
      selectedReference?: AnswerReference;
      updateSelectedAnswerReference?(range: AnswerReference): void;
    }>
  >
>;

/**
 * AnswerReferences component displays a list of references
 * within a tooltip. It allows users to select a specific reference of text
 * and update the selected answer reference.
 */
export const AnswerReferences = ({
  dataTestId = 'answer-references',
  children,
  disabled = false,
  selectedReference,
  updateSelectedAnswerReference = noop,
  zIndex,
}: AnswerReferencesProps): JSX.Element => {
  const { t } = useTranslation();
  const references: AnswerReference[] = useMemo(() => {
    try {
      return JSON.parse(String(children)).references || [];
    } catch {
      return [];
    }
  }, [children]);

  return (
    <StatefulTooltipNext
      content={t('webdoxAI.chat.references')}
      showArrow
      placement="top"
      zIndex={zIndex}
    >
      <StyledContainer data-testid={dataTestId}>
        {references.map((reference) => {
          const { position, id } = reference;
          const isActive = selectedReference?.id === id;

          return (
            <StyledRangeItem
              key={position}
              $isActive={isActive}
              $disabled={disabled}
              data-testid={`${dataTestId}-reference-${position}`}
              onClick={() => !disabled && updateSelectedAnswerReference(reference)}
            >
              {position}
            </StyledRangeItem>
          );
        })}
      </StyledContainer>
    </StatefulTooltipNext>
  );
};
