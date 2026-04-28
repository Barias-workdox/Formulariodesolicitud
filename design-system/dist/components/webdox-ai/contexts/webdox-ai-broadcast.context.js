import { createContext as e } from "react";
import { ActionCableProvider as n } from "../../../contexts/action-cable-context/action-cable.context.js";
const i = () => e({
  subscribe: () => () => {
  }
}), b = ({
  children: t,
  cable: o,
  context: r
}) => n({
  children: t,
  cable: o,
  ActionCableContext: r
});
export {
  b as WebdoxAIBroadcastProvider,
  i as getWebdoxAIBroadcastContext
};
//# sourceMappingURL=webdox-ai-broadcast.context.js.map
