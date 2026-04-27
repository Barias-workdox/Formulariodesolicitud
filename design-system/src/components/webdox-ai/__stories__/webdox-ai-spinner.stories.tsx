import { WebdoxAISpinner } from '../components';

import type { Meta, StoryFn } from '@storybook/react-vite';

export default {
  title: 'Modules/WebdoxAI/Components/WebdoxAISpinner',
  component: WebdoxAISpinner,
} as Meta<typeof WebdoxAISpinner>;

/** A WebdoxAISpinner */
const Template: StoryFn<typeof WebdoxAISpinner> = () => {
  return (
    <section style={{ position: 'relative', height: 200 }}>
      <WebdoxAISpinner />
    </section>
  );
};

export const Default = Template.bind({});
