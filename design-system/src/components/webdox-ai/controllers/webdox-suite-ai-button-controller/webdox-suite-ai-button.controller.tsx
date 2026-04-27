import { useCallback, useEffect, useMemo, useState } from 'react';

import { useToggle } from 'react-use';

import { ariaKeyDownHandler } from '@components/utils/accessibility.utils';
import { checkNotEmptyValue } from '@utils/check-not-empty-value.util';
import { noop } from '@utils/noop';

import {
  WebdoxAIButtonInformationPopoverNext,
  WebdoxAICollapsibleButton,
  WebdoxAIOption,
} from '../../components';
import { StyledPlacementWrapper } from '../../styled-components';

import {
  ACTIVE_POPOVER_VARIANT_MAP,
  ERROR_POPOVER_VARIANT_MAP,
  GENERIC_ERROR_POPOVER_VARIANT_MAP,
  LOADING_POPOVER_VARIANT_MAP,
} from './webdox-suite-ai-button-controller.constants';
import { getPopoverOverrides } from './webdox-suite-ai-button-controller.styles';

import type {
  PopoverVariantNext,
  WebdoxAIButtonInformationPopoverNextProps,
  WebdoxAICollapsibleButtonProps,
} from '../../components';
import type {
  ChatBotUser,
  WebdoxAIErrorType,
  WebdoxAIOptionType,
} from '@components/webdox-ai/interfaces';
import type { PlacementType } from '@interfaces/common.interfaces';
import type { StyleObject } from 'styletron-react';

export type OptionConfig = {
  type: WebdoxAIOptionType;
  isLoading?: boolean;
  disabled?: boolean;
  errorType?: WebdoxAIErrorType;
};

export interface WebdoxSuiteAIButtonControllerProps extends Pick<
  WebdoxAICollapsibleButtonProps,
  'direction'
> {
  'data-testid': string;
  user: Pick<ChatBotUser, 'firstName'>;
  placement: PlacementType;
  options: OptionConfig[];
  zIndex?: number;
  customLeft?: StyleObject['left'];
  customRight?: StyleObject['right'];
  popoverProps?: Pick<
    WebdoxAIButtonInformationPopoverNextProps,
    'onSubmit' | 'sendTextValue' | 'isDisabled'
  > & {
    autoOpen?: boolean;
    onClose?(): void;
  };
  onClickOption?(optionType: WebdoxAIOptionType): void;
}

/**
 * The `WebdoxSuiteAIButtonController` component renders a collapsible button
 * with an integrated information popover. It manages different states such
 * as loading, active, and error, and allows for user interaction through options
 * and popover actions.
 */
export const WebdoxSuiteAIButtonController = ({
  'data-testid': dataTestId,
  direction = 'column',
  options,
  placement,
  popoverProps,
  user,
  zIndex,
  customLeft,
  customRight,
  onClickOption = noop,
}: WebdoxSuiteAIButtonControllerProps): JSX.Element => {
  const {
    onSubmit = noop,
    sendTextValue,
    isDisabled,
    autoOpen = true,
    onClose = noop,
  } = popoverProps ?? {};

  const [isToggled, toggle] = useToggle(false);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [popoverVariant, setPopoverVariant] = useState<PopoverVariantNext>('suiteAIGreetings');

  /**
   * Indicates whether any option in `options` is in a loading state.
   * Returns `true` if at least one option has `isLoading` set to `true`.
   */
  const isLoading = useMemo(() => options.some(({ isLoading }) => isLoading), [options]);
  const hasError = useMemo(() => options.some(({ errorType }) => !!errorType), [options]);

  const allOptionsAreActive = useMemo(
    () =>
      options.every(
        ({ isLoading, disabled, errorType }) =>
          !isLoading && !disabled && !checkNotEmptyValue(errorType),
      ),
    [options],
  );

  /**
   * Determines the popover variant during a loading state.
   * Maps the `type` of the first option in `options` to its corresponding variant:
   * - `'loading'` for `brainCompanion`.
   * - `'legalWhisperGreetings'` for `legalWhisper`.
   * If multiple options are present, defaults to `'suiteAIGreetings'`.
   */
  const defaultLoadingPopoverVariant: PopoverVariantNext = useMemo(() => {
    if (!isLoading) return;

    const [{ type: firstOptionType }] = options;

    if (options.length > 1) {
      return 'suiteAIGreetings';
    }

    return LOADING_POPOVER_VARIANT_MAP[firstOptionType];
  }, [isLoading, options]);

  /**
   * Determines the active popover variant.
   * Maps the `type` of the first option in `options` to its corresponding active variant:
   * - `'active'` for `brainCompanion`.
   * - `'legalWhisperActive'` for `legalWhisper`.
   * Defaults to `'active'` if multiple options are present.
   */
  const defaultActivePopoverVariant: PopoverVariantNext = useMemo(() => {
    const [{ type: firstOptionType }] = options;

    if (options.length > 1) {
      return 'active';
    }

    return ACTIVE_POPOVER_VARIANT_MAP[firstOptionType];
  }, [options]);

  const popoverOverrides = useMemo(
    () =>
      getPopoverOverrides({
        isCollapsibleButtonOpen: isToggled,
        placement,
        direction,
        zIndex,
      }),
    [direction, isToggled, placement, zIndex],
  );

  /**
   * Validates whether a Webdox AI option can be interacted with.
   */
  const validateWebdoxAIOption = useCallback(
    ({ disabled, errorType, isLoading }: OptionConfig): boolean => {
      const hasError = checkNotEmptyValue(errorType);

      return !hasError && !isLoading && !disabled;
    },
    [],
  );

  /**
   * Handles closing the popover.
   */
  const handleClosePopover = useCallback(() => {
    setIsPopoverOpen(false);
    onClose();
  }, [onClose]);

  /**
   * Gets the error popover variant based on the option's error type and type.
   */
  const getErrorPopoverVariant = useCallback(
    ({
      errorType,
      webdoxAIOption,
    }: {
      errorType: WebdoxAIErrorType;
      webdoxAIOption: WebdoxAIOptionType;
    }): PopoverVariantNext =>
      ERROR_POPOVER_VARIANT_MAP[webdoxAIOption]?.[errorType] ??
      GENERIC_ERROR_POPOVER_VARIANT_MAP[webdoxAIOption],
    [],
  );

  /**
   * Handles clicking on a disabled option and updates the popover state accordingly.
   */
  const handleClickDisabledOption = useCallback(
    (isActive: boolean, { type, errorType, isLoading, disabled }: OptionConfig): void => {
      /** If the option is active, do nothing */
      if (isActive) {
        return;
      }

      const hasError = checkNotEmptyValue(errorType);

      if (hasError || disabled) {
        const errorPopoverVariant = getErrorPopoverVariant({ errorType, webdoxAIOption: type });

        setPopoverVariant(errorPopoverVariant);
        setIsPopoverOpen(true);

        return;
      }

      if (isLoading) {
        const loadingPopoverVariant = LOADING_POPOVER_VARIANT_MAP[type];

        setPopoverVariant(loadingPopoverVariant);
        setIsPopoverOpen(true);
      }
    },
    [getErrorPopoverVariant],
  );

  /**
   * Handles the click event for an option.
   * It validates whether the option is active and, if so, executes the associated click logic.
   */
  const handleClickOption = useCallback(
    (option: OptionConfig): void => {
      const { type } = option;
      const isActive = validateWebdoxAIOption(option);

      if (isActive) {
        onClickOption(type);
        handleClosePopover();
      }
    },
    [handleClosePopover, onClickOption, validateWebdoxAIOption],
  );

  /**
   * Memoized component rendering the list of options as `WebdoxAIOption` components.
   * Each option is clickable and handles both active and disabled states.
   */
  const optionsComponent: JSX.Element[] = useMemo(
    () =>
      options.map((optionConfig) => {
        const { type, isLoading, disabled } = optionConfig;
        const isActive = validateWebdoxAIOption(optionConfig);

        return (
          <div
            key={type}
            data-testid={`${dataTestId}__option-wrapper-${type}`}
            role={!isActive ? 'button' : undefined}
            tabIndex={!isActive ? 0 : undefined}
            onClick={() => handleClickDisabledOption(isActive, optionConfig)}
            onKeyDown={ariaKeyDownHandler(() => handleClickDisabledOption(isActive, optionConfig))}
          >
            <WebdoxAIOption
              data-testid={`${dataTestId}--option-${type}`}
              type={type}
              zIndex={zIndex}
              isLoading={isLoading}
              disabled={disabled}
              onClick={() => handleClickOption(optionConfig)}
            />
          </div>
        );
      }),
    [
      dataTestId,
      handleClickDisabledOption,
      handleClickOption,
      options,
      validateWebdoxAIOption,
      zIndex,
    ],
  );

  /**
   * Effect to manage the visibility and state of the popover based on various conditions.
   * - Closes the popover if there is an error or auto-open is disabled.
   * - Sets the popover variant and opens it when loading or all options are active.
   */
  useEffect(() => {
    if (hasError || !autoOpen) {
      setIsPopoverOpen(false);

      return;
    }

    if (isLoading) {
      setPopoverVariant(defaultLoadingPopoverVariant);
      setIsPopoverOpen(true);

      return;
    }

    if (allOptionsAreActive) {
      setPopoverVariant(defaultActivePopoverVariant);
      setIsPopoverOpen(true);
    }
  }, [
    allOptionsAreActive,
    defaultActivePopoverVariant,
    defaultLoadingPopoverVariant,
    hasError,
    autoOpen,
    isLoading,
  ]);

  return (
    <StyledPlacementWrapper
      $placement={placement}
      $zIndex={zIndex}
      $customLeft={customLeft}
      $customRight={customRight}
    >
      <WebdoxAIButtonInformationPopoverNext
        data-testid={`${dataTestId}__popover`}
        placement={placement}
        user={user}
        variant={popoverVariant}
        isOpen={isPopoverOpen}
        close={handleClosePopover}
        onSubmit={onSubmit}
        sendTextValue={sendTextValue}
        isDisabled={isDisabled}
        overrides={popoverOverrides}
      >
        <WebdoxAICollapsibleButton
          dataTestId={`${dataTestId}__button`}
          options={optionsComponent}
          direction={direction}
          onToggle={toggle}
          isToggled={isToggled}
          isLoading={isLoading}
        />
      </WebdoxAIButtonInformationPopoverNext>
    </StyledPlacementWrapper>
  );
};
