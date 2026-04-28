import { jsx as o, jsxs as r } from "react/jsx-runtime";
import { useState as I, useRef as g, useEffect as a } from "react";
import { ArrowsVertical as T } from "@carbon/icons-react";
import "baseui/popover";
import "baseui";
import "../../../popover/popover.styles.js";
import { StatelessPopover as D } from "../../../popover/stateless-popover.js";
import { Text as k } from "../../../text/text.js";
import { StatefulTooltipNext as P } from "../../../tooltip-next/stateful-tooltip-next/stateful-tooltip-next.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as Q } from "../../../utils/i18n/utils.js";
import { useQuickActions as q } from "../../../../hooks/use-quick-actions/use-quick-actions.hook.js";
import { StyledQuickActionsMenu as C, StyledHeader as L, StyledHeaderTitle as M, StyledHeaderCount as F, StyledQuickActionsList as H, StyledQuickActionsItem as R, StyledTooltip as j, StyledFooter as K, StyledFooterItem as A } from "./styled-components/styled-prompt-quick-actions.js";
const lt = ({
  dataTestId: S = "prompt-quick-actions",
  isOpen: b,
  filterValue: u,
  allOptions: v,
  zIndex: f,
  handleChange: x,
  setIsOpen: d
}) => {
  const [c, m] = I(0), $ = g(null), l = g([]), { t: s } = Q(), { options: e, setFilterValue: w, handleSelect: p } = q({
    allOptions: v,
    setIsOpen: d,
    onSelect: x
  });
  return a(() => {
    const n = (t) => {
      if (e.length)
        switch (t.key) {
          case "ArrowDown":
            t.preventDefault(), m((i) => (i + 1) % e.length);
            break;
          case "ArrowUp":
            t.preventDefault(), m((i) => (i - 1 + e.length) % e.length);
            break;
          case "Enter":
            t.preventDefault(), t.stopPropagation(), p(e[c]);
            break;
        }
    };
    return window.addEventListener("keydown", n), () => window.removeEventListener("keydown", n);
  }, [e, c, p]), a(() => {
    l.current = l.current.slice(0, e.length);
  }, [e.length]), a(() => {
    const n = l.current[c];
    n && n.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [c]), a(() => {
    w(u);
  }, [u, w]), /* @__PURE__ */ o(
    D,
    {
      isOpen: b,
      onClickOutside: () => d(!1),
      onEsc: () => d(!1),
      placement: "topLeft",
      zIndex: f,
      content: /* @__PURE__ */ r(C, { ref: $, children: [
        /* @__PURE__ */ r(L, { children: [
          /* @__PURE__ */ o(M, { children: s("webdoxAI.chat.customPrompts.myPrompts") }),
          /* @__PURE__ */ o(F, { children: `(${e.length})` })
        ] }),
        /* @__PURE__ */ o(H, { children: e.map((n, t) => {
          const { title: i, content: y } = n, h = i && i.length > 0;
          return /* @__PURE__ */ o(
            "div",
            {
              ref: (E) => l.current[t] = E,
              onMouseEnter: () => m(t),
              children: /* @__PURE__ */ o(
                P,
                {
                  content: () => /* @__PURE__ */ r(j, { children: [
                    h && /* @__PURE__ */ r("strong", { children: [
                      " ",
                      i,
                      " "
                    ] }),
                    /* @__PURE__ */ r("span", { children: [
                      " ",
                      `"${y || ""}"`,
                      " "
                    ] })
                  ] }),
                  placement: "auto",
                  showArrow: !0,
                  ignoreBoundary: !0,
                  zIndex: f,
                  children: /* @__PURE__ */ r(
                    R,
                    {
                      "data-testid": `${S}__item-${t}`,
                      onClick: () => p(n),
                      $isActive: t === c,
                      children: [
                        h && /* @__PURE__ */ o(
                          k,
                          {
                            variant: "body",
                            color: "neutral",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            fontWeight: "bold",
                            margin: 0,
                            children: i
                          }
                        ),
                        /* @__PURE__ */ o(
                          k,
                          {
                            variant: h ? "bodySmall" : "body",
                            color: "neutralSubdued",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            margin: 0,
                            children: `"${y || ""}"`
                          }
                        )
                      ]
                    }
                  )
                }
              )
            },
            t
          );
        }) }),
        /* @__PURE__ */ r(K, { children: [
          /* @__PURE__ */ r(A, { children: [
            /* @__PURE__ */ r("strong", { children: [
              `"${s("webdoxAI.chat.quickActions.confirmationKey")}"`,
              " "
            ] }),
            s("webdoxAI.chat.quickActions.footerConfirmationMessage")
          ] }),
          /* @__PURE__ */ r(A, { children: [
            /* @__PURE__ */ o(T, {}),
            s("webdoxAI.chat.quickActions.footerNavigateMessage")
          ] })
        ] })
      ] }),
      children: /* @__PURE__ */ o("span", { style: { position: "absolute", top: 0, left: 0 } })
    }
  );
};
export {
  lt as PromptQuickActions
};
//# sourceMappingURL=prompt-quick-actions.js.map
