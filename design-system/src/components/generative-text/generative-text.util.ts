/** Given an array of strings, get the text from the start to the supplied index */
export const getPartialText = (text: string[], index: number): string[] => text.slice(0, index + 1);
