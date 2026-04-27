import { MOCK_ENTITIES } from '@components/entities-multiselect/entities-multiselect.constants';
import { render } from '@test/test-utils';

import { FormProviderControlWrapper } from '../../../../test/form-provider-utils';
import { AmountInputControl } from '../amount-input/amount-input-control';
import { CheckboxControl } from '../checkbox/checkbox-control';
import { ColorPickerControl } from '../color-picker/color-picker-control';
import { CountryControl } from '../country/country-control';
import { DatePickerControl } from '../datepicker/datepicker-control';
import { DynamicTextInputControl } from '../dynamic-text-input/dynamic-text-input-control';
import { EntitiesMultiSelectControl } from '../entities-multiselect/entities-multiselect-control';
import { FileUploaderControl } from '../file-uploader/file-uploader-control';
import { InputControl } from '../input/input-control';
import { NicInputControl } from '../nic-input/nic-input-control';
import { PhoneControl } from '../phone/phone-control';
import { PhoneInputControl } from '../phone-input/phone-input-control';
import { RadioGroupControl } from '../radio-group/radio-group-control';
import { SelectControl } from '../select/select-control';
import { SelectWithPaginationControl } from '../select-with-pagination/select-with-pagination-control';
import { SwitchControl } from '../switch/switch-control';
import { TextareaControl } from '../textarea-control/textarea-control';
import { UserMultiselectControl } from '../user-multiselect/user-multiselect-control';
import { UserSelectControl } from '../user-select/user-select-control';

/** Test suite to verify that RHF components render a DOM element with the given name attribute, useful for accessing the form element in the DOM */
describe('forms - RHF components should render a DOM element with the given name attribute', () => {
  it.each([
    {
      label: 'input',
      name: 'rhfInput',
      render: () => (
        <InputControl
          name="rhfInput"
          label="Label"
        />
      ),
    },
    {
      label: 'textarea',
      name: 'rhfTextarea',
      render: () => (
        <TextareaControl
          name="rhfTextarea"
          label="Label"
        />
      ),
    },
    {
      label: 'amount-input',
      name: 'rhfAmountInput',
      render: () => (
        <AmountInputControl
          name="rhfAmountInput"
          label="Label"
        />
      ),
    },
    {
      label: 'checkbox',
      name: 'rhfCheckbox',
      render: () => (
        <CheckboxControl
          name="rhfCheckbox"
          label="Label"
        />
      ),
    },
    {
      label: 'switch',
      name: 'rhfSwitch',
      render: () => (
        <SwitchControl
          name="rhfSwitch"
          label="Label"
        />
      ),
    },
    {
      label: 'radio-group',
      name: 'rhfRadio',
      render: () => (
        <RadioGroupControl
          name="rhfRadio"
          label="Label"
          options={[
            { label: 'A', id: 'a' },
            { label: 'B', id: 'b' },
          ]}
        />
      ),
    },
    {
      label: 'country',
      name: 'rhfCountry',
      render: () => (
        <CountryControl
          name="rhfCountry"
          label="Country"
        />
      ),
    },
    {
      label: 'select',
      name: 'rhfSelect',
      render: () => (
        <SelectControl
          name="rhfSelect"
          options={[
            { label: 'Option 1', id: 'option1' },
            { label: 'Option 2', id: 'option2' },
          ]}
        />
      ),
    },
    {
      label: 'select-with-pagination',
      name: 'rhfSelectWithPagination',
      render: () => (
        <SelectWithPaginationControl
          name="rhfSelectWithPagination"
          options={[
            { label: 'Option 1', id: 'option1' },
            { label: 'Option 2', id: 'option2' },
          ]}
          onLoadMore={() => undefined}
          isLoadingMore={false}
        />
      ),
    },
    {
      label: 'phone',
      name: 'rhfPhone',
      render: () => <PhoneControl name="rhfPhone" />,
    },
    {
      label: 'user-select',
      name: 'rhfUserSelect',
      render: () => (
        <UserSelectControl
          name="rhfUserSelect"
          isLoadingMore={false}
          options={[
            { label: 'A', id: 'a' },
            { label: 'B', id: 'b' },
          ]}
          onLoadMore={() => undefined}
        />
      ),
    },
    {
      label: 'entities-multiselect',
      name: 'rhfEntitiesMultiSelect',
      render: () => (
        <EntitiesMultiSelectControl
          name="rhfEntitiesMultiSelect"
          label="Entities"
          options={MOCK_ENTITIES}
          values={[]}
          onChange={() => undefined}
        />
      ),
    },
    {
      label: 'user-multiselect',
      name: 'rhfUserMultiSelect',
      render: () => (
        <UserMultiselectControl
          name="rhfUserMultiSelect"
          users={[
            { id: 1, fullName: 'Andres Perez', email: 'andres@mail.com' },
            { id: 2, fullName: 'Carolina Maria', email: 'carolina@mail.com' },
          ]}
          checkedUsers={[]}
        />
      ),
    },
    {
      label: 'datepicker',
      name: 'rhfDatepicker',
      render: () => (
        <DatePickerControl
          name="rhfDatepicker"
          label="Label"
        />
      ),
    },
    {
      label: 'color-picker',
      name: 'rhfColorPicker',
      render: () => (
        <ColorPickerControl
          name="rhfColorPicker"
          label="Label"
        />
      ),
    },
    {
      label: 'file-uploader',
      name: 'rhfFileUploader',
      render: () => (
        <FileUploaderControl
          data-testid="rhfFileUploader"
          name="rhfFileUploader"
          label="Label"
        />
      ),
    },
    {
      label: 'dynamic-text-input',
      name: 'rhfDynamicTextInput',
      render: () => (
        <DynamicTextInputControl
          name="rhfDynamicTextInput"
          label="Label"
          placeholder="Placeholder"
          variant="body"
        />
      ),
    },
    {
      label: 'nic-input',
      name: 'rhfNicInput',
      render: () => (
        <NicInputControl
          name="rhfNicInput"
          label="Label"
        />
      ),
    },
    {
      label: 'phone-input',
      name: 'rhfPhoneInput',
      render: () => (
        <PhoneInputControl
          name="rhfPhoneInput"
          label="Label"
        />
      ),
    },
  ])(
    "$label should render a form element with name attribute '${name}'",
    ({ render: renderControl, name }) => {
      const { container } = render(
        <FormProviderControlWrapper>{renderControl()}</FormProviderControlWrapper>,
      );

      expect(container.querySelector(`[name="${name}"]`)).toBeInTheDocument();
    },
  );
});
