import { jsx as e } from "react/jsx-runtime";
import { HeaderAvatar as a } from "./components/header-avatar.js";
import { HeaderBackgroundIcon as m } from "./components/header-background-icon.js";
import { HeaderEmoji as t } from "./components/header-emoji.js";
import { HeaderFileIconType as i } from "./components/header-file-icon-type.js";
import { HeaderFlag as d } from "./components/header-flag.js";
import { HeaderComponent as n } from "./header.js";
import { HeaderProvider as p } from "./header.provider.js";
const r = (o) => /* @__PURE__ */ e(p, { defaultProps: o, children: /* @__PURE__ */ e(n, { ...o }) });
r.BackgroundIcon = m;
r.Emoji = t;
r.Flag = d;
r.FileIconType = i;
r.Avatar = a;
const j = r;
export {
  j as Header
};
//# sourceMappingURL=header.container.js.map
