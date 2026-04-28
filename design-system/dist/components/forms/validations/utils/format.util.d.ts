import { CountryCodeType } from '../../../utils/interfaces';
import { NicPayloadType } from '../../../utils/interfaces/nic.interface';
/** Map all raw nic clean and format rules to consume them dynamically based on the desired country */
export declare const allRawNicFormatMap: Map<CountryCodeType | undefined, {
    cleanRawNic?(payload: NicPayloadType): string;
    formatRawNic?(payload: NicPayloadType): string;
}>;
/** Utility to find the cleanRawNic for the desired country or the default value if undefined */
export declare const cleanRawNic: ({ rawNic, countryCode }: NicPayloadType) => string;
/**
 * Format a raw nic value according to rules for every country, Removing
 * any trash before formatting nic
 */
export declare const formatRawNic: ({ rawNic, countryCode }: NicPayloadType) => string;
/**
 * Formats a numeric string with commas as thousands separators.
 *
 * @param amount - The numeric string to format.
 * @returns The formatted string with commas.
 */
export declare const commaSeparatedAmount: (amount?: string) => string;
