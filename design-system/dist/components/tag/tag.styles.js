import { Text as i } from "../text/text.js";
const s = {
  iconContainerStyles: () => ({
    marginRight: "6px",
    display: "inline-flex",
    maxWidth: "12px",
    maxHeight: "12px",
    alignItems: "center"
  })
}, l = {
  background: "brandSubdued",
  fontColor: "base"
}, u = {
  overlay: {
    primary: {
      background: "brandSubtle",
      fontColor: "brandMedium"
    },
    accent: {
      background: "peaceSubtle",
      fontColor: "peaceMedium"
    },
    positive: {
      background: "positiveSubtle",
      fontColor: "positiveMedium"
    },
    negative: {
      background: "sweetSubtle",
      fontColor: "sweetMedium"
    },
    warning: {
      background: "warningSubtle",
      fontColor: "warningMedium"
    },
    neutral: {
      background: "neutralWashed",
      fontColor: "neutralMedium"
    }
  },
  solid: {
    primary: {
      background: "brandSubtle",
      fontColor: "brandMedium"
    },
    accent: {
      background: "peaceSubtle",
      fontColor: "peaceMedium"
    },
    positive: {
      background: "positiveSubtle",
      fontColor: "positiveMedium"
    },
    negative: {
      background: "sweetSubtle",
      fontColor: "sweetMedium"
    },
    warning: {
      background: "warningSubtle",
      fontColor: "warningMedium"
    },
    neutral: {
      background: "neutralWashed",
      fontColor: "neutralMedium"
    }
  }
}, d = (e, t) => u[e][t] ?? l, b = ({
  dataTestId: e,
  $variant: t,
  $kind: n
}) => {
  const { fontColor: r, background: a } = d(t, n);
  return {
    Root: {
      style: ({ $theme: o }) => ({
        margin: 0,
        borderRadius: "24px",
        backgroundColor: o.colors[a]
      }),
      props: {
        "data-testid": e
      }
    },
    Text: {
      props: {
        variant: "microCopy",
        margin: 0
      },
      component: i,
      style: ({ $theme: o }) => ({
        display: "flex",
        alignItems: "center",
        color: o.colors[r],
        maxWidth: "100%",
        textWrap: "nowrap"
      })
    },
    Action: {
      style: ({ $theme: o }) => ({
        color: o.colors[r]
      })
    }
  };
};
export {
  d as getColors,
  b as tagOverrides,
  s as tagStyles
};
//# sourceMappingURL=tag.styles.js.map
