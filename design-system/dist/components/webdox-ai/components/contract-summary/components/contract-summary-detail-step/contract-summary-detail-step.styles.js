import { getCustomScrollBarStyles as e } from "../../../../../../themes/custom-scroll-bar.js";
import { themedStyled as i } from "../../../../../../themes/utilities.js";
const l = i("div", ({ $theme: t }) => ({
  display: "flex",
  gap: t.spacing.spacingXs
})), d = ({
  onScroll: t,
  dataTestId: o
}) => ({
  Block: {
    style: ({ $theme: s }) => ({
      ":has(*) :first-child": {
        marginTop: 0
      },
      ":has(*) :last-child": {
        marginBottom: 0
      },
      ...e(s)
    }),
    props: { onScroll: t, "data-testid": o }
  }
});
export {
  l as StyledRoot,
  d as textOverrides
};
//# sourceMappingURL=contract-summary-detail-step.styles.js.map
