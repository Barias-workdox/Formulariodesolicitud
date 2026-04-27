import { userEvent } from '@testing-library/user-event';

import { render, renderUseTranslation, screen, waitFor } from '@test/test-utils';

import { BlockedFeatureTooltip } from '../../components/blocked-feature-tooltip';

import type { BlockedFeatureTooltipProps } from '../../components/blocked-feature-tooltip';
import type { RenderType } from '@test/test-utils';

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<BlockedFeatureTooltipProps>): RenderType => {
  return render(
    <BlockedFeatureTooltip
      isBlocked
      {...props}
    >
      <div>children</div>
    </BlockedFeatureTooltip>,
  );
};

describe('BlockedFeatureTooltip - tests', () => {
  const { t } = renderUseTranslation();

  it('should render the tooltip correctly', async () => {
    renderComponent();

    await userEvent.hover(screen.getByText('children'));

    await waitFor(() =>
      expect(screen.getByText(t('webdoxAI.chat.blockedFeatureInfo'))).toBeInTheDocument(),
    );
  });

  it('should not render the tooltip when `isBlocked` is `false`', async () => {
    renderComponent({ isBlocked: false });

    await userEvent.hover(screen.getByText('children'));

    expect(screen.queryByText(t('webdoxAI.chat.blockedFeatureInfo'))).not.toBeInTheDocument();
  });
});
