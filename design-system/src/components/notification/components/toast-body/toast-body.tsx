import { StyledBody } from 'baseui/toast';

import { themedUseStyletron } from '../../../../themes';
import { BackgroundIcon } from '../../../background-icon';
import { useCss } from '../../../utils/hooks/use-css';

import {
  getKindValues,
  getToastIconProps,
  styledBody,
  toasterContainerStyles,
} from './toast-body.styles';

import type { SharedStylePropsArg } from 'baseui/toast';

export type StyledToastBodyProps = Omit<
  SharedStylePropsArg,
  '$closeable' | '$isFocusVisible' | '$isRendered' | '$isVisible'
> & {
  children: React.ReactElement;
  width?: string;
  $closeable?: boolean;
  $isFocusVisible?: boolean;
  $isRendered?: boolean;
  $isVisible?: boolean;
};

/**
 * Component to be rendered in the toast body.
 */
export const StyledToastBody = ({
  $kind,
  $type,
  width,
  children,
  $closeable = true,
  $isFocusVisible = false,
  $isRendered = true,
  $isVisible = true,
  ...props
}: StyledToastBodyProps): JSX.Element => {
  const [, theme] = themedUseStyletron();
  const style = getKindValues($kind);
  const { bodyWrapper, childrenWrapper } = useCss(toasterContainerStyles);

  // Get all BackgroundIcon props with proper types from helper
  const iconProps = getToastIconProps(style);
  const { icon, ...restIconProps } = iconProps;

  return (
    <StyledBody
      {...props}
      $isRendered={$isRendered}
      $isVisible={$isVisible}
      $isFocusVisible={$isFocusVisible}
      $closeable={$closeable}
      $type={$type}
      $kind={$kind}
      $style={styledBody(theme, { style, width })}
    >
      <div className={bodyWrapper}>
        <BackgroundIcon
          {...restIconProps}
          Icon={icon}
        />
        <div className={childrenWrapper}>{children}</div>
      </div>
    </StyledBody>
  );
};
