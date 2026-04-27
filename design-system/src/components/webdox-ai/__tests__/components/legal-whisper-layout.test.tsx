import { render, screen } from '@test/test-utils';

import { LegalWhisperLayout } from '../../components';

import type { LegalWhisperLayoutProps } from '../../components';
import type { RenderType } from 'test/test-utils';

const childrenText = 'Children Text';
const rightColumnContentText = 'Right Column Content Text';
const leftColumnContentText = 'Left Column Content Text';

const defaultProps: Omit<LegalWhisperLayoutProps, 'children'> = {
  isExpanded: true,
  showRightColumn: true,
  rightColumnContent: rightColumnContentText,
  leftColumnContent: leftColumnContentText,
};

const renderComponent = (props?: Partial<LegalWhisperLayoutProps>): RenderType =>
  render(
    <LegalWhisperLayout
      {...defaultProps}
      {...props}
    >
      <div>{childrenText}</div>
    </LegalWhisperLayout>,
  );

describe('LegalWhisperLayout - tests', () => {
  it('should render the component correctly', async () => {
    renderComponent();

    expect(screen.getByText(childrenText)).toBeInTheDocument();
    expect(screen.getByText(rightColumnContentText)).toBeInTheDocument();
    expect(screen.getByText(leftColumnContentText)).toBeInTheDocument();
  });
});
