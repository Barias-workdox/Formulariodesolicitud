import { useState } from 'react';

import { userEvent } from '@testing-library/user-event';

import { render, renderUseTranslation, screen, testHelpers } from '@test/test-utils';

import { WebdoxAIDynamicDialog } from '../../components/webdox-ai-dynamic-dialog';

import type { WebdoxAIDynamicDialogProps } from '../../components/webdox-ai-dynamic-dialog';

// Mock useResponsiveProps to ensure it returns desktop mode (not mobile)
vi.mock('@utils/use-responsive-props.util', () => ({
  useResponsiveProps: () => false,
}));

const webdoxAIDynamicDialogType = ['legalWhisper', 'brainCompanion'] as const;

const baseDataTestId = 'webdox-ai-dynamic-dialog';

const onCloseMock = testHelpers.fn();
const onToggleExpandMock = testHelpers.fn();

const defaultProps: WebdoxAIDynamicDialogProps = {
  dataTestId: baseDataTestId,
  type: 'legalWhisper',
  isOpen: true,
  onClose: onCloseMock,
  onToggleExpand: onToggleExpandMock,
};

const renderComponent = (props?: Partial<WebdoxAIDynamicDialogProps>) => {
  return render(
    <WebdoxAIDynamicDialog
      {...defaultProps}
      {...props}
    >
      <div>Content</div>
    </WebdoxAIDynamicDialog>,
  );
};

// Controlled component wrapper for testing fullViewport state changes
const ControlledComponent = ({
  initialFullViewport = false,
  ...props
}: Partial<WebdoxAIDynamicDialogProps> & { initialFullViewport?: boolean }) => {
  const [fullViewport, setFullViewport] = useState(initialFullViewport);

  const handleToggleExpand = (newValue: boolean) => {
    setFullViewport(newValue);
    onToggleExpandMock(newValue);
  };

  return (
    <WebdoxAIDynamicDialog
      {...defaultProps}
      {...props}
      fullViewport={fullViewport}
      onToggleExpand={handleToggleExpand}
    >
      <div>Content</div>
    </WebdoxAIDynamicDialog>
  );
};

beforeEach(() => {
  vi.clearAllMocks();
});

describe('WebdoxAIDynamicDialog - tests', () => {
  const { t } = renderUseTranslation();

  it.each(webdoxAIDynamicDialogType)(
    'should render the component correctly when type is `%s`',
    (type) => {
      renderComponent({ type });

      expect(screen.getByText('Content')).toBeInTheDocument();
      expect(screen.getByText(t(`webdoxAI.assistantOptions.${type}`))).toBeInTheDocument();
    },
  );

  it('should execute `onClose` function correctly', async () => {
    renderComponent();

    // Get all buttons - the last one should be the close button
    const buttons = screen.getAllByRole('button');
    const closeButton = buttons[buttons.length - 1];

    await userEvent.click(closeButton);

    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  it('should execute `onToggleExpand` function correctly when fullViewport changes', async () => {
    render(<ControlledComponent initialFullViewport={false} />);

    // The expand button should be the first button (expand/minimize), before close
    const buttons = screen.getAllByRole('button');
    const [expandButton] = buttons;

    await userEvent.click(expandButton);

    // onFullViewportChange is called with a boolean parameter (true when expanding)
    expect(onToggleExpandMock).toHaveBeenCalledWith(true);
  });

  it('should execute `onToggleExpand` function correctly when fullViewport is true', async () => {
    render(<ControlledComponent initialFullViewport={true} />);

    // The minimize button should be the first button, before close
    const buttons = screen.getAllByRole('button');
    const [minimizeButton] = buttons;

    await userEvent.click(minimizeButton);

    // onFullViewportChange is called with a boolean parameter (false when minimizing)
    expect(onToggleExpandMock).toHaveBeenCalledWith(false);
  });
});
