import { useState } from 'react';
import type { ChangeEvent } from 'react';

import { COUNTRIES } from 'baseui/phone-input';

import { PhoneInput } from '.';

import type { Meta, StoryFn } from '@storybook/react-vite';
import type { Country } from 'baseui/phone-input';

export default {
  title: 'Components/Inputs/PhoneInput',
  component: PhoneInput,
  args: {
    positive: false,
    error: false,
    text: '',
    disabled: false,
    size: 'default',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/Vg0tnNQrtCYjRtTInXTcTD/Nuclear-DS-1.1-(Oficial)?node-id=7660-6049&t=jg8Lwg4g2MQHSC2K-0',
    },
  },
} as Meta<typeof PhoneInput>;

const Template: StoryFn<typeof PhoneInput> = (args) => {
  const [country, setCountry] = useState<Country>(COUNTRIES.CL);
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleCountryChange = (option: Country) => {
    setCountry(option);
  };

  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.currentTarget.value);
  };

  return (
    <PhoneInput
      {...args}
      country={country}
      onCountryChange={({ option }) => handleCountryChange(option as Country)}
      onTextChange={handleTextChange}
      text={phoneNumber}
    />
  );
};

export const Default = Template.bind({});
