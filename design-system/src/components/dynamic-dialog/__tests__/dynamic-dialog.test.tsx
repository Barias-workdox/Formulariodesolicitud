import { render, screen } from '@test/test-utils';

import { DynamicDialog } from '../dynamic-dialog';

import type { DynamicDialogProps } from '../dynamic-dialog';
import type { RenderType } from '@test/test-utils';

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<DynamicDialogProps>): RenderType =>
  render(
    <DynamicDialog {...props}>
      <div>Dynamic Dialog children</div>
    </DynamicDialog>,
  );

beforeEach(() => {
  vi.clearAllMocks();
});

describe('DynamicDialog - tests', () => {
  it('should render children correctly when isOpen is true', () => {
    renderComponent({ isOpen: true });

    expect(screen.getByText('Dynamic Dialog children')).toBeInTheDocument();
  });

  it('should not render children when isOpen is false', () => {
    renderComponent({ isOpen: false });

    expect(screen.queryByText('Dynamic Dialog children')).not.toBeInTheDocument();
  });
});
