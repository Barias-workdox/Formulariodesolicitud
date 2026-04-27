/** Remove the parenthesis added to identify where divide the text */
export const sanitizeMessageText = (message: string[]): string =>
  message
    .join('')
    .replace(/\s/g, ' ')
    .replace(/\((?=<span)|(?<=span>)\)|\((?=\w+<)|(?<=>@)\)/g, '');
