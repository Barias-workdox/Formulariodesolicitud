import { Edit } from '@carbon/icons-react';

import { StatefulTooltipNext } from '@components/tooltip-next';
import { getOverride, getOverrideProps } from '@utils/overrides.utils';

import { IconButton as IconButtonDS } from '../../../button';
import { Spinner as SpinnerDS } from '../../../spinner';
import { Text as TextDS } from '../../../text';
import { useCss } from '../../../utils/hooks/use-css';
import { DEFAULT_ICON_SIZE } from '../../inline-edit-input.constants';

import type { DesignSystemTheme } from '../../../../themes';
import type { SpinnerProps } from '../../../spinner';
import type { TextProps } from '../../../text';
import type { InlineEditInputProps } from '../../inline-edit-input';
import type { IconButtonProps } from '@components/button/variants/icon-button/icon-button.interfaces';
import type {
  IconSize,
  InlineEditInputColors,
} from '@components/inline-edit-input/inline-edit-input.interfaces';
import type { StatefulTooltipNextProps } from '@components/tooltip-next';
import type { OverrideObject } from '@themes/theme.interfaces';
import type { StyleObject } from 'styletron-react';

export interface CaptionInputPropsOverrides {
  Tooltip?: OverrideObject<StatefulTooltipNextProps>;
  Text?: OverrideObject<TextProps>;
  IconButton?: OverrideObject<IconButtonProps>;
  Spinner?: OverrideObject<SpinnerProps>;
}

export interface CaptionInputProps extends Pick<
  InlineEditInputProps,
  'captionText' | 'onToggle' | 'zIndex'
> {
  disabled: Required<InlineEditInputProps['disabled']>;
  iconSize?: IconSize;
  colors?: Pick<InlineEditInputColors, 'editIcon'>;
  isLoading: Required<InlineEditInputProps['isLoading']>;
  'data-testid': string;
  overrides?: CaptionInputPropsOverrides;
  onCaptionClick(): void;
}

export const styles = {
  captionTextStyles: (theme: DesignSystemTheme): StyleObject => ({
    width: '100%',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    marginBottom: 0,
    marginTop: 0,
    marginRight: theme.spacing.spacingXs,
    color: theme.colors.neutralSubdued,
  }),
  spinnerContainerStyles: {
    // Required to have the same height and width of the icon buttons
    padding: '10px',
  } as StyleObject,
};

/**
 * Input caption with an icon. On hover will display a tooltip with the complete name
 */
export const CaptionInput = ({
  'data-testid': dataTestId,
  captionText,
  zIndex,
  disabled,
  colors = {},
  iconSize = DEFAULT_ICON_SIZE,
  isLoading,
  overrides,
  onCaptionClick,
  onToggle,
}: CaptionInputProps): JSX.Element => {
  const { theme, spinnerContainerStyles } = useCss(styles);

  const {
    Tooltip: TooltipOverride,
    Text: TextOverride,
    IconButton: IconButtonOverride,
    Spinner: SpinnerOverride,
  } = overrides || {};

  const Tooltip = getOverride(TooltipOverride) || StatefulTooltipNext;
  const Text = getOverride(TextOverride) || TextDS;
  const IconButton = getOverride(IconButtonOverride) || IconButtonDS;
  const Spinner = getOverride(SpinnerOverride) || SpinnerDS;

  const { editIcon: editIconColor } = colors;

  return (
    <>
      <Tooltip
        placement="auto"
        showArrow
        content={captionText}
        zIndex={zIndex}
        {...getOverrideProps(TooltipOverride)}
      >
        <Text
          data-testid={`${dataTestId}-tooltip-text`}
          variant="bodySmall"
          onClick={(): void => onCaptionClick()}
          $style={styles.captionTextStyles(theme)}
          {...getOverrideProps(TextOverride)}
        >
          {captionText}
        </Text>
      </Tooltip>
      {!disabled &&
        (!isLoading ? (
          <IconButton
            data-testid={`${dataTestId}-edit-button`}
            size="auto"
            kind="link-tertiary"
            shape="circle"
            onClick={onToggle}
            {...getOverrideProps(IconButtonOverride)}
          >
            <Edit
              size={iconSize}
              fill={(editIconColor as string) ?? theme.colors.neutralSubdued}
            />
          </IconButton>
        ) : (
          <div className={spinnerContainerStyles}>
            <Spinner
              size="sm"
              {...getOverrideProps(SpinnerOverride)}
            />
          </div>
        ))}
    </>
  );
};
