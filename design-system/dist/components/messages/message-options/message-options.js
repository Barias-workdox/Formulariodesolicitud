import { jsx as s, jsxs as d } from "react/jsx-runtime";
import { Edit as f, TrashCan as b } from "@carbon/icons-react";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as g } from "../../utils/i18n/utils.js";
import "../../menu/stateful-menu/stateful-menu.js";
import "react";
import "baseui";
import "baseui/menu";
import "../../menu/stateless-menu/stateless-menu.overrides.js";
import { Menu as u } from "../../menu/menu.js";
import { useCss as x } from "../../utils/hooks/use-css.js";
import { styles as C } from "./message-options.styles.js";
const O = (t, i, e) => [
  i && {
    id: "edit",
    label: t("general.edit"),
    icon: /* @__PURE__ */ s(f, { size: 16 })
  },
  e && {
    id: "delete",
    label: t("general.delete"),
    icon: /* @__PURE__ */ s(b, { size: 16 })
  }
].filter((r) => r), H = ({
  dataTestId: t,
  canUpdate: i,
  canDelete: e,
  message: r,
  onEditClick: m,
  onDeleteClick: n,
  close: p
}) => {
  const { messageOptionStyles: l } = x(C), { t: a } = g(), c = ({ item: o }) => {
    ({
      edit: m,
      delete: n
    })[o.id](r), p();
  };
  return /* @__PURE__ */ s(
    u,
    {
      dataTestId: t,
      items: O(a, i, e),
      onItemSelect: c,
      itemLabelTemplate: (o) => /* @__PURE__ */ d("div", { className: l, children: [
        o.icon,
        o.label
      ] })
    }
  );
};
export {
  H as MessageOptions
};
//# sourceMappingURL=message-options.js.map
