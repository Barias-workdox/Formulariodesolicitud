import { NationalIdentificationKindCode } from '../../../../utils/interfaces/nic.interface';
export interface NicFormatTestType {
    /** The raw nic to format */
    rawNic: string;
    /** The expected value after the clean function  */
    clean: string;
    /** The expected value after the format function */
    format: string;
}
export interface NicValidationTestType {
    /** Set of values to be validated true */
    valid: string[];
    /** Set of values to be validated false */
    invalid: string[];
}
export interface NicTestMockType {
    format?: Map<NationalIdentificationKindCode, NicFormatTestType[]>;
    validation?: Map<NationalIdentificationKindCode, NicValidationTestType>;
}
