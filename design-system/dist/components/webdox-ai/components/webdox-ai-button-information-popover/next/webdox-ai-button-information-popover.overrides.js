import { INFORMATION_POPOVER_WIDTH as l } from "../../../constants/webdox-ai.constants.js";
const e = {
  props: {
    overrides: {
      BaseButton: {
        style: ({ $theme: o }) => ({
          color: o.colors.neutralSubdued,
          ":hover": {
            backgroundColor: o.colors.sweetSubtle,
            borderColor: o.colors.sweetSubtle,
            color: o.colors.neutralSubdued
          },
          ":focus": {
            borderColor: o.colors.sweet,
            color: o.colors.neutralSubdued
          }
        })
      }
    }
  }
}, r = {
  props: {
    overrides: {
      BaseButton: {
        style: ({ $theme: o }) => ({
          color: o.colors.neutralSubdued,
          ":hover": {
            backgroundColor: o.colors.powerSubtle,
            borderColor: o.colors.powerSubtle,
            color: o.colors.neutralSubdued
          },
          ":focus": {
            borderColor: o.colors.power,
            color: o.colors.neutralSubdued
          }
        })
      }
    }
  }
}, s = {
  active: r,
  genericError: r,
  legalWhisperActive: e,
  legalWhisperGenericError: e,
  legalWhisperGreetings: e,
  loading: r,
  processFailedError: r,
  suiteAIGreetings: r
}, u = ({
  popoverVariant: o
}) => ({
  Body: {
    style: {
      width: l
    }
  },
  PopoverContent: {
    props: {
      overrides: {
        Header: {
          props: {
            overrides: {
              CloseButton: s[o] || r
            }
          }
        }
      }
    }
  }
});
export {
  u as getInformationPopoverOverrides
};
//# sourceMappingURL=webdox-ai-button-information-popover.overrides.js.map
