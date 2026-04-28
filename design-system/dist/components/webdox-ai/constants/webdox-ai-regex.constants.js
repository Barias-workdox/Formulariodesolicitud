const e = /\{\{\{(.*?)\}\}\}/gs, s = /['“”"]/g, _ = /index_id/gs, E = new RegExp(
  `\\{\\s*${s.source}?${_.source}${s.source}?\\s*:\\s*(\\d+|null)\\s*\\}`,
  "g"
), o = new RegExp(
  `\\[\\s*(${E.source})(?:\\s*,\\s*${E.source})*\\s*\\]`,
  "gs"
);
export {
  s as ALL_QUOTES_VARIANTS,
  _ as INDEX_ID_KEY_REGEX,
  e as WEBDOX_AI_PAGE_REGEX,
  o as WEBDOX_AI_RANGES_REGEX,
  E as WEBDOX_AI_RANGE_REGEX
};
//# sourceMappingURL=webdox-ai-regex.constants.js.map
