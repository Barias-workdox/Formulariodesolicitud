import { jsx as s } from "react/jsx-runtime";
import { FileTypeIcon as m } from "../../file-type-icon/file-type-icon.js";
import { useHeader as p } from "../header.provider.js";
import { composeDataTestId as a } from "../utils/compose-data-test-id.js";
import { getFileIconSize as d } from "../utils/size-maps.js";
const T = (e) => {
  const { size: o, dataTestId: t, isDisabled: i } = p(), r = a(`${t}-file-icon-type`);
  return /* @__PURE__ */ s(
    m,
    {
      ...e,
      isDisabled: i,
      dataTestId: r,
      size: d(o)
    }
  );
};
export {
  T as HeaderFileIconType
};
//# sourceMappingURL=header-file-icon-type.js.map
