import { useState } from 'react';

import { Checkbox } from '../checkbox';

import type { Meta, StoryFn } from '@storybook/react-vite';

export default {
  title: 'Components/Inputs/Checkbox/Next',
  component: Checkbox,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/eMhywyfWwKMjIyemY3PDoK/Design-System-Webdox-1.0?type=design&node-id=174-0&mode=dev',
    },
  },
} as Meta<typeof Checkbox>;

/**
 * Basic checkbox template
 */
const Template: StoryFn<typeof Checkbox> = (args) => {
  const [checked, setChecked] = useState(args.checked || false);

  return (
    <Checkbox
      {...args}
      checked={checked}
      onChange={(e): void => setChecked(e.target.checked)}
    />
  );
};

/**
 * Default checkbox in medium size
 */

export const Default = Template.bind({});

Default.args = {
  label: 'Checkbox label',
  checked: false,
  size: 'medium',
};

/**
 * All states showcase
 */
export const AllStates = (): JSX.Element => {
  const [states, setStates] = useState({
    default: false,
    checked: true,
    indeterminate: false,
    disabled: false,
    disabledChecked: true,
    error: false,
    errorChecked: true,
    required: false,
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Checkbox
        label="Default"
        checked={states.default}
        onChange={(e): void => setStates({ ...states, default: e.target.checked })}
      />
      <Checkbox
        label="Checked"
        checked={states.checked}
        onChange={(e): void => setStates({ ...states, checked: e.target.checked })}
      />
      <Checkbox
        label="Indeterminate"
        checked={states.indeterminate}
        indeterminate={true}
        onChange={(e): void => setStates({ ...states, indeterminate: e.target.checked })}
      />
      <Checkbox
        label="Disabled"
        checked={states.disabled}
        disabled={true}
        onChange={(e): void => setStates({ ...states, disabled: e.target.checked })}
      />
      <Checkbox
        label="Disabled Checked"
        checked={states.disabledChecked}
        disabled={true}
        onChange={(e): void => setStates({ ...states, disabledChecked: e.target.checked })}
      />
      <Checkbox
        label="Error"
        checked={states.error}
        error={true}
        onChange={(e): void => setStates({ ...states, error: e.target.checked })}
      />
      <Checkbox
        label="Required"
        checked={states.required}
        required={true}
        onChange={(e): void => setStates({ ...states, required: e.target.checked })}
      />
    </div>
  );
};
/**
 * Size comparison
 */

export const AllSizes = (): JSX.Element => {
  const [smallChecked, setSmallChecked] = useState(false);
  const [mediumChecked, setMediumChecked] = useState(false);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Checkbox
        label="Small size checkbox"
        checked={smallChecked}
        size="small"
        onChange={(e): void => setSmallChecked(e.target.checked)}
      />
      <Checkbox
        label="Medium size checkbox"
        checked={mediumChecked}
        size="medium"
        onChange={(e): void => setMediumChecked(e.target.checked)}
      />
    </div>
  );
};
