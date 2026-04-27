import type { WithTestId } from '@interfaces/common.interfaces';

export interface LanguageSelectorProps extends WithTestId {
  /** Callback function called when a language is selected */
  onLanguageChange?(selectedLocale: string): void;
  /** Callback function called when the expansion state changes */
  onExpansionChange?(isExpanded: boolean): void;
}
