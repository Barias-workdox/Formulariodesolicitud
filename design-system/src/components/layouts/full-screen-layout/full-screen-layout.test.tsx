import { render, screen } from '@test/test-utils';

import {
  FullScreenBody,
  FullScreenFooter,
  FullScreenHeader,
  FullScreenLayout,
} from './full-screen-layout';

import type { RenderType } from '@test/test-utils';

const mockContentText = 'Example content';
const mockHeaderText = 'Example header';
const mockFooterText = 'Example footer';

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (): RenderType => {
  return render(
    <FullScreenLayout>
      <FullScreenHeader
        startEnhancer={<>startEnhancer</>}
        endEnhancer={<>EndEnhancer</>}
      >
        {mockHeaderText}
      </FullScreenHeader>
      <FullScreenBody>{mockContentText}</FullScreenBody>
      <FullScreenFooter>{mockFooterText}</FullScreenFooter>
    </FullScreenLayout>,
  );
};

describe('FullScreenLayout - tests', () => {
  it('should render header, body and footer correctly', () => {
    renderComponent();

    expect(screen.getByText(mockHeaderText)).toBeInTheDocument();
    expect(screen.getByText(mockContentText)).toBeInTheDocument();
    expect(screen.getByText(mockFooterText)).toBeInTheDocument();
  });
});
