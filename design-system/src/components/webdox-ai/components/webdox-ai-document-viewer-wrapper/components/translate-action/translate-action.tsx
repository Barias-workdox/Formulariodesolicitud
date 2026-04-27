import { useRef } from 'react';

import { Language } from '@carbon/icons-react';

import { Button } from '@components/button';
import { Menu } from '@components/menu';
import { Popover } from '@components/popover';
import { useTranslation } from '@components/utils';

import { useTranslateActionLanguages } from '../../hooks/use-translate-action-languages.hook';
import { getButtonOverrides } from '../../webdox-ai-document-viewer-wrapper.styles';

import type { ActionButtonStyleParams } from '../../webdox-ai-document-viewer-wrapper.interfaces';
import type { LocaleOption } from '@components/utils';
import type { WithTestId } from '@interfaces/common.interfaces';

export interface TranslateActionProps extends WithTestId, ActionButtonStyleParams {
  zIndex?: number;
  disabled?: boolean;
  /** Callback to execute when translate action is executed. */
  onTranslate(selectedLanguage: LocaleOption): void;
}

/**
 * Component that provides a button for translating content.
 * It displays a popover menu with available languages
 * and triggers a translation action when a language is selected.
 */
export const TranslateAction = ({
  'data-testid': dataTestId = 'translate-action',
  $isFirstChild,
  $isLastChild,
  disabled,
  onTranslate,
  zIndex,
}: TranslateActionProps): JSX.Element => {
  const { t } = useTranslation();
  const { languages } = useTranslateActionLanguages();

  const componentRef = useRef();
  const { current: { offsetWidth } = { offsetWidth: undefined } } = componentRef;

  return (
    <Popover
      placement="bottom"
      popoverMargin={0}
      overrides={{
        Body: {
          style: {
            minWidth: offsetWidth ? `${offsetWidth}px` : 'unset',
            zIndex,
          },
        },
      }}
      content={
        <Menu
          dataTestId={`${dataTestId}__menu`}
          items={languages}
          onItemSelect={({ item }) => onTranslate(item)}
        />
      }
    >
      <Button
        data-testid={dataTestId}
        disabled={disabled}
        ref={componentRef}
        kind="action-brain"
        size="32px"
        endEnhancer={<Language />}
        overrides={getButtonOverrides({ $isFirstChild, $isLastChild })}
      >
        {t('general.translate')}
      </Button>
    </Popover>
  );
};
