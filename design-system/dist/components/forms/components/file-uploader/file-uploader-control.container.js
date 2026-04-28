import { jsx as t } from "react/jsx-runtime";
import "@hookform/resolvers/yup";
import "@hookform/resolvers/zod";
import "lodash/debounce";
import { useFormContext as m } from "react-hook-form";
import { FileUploaderControl as e } from "./file-uploader-control.js";
const a = (o) => {
  const r = m();
  return /* @__PURE__ */ t(
    e,
    {
      ...r,
      ...o
    }
  );
};
export {
  a as FileUploaderControlContainer
};
//# sourceMappingURL=file-uploader-control.container.js.map
