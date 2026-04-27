import type { FileType, FileTypeIconConfig } from './file-type-icon.interfaces';

export const DEFAULT_ICON_SIZE = 24;

/**
 * Configuration object mapping file extensions to their respective icon styles.
 *
 * @remarks
 * The colors used here are not encapsulated within the theme and are used specifically for this scenario.
 */
export const FILE_ICON_CONFIG: Record<FileType, FileTypeIconConfig> = {
  csv: {
    primaryColor: '#48B367',
    secondaryColor: '#158034',
    text: 'CSV',
  },
  der: {
    primaryColor: '#3C4662',
    secondaryColor: '#0B1329',
    text: 'DER',
  },
  doc: {
    primaryColor: '#669AFF',
    secondaryColor: '#3379FF',
    text: 'DOC',
  },
  docx: {
    primaryColor: '#669AFF',
    secondaryColor: '#3379FF',
    text: 'DOC',
  },
  jpg: {
    primaryColor: '#A8ADAF',
    secondaryColor: '#7D8488',
    text: 'JPG',
  },
  jpeg: {
    primaryColor: '#A8ADAF',
    secondaryColor: '#7D8488',
    text: 'JPG',
  },
  lawgeex: {
    primaryColor: '#3C4662',
    secondaryColor: '#0B1329',
    text: '{ }',
  },
  msg: {
    primaryColor: '#A8ADAF',
    secondaryColor: '#7D8488',
    text: 'MSG',
  },
  pdf: {
    primaryColor: '#E25C5C',
    secondaryColor: '#C92D2D',
    text: 'PDF',
  },
  png: {
    primaryColor: '#A8ADAF',
    secondaryColor: '#7D8488',
    text: 'PNG',
  },
  ppt: {
    primaryColor: '#FD7043',
    secondaryColor: '#CF431E',
    text: 'PPT',
  },
  pptx: {
    primaryColor: '#FD7043',
    secondaryColor: '#CF431E',
    text: 'PPT',
  },
  txt: {
    primaryColor: '#A8ADAF',
    secondaryColor: '#7D8488',
    text: 'TXT',
  },
  xls: {
    primaryColor: '#48B367',
    secondaryColor: '#158034',
    text: 'XLS',
  },
  xlsx: {
    primaryColor: '#48B367',
    secondaryColor: '#158034',
    text: 'XLS',
  },
  zip: {
    primaryColor: '#F3BC00',
    secondaryColor: '#C29600',
    text: 'ZIP',
  },
};
