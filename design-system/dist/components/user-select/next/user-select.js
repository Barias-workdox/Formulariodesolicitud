import { jsx as o } from "react/jsx-runtime";
import { useMemo as l } from "react";
import "baseui";
import "baseui/input";
import "lodash";
import "@carbon/icons-react";
import "../../button/button.js";
import "../../button/variants/icon-button/icon-button.js";
import "../../../themes/v3/tokens/typography.js";
import "../../../themes/v3/tokens/breakpoints.js";
import "../../../themes/v3/light/theme.js";
import "../../../themes/v3/dark/theme.js";
import "../../../themes/utilities.js";
import "baseui/modal";
import { mergeOverridesDeep as d } from "../../utils/baseui/helpers.js";
import "../../modal/components/modal-close-button/modal-close-button.js";
import "../../modal/regular-modal.js";
import "../../modal/sectioned-modal.js";
import "../../spinner/full-spinner/full-spinner-context.js";
import "baseui/tooltip";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import "../../input/next/components/compound-end-enhancer/styled-components/styled-container.js";
import "../../input/next/components/compound-start-enhancer/styled-components/styled-container.js";
import "../../input/next/components/compound-start-enhancer/styled-components/styled-leading.js";
import "../../input/next/components/compound-start-enhancer/styled-components/styled-prefix-text.js";
import "../../input/next/components/compound-start-enhancer/styled-components/styled-right-column.js";
import { DEFAULT_SIZE as g } from "../../input/next/input.constants.js";
import "../../input/next/input.overrides.js";
import { SelectWithPagination as u } from "../../select-with-pagination/next/select-with-pagination.js";
import { SelectOption as O } from "./components/select-option.js";
import { SelectValue as S } from "./components/select-value.js";
import { getUserSelectOverrides as v } from "./user-select.overrides.js";
const ir = ({
  isLoadingMore: e,
  onLoadMore: s,
  onChange: a,
  overrides: m = {},
  "data-testid": f = "user-select",
  size: t = g,
  disabled: i = !1,
  placeholder: p,
  ...n
}) => {
  const c = l(() => {
    const r = v({ placeholder: p });
    return d(r, m);
  }, [m, p]);
  return /* @__PURE__ */ o(
    u,
    {
      ...n,
      size: t,
      disabled: i,
      "data-testid": f,
      isLoadingMore: e,
      overrides: c,
      onLoadMore: s,
      onChange: a,
      getOptionLabel: ({ option: r }) => /* @__PURE__ */ o(
        O,
        {
          option: r,
          size: t
        }
      ),
      getValueLabel: ({ option: r }) => /* @__PURE__ */ o(
        S,
        {
          option: r,
          size: t,
          disabled: i
        }
      )
    }
  );
};
export {
  ir as UserSelect
};
//# sourceMappingURL=user-select.js.map
