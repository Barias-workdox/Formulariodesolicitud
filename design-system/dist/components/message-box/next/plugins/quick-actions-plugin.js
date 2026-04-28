import { MessageBoxPluginNames as m, QUICK_ACTION_TRIGGER as i } from "../message-box.constants.js";
const A = ({ customRender: r }) => {
  const s = ({ textValue: n } = {}) => {
    const c = n == null ? void 0 : n.startsWith(i);
    if (n && c) {
      const o = n.replace(i, "");
      return r(o);
    }
    return null;
  };
  return {
    name: m.QuickActions,
    render: s
  };
};
export {
  A as QuickActionsPlugin
};
//# sourceMappingURL=quick-actions-plugin.js.map
