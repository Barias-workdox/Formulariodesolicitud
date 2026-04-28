import { MultipleAvatarsProps } from './multiple-avatars.interfaces';
/**
 * MultipleAvatars
 *
 * - Renders a row of avatars with overlap derived from `sizes` (24px: 4px, 32px: 8px)
 * - Shows a +N counter when items exceed maxCount
 * - Supports click callbacks for avatars and the counter
 * - Responsive: forces 24px below 1024px, uses `sizes` on 1024px and up
 * - Special rule: when there are 4 or more avatars, only the first avatar is shown and the rest go into the counter
 */
export declare const MultipleAvatars: ({ avatars, dataTestId, sizes, kind, appearance, maxCount, onAvatarClick, onCounterClick, disabled, }: MultipleAvatarsProps) => JSX.Element | null;
