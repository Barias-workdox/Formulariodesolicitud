import { Chat, TrashCan } from '@carbon/icons-react';
import { userEvent } from '@testing-library/user-event';

import { CollapsibleBox, Panel } from '@components/collapsible-box/next';
import { render, screen, testHelpers } from '@test/test-utils';

import type { CollapsibleBoxProps } from '@components/collapsible-box/next';
import type { RenderType } from '@test/test-utils';

const onChangeMock = testHelpers.fn();

const defaultProps: CollapsibleBoxProps = {
  onChange: onChangeMock,
};

const panels = ['panel-1', 'panel-2'];

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<CollapsibleBoxProps>): RenderType => {
  return render(
    <CollapsibleBox
      {...defaultProps}
      {...props}
    >
      {panels.map((panel) => (
        <Panel
          key={panel}
          startEnhancer={
            <Panel.BackgroundIcon
              Icon={Chat}
              shape="square"
              data-testid={`${panel}--start-enhancer`}
            />
          }
          endEnhancer={
            <Panel.IconButton
              kind="tertiary"
              data-testid={`${panel}--end-enhancer`}
            >
              <TrashCan />
            </Panel.IconButton>
          }
          title={
            <Panel.CompoundTitle>
              <Panel.Title collapsedTitle={`${panel}--collapsed-title`}>{panel}--title</Panel.Title>
              <Panel.Subtitle collapsedSubtitle={`${panel}--collapsed-subtitle`}>
                {panel}--subtitle
              </Panel.Subtitle>
            </Panel.CompoundTitle>
          }
        >
          {panel}--content
        </Panel>
      ))}
    </CollapsibleBox>,
  );
};

describe('CollapsibleBox - tests', () => {
  describe.each(panels)('%s', (panel) => {
    it('should render the component successfully when is not expanded', async () => {
      renderComponent();

      expect(screen.getByText(`${panel}--title`)).toBeInTheDocument();
      expect(screen.getByText(`${panel}--subtitle`)).toBeInTheDocument();
      expect(screen.getByTestId(`${panel}--start-enhancer--icon`)).toBeInTheDocument();
      expect(screen.getByTestId(`${panel}--end-enhancer`)).toBeInTheDocument();
      expect(screen.queryByText(`${panel}--content`)).not.toBeInTheDocument();
    });

    it('should render the component successfully when is expanded', async () => {
      renderComponent();

      await userEvent.click(screen.getByText(`${panel}--title`));

      expect(screen.getByText(`${panel}--content`)).toBeInTheDocument();
      expect(screen.getByText(`${panel}--collapsed-title`)).toBeInTheDocument();
      expect(screen.getByText(`${panel}--collapsed-subtitle`)).toBeInTheDocument();
    });
  });
});
