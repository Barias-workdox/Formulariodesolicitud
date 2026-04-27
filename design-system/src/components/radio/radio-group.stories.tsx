import { useState } from 'react';
import type { ChangeEvent } from 'react';

import {
  Building,
  FaceActivated,
  FaceDissatisfied,
  FaceNeutral,
  UserAvatar,
} from '@carbon/icons-react';
import { ALIGN } from 'baseui/radio';

import { Text } from '../text';
import { useCss } from '../utils/hooks/use-css';

import { DetailedRadio } from './components';
import { BorderedRadio } from './components/bordered-radio';
import { RadioGroup } from './radio-group';

import type { Meta, StoryFn } from '@storybook/react-vite';
import type { StyleObject } from 'styletron-react';

export default {
  title: 'Components/Inputs/RadioGroup',
  component: RadioGroup,
  args: {
    align: ALIGN.vertical,
    rowGap: '4px',
    columnGap: '4px',
    disabled: false,
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/eMhywyfWwKMjIyemY3PDoK/Design-System-Webdox-1.0?type=design&node-id=182-0&mode=dev',
    },
  },
} as Meta<typeof RadioGroup>;

/**
 * Renders a radio group with two options, and updates the value of the radio group when one of the
 * options is selected
 */
const Template: StoryFn<typeof RadioGroup> = (args) => {
  const [value, setValue] = useState('1');

  return (
    <RadioGroup
      {...args}
      value={value}
      onChange={({ target }: ChangeEvent<HTMLInputElement>): void => setValue(target.value)}
      valueKey="id"
      labelKey="label"
      options={[
        { id: '1', label: 'option 1' },
        { id: '2', label: 'option 2' },
      ]}
    />
  );
};

const BorderedRadioTemplate: StoryFn<typeof RadioGroup> = (args) => {
  const [value, setValue] = useState('');

  function handleChange({ target: { value } }: ChangeEvent<HTMLInputElement>): void {
    setValue(value);
  }

  const { theme } = useCss();

  return (
    <RadioGroup
      {...args}
      onChange={handleChange}
      value={value}
    >
      <BorderedRadio
        data-testid="bordered-radio-person"
        title="Persona"
        description="Qui est do fugiat proident ad."
        icon={
          <UserAvatar
            size={20}
            color={theme.colors.neutral}
          />
        }
        value="person"
      />
      <BorderedRadio
        data-testid="bordered-radio-company"
        title="Empresa"
        description="Qui est do fugiat proident ad."
        icon={
          <Building
            size={20}
            color={theme.colors.neutral}
          />
        }
        value="company"
      />
      <BorderedRadio
        data-testid="bordered-radio-third-box"
        title="Third box"
        description="Qui est do fugiat proident ad. Exercitation aliquip proident est deserunt. Laborum non cillum nostrud cillum reprehenderit tempor excepteur eu ex anim Lorem irure laborum"
        icon={
          <Building
            size={20}
            color={theme.colors.neutral}
          />
        }
        value="lorem"
      />
    </RadioGroup>
  );
};

const DetailedRadioTemplate: StoryFn<typeof RadioGroup> = (args) => {
  const [value, setValue] = useState('');

  function handleChange({ target: { value } }: ChangeEvent<HTMLInputElement>): void {
    setValue(value);
  }

  return (
    <RadioGroup
      {...args}
      onChange={handleChange}
      value={value}
    >
      <DetailedRadio
        data-testid="detailed-radio-bad"
        description={
          <Text
            variant="bodySmall"
            color="neutralSubdued"
            margin={0}
          >
            First description
          </Text>
        }
        icon={<FaceDissatisfied />}
        value="bad"
      >
        First title
      </DetailedRadio>
      <DetailedRadio
        data-testid="detailed-radio-medium"
        description={
          <>
            <Text
              variant="bodySmall"
              color="neutralSubdued"
              margin={0}
            >
              Second description paragraph one
            </Text>
            <Text
              variant="bodySmall"
              color="neutralSubdued"
              margin={0}
            >
              Second description paragraph two
            </Text>
          </>
        }
        icon={<FaceNeutral />}
        value="medium"
      >
        Second title
      </DetailedRadio>
      <DetailedRadio
        data-testid="detailed-radio-great"
        description={
          <Text
            variant="bodySmall"
            color="neutralSubdued"
            margin={0}
          >
            Third description
          </Text>
        }
        icon={<FaceActivated />}
        value="great"
      >
        Third title
      </DetailedRadio>
    </RadioGroup>
  );
};

const DetailedRadioTemplateWithCustomOverrides: StoryFn<typeof RadioGroup> = (args) => {
  const [value, setValue] = useState('');
  const { theme } = useCss();

  function handleChange({ target: { value } }: ChangeEvent<HTMLInputElement>): void {
    setValue(value);
  }

  return (
    <RadioGroup
      {...args}
      onChange={handleChange}
      value={value}
    >
      <DetailedRadio
        data-testid="detailed-radio-bad"
        description={
          <Text
            variant="bodySmall"
            color="neutralSubdued"
            margin={0}
          >
            First description
          </Text>
        }
        icon={<FaceDissatisfied />}
        value="bad"
      >
        First title
      </DetailedRadio>
      <DetailedRadio
        data-testid="detailed-radio-medium"
        description={
          <>
            <Text
              variant="bodySmall"
              color="neutralSubdued"
              margin={0}
            >
              Second description paragraph one
            </Text>
            <Text
              variant="bodySmall"
              color="neutralSubdued"
              margin={0}
            >
              Second description paragraph two
            </Text>
          </>
        }
        icon={<FaceNeutral />}
        value="medium"
        overrides={{
          Root: {
            style: (): StyleObject => ({
              padding: theme.spacing.spacingSm,
              background: theme.colors.neutralDepressed,
            }),
          },
        }}
      >
        Second title
      </DetailedRadio>
    </RadioGroup>
  );
};

const DetailedRadioTemplateWithoutIcon: StoryFn<typeof RadioGroup> = (args) => {
  const [value, setValue] = useState('');

  function handleChange({ target: { value } }: ChangeEvent<HTMLInputElement>): void {
    setValue(value);
  }

  return (
    <RadioGroup
      {...args}
      onChange={handleChange}
      value={value}
    >
      <DetailedRadio
        data-testid="detailed-radio-bad"
        description={
          <Text
            variant="bodySmall"
            color="neutralSubdued"
            margin={0}
          >
            First description
          </Text>
        }
        value="bad"
      >
        First title
      </DetailedRadio>
      <DetailedRadio
        data-testid="detailed-radio-medium"
        description={
          <>
            <Text
              variant="bodySmall"
              color="neutralSubdued"
              margin={0}
            >
              Second description paragraph one
            </Text>
            <Text
              variant="bodySmall"
              color="neutralSubdued"
              margin={0}
            >
              Second description paragraph two
            </Text>
          </>
        }
        value="medium"
      >
        Second title
      </DetailedRadio>
    </RadioGroup>
  );
};

export const Default = Template.bind({});

export const WithDetailedRadioWithoutIcon = DetailedRadioTemplateWithoutIcon.bind({});

export const Horizontal = Template.bind({});

Horizontal.args = {
  align: ALIGN.horizontal,
};

export const WithBorderedRadio = BorderedRadioTemplate.bind({});

WithBorderedRadio.args = {
  align: ALIGN.horizontal,
};

export const WithDetailedRadio = DetailedRadioTemplate.bind({});

export const WithDetailedRadioCustomOverrides = DetailedRadioTemplateWithCustomOverrides.bind({});
