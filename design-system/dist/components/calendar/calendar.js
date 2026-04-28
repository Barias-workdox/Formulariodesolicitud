import { jsxs as h, jsx as a } from "react/jsx-runtime";
import { useState as v, useEffect as E, useMemo as V, useCallback as l } from "react";
import { Clean as j, CheckmarkOutline as U } from "@carbon/icons-react";
import { Calendar as q } from "baseui/datepicker";
import { subDays as b, subMonths as k } from "date-fns";
import { Button as p } from "../button/button.js";
import "../button/variants/icon-button/icon-button.js";
import "../../themes/v3/tokens/typography.js";
import "../../themes/v3/tokens/breakpoints.js";
import { useCss as G } from "../utils/hooks/use-css.js";
import "baseui/modal";
import { mergeOverridesDeep as H } from "../utils/baseui/helpers.js";
import "../modal/components/modal-close-button/modal-close-button.js";
import "../modal/regular-modal.js";
import "../modal/sectioned-modal.js";
import "../spinner/full-spinner/full-spinner-context.js";
import { getDatepickerOverrides as J } from "../datepicker/next/datepicker.overrides.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as K } from "../utils/i18n/utils.js";
import { isSameDay as N, isWithinBounds as g } from "../utils/strings/date.utils.js";
import { useDateFnsLocale as P } from "../../hooks/use-date-fns-locale.js";
import { StyledContainer as Q, StyledButtonsContainer as D, StyledWrapper as Y } from "./calendar.styles.js";
import { isDifferentDateIgnoringTime as Z, getRangeValue as T } from "./calendar.utils.js";
const Mt = ({
  dataTestId: s = "calendar",
  value: m,
  range: y,
  minDate: u,
  maxDate: f,
  withBorder: L,
  onChange: i
}) => {
  const [e, o] = v(m), { theme: n } = G(), { t: d } = K(), { dateFnsLocale: _ } = P();
  E(() => {
    o(m);
  }, [m]);
  const S = V(
    () => H(J({ dataTestId: s })),
    [s]
  ), C = Z(e, m), W = l(
    ({ date: t }) => {
      if (y) {
        const r = T(t), O = r.filter(Boolean).length === 2 && N(r[0], r[1]);
        o(O ? r[0] : r);
      } else
        o(Array.isArray(t) ? t[0] : t);
    },
    [y]
  ), $ = l(() => {
    const t = /* @__PURE__ */ new Date();
    i({ date: t }), o(t);
  }, [i]), A = l(() => {
    const t = /* @__PURE__ */ new Date(), r = b(t, 7);
    i({ date: [r, t] }), o([r, t]);
  }, [i]), B = l(() => {
    const t = /* @__PURE__ */ new Date(), r = k(t, 1);
    i({ date: [r, t] }), o([r, t]);
  }, [i]), M = l(() => {
    i({ date: null }), o(null);
  }, [i]), X = l(() => {
    if (Array.isArray(e)) {
      const t = e.filter(Boolean);
      if (t.length === 1) {
        i({ date: t[0] });
        return;
      }
    }
    i({ date: e });
  }, [e, i]), c = /* @__PURE__ */ new Date(), w = b(c, 7), x = k(c, 1), z = !g(c, u, f), R = !g([w, c], u, f), F = !g([x, c], u, f);
  return /* @__PURE__ */ h(Q, { $withBorder: L, children: [
    /* @__PURE__ */ h(D, { children: [
      /* @__PURE__ */ a(
        p,
        {
          "data-testid": `${s}__today-button`,
          kind: "control",
          size: "32px",
          paddingLeft: n.spacing.spacingXs,
          paddingRight: n.spacing.spacingXs,
          fullWidth: !0,
          onClick: $,
          disabled: z,
          children: d("calendar.today")
        }
      ),
      /* @__PURE__ */ a(
        p,
        {
          "data-testid": `${s}__last7days-button`,
          kind: "control",
          size: "32px",
          paddingLeft: n.spacing.spacingXs,
          paddingRight: n.spacing.spacingXs,
          fullWidth: !0,
          onClick: A,
          disabled: R,
          children: d("calendar.last7Days")
        }
      ),
      /* @__PURE__ */ a(
        p,
        {
          "data-testid": `${s}__lastmonth-button`,
          kind: "control",
          size: "32px",
          paddingLeft: n.spacing.spacingXs,
          paddingRight: n.spacing.spacingXs,
          fullWidth: !0,
          onClick: B,
          disabled: F,
          children: d("calendar.lastMonth")
        }
      )
    ] }),
    /* @__PURE__ */ h(Y, { children: [
      /* @__PURE__ */ a(
        q,
        {
          locale: _,
          value: e,
          range: y || Array.isArray(e),
          minDate: u,
          maxDate: f,
          overrides: S,
          onChange: W
        }
      ),
      /* @__PURE__ */ h(D, { children: [
        /* @__PURE__ */ a(
          p,
          {
            "data-testid": `${s}__clear-button`,
            kind: "secondary",
            size: "32px",
            startEnhancer: j,
            fullWidth: !0,
            onClick: M,
            disabled: !e,
            children: d("calendar.clear")
          }
        ),
        /* @__PURE__ */ a(
          p,
          {
            "data-testid": `${s}__submit-button`,
            kind: "primary",
            size: "32px",
            startEnhancer: U,
            fullWidth: !0,
            onClick: X,
            disabled: !C,
            children: d("calendar.submit")
          }
        )
      ] })
    ] })
  ] });
};
export {
  Mt as Calendar
};
//# sourceMappingURL=calendar.js.map
