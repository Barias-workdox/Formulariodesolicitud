import { userEvent } from '@testing-library/user-event';

import { ExplainAction } from '@components/webdox-ai/components/webdox-ai-document-viewer-wrapper/components/explain-action';
import { render, renderUseTranslation, screen, testHelpers } from '@test/test-utils';

import type { ExplainActionProps } from '@components/webdox-ai/components/webdox-ai-document-viewer-wrapper/components/explain-action';
import type { RenderType } from '@test/test-utils';

const onExplainMock = testHelpers.fn();

const defaultProps: ExplainActionProps = {
  onExplain: onExplainMock,
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<ExplainActionProps>): RenderType => {
  return render(
    <ExplainAction
      {...defaultProps}
      {...props}
    />,
  );
};

describe('ExplainAction - tests', () => {
  const { t } = renderUseTranslation();

  beforeEach(() => {
    testHelpers.clearAllMocks();
  });

  it('should render correctly', async () => {
    renderComponent();

    const explainButton = screen.getByText(t('general.explain'));

    await userEvent.click(explainButton);

    expect(onExplainMock).toHaveBeenCalled();
  });
});
