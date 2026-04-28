import { SectionedCardSize } from '../sectioned-card.interfaces';
import { FooterBorderRadius, FooterSize } from '../../../../../footer/footer.interfaces';
import { HeaderSize } from '../../../../../header/header.interfaces';
import { HeaderTabsSize } from '../../../../../header-tab/header-tabs.interfaces';
import { SpacingKey } from '../../../../../../themes/v3/tokens';
/**
 * Utility function to get the corresponding Header size for a given SectionedCard size.
 */
export declare const getHeaderSize: (size?: SectionedCardSize) => HeaderSize;
/**
 * Utility function to get the corresponding HeaderTabs size for a given SectionedCard size.
 */
export declare const getHeaderTabsSize: (size?: SectionedCardSize) => HeaderTabsSize;
/**
 * Utility function to get the corresponding Footer size for a given SectionedCard size.
 */
export declare const getFooterSize: (size?: SectionedCardSize) => FooterSize;
/**
 * Utility function to get the corresponding Footer border radius for a given SectionedCard size.
 */
export declare const getBorderRadiusSize: (size?: SectionedCardSize) => FooterBorderRadius;
/**
 * Utility function to get the corresponding slot padding for a given SectionedCard size.
 */
export declare const getSlotPadding: (size?: SectionedCardSize) => SpacingKey;
