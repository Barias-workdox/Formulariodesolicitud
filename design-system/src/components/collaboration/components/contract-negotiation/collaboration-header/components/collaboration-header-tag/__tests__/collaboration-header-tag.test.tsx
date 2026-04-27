import { render, renderUseTranslation, screen } from '@test/test-utils';

import { CollaborationHeaderTag } from '../collaboration-header-tag';

import type { CollaborationHeaderTagProps } from '../collaboration-header-tag';
import type { RenderType } from '@test/test-utils';

const { t } = renderUseTranslation();

const defaultProps: CollaborationHeaderTagProps = {
  status: 'active',
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<CollaborationHeaderTagProps>): RenderType => {
  return render(
    <CollaborationHeaderTag
      {...defaultProps}
      {...props}
    />,
  );
};

describe('CollaborationHeaderTag - tests', () => {
  it('should render the component with the status `active` successfully', () => {
    renderComponent();

    expect(screen.getByText(t('collaborationDetails.status.active'))).toBeInTheDocument();
  });

  it('should render the component with the status `canceled` successfully', () => {
    renderComponent({ status: 'canceled' });

    expect(screen.getByText(t('collaborationDetails.status.canceled'))).toBeInTheDocument();
  });

  it('should render the component with the status `finished` successfully', () => {
    renderComponent({ status: 'finished' });

    expect(screen.getByText(t('collaborationDetails.status.finished'))).toBeInTheDocument();
  });
});
