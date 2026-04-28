import { InputHTMLAttributes, ReactNode } from 'react';
import { TextVariant } from '../text';
import { StyleObject } from 'styletron-react';
type StyleOptions = {
    variant: TextVariant;
    fontWeight?: StyleObject['fontWeight'];
};
export type DynamicTextInputProps = StyleOptions & InputHTMLAttributes<HTMLInputElement> & {
    'data-testid'?: string;
    endEnhancer?: ReactNode;
    error?: ReactNode;
};
/**
 * Renders a styled dynamic text input. This component is designed to improve user experience by allowing
 * direct in-place editing of content, making it ideal for dynamic user interfaces where text customization is required.
 * It leverages the `variant` prop to apply consistent typography styles based on the design system, ensuring visual
 * harmony across the application.
 *
 * The component supports standard input attributes like `name`, `value`, `placeholder`, and `maxLength`, enhancing
 * its flexibility. Customizable styles can be applied through the `variant` and `fontWeight` props, allowing for precise
 * control over the text appearance. Additionally, it provides `onChange` and `onBlur` event handlers for integrating
 * custom logic and interactions. The optional `endEnhancer` prop enables the inclusion of an icon or element at the end
 * of the input, further enriching the component's functionality and aesthetic appeal.
 *
 * Internally, it utilizes a data-driven approach to dynamically adjust the input's width to match its content, ensuring
 * a responsive and user-friendly interface. This is achieved by updating a container's `data-value` attribute in response
 * to input changes, a technique that offers a seamless experience by avoiding text overflow and maintaining visual consistency.
 */
export declare const DynamicTextInput: import('react').ForwardRefExoticComponent<StyleOptions & InputHTMLAttributes<HTMLInputElement> & {
    'data-testid'?: string;
    endEnhancer?: ReactNode;
    error?: ReactNode;
} & import('react').RefAttributes<HTMLInputElement>>;
export {};
