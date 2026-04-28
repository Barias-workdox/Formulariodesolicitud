import { yupResolver as e } from "@hookform/resolvers/yup";
import { zodResolver as u } from "@hookform/resolvers/zod";
import i from "lodash/debounce";
import { useForm as v } from "react-hook-form";
import { allErrorsSyncResolver as d } from "../utils/resolver.js";
const n = {
  yup: e,
  zod: u
}, R = ({
  schema: o,
  resolverType: s = "yup",
  ...m
} = {}) => {
  const r = v({
    ...o !== void 0 && {
      // Implementing debouncing on the resolver enhances the handling of simultaneous queued validations
      resolver: i(
        (t, p, l) => d({
          values: t,
          context: p,
          options: l,
          schema: o,
          formMethods: r,
          resolver: n[s] ?? e
        }),
        void 0,
        { leading: !0 }
      )
    },
    ...m
  });
  return r;
};
export {
  R as useForm
};
//# sourceMappingURL=use-form.js.map
