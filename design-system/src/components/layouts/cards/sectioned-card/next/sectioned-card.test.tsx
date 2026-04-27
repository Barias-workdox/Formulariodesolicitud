import { render, screen } from '@test/test-utils';

import { SectionedCard } from './sectioned-card.container';

import type { SectionedCardProps } from './sectioned-card.interfaces';
import type { RenderType } from '@test/test-utils';

const defaultHeaderTitle = 'Sectioned Card Header Title';
const defaultBodyText = 'Sectioned card body content';
const defaultFooterActionText = 'Footer Action';

const renderComponent = (props?: Partial<SectionedCardProps>): RenderType => {
  const defaultProps: SectionedCardProps = {
    header: <SectionedCard.Header title={defaultHeaderTitle} />,
    body: <SectionedCard.Body>{defaultBodyText}</SectionedCard.Body>,
    footer: (
      <SectionedCard.Footer
        actions={
          <SectionedCard.Button
            kind="brand"
            appearance="filled"
          >
            {defaultFooterActionText}
          </SectionedCard.Button>
        }
      />
    ),
    hasElevation: false,
    hasBorderHeader: true,
    size: 'small',
    cornerSize: 'small',
    dataTestId: 'sectioned-card',
  };

  return render(
    <SectionedCard
      {...defaultProps}
      {...props}
    />,
  );
};

describe('SectionedCard (next)', () => {
  it('renders header, body and footer when provided with allowed components', () => {
    renderComponent();

    expect(screen.getByText(defaultHeaderTitle)).toBeInTheDocument();
    expect(screen.getByText(defaultBodyText)).toBeInTheDocument();
    expect(screen.getByText(defaultFooterActionText)).toBeInTheDocument();
  });

  it('does not render body when header is SectionedCard.HeaderTabs', () => {
    const headerBodyText = 'Header tab body content';
    const cardBodyText = 'Card body content that should not render';

    renderComponent({
      header: (
        <SectionedCard.HeaderTabs
          tabs={
            <>
              <SectionedCard.HeaderTab title="Tab title">{headerBodyText}</SectionedCard.HeaderTab>
              <SectionedCard.HeaderTab title="Second tab" />
            </>
          }
        />
      ),
      body: <div>{cardBodyText}</div>,
    });

    expect(screen.getByText(headerBodyText)).toBeInTheDocument();
    expect(screen.queryByText(cardBodyText)).not.toBeInTheDocument();
  });

  it('does not render header when element is not allowed', () => {
    const invalidHeaderText = 'Invalid header element';

    renderComponent({ header: <div>{invalidHeaderText}</div> });

    expect(screen.queryByText(invalidHeaderText)).not.toBeInTheDocument();
    // Body and footer should still render
    expect(screen.getByText(defaultBodyText)).toBeInTheDocument();
    expect(screen.getByText(defaultFooterActionText)).toBeInTheDocument();
  });

  it('does not render footer when element is not allowed', () => {
    const invalidFooterText = 'Invalid footer element';

    renderComponent({ footer: <div>{invalidFooterText}</div> });

    expect(screen.queryByText(invalidFooterText)).not.toBeInTheDocument();
    // Header and body should still render
    expect(screen.getByText(defaultHeaderTitle)).toBeInTheDocument();
    expect(screen.getByText(defaultBodyText)).toBeInTheDocument();
  });
});
