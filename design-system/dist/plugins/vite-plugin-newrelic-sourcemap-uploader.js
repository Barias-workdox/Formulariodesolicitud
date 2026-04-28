import { readdirSync as E, existsSync as N, unlinkSync as $ } from "fs";
import i from "path";
import U from "@newrelic/publish-sourcemap";
import { composeVitePluginLog as D } from "./utils.js";
const r = D("newrelic-sourcemap-uploader"), P = (n) => new Promise(
  (t, a) => U.publishSourcemap(n, (l) => l ? a(l) : t(!0))
), L = ({
  key: n,
  applicationId: t,
  baseUrl: a,
  runInDevelopment: l = !1,
  enabled: m = !1,
  removeSourcemaps: h = !1
}) => {
  if (!n || !a || !t)
    return m && r("Missing key, baseUrl or applicationId for newrelic sourcemap uploader", !0), !1;
  r(process.env.NODE_ENV);
  const f = n && (process.env.NODE_ENV !== "development" || l) && m;
  return {
    name: "newrelic-sourcemap-uploader",
    apply: "build",
    config({ build: s }, { mode: p }) {
      return {
        build: {
          sourcemap: (s == null ? void 0 : s.sourcemap) !== void 0 ? s.sourcemap : f && p !== "development" ? "hidden" : !1
        }
      };
    },
    async writeBundle(s) {
      if (!f)
        return;
      const p = s.dir || "", c = i.resolve(p, "assets"), w = E(c).filter((e) => e.endsWith(".map"));
      r(`Uploading sourcemaps from ${c} to Newrelic.`);
      const u = w.map((e) => {
        const o = e.replace(/\.map$/, ""), S = i.basename(o), v = i.resolve(c, o);
        if (!N(v))
          return r(`no corresponding source found for "${e}"`, !0), null;
        const g = i.resolve(c, e);
        try {
          return {
            sourcemapPath: g,
            javascriptUrl: `${a}/${S}`,
            //'https://example.com/assets/bundle.js',
            applicationId: t,
            apiKey: n
          };
        } catch (y) {
          return r("Error reading sourcemap file " + g + ": " + y, !0), null;
        }
      }).filter((e) => e !== null);
      if (!u.length)
        return;
      r(`Uploading ${u.length} sourcemap files to Newrelic.`);
      const d = u.map(
        (e) => () => P(e)
      );
      try {
        for (; d.length; )
          (await Promise.allSettled(d.splice(0, 10).map((o) => o()))).forEach((o) => {
            o.status === "rejected" && r(`Error uploading sourcemap: ${o.reason}`, !0);
          });
        r("Successfully uploaded sourcemaps to Newrelic.");
      } catch (e) {
        r(`Something went wrong while uploading the sourcemaps to Newrelic: ${e}`, !0);
      }
      h && (u.forEach(({ sourcemapPath: e }) => {
        try {
          $(e);
        } catch (o) {
          console.error("Error removing sourcemap file", e, ": ", o);
        }
      }), r("Successfully removed sourcemaps."));
    }
  };
};
export {
  L as newRelicSourcemapUploader
};
//# sourceMappingURL=vite-plugin-newrelic-sourcemap-uploader.js.map
