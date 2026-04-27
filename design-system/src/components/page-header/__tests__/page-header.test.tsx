import { useThousandSeparatorLocale } from '@hooks/use-thousand-separator-locale';
import { mockUseMedia } from '@test/__mocks__/use-media.mock';
import { render, renderHook, renderUseTranslation, screen } from '@test/test-utils';

import { PageHeader } from '../page-header';

import type { RenderType } from '@test/test-utils';

const titleMock = 'Officia velit sint';
const buttonContentMock = 'Quis Lorem enim commodo';
const counterMock = 2;

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (): RenderType => {
  return render(
    <PageHeader
      title={titleMock}
      endEnhancer={
        <PageHeader.EndEnhancerWrapper>
          <PageHeader.Search
            value=""
            onChange={console.log}
            onSelect={console.log}
            items={['item 1 ', 'item 2']}
          />
          <PageHeader.PrimaryButton>{buttonContentMock}</PageHeader.PrimaryButton>
        </PageHeader.EndEnhancerWrapper>
      }
      toolbar={<PageHeader.Toolbar itemsCounter={counterMock} />}
    />,
  );
};

beforeAll(() => {
  mockUseMedia();
});

describe('PageHeader - tests', () => {
  const { t } = renderUseTranslation();

  test('should render the component correctly', () => {
    renderComponent();

    const {
      result: { current: counterWithSeparator },
    } = renderHook(() => useThousandSeparatorLocale(counterMock));

    expect(screen.getByText(titleMock)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(t('general.search'))).toBeInTheDocument();
    expect(screen.getByText(buttonContentMock)).toBeInTheDocument();
    expect(
      screen.getByText(t('general.items', { count: counterMock, data: counterWithSeparator })),
    ).toBeInTheDocument();
  });
});
