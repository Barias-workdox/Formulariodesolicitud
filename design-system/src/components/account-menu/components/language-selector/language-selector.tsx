import { useState, useRef, useEffect } from 'react';
import type { ReactElement } from 'react';

import { ChevronDown, ChevronUp, Checkmark, Language } from '@carbon/icons-react';

import { Text } from '@components/text';
import { useTranslation, type Locale } from '@components/utils';
import { useCss } from '@components/utils/hooks/use-css';
import { allLocaleOptions } from '@components/utils/i18n/i18n.constants';
import { useLocale } from '@contexts/locale-provider';

import { AccountMenuButton } from '../button';
import { StyledAccountMenuButtonTitle } from '../button/account-menu-button.styles';

import { StyledContent, StyledFlagIcon, StyledRoot } from './language-selector.styles';

import type { LanguageSelectorProps } from './language-selector.interfaces';

/**
 * LanguageSelector component displays a collapsible language selection menu.
 * It shows the current language and allows users to select from available options.
 * Implements WCAG 2.1 AA accessibility guidelines.
 */
export const LanguageSelector = ({
  dataTestId = 'language-selector',
  onLanguageChange,
  onExpansionChange,
}: LanguageSelectorProps): ReactElement => {
  const { t } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(false);
  const { locale, updateLocale } = useLocale();
  const languageMenuRef = useRef<HTMLDivElement>(null);

  const { theme } = useCss();

  const currentLanguage =
    allLocaleOptions.find((option) => option.id === locale) || allLocaleOptions[0];

  // Generate unique IDs for accessibility
  const menuId = `${dataTestId}-menu`;

  /**
   * Handles language selection and updates the locale
   */
  const handleLanguageSelect = (selectedLocale: Locale): void => {
    updateLocale(selectedLocale);
    onLanguageChange?.(selectedLocale);
    setIsExpanded(false);
  };

  /**
   * Toggles the expanded state of the language selector
   */
  const toggleExpanded = (): void => {
    setIsExpanded(!isExpanded);
    onExpansionChange?.(!isExpanded);
  };

  /**
   * Handles keyboard events for the language selector
   */
  const handleKeyDown = (event: React.KeyboardEvent): void => {
    const { key } = event;

    if (key === 'Escape' && isExpanded) {
      event.preventDefault();
      setIsExpanded(false);
      onExpansionChange?.(false);

      return;
    }

    if (key === 'Enter' || key === ' ') {
      event.preventDefault();
      toggleExpanded();

      return;
    }

    // Handle arrow keys for navigation within language options
    if (isExpanded && (key === 'ArrowDown' || key === 'ArrowUp')) {
      event.preventDefault();

      const languageOptions = languageMenuRef.current?.querySelectorAll(
        '[data-role="language-option"]',
      );
      if (!languageOptions || languageOptions.length === 0) return;

      const currentIndex = Array.from(languageOptions).findIndex(
        (element) => element === document.activeElement,
      );

      if (currentIndex === -1) return;

      let nextIndex: number;
      if (key === 'ArrowDown') {
        nextIndex = currentIndex === languageOptions.length - 1 ? 0 : currentIndex + 1;
      } else {
        nextIndex = currentIndex === 0 ? languageOptions.length - 1 : currentIndex - 1;
      }

      (languageOptions[nextIndex] as HTMLElement).focus();
    }
  };

  /**
   * Focus first language option when menu expands
   */
  useEffect(() => {
    if (isExpanded && languageMenuRef.current) {
      const timer = setTimeout(() => {
        const firstOption = languageMenuRef.current?.querySelector(
          '[data-role="language-option"]',
        ) as HTMLElement;
        if (firstOption) {
          firstOption.focus();
        }
      }, 10);

      return (): void => clearTimeout(timer);
    }
  }, [isExpanded]);

  return (
    <StyledRoot
      data-testid={dataTestId}
      role="menuitem"
      aria-haspopup="true"
      aria-expanded={isExpanded}
      aria-controls={menuId}
      onKeyDown={handleKeyDown}
    >
      <AccountMenuButton
        startEnhancer={<Language />}
        text={
          <StyledAccountMenuButtonTitle>
            <Text
              variant="bodySmall"
              margin={0}
              padding={0}
              fontWeight="bold"
              paddingRight={theme.spacing.spacingXs}
            >
              {t('accountMenu.languageSelector.title')}:
            </Text>
            <Text
              variant="bodySmall"
              margin={0}
              padding={0}
            >
              {currentLanguage.label}
            </Text>
          </StyledAccountMenuButtonTitle>
        }
        endEnhancer={isExpanded ? <ChevronUp /> : <ChevronDown />}
        onClick={toggleExpanded}
        ariaLabel={`${t('accountMenu.languageSelector.title')}: ${currentLanguage.label}`}
        role="button"
        dataRole="language-trigger"
        ariaHasPopup="listbox"
        ariaExpanded={isExpanded}
        ariaControls={menuId}
        tabIndex={0}
      />

      <StyledContent
        ref={languageMenuRef}
        id={menuId}
        role="listbox"
        aria-label={t('accountMenu.languageSelector.title')}
        aria-hidden={!isExpanded}
        tabIndex={isExpanded ? 0 : -1}
        $isExpanded={isExpanded}
      >
        {allLocaleOptions.map((languageOption) => (
          <AccountMenuButton
            key={languageOption.id}
            startEnhancer={<StyledFlagIcon>{languageOption.flag}</StyledFlagIcon>}
            text={
              <Text
                variant="bodySmall"
                margin={0}
                padding={0}
                fontWeight={languageOption.id === locale ? '500' : 'normal'}
                color={
                  languageOption.id === locale ? theme.colors.neutralMedium : theme.colors.neutral
                }
              >
                {languageOption.label}
              </Text>
            }
            endEnhancer={languageOption.id === locale ? <Checkmark /> : undefined}
            onClick={() => handleLanguageSelect(languageOption.id)}
            ariaLabel={`${languageOption.label}${languageOption.id === locale ? ' (selected)' : ''}`}
            role="option"
            dataRole="language-option"
            ariaSelected={languageOption.id === locale}
            tabIndex={isExpanded ? 0 : -1}
            variant="small"
          />
        ))}
      </StyledContent>
    </StyledRoot>
  );
};
