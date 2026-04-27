import { Information } from '@carbon/icons-react';

import { Button } from '../../../button';
import { Text } from '../../../text';
import { TitleLayout } from '../../title-layout';

import { SectionedCard } from './sectioned-card';

import type { SectionedCardProps } from './sectioned-card';
import type { Meta, StoryFn } from '@storybook/react-vite';

export default {
  title: 'Components/Content/SectionedCard',
  component: SectionedCard,
  args: {
    children: [
      <Text
        key={1}
        variant="bodySmall"
        margin={0}
      >
        Content text line
      </Text>,
      <Text
        key={2}
        variant="bodySmall"
        margin={0}
      >
        Content text line 2
      </Text>,
    ],
    overrides: {
      Root: { maxWidth: '600px' },
    },
    title: 'Sectioned card title',
    footer: (
      <Text
        variant="bodySmall"
        margin={0}
      >
        Footer
      </Text>
    ),
  },
} as Meta<typeof SectionedCard>;

/** A SectionedCard */
const Template: StoryFn<typeof SectionedCard> = (args) => {
  return <SectionedCard {...args} />;
};

/** A SectionedCard beside the other */
const TemplateOneBesideTheOther: StoryFn<typeof SectionedCard> = (args) => {
  const { overrides: _overrides, ...restArgs } = args;

  return (
    <div style={{ display: 'flex', gap: '8px' }}>
      <SectionedCard {...restArgs}>
        <Text variant="bodySmall">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quasi corporis, rerum quis
          tenetur esse id asperiores perferendis vero eum facilis recusandae. Vero at officiis
          labore aut assumenda, corrupti eius.
        </Text>
      </SectionedCard>
      <SectionedCard {...restArgs}>
        <Text variant="bodySmall">Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
      </SectionedCard>
    </div>
  );
};

export const Default = Template.bind({});

export const WithComplexHeader = Template.bind({});

WithComplexHeader.args = {
  title: (
    <TitleLayout
      titleText={
        <Text
          variant="body"
          margin={0}
        >
          Title with layout
        </Text>
      }
      startEnhancer={<Information size={24} />}
      subtitleText={
        <Text
          variant="bodySmall"
          margin={0}
        >
          Subtitle with layout
        </Text>
      }
    />
  ),
} as SectionedCardProps;

export const WithHeaderEnhancer = Template.bind({});

WithHeaderEnhancer.args = {
  headerEnhancer: (
    <Button
      kind="tertiary"
      size="compact"
    >
      Call to action
    </Button>
  ),
} as SectionedCardProps;

export const WithoutHeader = Template.bind({});

WithoutHeader.args = {
  title: undefined,
} as SectionedCardProps;

export const WithElevation = Template.bind({});

WithElevation.args = {
  hasElevation: true,
} as SectionedCardProps;

export const WithElevationNoHeader = Template.bind({});

WithElevationNoHeader.args = {
  hasElevation: true,
  title: undefined,
  overrides: {
    Root: { width: '700px' },
    Body: { padding: '30px' },
  },
} as SectionedCardProps;

export const WithOnlyHeader = Template.bind({});

WithOnlyHeader.args = {
  hasElevation: true,
  headerEnhancer: (
    <Button
      kind="tertiary"
      size="compact"
    >
      Call to action
    </Button>
  ),
  children: undefined,
  overrides: {
    Header: { padding: '30px' },
  },
  footer: undefined,
} as SectionedCardProps;

export const OneBesideTheOther = TemplateOneBesideTheOther.bind({});
