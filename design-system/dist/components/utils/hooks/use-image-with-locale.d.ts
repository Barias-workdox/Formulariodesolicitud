/**
 * Hook to get an image path with locale.
 * The image path will be constructed by its name and the locale.
 * The locale value is obtained from the LocaleProvider.
 *
 * @example
 * Here's a simple example:
 * ```
 * // If the locale is `en`,
 * // it returns "path-to-img_en.svg":
 * useImageWithLocale('path-to-img.svg')
 * ```
 */
export declare const useImageWithLocale: (imageName: string) => string;
