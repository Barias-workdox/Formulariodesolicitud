import { userEvent } from '@testing-library/user-event';

import { legalWhisperConversationsMock } from '@components/webdox-ai/__mocks__/legal-whisper-conversations.mock';
import { LegalWhisperConversationsProvider } from '@components/webdox-ai/providers/legal-whisper-conversations.provider';
import {
  getCountryAndAreaValueLabel,
  getSelectorCountryOptionLabel,
} from '@components/webdox-ai/utils/legal-whisper-selector.util';
import {
  render,
  renderUseCountriesTranslation,
  renderUseTranslation,
  screen,
  testHelpers,
} from '@test/test-utils';
import { noop } from '@utils/noop';

import { LegalWhisperChatComposer } from '../../components/chat';

import '@test/__mocks__/tiptap.mock';
import '@test/__mocks__/use-virtualizer.mock';

import type { LegalWhisperChatComposerProps } from '../../components/chat';
import type { CountryCodeType } from '@components/utils/interfaces';
import type { LegalWhisperChatControllerProps } from '@components/webdox-ai/controllers/legal-whisper-chat.controller';
import type { SuggestionItemType } from '@components/webdox-ai/interfaces/legal-whisper.interfaces';
import type { RenderType } from '@test/test-utils';

const baseDataTestId = 'legal-whisper-chat-composer';
const areaOptions: LegalWhisperChatControllerProps['areaOptions'] = [
  {
    id: '1',
    label: 'Área Laboral',
  },
  {
    id: '2',
    label: 'Área Civil',
  },
];
const countryOptions: CountryCodeType[] = ['CHL', 'ARG'];
const suggestionList: SuggestionItemType[] = [
  {
    id: '1',
    label: 'Test suggestion',
    value: 'test suggestion',
  },
];
const onCreateMessageMock = testHelpers.fn();
const onRateAnswerMock = testHelpers.fn();
const onAreaChangeMock = testHelpers.fn();
const onCountryChangeMock = testHelpers.fn();
const onSuggestionClickMock = testHelpers.fn();
const onSelectConversationMock = testHelpers.fn();
const onCreateConversationMock = testHelpers.fn();
const onEditConversationMock = testHelpers.fn();
const onDeleteConversationMock = testHelpers.fn();
const onSearchMock = testHelpers.fn();

const defaultProps: LegalWhisperChatComposerProps = {
  dataTestId: baseDataTestId,
  disabled: false,
  isGeneratingAnswer: false,
  areaOptions,
  countryOptions,
  showUnratedAnswerAlert: false,
  showSettingsSelector: false,
  suggestionList,
  selectedArea: [areaOptions[0]],
  selectedCountry: [{ id: countryOptions[0] }],
  onAreaChange: onAreaChangeMock,
  onCountryChange: onCountryChangeMock,
  onCreateMessage: onCreateMessageMock,
  onRateAnswer: onRateAnswerMock,
  onSuggestionClick: onSuggestionClickMock,
};

const renderComponent = (props?: Partial<LegalWhisperChatComposerProps>): RenderType =>
  render(
    <LegalWhisperConversationsProvider
      onLoadMoreConversations={noop}
      isLoadingMoreConversations={false}
      conversations={legalWhisperConversationsMock}
      selectedConversation={legalWhisperConversationsMock[0]}
      onSelectConversation={onSelectConversationMock}
      onCreateConversation={onCreateConversationMock}
      onEditConversation={onEditConversationMock}
      onDeleteConversation={onDeleteConversationMock}
      onSearch={onSearchMock}
    >
      <LegalWhisperChatComposer
        {...defaultProps}
        {...props}
      />
    </LegalWhisperConversationsProvider>,
  );

const { t } = renderUseTranslation();
const { t: tCountries } = renderUseCountriesTranslation();

describe('LegalWhisperChatComposer - tests', () => {
  it('should render correctly', async () => {
    renderComponent();

    expect(
      screen.getByTestId('message-box-editor-content').querySelector('[contenteditable="true"]'),
    ).toBeInTheDocument();
    expect(screen.getByText(t('general.send'))).toBeInTheDocument();
  });

  it('should show unrated answer alert correctly', () => {
    renderComponent({ showUnratedAnswerAlert: true });

    expect(
      screen.getByText(t('webdoxAI.legalWhisperAnswerRating.unratedAnswerAlert')),
    ).toBeInTheDocument();
    expect(screen.getByText(t('webdoxAI.legalWhisperAnswerRating.rateButton'))).toBeInTheDocument();
  });

  it('should show settings selector correctly', async () => {
    renderComponent({ showSettingsSelector: true });

    const countrySelectorValue = getCountryAndAreaValueLabel({
      countryOption: defaultProps.selectedCountry,
      areaOption: defaultProps.selectedArea,
    });
    const inputElement = screen.getByDisplayValue(countrySelectorValue);

    await userEvent.click(inputElement);

    expect(inputElement).toBeInTheDocument();
    expect(
      screen.getByText(t('webdoxAI.legalWhisperSettings.countryAndAreaSettings.title')),
    ).toBeInTheDocument();
    expect(
      screen.getByText(t('webdoxAI.legalWhisperSettings.countryAndAreaSettings.country')),
    ).toBeInTheDocument();
    expect(
      screen.getByText(t('webdoxAI.legalWhisperSettings.countryAndAreaSettings.area')),
    ).toBeInTheDocument();
    expect(screen.getByText(t('general.save'))).toBeInTheDocument();
  });

  it('should show conversation selector correctly', async () => {
    renderComponent({ showSettingsSelector: true });

    const inputElement = screen.getByDisplayValue(legalWhisperConversationsMock[0].title);

    await userEvent.click(inputElement);

    expect(
      await screen.findByText(t('webdoxAI.legalWhisperSettings.recentConversations')),
    ).toBeInTheDocument();
    expect(screen.getByPlaceholderText(t('general.search'))).toBeInTheDocument();

    legalWhisperConversationsMock.forEach((conversation) => {
      expect(screen.getByText(conversation.title)).toBeInTheDocument();
    });
  });

  it('should call "onCreateMessage" when message is submitted', async () => {
    renderComponent();

    const editorElement = screen.getByTestId('message-box-editor-content');
    const editableElement = editorElement.querySelector('[contenteditable="true"]') as HTMLElement;

    await userEvent.type(editableElement, 'Test message');

    const sendButton = await screen.findByText(t('general.send'));

    await userEvent.click(sendButton);

    expect(onCreateMessageMock).toHaveBeenCalledWith('Test message');
  });

  it('should execute `onRateAnswer` correctly', async () => {
    renderComponent({ showUnratedAnswerAlert: true });

    await userEvent.click(screen.getByText(t('webdoxAI.legalWhisperAnswerRating.rateButton')));

    expect(onRateAnswerMock).toHaveBeenCalled();
  });

  it('should execute `onSuggestionClick` correctly', async () => {
    renderComponent({ showSuggestionList: true });

    await userEvent.click(screen.getByText(suggestionList[0].label));

    expect(onSuggestionClickMock).toHaveBeenCalledWith(suggestionList[0]);
  });

  it('should execute `onCountryChange` correctly', async () => {
    renderComponent({ showSettingsSelector: true });

    const inputElementValue = getCountryAndAreaValueLabel({
      countryOption: defaultProps.selectedCountry,
      areaOption: defaultProps.selectedArea,
    });
    const [, secondCountryOption] = countryOptions;
    const secondCountryOptionLabel = getSelectorCountryOptionLabel({
      option: { id: secondCountryOption, label: tCountries(secondCountryOption) },
    });

    await userEvent.click(screen.getByDisplayValue(inputElementValue));

    await userEvent.click(
      await screen.findByTestId(`${baseDataTestId}__legal-whisper-selector__country-select`),
    );
    await userEvent.click(await screen.findByText(secondCountryOptionLabel));
    await userEvent.click(screen.getByText(t('general.save')));

    expect(onCountryChangeMock).toHaveBeenCalledWith([
      {
        id: secondCountryOption,
        label: tCountries(secondCountryOption),
      },
    ]);
  });

  it('should execute `onAreaChange` correctly', async () => {
    renderComponent({ showSettingsSelector: true });

    const [, secondAreaOption] = areaOptions;
    const inputElementValue = getCountryAndAreaValueLabel({
      countryOption: defaultProps.selectedCountry,
      areaOption: defaultProps.selectedArea,
    });

    await userEvent.click(screen.getByDisplayValue(inputElementValue));

    await userEvent.click(
      await screen.findByTestId(`${baseDataTestId}__legal-whisper-selector__area-select`),
    );
    await userEvent.click(await screen.findByText(secondAreaOption.label as string));
    await userEvent.click(screen.getByText(t('general.save')));

    expect(onAreaChangeMock).toHaveBeenCalledWith([secondAreaOption]);
  });

  it('should call onSelectConversation when the conversation item is clicked', async () => {
    renderComponent({ showSettingsSelector: true });

    const inputElement = screen.getByDisplayValue(legalWhisperConversationsMock[0].title);

    await userEvent.click(inputElement);

    const conversationItem = screen.getByText(legalWhisperConversationsMock[1].title);

    await userEvent.click(conversationItem);

    expect(onSelectConversationMock).toHaveBeenCalledWith(legalWhisperConversationsMock[1]);
  });

  it('should call onCreateConversation when the new conversation button is clicked', async () => {
    renderComponent({ showSettingsSelector: true });

    const inputElement = screen.getByDisplayValue(legalWhisperConversationsMock[0].title);

    await userEvent.click(inputElement);

    const newConversationButton = screen.getByText(
      t('webdoxAI.legalWhisperSettings.newConversation'),
    );

    await userEvent.click(newConversationButton);

    expect(onCreateConversationMock).toHaveBeenCalled();
  });

  it('should call onEditConversation when the edit conversation button is clicked', async () => {
    renderComponent({ showSettingsSelector: true });

    await userEvent.click(screen.getByDisplayValue(legalWhisperConversationsMock[0].title));

    await userEvent.click(
      screen.getByTestId(
        `${baseDataTestId}__conversation-selector__conversation-list-item-0--edit-button`,
      ),
    );

    await userEvent.type(
      screen.getByPlaceholderText(
        t('webdoxAI.legalWhisperSettings.editConversationModal.formControl.title.placeholder'),
      ),
      'New conversation title',
    );

    await userEvent.click(screen.getByText(t('general.save')));

    expect(onEditConversationMock).toHaveBeenCalledWith({
      conversation: legalWhisperConversationsMock[0],
      newValues: { title: `${legalWhisperConversationsMock[0].title}New conversation title` },
    });
  });

  it('should call onDeleteConversation when the delete conversation button is clicked', async () => {
    renderComponent({ showSettingsSelector: true });

    await userEvent.click(screen.getByDisplayValue(legalWhisperConversationsMock[0].title));

    await userEvent.click(
      screen.getByTestId(
        `${baseDataTestId}__conversation-selector__conversation-list-item-0--delete-button`,
      ),
    );

    await userEvent.click(
      await screen.findByText(t('webdoxAI.legalWhisperSettings.deleteConversationModal.submit')),
    );

    expect(onDeleteConversationMock).toHaveBeenCalledWith(legalWhisperConversationsMock[0]);
  });
});
