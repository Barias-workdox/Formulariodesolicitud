import { useEffect as c } from "react";
import { chatStoriesUtils as i } from "../utils/chat-stories.util.js";
const p = ({
  chunksRef: r,
  isGenerating: n,
  isPageRefEnabled: o = !1,
  onFinish: l
}) => {
  c(() => {
    let t;
    if (n) {
      const e = i.getFakeAnswerMarkdown(o).split(""), a = e.length;
      t = setInterval(() => {
        const s = e.shift();
        r.current = [
          ...r.current,
          {
            text: s ?? "",
            position: a - e.length
          }
        ], e.length === 0 && (clearInterval(t), l());
      }, 10);
    }
    return () => {
      t && clearInterval(t);
    };
  }, [n, l, r, o]);
};
export {
  p as useGenerativeAnswerChunk
};
//# sourceMappingURL=use-generative-answer-chunk.hook.js.map
