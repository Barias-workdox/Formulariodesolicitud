import { themedStyled } from '@themes/utilities';

export const MultipleAvatarsRoot = themedStyled('div', ({ $theme }) => ({
  display: 'inline-flex',
  alignItems: 'flex-start',
  padding: 0,
  margin: 0,
  position: 'relative',
  verticalAlign: 'middle',
  color: $theme.colors.neutral,
}));

/**
 * BaseUI tooltips rely on a DOM element (or a ref-forwarding component) as the trigger.
 * Since `Tag` doesn't forward refs, we wrap it with this anchor element.
 */
export const MultipleAvatarsTooltipAnchor = themedStyled<'button', { $isClickable: boolean }>(
  'button',
  ({ $isClickable }) => ({
    display: 'inline-flex',
    margin: 0,
    padding: 0,
    border: 'none',
    background: 'transparent',
    cursor: $isClickable ? 'pointer' : 'default',
  }),
);

export const MultipleAvatarItemWrapper = themedStyled<
  'div',
  { $overlapPx: number; $zIndex: number; $isFirst: boolean }
>('div', ({ $overlapPx, $zIndex, $isFirst }) => ({
  display: 'inline-flex',
  alignItems: 'flex-start',
  position: 'relative',
  zIndex: $zIndex,
  marginLeft: $isFirst ? 0 : `-${Math.max(0, $overlapPx)}px`,
}));
