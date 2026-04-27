import { DEFAULT_SIZES } from '../constants/file.constants';

/**
 * Check if the provided file type should be accepted by the input with accept attribute.
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/accept
 *
 * Source {@link https://github.com/react-dropzone/attr-accept/blob/master/src/index.js}
 * Inspired by https://github.com/enyo/dropzone
 */
export const isFiletypeAccepted = (file: File, acceptedFiles: string | string[]): boolean => {
  if (file && acceptedFiles) {
    const acceptedFilesArray = Array.isArray(acceptedFiles)
      ? acceptedFiles
      : acceptedFiles.split(',');
    const fileName = file.name || '';
    const mimeType = (file.type || '').toLowerCase();
    const baseMimeType = mimeType.replace(/\/.*$/, '');

    return acceptedFilesArray.some((type) => {
      const validType = type.trim().toLowerCase();
      if (validType.charAt(0) === '.') {
        return fileName.toLowerCase().endsWith(validType);
      } else if (validType.endsWith('/*')) {
        // This is something like a image/* mime type
        return baseMimeType === validType.replace(/\/.*$/, '');
      }

      return mimeType === validType;
    });
  }

  return true;
};

/**
 * Converts bytes into various units of memory
 */
export function bytesToShortNotation(bytes: number, decimals = 2): string {
  // Kilobyte representation in bytes
  const base = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const exponent = Math.floor(Math.log(bytes) / Math.log(base));

  return `${parseFloat((bytes / Math.pow(base, exponent)).toFixed(dm))} ${DEFAULT_SIZES[exponent]}`;
}
