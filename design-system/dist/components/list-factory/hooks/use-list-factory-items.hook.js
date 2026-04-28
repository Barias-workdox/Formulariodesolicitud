import { jsx as r } from "react/jsx-runtime";
import { noop as b } from "../../../utils/noop.js";
import { ListItemFactory as o } from "../list-item-factory.js";
const $ = ({
  dataTestId: m,
  items: v,
  handleItemClick: c
}) => ({
  renderListItems: () => v.map((s, f) => {
    const {
      id: n,
      label: i,
      checked: y = !1,
      disabled: C = !1,
      Icon: P,
      withCheckbox: x,
      kind: l = "basic",
      avatarProps: T,
      quantity: q,
      aiGenerated: L,
      items: t
    } = s, e = `${m}__item--${f}`, d = {
      label: i,
      checked: y,
      disabled: C,
      kind: l,
      aiGenerated: L,
      quantity: q,
      withCheckbox: x,
      onClick: () => c(s)
    }, p = {
      group: () => {
        const k = (t || []).map((a) => {
          const h = a.kind === "avatar" ? { ...a.avatarProps, name: a.label } : void 0;
          return /* @__PURE__ */ r(
            o,
            {
              dataTestId: e,
              label: a.label,
              checked: a.checked,
              disabled: a.disabled,
              kind: a.kind,
              quantity: a.quantity,
              withCheckbox: a.withCheckbox,
              Icon: a.Icon,
              onClick: () => c(a),
              ...h && { avatarProps: h }
            },
            a.id
          );
        });
        return [
          k.length > 0 && /* @__PURE__ */ r(
            o,
            {
              dataTestId: e,
              ...d,
              quantity: t == null ? void 0 : t.length,
              label: i.toUpperCase(),
              onClick: b
            },
            n
          ),
          ...k
        ];
      },
      avatar: () => /* @__PURE__ */ r(
        o,
        {
          dataTestId: e,
          ...d,
          avatarProps: { ...T, name: i }
        },
        n
      ),
      basic: () => /* @__PURE__ */ r(
        o,
        {
          dataTestId: e,
          ...d,
          Icon: P
        },
        n
      )
    };
    return (p[l] || p.basic)();
  }).flat()
});
export {
  $ as useListFactoryItems
};
//# sourceMappingURL=use-list-factory-items.hook.js.map
