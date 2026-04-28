import t from "../../assets/icons/doc.svg.js";
import i from "../../assets/icons/excel-icon.svg.js";
import f from "../../assets/icons/file-type-ai.svg.js";
import e from "../../assets/icons/file-type-eps.svg.js";
import h from "../../assets/icons/file-type-gif.svg.js";
import $ from "../../assets/icons/file-type-lawgeex.svg.js";
import p from "../../assets/icons/file-type-mp4.svg.js";
import r from "../../assets/icons/file-type-process.svg.js";
import c from "../../assets/icons/file-type-psd.svg.js";
import x from "../../assets/icons/file-type-txt.svg.js";
import n from "../../assets/icons/folder.svg.js";
import m from "../../assets/icons/jpg.svg.js";
import d from "../../assets/icons/pdf.svg.js";
import l from "../../assets/icons/png.svg.js";
import s from "../../assets/icons/powerpoint-icon.svg.js";
import a from "../../assets/icons/ppt.svg.js";
import g from "../../assets/icons/word-icon.svg.js";
import o from "../../assets/icons/xls.svg.js";
import v from "../../assets/icons/zip.svg.js";
const G = {
  folder: n,
  pdf: d,
  doc: t,
  csv: o,
  docx: t,
  "doc-variant-1": g,
  ppt: a,
  pptx: a,
  "pptx-variant-1": s,
  xls: o,
  "xls-variant-1": i,
  xlsx: o,
  png: l,
  jpg: m,
  jpeg: m,
  gif: h,
  psd: c,
  ai: f,
  eps: e,
  mov: p,
  mkv: p,
  mp4: p,
  mp3: p,
  avi: p,
  zip: v,
  lawgeex: $,
  merged_document: r,
  process: r,
  txt: x
}, H = {
  doc: "word",
  docx: "word",
  xls: "excel",
  xlsx: "excel",
  ppt: "powerpoint",
  pptx: "powerpoint"
}, J = "unknown";
export {
  J as defaultFileType,
  G as fileIconSvgMap,
  H as legacyFileIconsMap
};
//# sourceMappingURL=file-icon.utils.js.map
