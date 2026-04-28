import { EMAIL_REGEX as r } from "../constants/email-validation.constants.js";
const e = (t) => r.test(t), o = (t) => t != null && t.length ? t.every(e) : !0;
export {
  e as validateEmail,
  o as validateEmails
};
//# sourceMappingURL=email.validation.js.map
