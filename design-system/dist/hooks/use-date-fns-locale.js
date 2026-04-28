import { useMemo as e } from "react";
import { allDateLocaleMap as a } from "../components/utils/strings/date.utils.js";
import { useLocale as t } from "../contexts/locale-provider/locale-provider.js";
const m = () => {
  const { locale: o } = t();
  return { dateFnsLocale: e(() => a[o], [o]) };
};
export {
  m as useDateFnsLocale
};
//# sourceMappingURL=use-date-fns-locale.js.map
