import { themedStyled as r } from "../../themes/utilities.js";
const t = ({
  zIndex: e
} = {}) => ({
  Body: {
    style: ({ $theme: o }) => ({
      boxShadow: o.lighting.shadowDefault,
      // Required to be over DocumentViewerModal, which has zIndex: 4
      zIndex: e
    })
  },
  Inner: {
    style: ({ $theme: o }) => ({
      backgroundColor: o.colors.bgBase
    })
  },
  Arrow: {
    style: ({ $theme: o }) => ({
      backgroundColor: o.colors.bgBase
    })
  }
}), s = r("div", { display: "inline-flex" });
export {
  s as StyledWrapper,
  t as getPopoverOverrides
};
//# sourceMappingURL=popover.styles.js.map
