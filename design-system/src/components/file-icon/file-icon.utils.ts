import FileTypeDoc from '../../assets/icons/doc.svg';
import FileTypeXlsExcel from '../../assets/icons/excel-icon.svg';
import FileTypeAi from '../../assets/icons/file-type-ai.svg';
import FileTypeEps from '../../assets/icons/file-type-eps.svg';
import FileTypeGif from '../../assets/icons/file-type-gif.svg';
import FileTypeLawgeex from '../../assets/icons/file-type-lawgeex.svg';
import FileTypeMp4 from '../../assets/icons/file-type-mp4.svg';
import FileTypeProcess from '../../assets/icons/file-type-process.svg';
import FileTypePsd from '../../assets/icons/file-type-psd.svg';
import FileTypeTxt from '../../assets/icons/file-type-txt.svg';
import FileTypeFolder from '../../assets/icons/folder.svg';
import FileTypeJpg from '../../assets/icons/jpg.svg';
import FileTypePdf from '../../assets/icons/pdf.svg';
import FileTypePng from '../../assets/icons/png.svg';
import FileTypePptxVariantPowerpoint from '../../assets/icons/powerpoint-icon.svg';
import FileTypePpt from '../../assets/icons/ppt.svg';
import FileTypeDocWord from '../../assets/icons/word-icon.svg';
import FileTypeXls from '../../assets/icons/xls.svg';
import FileTypeZip from '../../assets/icons/zip.svg';

import type { FileType } from './file-icon.interfaces';

/**
 * Returns the requested icon as a pure SVG. `lawgeex` type will render special icon in
 * automatic review step documents
 */
export const fileIconSvgMap: Record<FileType, string> = {
  folder: FileTypeFolder,
  pdf: FileTypePdf,
  doc: FileTypeDoc,
  csv: FileTypeXls,
  docx: FileTypeDoc,
  'doc-variant-1': FileTypeDocWord,
  ppt: FileTypePpt,
  pptx: FileTypePpt,
  'pptx-variant-1': FileTypePptxVariantPowerpoint,
  xls: FileTypeXls,
  'xls-variant-1': FileTypeXlsExcel,
  xlsx: FileTypeXls,
  png: FileTypePng,
  jpg: FileTypeJpg,
  jpeg: FileTypeJpg,
  gif: FileTypeGif,
  psd: FileTypePsd,
  ai: FileTypeAi,
  eps: FileTypeEps,
  mov: FileTypeMp4,
  mkv: FileTypeMp4,
  mp4: FileTypeMp4,
  mp3: FileTypeMp4,
  avi: FileTypeMp4,
  zip: FileTypeZip,
  lawgeex: FileTypeLawgeex,
  merged_document: FileTypeProcess,
  process: FileTypeProcess,
  txt: FileTypeTxt,
};

/** Support for legacy icon css styles in the Portal repository */
export const legacyFileIconsMap = {
  doc: 'word',
  docx: 'word',
  xls: 'excel',
  xlsx: 'excel',
  ppt: 'powerpoint',
  pptx: 'powerpoint',
};

/** Default file type */
export const defaultFileType = 'unknown';
