import { Link } from '@components/link';
import { Text } from '@components/text';
import { spacing } from '@tokens/spacing';

import { LinkWrapper, TitleWrapper, ToasterWrapper } from './toaster.styles';

import type { ToastBodyProps, KindType } from './toast.interface';

/**
 * Get ARIA attributes based on toast kind for accessibility
 */
function getAriaAttributes(kind?: KindType): {
  role: 'status' | 'alert';
  'aria-live': 'polite' | 'assertive';
} {
  // Critical toasts (error/warning) use alert role with assertive live region
  const isCritical = kind === 'negative' || kind === 'warning';

  return {
    role: isCritical ? 'alert' : 'status',
    'aria-live': isCritical ? 'assertive' : 'polite',
  };
}

/**
 * Style of the toaster body based on its kind with responsive support
 */
export function ToastBody({
  title,
  body,
  kind,
  type: _type,
  link,
  dataTestId,
}: ToastBodyProps): JSX.Element {
  const hasLink = !!link;

  // Get ARIA attributes for accessibility based on toast kind
  const ariaAttributes = getAriaAttributes(kind);

  return (
    <ToasterWrapper
      data-testid={dataTestId}
      role={ariaAttributes.role}
      aria-live={ariaAttributes['aria-live']}
    >
      <TitleWrapper $hasLink={hasLink}>
        <Text
          variant="bodySmall"
          fontWeight="700"
          margin={0}
          color="textBase"
        >
          {title}
        </Text>

        {body && (
          <Text
            variant="bodySmall"
            margin={title ? `${spacing.spacing2xs} 0 0 0` : '0'}
            color="textBase"
          >
            {body}
          </Text>
        )}
      </TitleWrapper>

      {hasLink && (
        <LinkWrapper>
          <Link
            href={link.url}
            kind="contrast"
            size="small"
            dataTestId={`${dataTestId}--link`}
          >
            {link.text}
          </Link>
        </LinkWrapper>
      )}
    </ToasterWrapper>
  );
}
