var d = Object.defineProperty;
var u = (n, t, e) => t in n ? d(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e;
var m = (n, t, e) => u(n, typeof t != "symbol" ? t + "" : t, e);
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { defaultLng as g } from "../components/utils/i18n/i18n.constants.js";
import { getUnixTimestamp as p } from "../components/utils/strings/date.utils.js";
import { keysToSnakeCase as f } from "./object-case.util.js";
class S {
  constructor() {
    m(this, "_settings");
    /** @deprecated broken */
    m(this, "_library");
  }
  /**
   * The product tour third party library used (ie: Intercom)
   *
   * @deprecated broken
   */
  get library() {
    return this._library;
  }
  /** The current settings of the product tour required by the library */
  get settings() {
    return this._settings;
  }
  /** Map the product tour's raw data to the required by the library */
  set settings({
    customLauncherSelector: t = ".intercom-link",
    hideDefaultLauncher: e = !0,
    user: { createdAt: o, company: r, companies: a, locale: s = g, ...i },
    custom: c,
    ...l
  }) {
    this._settings = f({
      customLauncherSelector: t,
      hideDefaultLauncher: e,
      createdAt: p(o),
      language_override: this.mapLocale(s),
      company: this.mapCompany(r),
      ...a !== void 0 && { companies: a.map(this.mapCompany) },
      ...i,
      ...l,
      ...c
    });
  }
  /**
   * Set the current product tour library in the class object
   *
   *  @deprecated broken
   */
  set library(t) {
    this._library = t;
  }
  /**
   * Triggers a custom product tour event from the used library
   */
  triggerEvent({
    action: t,
    context: e,
    metadata: o,
    library: r
  }) {
    r !== void 0 && r(t, e, o);
  }
  /** Reusable snippet used to instantiate Intercom library */
  instantiateLibrary(t) {
    (function() {
      const e = window, o = e.Intercom;
      if (typeof o == "function")
        o("reattach_activator"), o("update", e.intercomSettings);
      else {
        const a = document;
        var r = function() {
          r.c(arguments);
        };
        r.q = [], r.c = function(i) {
          r.q.push(i);
        }, e.Intercom = r;
        const s = function() {
          const i = a.createElement("script");
          i.type = "text/javascript", i.async = !0, i.src = "https://widget.intercom.io/widget/" + t;
          const c = a.getElementsByTagName("script")[0];
          c.parentNode.insertBefore(i, c);
        };
        document.readyState === "complete" ? s() : e.attachEvent ? e.attachEvent("onload", s) : e.addEventListener("load", s, !1);
      }
    })();
  }
  /** It maps all supported languages and returns the correct ISO 639-1 added in the intercom configuration */
  mapLocale(t) {
    return {
      br: "pt-br",
      pt: "pt-br"
    }[t] ?? t;
  }
  /** Map the raw settings company entity into intercom company entity */
  mapCompany({
    createdAt: t,
    ...e
  }) {
    return {
      ...e,
      created_at: t !== void 0 ? p(t) : void 0
    };
  }
}
export {
  S as ProductTourUtils
};
//# sourceMappingURL=product-tour.util.js.map
