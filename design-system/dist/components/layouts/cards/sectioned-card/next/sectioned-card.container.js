import { jsx as d } from "react/jsx-runtime";
import { Footer as r } from "../../../../footer/footer.container.js";
import { Header as a } from "../../../../header/header.container.js";
import { HeaderTabs as i } from "../../../../header-tab/header-tabs.container.js";
import { SectionedCardBody as t } from "./components/sectioned-card-body.js";
import { SectionedCardFooter as n } from "./components/sectioned-card-footer.js";
import { SectionedCardHeader as c } from "./components/sectioned-card-header.js";
import { SectionedCardHeaderTabs as s } from "./components/sectioned-card-header-tabs.js";
import { SectionedCardComponent as m } from "./sectioned-card.js";
import { SectionedCardProvider as p } from "./sectioned-card.provider.js";
const e = (o) => /* @__PURE__ */ d(p, { defaultProps: o, children: /* @__PURE__ */ d(m, { ...o }) });
e.Header = Object.assign(c, {
  displayName: "SectionedCard.Header"
});
e.Avatar = Object.assign(a.Avatar, {
  displayName: "SectionedCard.Avatar"
});
e.BackgroundIcon = Object.assign(a.BackgroundIcon, {
  displayName: "SectionedCard.BackgroundIcon"
});
e.Emoji = Object.assign(a.Emoji, {
  displayName: "SectionedCard.Emoji"
});
e.FileIconType = Object.assign(a.FileIconType, {
  displayName: "SectionedCard.FileIconType"
});
e.Flag = Object.assign(a.Flag, {
  displayName: "SectionedCard.Flag"
});
e.HeaderTabs = Object.assign(s, {
  displayName: "SectionedCard.HeaderTabs"
});
e.HeaderTab = Object.assign(i.Tab, {
  displayName: "SectionedCard.HeaderTab"
});
e.Footer = Object.assign(n, {
  displayName: "SectionedCard.Footer"
});
e.Button = Object.assign(r.Button, {
  displayName: "SectionedCard.Button"
});
e.Body = Object.assign(t, {
  displayName: "SectionedCard.Body"
});
const F = e;
export {
  F as SectionedCard
};
//# sourceMappingURL=sectioned-card.container.js.map
