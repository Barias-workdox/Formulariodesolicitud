import { promises as m } from "fs";
import { dirname as a, resolve as l } from "path";
import { fileURLToPath as f } from "url";
function c({
  fileName: e = "file.txt",
  content: i = ""
} = {}) {
  return {
    name: "vite-plugin-extra-file",
    async writeBundle(t) {
      const r = f(import.meta.url), o = a(r), n = l(o, t.dir, e);
      await m.writeFile(n, `${i}
`);
    }
  };
}
export {
  c as vitePluginExtraFile
};
//# sourceMappingURL=vite-plugin-extra-file.js.map
