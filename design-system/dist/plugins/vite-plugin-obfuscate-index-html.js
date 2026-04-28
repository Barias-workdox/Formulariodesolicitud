import { minify as c } from "html-minifier-terser";
import l from "javascript-obfuscator";
function d({
  obfuscateOptions: s = {}
} = {}) {
  return {
    name: "vite-plugin-obfuscate",
    apply: "build",
    enforce: "post",
    transformIndexHtml: {
      order: "post",
      /**
       * Transforms the HTML content by minifying it and obfuscating inline JavaScript.
       *
       * @param html - The original HTML content to be transformed.
       * @returns A promise that resolves to the transformed HTML string or undefined.
       */
      async handler(i) {
        return (await c(i, {
          collapseWhitespace: !0,
          removeComments: !0,
          minifyJS: !1,
          // We'll handle JS minification separately
          minifyCSS: !0
        })).replace(
          /<script(\s+[^>]*)?>([\s\S]*?)<\/script>/gi,
          (r, e, o) => {
            if (e && e.includes("src="))
              return r;
            const n = e ? e.match(/type\s*=\s*["']([^"']+)["']/) : null, t = n ? n[1].toLowerCase() : "text/javascript";
            if (t === "text/javascript" || t === "application/javascript" || t === "module") {
              const a = l.obfuscate(o, {
                compact: !0,
                controlFlowFlattening: !1,
                deadCodeInjection: !1,
                debugProtection: !1,
                disableConsoleOutput: !0,
                identifierNamesGenerator: "hexadecimal",
                rotateStringArray: !0,
                selfDefending: !0,
                stringArray: !0,
                stringArrayEncoding: ["base64"],
                stringArrayThreshold: 0.8,
                transformObjectKeys: !0,
                ...s
              }).getObfuscatedCode();
              return `<script${e || ""}>${a}<\/script>`;
            }
            return r;
          }
        );
      }
    }
  };
}
export {
  d as vitePluginObfuscateIndexHtml
};
//# sourceMappingURL=vite-plugin-obfuscate-index-html.js.map
