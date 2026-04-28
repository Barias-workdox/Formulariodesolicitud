import { ReactElement } from 'react';
import { LanguageSelectorProps } from './language-selector.interfaces';
/**
 * LanguageSelector component displays a collapsible language selection menu.
 * It shows the current language and allows users to select from available options.
 * Implements WCAG 2.1 AA accessibility guidelines.
 */
export declare const LanguageSelector: ({ dataTestId, onLanguageChange, onExpansionChange, }: LanguageSelectorProps) => ReactElement;
