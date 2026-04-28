import { jsxs as f, jsx as o } from "react/jsx-runtime";
import { useMemo as b, useCallback as E } from "react";
import { AddFilled as P } from "@carbon/icons-react";
import { AvatarListItem as _ } from "../list/components/avatar-list-item/avatar-list-item.js";
import { SelectWithPagination as L } from "../select-with-pagination/select-with-pagination.js";
import { Text as j } from "../text/text.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as y } from "../utils/i18n/utils.js";
import { mergeOverridesDeep as z } from "../utils/baseui/helpers.js";
import { useCss as H } from "../utils/hooks/use-css.js";
import { DEPRECATED_HEIGHT_MAP as M } from "../../constants/common.constants.js";
import { getUserSelectOverrides as R, ThemedCreatableOption as T, ThemedCreatableIconOption as U } from "./user-select.style.js";
const oe = ({
  "data-testid": r = "user-select",
  disabled: i = !1,
  creatable: u = !1,
  avatarBackGroundColor: l = "peaceSubtle",
  isLoadingMore: g,
  onLoadMore: S,
  onChange: h,
  placeholder: s,
  kind: v = "borderless",
  overrides: a,
  size: n = "44px",
  options: m,
  ...x
}) => {
  const { theme: t } = H(), { t: c } = y(), C = b(() => M[n], [n]), O = b(() => {
    const e = R({
      theme: t,
      placeholder: s,
      dataTestId: r
    });
    return z(e, a);
  }, [r, s, t, a]), d = E(
    (e) => {
      const { label: $, isCreatable: A = !1 } = e;
      if (A)
        return /* @__PURE__ */ f(T, { children: [
          `${c("select.create")} “${$}”`,
          /* @__PURE__ */ o(U, { children: /* @__PURE__ */ o(
            P,
            {
              color: t.colors.brand,
              size: 16
            }
          ) })
        ] });
      const D = m.findIndex((p) => p.id === p.id);
      return /* @__PURE__ */ o(
        _,
        {
          "data-testid": `${r}__item--${D}`,
          avatarProps: {
            name: e.label,
            backgroundColor: l
          },
          label: /* @__PURE__ */ f(
            j,
            {
              variant: "bodySmall",
              margin: 0,
              fontWeight: "400",
              color: i ? "neutralDepressed" : "neutralSubdued",
              children: [
                e.label,
                " ",
                e.email && `(${e.email})`
              ]
            }
          ),
          overrides: {
            Root: {
              style: {
                padding: 0
              }
            }
          }
        }
      );
    },
    [c, r, i, l, m, t.colors.brand]
  );
  return /* @__PURE__ */ o(
    L,
    {
      ...x,
      "data-testid": r,
      disabled: i,
      creatable: u,
      isLoadingMore: g,
      kind: v,
      size: C,
      overrides: O,
      options: m,
      onLoadMore: S,
      onChange: h,
      getOptionLabel: ({ option: e }) => d(e),
      getValueLabel: ({ option: e }) => d(e)
    }
  );
};
export {
  oe as UserSelect
};
//# sourceMappingURL=user-select.js.map
