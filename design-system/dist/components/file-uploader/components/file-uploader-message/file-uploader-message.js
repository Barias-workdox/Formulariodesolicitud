import { jsxs as i, jsx as r } from "react/jsx-runtime";
import { Text as n } from "../../../text/text.js";
function l({ title: t, subtitle: e }) {
  return /* @__PURE__ */ i("div", { children: [
    /* @__PURE__ */ r(
      n,
      {
        variant: "body",
        margin: 0,
        fontWeight: "500",
        textAlign: "center",
        children: t
      }
    ),
    e && /* @__PURE__ */ r(
      n,
      {
        variant: "bodySmall",
        margin: 0,
        textAlign: "center",
        color: "neutralDepressed",
        children: e
      }
    )
  ] });
}
export {
  l as FileUploaderMessage
};
//# sourceMappingURL=file-uploader-message.js.map
