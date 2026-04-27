/** All file extensions supported */
export type FileType =
  | 'folder' // special case for folders
  | 'doc'
  | 'docx'
  | 'pdf'
  | 'ppt'
  | 'pptx'
  | 'csv'
  | 'xls'
  | 'xlsx'
  | 'png'
  | 'jpg'
  | 'jpeg'
  | 'msg'
  | 'txt'
  | 'zip'
  | 'lawgeex'
  | 'der';

/**
 * Configuration for building a file icon.
 */
export type FileTypeIconConfig = {
  /** This color is used for the background of the icon. */
  primaryColor: string;
  /** This color is used for decorations inside the icon. */
  secondaryColor: string;
  /** Text to be drawn inside the icon. */
  text: string;
};

export type FileTypeIconSize = number;
