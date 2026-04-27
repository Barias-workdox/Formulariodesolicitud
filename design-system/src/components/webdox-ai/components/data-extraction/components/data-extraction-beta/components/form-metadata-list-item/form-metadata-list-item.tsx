import { InlineEditInput } from '@components/inline-edit-input';
import { useCss } from '@components/utils/hooks/use-css';

import { DataExtractionBetaLabel } from '../data-extraction-beta-label';

import { ICON_BUTTON_SIZE_16 } from './form-metadata-list-item.constants';
import { useInlineEditInputOverrides } from './form-metadata-list-item.overrides';

import type { InlineEditInputProps } from '@components/inline-edit-input';
import type { MessageListItemType } from '@components/webdox-ai/interfaces/chat-bot-component.interface';

export type FormMetadataListItemProps = Pick<MessageListItemType, 'id' | 'label'> &
  Pick<
    InlineEditInputProps,
    | 'data-testid'
    | 'captionText'
    | 'inputText'
    | 'mode'
    | 'onChange'
    | 'onSubmit'
    | 'onToggle'
    | 'disabled'
  >;

/**
 * Component for displaying a metadata item in a form.
 */
export const FormMetadataListItem = ({
  'data-testid': dataTestId,
  label,
  captionText,
  inputText,
  mode,
  disabled,
  onChange,
  onSubmit,
  onToggle,
}: FormMetadataListItemProps): JSX.Element => {
  const { getInlineEditInputOverrides } = useInlineEditInputOverrides();
  const { theme } = useCss();

  return (
    <>
      <DataExtractionBetaLabel>{label}</DataExtractionBetaLabel>
      <InlineEditInput
        colors={{
          editIcon: theme.colors.neutralSubdued,
          cancelIcon: theme.colors.sweet,
        }}
        iconSize={ICON_BUTTON_SIZE_16}
        data-testid={dataTestId}
        captionText={captionText}
        inputText={inputText}
        mode={mode}
        onChange={onChange}
        onSubmit={onSubmit}
        onToggle={onToggle}
        disabled={disabled}
        overrides={getInlineEditInputOverrides({
          mode,
          dataTestId,
        })}
      />
    </>
  );
};
