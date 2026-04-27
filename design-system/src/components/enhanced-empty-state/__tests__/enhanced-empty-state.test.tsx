import { DocumentAdd } from '@carbon/icons-react';
import { userEvent } from '@testing-library/user-event';

import { mockBreakpoints } from '@test/__mocks__/breakpoints.mock';
import { render, screen, testHelpers } from '@test/test-utils';

import { EnhancedEmptyState } from '../enhanced-empty-state';

import type { RenderType } from '@test/test-utils';

const baseDataTestId = 'enhanced-empty-state';

const titleMock = 'Mollit occaecat dolor amet quis est voluptate do.';
const imageSrcMock = 'image-example';
const paragraphMock = 'Aliquip fugiat eiusmod est quis duis pariatur elit id nulla.';
const itemMock =
  'Amet esse veniam ipsum quis labore veniam excepteur amet cupidatat ullamco ad ex veniam excepteur.';
const linkPathnameMock = 'example.com';
const linkTextMock = 'Lorem pariatur sunt aute ullamco sit consequat cupidatat.';
const buttonPrimaryTextMock = 'Mollit amet';

const onClickMock = testHelpers.fn();

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (): RenderType => {
  return render(
    <EnhancedEmptyState
      dataTestId={baseDataTestId}
      imageSrc={imageSrcMock}
    >
      <EnhancedEmptyState.Title>{titleMock}</EnhancedEmptyState.Title>
      <EnhancedEmptyState.Content>
        <EnhancedEmptyState.Paragraph>{paragraphMock}</EnhancedEmptyState.Paragraph>
        <EnhancedEmptyState.List>
          <EnhancedEmptyState.ListItem>{itemMock}</EnhancedEmptyState.ListItem>
        </EnhancedEmptyState.List>
      </EnhancedEmptyState.Content>
      <EnhancedEmptyState.Link
        to={{ pathname: linkPathnameMock }}
        target="_blank"
      >
        {linkTextMock}
      </EnhancedEmptyState.Link>
      <EnhancedEmptyState.PrimaryButton
        data-testid={`${baseDataTestId}--primary-button`}
        onClick={onClickMock}
        startEnhancer={<DocumentAdd data-testid={`${baseDataTestId}--document-add-icon`} />}
      >
        {buttonPrimaryTextMock}
      </EnhancedEmptyState.PrimaryButton>
    </EnhancedEmptyState>,
  );
};

beforeAll(() => {
  mockBreakpoints('small');
});

describe('EnhancedEmptyState - tests', () => {
  test('should render the component correctly', () => {
    renderComponent();

    const imageElement = screen.getByTestId(`${baseDataTestId}--image`);
    const linkElement = screen.getByText(linkTextMock);

    expect(imageElement).toHaveAttribute('src', imageSrcMock);
    expect(screen.getByText(titleMock)).toBeInTheDocument();
    expect(screen.getByText(paragraphMock)).toBeInTheDocument();
    expect(screen.getByText(itemMock)).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', linkPathnameMock);
    expect(screen.getAllByText(buttonPrimaryTextMock).length).toBe(2);
    expect(screen.getAllByTestId(`${baseDataTestId}--document-add-icon`).length).toBe(2);
  });

  test('should execute `onClick` function correctly', async () => {
    renderComponent();

    const [mobileButton, desktopButton] = screen.getAllByText(buttonPrimaryTextMock);

    await userEvent.click(mobileButton);
    await userEvent.click(desktopButton);

    expect(onClickMock).toHaveBeenCalledTimes(2);
  });
});
