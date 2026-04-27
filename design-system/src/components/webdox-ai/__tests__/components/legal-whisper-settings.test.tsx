import { userEvent } from '@testing-library/user-event';

import { legalWhisperConversationsMock } from '@components/webdox-ai/__mocks__/legal-whisper-conversations.mock';
import { LegalWhisperSettings } from '@components/webdox-ai/components/legal-whisper-settings';
import { LegalWhisperConversationsProvider } from '@components/webdox-ai/providers/legal-whisper-conversations.provider';
import { getSelectorCountryOptionLabel } from '@components/webdox-ai/utils/legal-whisper-selector.util';
import {
  render,
  renderUseCountriesTranslation,
  renderUseTranslation,
  screen,
  testHelpers,
} from '@test/test-utils';
import { noop } from '@utils/noop';

import '@test/__mocks__/tiptap.mock';
import '@test/__mocks__/use-virtualizer.mock';

import type { CountryCodeType } from '@components/utils/interfaces';
import type { LegalWhisperSettingsProps } from '@components/webdox-ai/components/legal-whisper-settings';
import type { LegalWhisperChatControllerProps } from '@components/webdox-ai/controllers/legal-whisper-chat.controller';
import type { RenderType } from '@test/test-utils';

const baseDataTestId = 'legal-whisper-settings';
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

const onAreaChangeMock = testHelpers.fn();
const onCountryChangeMock = testHelpers.fn();
const onCreateConversationMock = testHelpers.fn();
const onEditConversationMock = testHelpers.fn();
const onDeleteConversationMock = testHelpers.fn();
const onSearchMock = testHelpers.fn();
const onSelectConversationMock = testHelpers.fn();

const defaultProps: LegalWhisperSettingsProps = {
  dataTestId: baseDataTestId,
  areaOptions,
  countryOptions,
  selectedArea: [areaOptions[0]],
  selectedCountry: [{ id: countryOptions[0] }],
  onAreaChange: onAreaChangeMock,
  onCountryChange: onCountryChangeMock,
};

const renderComponent = (props?: Partial<LegalWhisperSettingsProps>): RenderType =>
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
      <LegalWhisperSettings
        {...defaultProps}
        {...props}
      />
      ,
    </LegalWhisperConversationsProvider>,
  );

describe('LegalWhisperSettings - tests', () => {
  const { t: tCountries } = renderUseCountriesTranslation();
  const { t } = renderUseTranslation();

  it('should render correctly', async () => {
    renderComponent();

    expect(
      screen.getByTestId(`${baseDataTestId}__country-and-area-selector__country-select`),
    ).toBeInTheDocument();
    expect(
      screen.getByTestId(`${baseDataTestId}__country-and-area-selector__area-select`),
    ).toBeInTheDocument();
    expect(
      screen.getByText(t('webdoxAI.legalWhisperSettings.newConversation')),
    ).toBeInTheDocument();
    expect(
      screen.getByText(t('webdoxAI.legalWhisperSettings.recentConversations')),
    ).toBeInTheDocument();
    expect(screen.getByPlaceholderText(t('general.search'))).toBeInTheDocument();

    legalWhisperConversationsMock.forEach((conversation) => {
      expect(screen.getByText(conversation.title)).toBeInTheDocument();
    });
  });

  it('should execute `onCountryChange` correctly', async () => {
    renderComponent();

    const [, secondCountryOption] = countryOptions;

    const secondCountryOptionLabel = getSelectorCountryOptionLabel({
      option: { id: secondCountryOption, label: tCountries(secondCountryOption) },
    });

    await userEvent.click(
      await screen.findByTestId(`${baseDataTestId}__country-and-area-selector__country-select`),
    );
    await userEvent.click(await screen.findByText(secondCountryOptionLabel));

    expect(onCountryChangeMock).toHaveBeenCalledWith([
      {
        id: secondCountryOption,
        label: tCountries(secondCountryOption),
      },
    ]);
  });

  it('should execute `onAreaChange` correctly', async () => {
    renderComponent();

    const [, secondAreaOption] = areaOptions;

    await userEvent.click(
      await screen.findByTestId(`${baseDataTestId}__country-and-area-selector__area-select`),
    );
    await userEvent.click(await screen.findByText(secondAreaOption.label as string));

    expect(onAreaChangeMock).toHaveBeenCalledWith([secondAreaOption]);
  });

  it('should call onSelectConversation when the conversation item is clicked', async () => {
    renderComponent();

    await userEvent.click(screen.getByText(legalWhisperConversationsMock[1].title));

    expect(onSelectConversationMock).toHaveBeenCalledWith(legalWhisperConversationsMock[1]);
  });

  it('should call onCreateConversation when the new conversation button is clicked', async () => {
    renderComponent();

    await userEvent.click(screen.getByText(t('webdoxAI.legalWhisperSettings.newConversation')));

    expect(onCreateConversationMock).toHaveBeenCalled();
  });

  it('should call onEditConversation when the edit conversation button is clicked', async () => {
    renderComponent();

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
    renderComponent();

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
