import { Add, ArrowRight } from '@carbon/icons-react';

import { Button } from '../button';

import type { ButtonProps } from '../button.interfaces';
import type { Meta, StoryObj } from '@storybook/react-vite';

import './button.stories.styles.scss';

export default {
  title: 'Components/Inputs/Button/Next',
  component: Button,
  args: {
    dataTestId: 'button',
    type: 'button',
    disabled: false,
    isLoading: false,
    fullWidth: false,
    isSelected: false,
    children: 'Button Label',
    kind: 'brand',
    appearance: 'filled',
    size: '44px',
    onClick: () => alert('Button clicked'),
  },
  argTypes: {
    startEnhancer: {
      control: false,
    },
    endEnhancer: {
      control: false,
    },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/PbZuyyTRGoXBcqFm848rvy/%F0%9F%92%A0-Nuclear-Components?node-id=17901-6331&p=f&m=dev',
    },
  },
  decorators: [
    (Story, context) => {
      const isContrast = context.args.kind === 'contrast';

      return (
        <div style={{ backgroundColor: isContrast ? '#283242' : undefined, padding: '1rem' }}>
          <Story />
        </div>
      );
    },
  ],
} satisfies Meta<ButtonProps>;

export const FullWidth: StoryObj<ButtonProps> = {
  args: {
    fullWidth: true,
  },
};

/**
 * Button with left icon
 */
export const WithLeftEnhancer: StoryObj<ButtonProps> = {
  args: {
    children: 'Add Item',
    startEnhancer: Add,
  },
};

/**
 * Button with right icon
 */
export const WithRightEnhancer: StoryObj<ButtonProps> = {
  args: {
    children: 'Continue',
    endEnhancer: ArrowRight,
  },
};

/**
 * Button sizes comparison
 */
export const Sizes: StoryObj<ButtonProps> = {
  argTypes: {
    size: {
      control: false,
    },
    children: {
      control: false,
    },
  },
  render: (args) => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
      {(['44px', '32px'] as const).map((size) => (
        <Button
          {...args}
          key={size}
          size={size}
        >
          {size}
        </Button>
      ))}
    </div>
  ),
};

/**
 * Complete matrix of all button variants across all states
 *
 * Shows all combinations of:
 * - Kind: brand, neutral, positive, negative, contrast
 * - Appearance: filled, tonal, outlined, ghost
 * - States: default, disabled, loading
 *
 * Interactive states (hover, focus, pressed) can be triggered by user interaction.
 */
export const AllVariantsMatrix: StoryObj<ButtonProps> = {
  args: {
    children: 'Lorem ipsum',
  },
  argTypes: {
    kind: {
      control: false,
    },
    appearance: {
      control: false,
    },
    disabled: {
      control: false,
    },
    isLoading: {
      control: false,
    },
    isSelected: {
      control: false,
    },
  },
  parameters: {
    layout: 'fullscreen',
  },
  render: (args) => {
    const kinds = ['brand', 'neutral', 'positive', 'negative', 'contrast'] as const;
    const appearances = ['filled', 'tonal', 'outlined', 'ghost'] as const;
    const states = [
      { label: 'Default', disabled: false, isLoading: false, isSelected: false },
      { label: 'Disabled', disabled: true, isLoading: false, isSelected: false },
      { label: 'Selected', disabled: false, isLoading: false, isSelected: true },
      { label: 'Loading', disabled: false, isLoading: true, isSelected: false },
      { label: 'Selected + Loading', disabled: false, isLoading: true, isSelected: true },
      { label: 'Loading + Disabled', disabled: true, isLoading: true, isSelected: false },
      { label: 'Selected + Loading + Disabled', disabled: true, isLoading: true, isSelected: true },
    ] as const;

    const validAppearances: Record<
      (typeof kinds)[number],
      readonly (typeof appearances)[number][]
    > = {
      brand: ['filled', 'tonal', 'outlined', 'ghost'],
      neutral: ['filled', 'tonal', 'outlined', 'ghost'],
      positive: ['filled'],
      negative: ['filled'],
      contrast: ['filled', 'outlined', 'ghost'],
    };

    const hasAppearance = (
      kind: (typeof kinds)[number],
      appearance: (typeof appearances)[number],
    ) => validAppearances[kind].includes(appearance);

    return (
      <table>
        <thead>
          <tr>
            <th aria-hidden="true" />
            <th aria-hidden="true" />
            {appearances.map((appearance) => (
              <th
                key={appearance}
                className={appearance}
              >
                {appearance}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {kinds.map((kind) =>
            states.map(({ label, disabled, isLoading, isSelected }, stateIndex) => (
              <tr
                key={`${kind}-${label}`}
                className={`${kind} ${stateIndex === 0 ? 'separator' : ''}`}
              >
                {stateIndex === 0 && (
                  <td
                    className="appearanceLabel"
                    rowSpan={states.length}
                  >
                    {kind}
                  </td>
                )}
                <td
                  className="stateLabel"
                  data-text={label}
                >
                  {label}
                </td>
                {appearances.map((appearance) => (
                  <td
                    key={`${kind}-${appearance}-${label}`}
                    align="center"
                  >
                    {hasAppearance(kind, appearance) ? (
                      <Button
                        {...args}
                        disabled={disabled}
                        isLoading={isLoading}
                        isSelected={isSelected}
                        kind={kind}
                        appearance={appearance}
                        startEnhancer={Add}
                      />
                    ) : (
                      '-'
                    )}
                  </td>
                ))}
              </tr>
            )),
          )}
        </tbody>
      </table>
    );
  },
};
