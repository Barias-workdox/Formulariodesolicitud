import { useState } from 'react';
import type { ChangeEvent } from 'react';

import { COUNTRIES } from 'baseui/phone-input';

import { PhoneInput } from '..';

import type { Meta, StoryFn } from '@storybook/react-vite';
import type { Country } from 'baseui/phone-input';
import type { Value } from 'baseui/select';

export default {
  title: 'Components/Inputs/PhoneInput/Next',
  component: PhoneInput,
  args: {
    positive: false,
    error: false,
    disabled: false,
    size: 'md',
    kind: 'gray',
    text: '',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/PbZuyyTRGoXBcqFm848rvy/%F0%9F%92%A0-Nuclear-Components?node-id=18662-11550',
    },
  },
} as Meta<typeof PhoneInput>;

const Template: StoryFn<typeof PhoneInput> = ({ country: initialCountry, ...args }) => {
  const [country, setCountry] = useState<Country | undefined>(initialCountry);
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleCountryChange = (option: Value) => {
    const [selected] = option;

    setCountry(selected as Country);
  };

  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.currentTarget.value);
  };

  return (
    <PhoneInput
      {...args}
      country={country}
      onCountryChange={handleCountryChange}
      onTextChange={handleTextChange}
      text={phoneNumber}
    />
  );
};

export const Default = Template.bind({});

export const WithInitialCountry = Template.bind({});

WithInitialCountry.args = {
  country: COUNTRIES.CL,
};
