import { formatCurrency as e } from "../currency/format-currency.utils.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as n } from "../i18n/utils.js";
import { useCurrenciesTranslation as m } from "../i18n/use-currencies-translation.i18n.js";
const x = () => {
  const { t: o } = n(), { t } = m();
  return {
    /**
     * Formats a currency value using translation.
     *
     * @param params - The options for formatting currency.
     * @returns The formatted currency string.
     */
    formatCurrency: (r) => e(o, r),
    getCurrencyTranslate: ({ currency: r }) => t(r),
    t
  };
};
export {
  x as useFormatCurrency
};
//# sourceMappingURL=use-format-currency.hook.js.map
