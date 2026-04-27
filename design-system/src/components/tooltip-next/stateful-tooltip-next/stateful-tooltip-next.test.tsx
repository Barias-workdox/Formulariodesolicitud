import { userEvent } from '@testing-library/user-event';

import { render, screen } from '@test/test-utils';

import { StatefulTooltipNext } from './stateful-tooltip-next';

import type { StatefulTooltipNextProps } from './stateful-tooltip-next';

const buttonText = 'hello world';
const tooltipContent = 'lorem ipsum';

const renderComponent = ({
  content = tooltipContent,
  ...rest
}: Partial<StatefulTooltipNextProps> = {}) =>
  render(
    <StatefulTooltipNext
      content={content}
      {...rest}
    >
      <button>{buttonText}</button>
    </StatefulTooltipNext>,
  );

describe('stateful-tooltip-next', () => {
  it('basic render', async () => {
    renderComponent();

    expect(screen.queryByText(tooltipContent)).not.toBeInTheDocument();

    await userEvent.hover(screen.getByText(buttonText));

    expect(await screen.findByText(tooltipContent)).toBeInTheDocument();
  });
});
