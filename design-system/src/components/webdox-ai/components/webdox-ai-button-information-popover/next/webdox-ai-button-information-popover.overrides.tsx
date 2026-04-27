import { INFORMATION_POPOVER_WIDTH } from '../../../constants/webdox-ai.constants';

import type { PopoverVariant } from './webdox-ai-button-information-popover.interfaces';
import type { InformationPopoverHeaderOverrides } from '@components/information-popover/components/information-popover-header/information-popover-header.interfaces';
import type { InformationPopoverOverrides } from '@components/information-popover/information-popover.interfaces';
import type { StyleObject } from 'styletron-react';

const legalWhisperCloseButtonOverrides: InformationPopoverHeaderOverrides['CloseButton'] = {
  props: {
    overrides: {
      BaseButton: {
        style: ({ $theme }): StyleObject => ({
          color: $theme.colors.neutralSubdued,

          ':hover': {
            backgroundColor: $theme.colors.sweetSubtle,
            borderColor: $theme.colors.sweetSubtle,
            color: $theme.colors.neutralSubdued,
          },
          ':focus': {
            borderColor: $theme.colors.sweet,
            color: $theme.colors.neutralSubdued,
          },
        }),
      },
    },
  },
};

const brainCompanionCloseButtonOverrides: InformationPopoverHeaderOverrides['CloseButton'] = {
  props: {
    overrides: {
      BaseButton: {
        style: ({ $theme }): StyleObject => ({
          color: $theme.colors.neutralSubdued,

          ':hover': {
            backgroundColor: $theme.colors.powerSubtle,
            borderColor: $theme.colors.powerSubtle,
            color: $theme.colors.neutralSubdued,
          },
          ':focus': {
            borderColor: $theme.colors.power,
            color: $theme.colors.neutralSubdued,
          },
        }),
      },
    },
  },
};

const closeButtonOverridesByVariant: Record<
  PopoverVariant,
  InformationPopoverHeaderOverrides['CloseButton']
> = {
  active: brainCompanionCloseButtonOverrides,
  genericError: brainCompanionCloseButtonOverrides,
  legalWhisperActive: legalWhisperCloseButtonOverrides,
  legalWhisperGenericError: legalWhisperCloseButtonOverrides,
  legalWhisperGreetings: legalWhisperCloseButtonOverrides,
  loading: brainCompanionCloseButtonOverrides,
  processFailedError: brainCompanionCloseButtonOverrides,
  suiteAIGreetings: brainCompanionCloseButtonOverrides,
};

/**
 * Overrides for the information popover.
 */
export const getInformationPopoverOverrides = ({
  popoverVariant,
}: {
  popoverVariant: PopoverVariant;
}): InformationPopoverOverrides => ({
  Body: {
    style: {
      width: INFORMATION_POPOVER_WIDTH,
    },
  },
  PopoverContent: {
    props: {
      overrides: {
        Header: {
          props: {
            overrides: {
              CloseButton:
                closeButtonOverridesByVariant[popoverVariant] || brainCompanionCloseButtonOverrides,
            },
          },
        },
      },
    },
  },
});
