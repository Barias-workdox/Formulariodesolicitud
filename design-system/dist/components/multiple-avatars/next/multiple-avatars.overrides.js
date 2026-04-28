import { jsx as l } from "react/jsx-runtime";
import { StyledInitials as s } from "baseui/avatar";
const a = ({
  disabled: r,
  dataTestId: t,
  counterText: e
}) => ({
  Root: {
    props: { "data-testid": `${t}--counter-root` },
    style: ({ $theme: o }) => ({
      backgroundColor: r ? o.colors.neutralSubtle : o.colors.neutralWashed,
      border: `1px solid ${o.colors.neutralSubtle}`
    })
  },
  Initials: {
    props: { "data-testid": `${t}--counter-initials` },
    component: (o) => /* @__PURE__ */ l(s, { ...o, children: e }),
    style: ({ $theme: o }) => ({
      color: r ? o.colors.neutralDepressed : o.colors.neutral,
      fontWeight: 700,
      lineHeight: "unset"
    })
  }
}), c = () => ({
  Root: {
    style: ({ $theme: r }) => ({
      border: `1px solid ${r.colors.borderBase}`
    })
  }
});
export {
  a as getAvatarCounterOverrides,
  c as getMultipleAvatarsAvatarOverrides
};
//# sourceMappingURL=multiple-avatars.overrides.js.map
