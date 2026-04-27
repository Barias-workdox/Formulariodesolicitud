import { forwardRef, useEffect, useRef } from 'react';
import type { InputHTMLAttributes, ReactNode } from 'react';

import { Edit } from '@carbon/icons-react';

import { textComponentsMap } from '@components/text/text.constants';
import { useCss } from '@components/utils/hooks/use-css';

import type { TextVariant } from '@components/text';
import type { DesignSystemTheme } from '@themes/theme.interfaces';
import type { StyleObject } from 'styletron-react';

type StyleOptions = {
  variant: TextVariant;
  fontWeight?: StyleObject['fontWeight'];
};

const styles = {
  containerStyles: (theme: DesignSystemTheme): StyleObject => ({
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    gap: theme.spacing.spacingMd,
    color: theme.colors.neutral,
  }),
  inputContainerStyles: (
    theme: DesignSystemTheme,
    { variant, fontWeight }: StyleOptions,
  ): StyleObject => ({
    ...theme.typography[textComponentsMap[variant]],
    fontWeight,
    display: 'inline-grid',
    '::after': {
      content: "attr(data-value) '  '",
      visibility: 'hidden',
      whiteSpace: 'pre-wrap',
      height: 0,
      paddingRight: theme.spacing.spacingXl,
    },
  }),
  inputStyles: (theme: DesignSystemTheme): StyleObject => ({
    fontSize: 'inherit',
    fontFamily: 'inherit',
    fontWeight: 'inherit',
    lineHeight: 'inherit',
    color: theme.colors.neutralStrong,
    borderLeft: 'none',
    borderRight: 'none',
    borderTop: '2px solid transparent',
    borderBottom: '2px solid transparent',
    paddingLeft: 0,
    paddingRight: theme.spacing.spacingXl,
    ':hover': {
      borderBottom: `2px dashed ${theme.colors.neutralSubdued}`,
    },
    ':focus': {
      borderBottom: `2px dashed ${theme.colors.brand}`,
      outline: 'none',
    },
    ':disabled': {
      backgroundColor: 'transparent',
      border: 'none',
    },
    '::placeholder': {
      fontStyle: 'italic',
    },
  }),
  iconContainerStyles: (theme: DesignSystemTheme): StyleObject => ({
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    right: theme.spacing.spacing2xs,
    pointerEvents: 'none',
  }),
};

export type DynamicTextInputProps = StyleOptions &
  InputHTMLAttributes<HTMLInputElement> & {
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
export const DynamicTextInput = forwardRef<HTMLInputElement, DynamicTextInputProps>(
  function DynamicTextInputWithRef(
    {
      'data-testid': dataTestId,
      variant,
      fontWeight,
      disabled,
      value = '',
      endEnhancer = <Edit size={20} />,

      // This property is inyected by the `FormControl` in (src/components/forms/components/dynamic-text-input/dynamic-text-input-control.tsx)
      // by cloning the children (https://github.com/uber/baseweb/blob/main/src/form-control/form-control.tsx#L180).
      // This behavior is producing an undesired error in the console log.
      // We remove it by destructuring before spreading the "rest" properties.
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      error,

      ...rest
    }: DynamicTextInputProps,
    ref,
  ) {
    const { containerStyles, inputContainerStyles, inputStyles, iconContainerStyles } = useCss(
      styles,
      {
        variant,
        fontWeight,
      },
    );
    const containerRef = useRef<HTMLSpanElement>(null);

    /**
     * Dynamically adjusts the input's size to fit its content by updating the container's `data-value` attribute.
     * This approach ensures the input width aligns with the actual text entered, providing a responsive design experience.
     */
    useEffect(() => {
      if (containerRef.current) {
        containerRef.current.dataset.value = value.toString();
      }
    }, [value]);

    return (
      <div className={containerStyles}>
        <span
          ref={containerRef}
          className={inputContainerStyles}
        >
          <input
            ref={ref}
            data-testid={dataTestId}
            className={inputStyles}
            value={value}
            disabled={disabled}
            {...rest}
          />
        </span>
        {!disabled && endEnhancer && <span className={iconContainerStyles}>{endEnhancer}</span>}
      </div>
    );
  },
);
