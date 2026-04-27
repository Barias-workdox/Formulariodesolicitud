import { userEvent } from '@testing-library/user-event';

import { render, renderUseTranslation, screen, testHelpers, waitFor } from '@test/test-utils';

import { AnswerReferences } from '../../components/chat/chat-messages/components/chat-bot-message-item/components/answer-references';

import type { AnswerReferencesProps } from '../../components/chat/chat-messages/components/chat-bot-message-item/components/answer-references';
import type { AnswerReference } from '@components/webdox-ai/interfaces';

const updateSelectedAnswerReferenceMock = testHelpers.fn();
const referenceMock1: AnswerReference = { position: 1, id: 1 };
const referenceMock2: AnswerReference = { position: 2, id: 2 };
const rangesMock = {
  references: [referenceMock1, referenceMock2],
};

const defaultProps: AnswerReferencesProps = {
  disabled: false,
  selectedReference: referenceMock1,
  updateSelectedAnswerReference: updateSelectedAnswerReferenceMock,
};

const renderComponent = (props?: Partial<AnswerReferencesProps>) => {
  return render(
    <AnswerReferences
      {...defaultProps}
      {...props}
    >
      {JSON.stringify(rangesMock)}
    </AnswerReferences>,
  );
};

beforeEach(() => {
  vi.clearAllMocks();
});

describe('AnswerReferences - tests', () => {
  const { t } = renderUseTranslation();

  it('should render the component correctly', () => {
    renderComponent();

    expect(screen.getByText(referenceMock1.position)).toBeInTheDocument();
    expect(screen.getByText(referenceMock2.position)).toBeInTheDocument();
  });

  it('should render the tooltip when the component is hovered', async () => {
    renderComponent();

    await userEvent.hover(screen.getByText(referenceMock1.position));

    await waitFor(() => {
      expect(screen.getByText(t('webdoxAI.chat.references'))).toBeInTheDocument();
    });
  });

  it('should execute `updateSelectedTextSelectionRange` correctly', async () => {
    renderComponent();

    await userEvent.click(screen.getByText(referenceMock1.position));

    expect(updateSelectedAnswerReferenceMock).toHaveBeenCalledWith(referenceMock1);
  });

  it('should not execute `updateSelectedTextSelectionRange` when is `disabled`', async () => {
    renderComponent({ disabled: true });

    await userEvent.click(screen.getByText(referenceMock1.position));

    expect(updateSelectedAnswerReferenceMock).not.toHaveBeenCalled();
  });
});
