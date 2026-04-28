import { checkmarkStyleOverrides as a } from "../../../checkbox/checkbox.styles.js";
const d = {
  Root: {
    style: ({ $theme: o, $checked: s }) => ({
      padding: o.spacing.spacingXs,
      borderRadius: o.spacing.spacingXs,
      ":hover": {
        backgroundColor: o.colors.sweetWashed
      },
      ...s && {
        backgroundColor: o.colors.sweetWashed,
        border: `1px solid ${o.colors.sweet}`
      }
    })
  },
  Description: {
    style: ({ $theme: o }) => ({
      ...o.typography.ParagraphSmall,
      fontWeight: "normal"
    })
  },
  RadioMarkOuter: {
    style: ({ $theme: o, $checked: s }) => ({
      ...s && {
        backgroundColor: o.colors.sweet
      }
    })
  }
}, i = {
  ...d,
  RadioMarkOuter: {
    style: {
      display: "none"
    }
  }
}, l = {
  Root: {
    style: ({ $theme: o }) => ({
      padding: o.spacing.spacingXs,
      paddingRight: o.spacing.spacingMd,
      alignItems: "start"
    })
  }
}, c = {
  Root: {
    style: ({ $theme: o, $isFocused: s }) => ({
      ...s && {
        borderColor: o.colors.sweet
      }
    })
  }
}, n = {
  Caption: {
    style: {
      display: "none"
    }
  }
}, g = {
  Root: {
    style: ({ $theme: o, $checked: s }) => ({
      padding: o.spacing.spacingXs,
      borderRadius: o.spacing.spacingXs,
      alignItems: "center",
      backgroundColor: o.colors.bgBase,
      border: `1px solid ${o.colors.neutralSubtle}`,
      ":hover": {
        backgroundColor: o.colors.sweetWashed
      },
      ...s && {
        backgroundColor: o.colors.sweetWashed,
        border: `1px solid ${o.colors.sweet}`
      }
    })
  },
  Checkmark: {
    style: (o) => {
      const { $theme: s, $isFocused: r, $checked: e } = o;
      return {
        ...a(o),
        outline: "unset",
        ...r && {
          outline: `${s.colors.sweet} solid 2px`,
          outlineOffset: "3px",
          backgroundColor: s.colors.sweetWashed
        },
        ...e && {
          backgroundColor: s.colors.sweet
        }
      };
    }
  }
};
export {
  g as checkboxOverrides,
  d as detailedRadioOverrides,
  l as detailedRadioWithTextareaOverrides,
  n as radioGroupControlOverrides,
  i as radioWithoutMarkOverrides,
  c as textareaOverrides
};
//# sourceMappingURL=legal-whisper-answer-rating.styles.js.map
