import { LINK_STRICTNESS_MODES as i, LINK_VALIDATION_REGEX as S } from "../constants/link-validation.constants.js";
const l = (n, t = i.SOFT_MODE) => !n.match(S[t]), E = ({
  schema: n,
  containsLinkErrorMessage: t,
  strictnessValidationMode: o = i.SOFT_MODE
}) => n.string().test("no-link-validation", t, (a) => l(a, o));
export {
  E as linkValidationSchema,
  l as noLinkValidationRule
};
//# sourceMappingURL=link.validation.js.map
