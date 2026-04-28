import { jsx as m } from "react/jsx-runtime";
import { forwardRef as f } from "react";
import { Close as C } from "@carbon/icons-react";
import "baseui";
import "baseui/input";
import "lodash";
import "../../button/button.js";
import "../../button/variants/icon-button/icon-button.js";
import "../../../themes/v3/tokens/typography.js";
import "../../../themes/v3/tokens/breakpoints.js";
import "../../../themes/v3/light/theme.js";
import "../../../themes/v3/dark/theme.js";
import "../../../themes/utilities.js";
import "baseui/modal";
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
import { DEFAULT_INPUT_WIDTH as g } from "../../input/next/input.constants.js";
import "../../input/next/input.overrides.js";
import { SelectControlContainer as v } from "./components/select-control-container/select-control-container.js";
import { SelectDropdownContainer as w } from "./components/select-dropdown-container.js";
import { SelectIconsContainer as $ } from "./components/select-icons-container/select-icons-container.js";
import { SelectOptgroupHeader as D } from "./components/select-optgroup-header.js";
import { placeholderStyles as O, inputStyles as h, popoverBodyStyles as R, tagRootStyles as H, singleValueStyles as A, valueContainerStyles as L, optionContentStyle as P, dropdownListItemStyles as V, dropdownStyles as _ } from "./select.styles.js";
const B = ({
  kind: e,
  zIndex: p,
  dataTestId: o,
  isHovered: l,
  size: t,
  options: s,
  isInputDirty: a,
  leading: c,
  width: y = g,
  name: i,
  onClear: d
}) => ({
  Root: {
    style: {
      width: y
    }
  },
  IconsContainer: {
    component: $,
    props: {
      "data-testid": o,
      isInputDirty: a,
      onClear: d,
      zIndex: p
    }
  },
  // This search icon is hidden because the search icon is rendered in the SelectControlContainer
  SearchIconContainer: {
    style: {
      display: "none"
    }
  },
  DropdownContainer: {
    component: w
  },
  Dropdown: {
    style: _
  },
  DropdownListItem: {
    props: {
      $size: t
    },
    style: V
  },
  ControlContainer: {
    component: v,
    props: {
      "data-testid": o,
      kind: e,
      size: t,
      isHovered: l,
      leading: c
    }
  },
  OptionContent: {
    style: P
  },
  ValueContainer: {
    props: {
      ...o && { "data-testid": `${o}-value-container` },
      $size: t,
      $kind: e
    },
    style: L
  },
  SingleValue: {
    ...o && { "data-testid": `${o}-value` },
    style: A
  },
  Tag: {
    props: {
      overrides: {
        Action: {
          style: {
            margin: 0
          }
        },
        Root: {
          props: {
            $size: t
          },
          style: H
        },
        ActionIcon: () => /* @__PURE__ */ m(C, { size: 12 })
      }
    }
  },
  Popover: {
    props: {
      overrides: {
        Body: {
          style: (r) => ({
            ...R(r),
            zIndex: p
          })
        }
      }
    }
  },
  Input: {
    props: {
      "data-testid": o,
      $size: t,
      ...i && { name: i }
    },
    style: h
  },
  Placeholder: {
    style: O
  },
  StatefulMenu: {
    props: {
      overrides: {
        EmptyState: {
          style: ({ $theme: r }) => ({
            color: r.colors.neutralSubdued
          })
        },
        OptgroupHeader: {
          component: f(
            function({ children: n, ...u }, S) {
              return /* @__PURE__ */ m(
                D,
                {
                  innerRef: S,
                  count: s[n].length,
                  label: n,
                  ...u
                }
              );
            }
          )
        }
      }
    }
  }
}), vo = B;
export {
  vo as getOverrides,
  B as getSelectOverrides
};
//# sourceMappingURL=select.overrides.js.map
