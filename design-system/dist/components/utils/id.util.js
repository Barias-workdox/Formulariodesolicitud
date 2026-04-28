import { nanoid as t } from "nanoid";
const n = "temp_", s = (e = n) => `${e}_${t()}`, d = (e, o = n) => e.includes(o);
export {
  n as TEMP_PREFIX,
  d as checkIsTempId,
  s as getUniqueId
};
//# sourceMappingURL=id.util.js.map
