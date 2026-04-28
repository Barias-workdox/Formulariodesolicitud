import { Datepicker as BaseDatepicker, DatepickerProps as BaseDatePickerProps } from 'baseui/datepicker';
import { InputKind } from '../input/input';
export type DatepickerProps = BaseDatePickerProps & {
    'data-testid'?: string;
    kind?: InputKind;
    /** Used to remove custom implementation of input blur that breaks with `range` enabled, true by default */
    enableInputBlur?: boolean;
    /**
     * A Prop required to work with zIndex of `DocumentViewerModal` legacy component
     *
     * @deprecated Only required for legacy support with `DocumentViewerModal`
     */
    zIndex?: number;
};
/**
 * DS Datepicker component
 * Status: WIP
 * Link: https://www.figma.com/file/eMhywyfWwKMjIyemY3PDoK/Design-System-Webdox-1.0?node-id=471%3A5580
 *
 * Missing things from design system:
 *  - Styling fields that are added with prop "quickSelect"
 */
export declare const Datepicker: import('react').ForwardRefExoticComponent<{
    'aria-label'?: string;
    'aria-labelledby'?: string;
    'aria-describedby'?: string | null;
    disabled?: boolean;
    size?: import('baseui/input').Size;
    error?: boolean;
    positive?: boolean;
    placeholder?: string;
    required?: boolean;
    clearable?: boolean;
    displayValueAtRangeIndex?: number;
    formatDisplayValue?: ((date: Date | (Date | null | undefined)[] | null | undefined, formatString: string) => string) | undefined;
    formatString?: string;
    mountNode?: HTMLElement;
    onChange?: ((a: {
        date: Date | Date[] | null | undefined;
    }) => unknown) | undefined;
    onClose?: () => unknown;
    onOpen?: () => unknown;
    onRangeChange?: ((a: {
        readonly date: Date | (Date | null | undefined)[] | null | undefined;
    }) => unknown) | undefined;
    mask?: string | null;
    rangedCalendarBehavior?: import('baseui/datepicker').RangedCalendarBehavior;
    separateRangeInputs?: boolean;
    startDateLabel?: string;
    endDateLabel?: string;
    value?: Date | (Date | null | undefined)[] | null | undefined;
} & import('baseui/datepicker').CalendarProps<Date> & {
    'data-testid'?: string;
    kind?: InputKind;
    /** Used to remove custom implementation of input blur that breaks with `range` enabled, true by default */
    enableInputBlur?: boolean;
    /**
     * A Prop required to work with zIndex of `DocumentViewerModal` legacy component
     *
     * @deprecated Only required for legacy support with `DocumentViewerModal`
     */
    zIndex?: number;
} & import('react').RefAttributes<BaseDatepicker<Date>>>;
