import { useState as E, useEffect as m } from "react";
import { DEFAULT_CHAT_BOT_CHUNK_STATE as a, GENERATIVE_ANSWER_TIMER_MILLISECONDS_THRESHOLD as p } from "../constants/chat-bot.constant.js";
import "@carbon/icons-react";
import "../constants/webdox-ai-regex.constants.js";
const C = ({
  chunks: u,
  isGenerating: r
}) => {
  const [T, n] = E(a);
  return m(() => {
    let o;
    return r && (o = setInterval(() => {
      var s;
      const i = [...u.current];
      i.sort((t, e) => t.position - e.position);
      const c = ((s = i.at(-1)) == null ? void 0 : s.position) ?? 1;
      n((t) => ({
        latestPosition: c,
        accumulatedText: `${t.accumulatedText}${t.generativeText}`,
        generativeText: i.filter((e) => e.position > t.latestPosition).reduce((e, l) => `${e}${l.text}`, "")
      }));
    }, p)), () => {
      n(a), o && clearInterval(o);
    };
  }, [r]), {
    ...T
  };
};
export {
  C as useChatBotChunkGenerativeText
};
//# sourceMappingURL=use-chat-bot-chunk-generative-text.js.map
