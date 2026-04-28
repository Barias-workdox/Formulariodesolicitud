import { themedStyled as t } from "../../../../themes/utilities.js";
import { MIN_MESSAGE_CARD_WIDTH as a } from "../../message-card.constants.js";
const c = (o) => ({
  default: {
    color: o.colors.neutralStrong,
    borderColor: o.colors.brand,
    backgroundColor: o.colors.brandWashed
  },
  brain: {
    color: o.colors.neutralStrong,
    borderColor: o.colors.power,
    backgroundColor: o.colors.powerWashed
  },
  legalWhisper: {
    color: o.colors.neutralStrong,
    borderColor: o.colors.sweet,
    backgroundColor: o.colors.sweetWashed
  },
  smartContract: {
    color: o.colors.neutralStrong,
    borderColor: o.colors.positive,
    backgroundColor: o.colors.positiveWashed
  }
}), d = ({
  $theme: o,
  $isActive: r,
  $service: l
}) => r ? c(o)[l] : {
  borderColor: o.colors.neutralSubtle,
  backgroundColor: o.colors.bgBase,
  ":hover": {
    borderColor: o.colors.neutralSubtle,
    backgroundColor: o.colors.neutralBase
  }
}, i = t(
  "button",
  ({ $theme: o, $service: r = "default", $isActive: l, $iconPosition: s = "default" }) => {
    const n = d({ $theme: o, $isActive: l, $service: r });
    return {
      alignItems: "start",
      border: "solid 1px",
      cursor: "pointer",
      display: "flex",
      flexDirection: s === "default" ? "column" : "row",
      gap: o.spacing.spacing2xs,
      height: "fit-content",
      justifyContent: "start",
      minWidth: a,
      outline: "unset",
      padding: o.spacing.spacingXs,
      width: "fit-content",
      borderRadius: o.borders.borderSm,
      ...s === "left" ? { alignItems: "center", justifyContent: "space-between", gap: o.spacing.spacingXs } : {},
      ...n,
      ":disabled": {
        cursor: "not-allowed",
        borderColor: o.colors.neutralSubtle,
        backgroundColor: o.colors.neutralWashed
      }
    };
  }
);
export {
  i as StyledBaseButton
};
//# sourceMappingURL=message-card-base.styles.js.map
