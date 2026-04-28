import { jsx as a } from "react/jsx-runtime";
import { useContext as p } from "react";
import { toaster as w } from "baseui/toast";
import { ToastBody as d } from "./toast.js";
import { DEFAULT_TOAST_DURATION_MS as v } from "./toast.constants.js";
async function h({
  title: e,
  body: o,
  kind: t,
  action: i,
  type: n = "toast",
  dataTestId: s,
  link: c,
  duration: T,
  ...u
}, r) {
  r && await r.canShowToast();
  const f = w.show(
    /* @__PURE__ */ a(
      d,
      {
        dataTestId: s,
        title: e,
        body: o,
        action: i,
        kind: t,
        type: n,
        link: c
      }
    ),
    {
      ...u,
      kind: t,
      notificationType: n,
      autoHideDuration: T ?? v,
      onClose: () => {
        f && r && r.removeToastFromQueue(f), u.onClose && u.onClose();
      }
    }
  );
  return f && r && r.addToastToQueue(f), f ?? null;
}
const m = (e, o, t) => async ({
  placement: i,
  zIndex: n,
  marginX: s,
  marginY: c,
  width: T,
  duration: u,
  ...r
}) => (o({
  placement: i,
  zIndex: n,
  marginX: s,
  marginY: c,
  width: T
}), await h(
  {
    ...r,
    kind: e,
    duration: u
  },
  t
)), l = (e, { dataTestId: o, title: t, body: i, kind: n, action: s, type: c = "toast", link: T, ...u }) => {
  w.update(e, {
    ...u,
    kind: n,
    notificationType: c,
    children: /* @__PURE__ */ a(
      d,
      {
        dataTestId: o,
        title: t,
        body: i,
        action: s,
        kind: n,
        type: c,
        link: T
      }
    )
  });
}, y = (e, o) => ({
  ...w,
  show: async (t) => await h(t, o),
  positive: m("positive", e, o),
  negative: m("negative", e, o),
  warning: m("warning", e, o),
  info: m("info", e, o),
  update(t, i) {
    l(t, i);
  }
});
function D(e) {
  const o = p(e);
  if (!o)
    throw new Error("useToaster must be used within a ToasterContainerProvider");
  const { updateToasterContainerProps: t, canShowToast: i, addToastToQueue: n, removeToastFromQueue: s } = o;
  return y(t, {
    canShowToast: i,
    addToastToQueue: n,
    removeToastFromQueue: s
  });
}
export {
  m as createToasterKind,
  y as toaster,
  D as useToaster
};
//# sourceMappingURL=use-toaster.js.map
