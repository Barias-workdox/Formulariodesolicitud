import { useState } from 'react';

import { Input } from '../input/input';
import { Text } from '../text';
import { Textarea } from '../textarea';
import { tooltipCaptionStyles } from '../tooltip/tooltip.styles';
import { useCss } from '../utils/hooks/use-css';

import { FormControl } from './form-control';

import type { FormControlProps } from './form-control';
import type { Meta, StoryFn, StoryObj } from '@storybook/react-vite';

const stringInfoTooltip =
  'Nulla sunt pariatur pariatur id voluptate minim ullamco amet Lorem nulla nostrud Lorem. Deserunt eiusmod incididunt commodo ut nostrud qui incididunt adipisicing proident cillum irure labore. Quis nisi fugiat consequat et proident est.';

/** A custom tooltip as a React component */
const CustomTooltip = (): JSX.Element => {
  const { theme } = useCss();

  return (
    <div>
      <Text
        variant="bodySmall"
        $style={tooltipCaptionStyles(theme)}
      >
        Pariatur do anim aliqua esse aliquip consequat non nulla reprehenderit culpa sunt esse
        aliquip.
      </Text>
      <Text
        variant="body"
        $style={tooltipCaptionStyles(theme)}
      >
        Reprehenderit eiusmod minim qui qui sit laborum commodo voluptate culpa duis eu adipisicing
        quis consectetur. Adipisicing aliqua do laborum minim. Dolor magna cupidatat sint labore
        occaecat esse duis sit deserunt nisi minim velit adipisicing elit. Est laboris consectetur
        reprehenderit aliqua quis laboris.
      </Text>
    </div>
  );
};

export default {
  title: 'Components/Inputs/FormControl',
  component: FormControl,
  args: {
    children: (
      <Input
        id="id"
        name="name"
        kind="white"
        placeholder="Text"
      />
    ),
    positive: false,
    error: false,
    id: 'id',
    name: 'name',
    kind: 'white',
    disabled: false,
    placeholder: 'Text',
    caption: 'A test caption',
    label: 'A Test label',
  },
} as Meta<typeof FormControl>;

/** A FormControl */
const Template: StoryFn<typeof FormControl> = (args) => {
  return <FormControl {...args} />;
};

/** A FormControl with the character count */
const CharacterCountTemplate: StoryFn<typeof FormControl> = (args) => {
  const [value, setValue] = useState('');

  return (
    <FormControl
      {...args}
      showCharacterCounter
      currentCharactersQuantity={value.length}
      maxLength={100}
    >
      <Textarea
        value={value}
        onChange={(e): void => setValue(e.currentTarget.value)}
        maxLength={100}
      />
    </FormControl>
  );
};

/** Multiple form controls to check the external margins between each one */
const NoExternalMarginsTemplate = (args) => {
  const [value, setValue] = useState('');

  return (
    <div style={{ backgroundColor: 'rgb(255,128,128)' }}>
      <div style={{ backgroundColor: 'rgb(128,190,256)' }}>
        <div style={{ backgroundColor: '#fff' }}>
          <FormControl
            {...args}
            showCharacterCounter
            currentCharactersQuantity={value.length}
            maxLength={100}
          >
            <Textarea
              value={value}
              onChange={(e): void => setValue(e.currentTarget.value)}
              maxLength={100}
            />
          </FormControl>
        </div>
        Without external margins
        <div style={{ backgroundColor: '#fff' }}>
          <FormControl
            {...args}
            noExternalMargins={false}
            showCharacterCounter
            currentCharactersQuantity={value.length}
            maxLength={100}
          >
            <Textarea
              value={value}
              onChange={(e): void => setValue(e.currentTarget.value)}
              maxLength={100}
            />
          </FormControl>
        </div>
      </div>
      With default external margins
      <div style={{ backgroundColor: '#fff' }}>
        <FormControl
          {...args}
          noExternalMargins={false}
          showCharacterCounter
          currentCharactersQuantity={value.length}
          maxLength={100}
        >
          <Textarea
            value={value}
            onChange={(e): void => setValue(e.currentTarget.value)}
            maxLength={100}
          />
        </FormControl>
      </div>
    </div>
  );
};

export const Default = Template.bind({});

export const CharacterCount = CharacterCountTemplate.bind({});

export const CharacterCountWithTooltip = CharacterCountTemplate.bind({});

CharacterCountWithTooltip.args = {
  infoTooltip: stringInfoTooltip,
};

export const StringInfoTooltip = Template.bind({});

StringInfoTooltip.args = {
  infoTooltip: stringInfoTooltip,
};

export const StringInfoTooltipDisabled = Template.bind({});

StringInfoTooltipDisabled.args = {
  infoTooltip: stringInfoTooltip,
  disabled: true,
};

export const InfoTooltipCustomComponent = Template.bind({});

InfoTooltipCustomComponent.args = {
  infoTooltip: <CustomTooltip />,
};

export const Positive = Template.bind({});

Positive.args = {
  positive: true,
};

/** The red space showcases the default margin that the component implements */
export const NoExternalMargins: StoryObj<FormControlProps> = NoExternalMarginsTemplate.bind({});

NoExternalMargins.args = { label: 'No external margins check', noExternalMargins: true };
