const c = (t, { value: e, currency: n, locale: r }) => t("currency.formattedCurrency", {
  value: e,
  formatParams: {
    value: { currency: n, ...r && { locale: r } }
  }
});
export {
  c as formatCurrency
};
//# sourceMappingURL=format-currency.utils.js.map
