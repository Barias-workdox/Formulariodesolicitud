import { useState } from 'react';

import { WebdoxAICollapsibleButton, WebdoxAIOption } from '../components';

import type { WebdoxAIOptionType } from '@components/webdox-ai/interfaces/webdox-ai.interfaces';
import type { Meta, StoryFn } from '@storybook/react-vite';

export default {
  title: 'Modules/WebdoxAI/Components/WebdoxAICollapsibleButton',
  component: WebdoxAICollapsibleButton,
  args: { direction: 'column' },
  argTypes: {
    direction: {
      options: ['column', 'row'],
      control: {
        type: 'radio',
      },
    },
  },
} as Meta<typeof WebdoxAICollapsibleButton>;

/** A WebdoxAICollapsibleButton */
const Template: StoryFn<typeof WebdoxAICollapsibleButton> = (props) => {
  const [isToggled, setIsToggled] = useState(false);
  const handleClick = (optionType: WebdoxAIOptionType) => {
    window.alert('You clicked on ' + optionType);
  };

  return (
    <section style={{ position: 'relative', height: 200 }}>
      <div style={{ position: 'absolute', left: 20, bottom: 20 }}>
        <WebdoxAICollapsibleButton
          {...props}
          isToggled={isToggled}
          onToggle={() => setIsToggled(!isToggled)}
          options={[
            <WebdoxAIOption
              key="legalWhisperOption"
              type="legalWhisper"
              onClick={() => handleClick('legalWhisper')}
            />,
            <WebdoxAIOption
              key="brainCompanionOption"
              type="brainCompanion"
              onClick={() => handleClick('brainCompanion')}
            />,
          ]}
        />
      </div>
    </section>
  );
};

export const Default = Template.bind({});
