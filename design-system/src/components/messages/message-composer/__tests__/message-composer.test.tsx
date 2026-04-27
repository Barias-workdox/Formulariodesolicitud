import { userEvent } from '@testing-library/user-event';

import { mentionsMock } from '@components/messages/__mocks__/mentions.mock';
import { render, renderUseTranslation, screen, testHelpers, waitFor } from '@test/test-utils';

import { MessageComposer } from '../message-composer';
import { mentionCharacter } from '../user-mention';

import type { MessageComposerProps } from '../message-composer.interfaces';
import type { RenderType } from '@test/test-utils';

import '@test/__mocks__/use-virtualizer.mock';

const baseDataTestId = 'message-composer';
const textMock = 'Ad sit Lorem incididunt do ut sit enim.';
const textWithHTMLContent = 'Ad sit Lorem incididunt do ut sit enim.<div></div><br/>';

const onCancelMock = testHelpers.fn();
const onCreateMock = testHelpers.fn();
const onUpdateMock = testHelpers.fn();

const defaultProps: MessageComposerProps = {
  'data-testid': baseDataTestId,
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<MessageComposerProps>): RenderType =>
  render(
    <MessageComposer
      {...defaultProps}
      {...props}
    />,
  );

beforeEach(() => {
  testHelpers.resetAllMocks();
});

describe('MessageComposer - test', () => {
  const { t } = renderUseTranslation();

  it('should render correctly', () => {
    renderComponent();

    expect(screen.getByTestId(`${baseDataTestId}__textarea`)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(t('general.writeMessage'))).toBeInTheDocument();
    expect(screen.getByText(t('general.send'))).toBeInTheDocument();
  });

  it('should render correctly with a default value', () => {
    renderComponent({ value: textMock });

    expect(screen.getByPlaceholderText(t('general.writeMessage'))).toHaveTextContent(textMock);
  });

  it('should execute `onCancel` correctly', async () => {
    renderComponent({ onCancel: onCancelMock, isEditing: true });

    await userEvent.click(screen.getByText(t('general.cancel')));

    expect(onCancelMock).toHaveBeenCalled();
  });

  it('should not generate an error when `onCancel` is undefined', async () => {
    renderComponent({ onCancel: undefined, isEditing: true });

    await userEvent.click(screen.getByText(t('general.cancel')));

    expect(onCancelMock).not.toHaveBeenCalled();
  });

  it('should execute `onCreate` correctly when send button is clicked', async () => {
    renderComponent({ onCreate: onCreateMock });

    const textarea = screen.getByPlaceholderText(t('general.writeMessage'));

    await userEvent.type(textarea, textMock);
    await userEvent.click(screen.getByText(t('general.send')));

    expect(onCreateMock).toHaveBeenCalledWith(textMock);
  });

  it('should execute `onCreate` correctly when Enter key is pressed', async () => {
    renderComponent({ onCreate: onCreateMock });

    const textarea = screen.getByPlaceholderText(t('general.writeMessage'));

    await userEvent.click(textarea);
    await userEvent.type(textarea, textMock);
    await userEvent.type(textarea, '{enter}');

    expect(onCreateMock).toHaveBeenCalledWith(textMock);
  });

  it('should not generate an error when `onCreate` is undefined', async () => {
    renderComponent({ onCreate: undefined });

    const textarea = screen.getByPlaceholderText(t('general.writeMessage'));

    await userEvent.type(textarea, textMock);
    await userEvent.click(screen.getByText(t('general.send')));

    expect(onCreateMock).not.toHaveBeenCalledWith(textMock);
  });

  it('should execute `onUpdate` correctly', async () => {
    renderComponent({ onUpdate: onUpdateMock, isEditing: true });

    const textarea = screen.getByPlaceholderText(t('general.writeMessage'));

    await userEvent.type(textarea, textMock);
    await userEvent.click(screen.getByText(t('general.save')));

    expect(onUpdateMock).toHaveBeenCalledWith(textMock);
  });

  it('should not generate an error when `onUpdate` is undefined', async () => {
    renderComponent({ onUpdate: undefined, isEditing: true });

    const textarea = screen.getByPlaceholderText(t('general.writeMessage'));

    await userEvent.type(textarea, textMock);
    await userEvent.click(screen.getByText(t('general.save')));

    expect(onUpdateMock).not.toHaveBeenCalledWith(textMock);
  });

  it('should execute `onPaste` callback correctly', async () => {
    renderComponent();

    const textarea = screen.getByPlaceholderText(t('general.writeMessage'));

    textarea.focus();
    await userEvent.paste(textWithHTMLContent);

    expect(screen.getByPlaceholderText(t('general.writeMessage'))).toHaveTextContent(textMock);
  });

  it('should not add any characters when text content is on the characters limit', async () => {
    renderComponent({ maxCharacters: 5 });

    const textarea = screen.getByPlaceholderText(t('general.writeMessage'));

    await userEvent.type(textarea, '123{up}45{down}678');

    expect(screen.getByPlaceholderText(t('general.writeMessage'))).toHaveTextContent('12345');
  });

  it('should open mentions popover when mention character is pressed', async () => {
    renderComponent({ isMentionable: true });

    const textarea = screen.getByPlaceholderText(t('general.writeMessage'));

    await userEvent.type(textarea, mentionCharacter);

    expect(screen.getByPlaceholderText(t('general.search'))).toBeInTheDocument();
  });

  it('should close mentions popover when Escape key is pressed', async () => {
    renderComponent({ isMentionable: true });

    const textarea = screen.getByPlaceholderText(t('general.writeMessage'));

    await userEvent.type(textarea, mentionCharacter);

    const searchInput = screen.getByPlaceholderText(t('general.search'));

    await userEvent.click(searchInput);
    await userEvent.keyboard('{Escape}');

    await waitFor(() =>
      expect(screen.queryByPlaceholderText(t('general.search'))).not.toBeInTheDocument(),
    );
  });

  it('should add user mentions correctly', async () => {
    const [{ name }] = mentionsMock;

    renderComponent({ isMentionable: true, users: mentionsMock });

    const textarea = screen.getByPlaceholderText(t('general.writeMessage'));

    await userEvent.type(textarea, mentionCharacter);

    const userOption = screen.getByText(name);

    await userEvent.click(userOption);

    await waitFor(() => {
      expect(screen.queryByPlaceholderText(t('general.search'))).not.toBeInTheDocument();
      expect(screen.getByPlaceholderText(t('general.writeMessage'))).toHaveTextContent(
        `${mentionCharacter}${name}`,
      );
    });
  });
});
