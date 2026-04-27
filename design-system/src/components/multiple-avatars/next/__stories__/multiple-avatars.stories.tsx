import type { ReactElement } from 'react';

import { Tag } from '@components/tag/next';

import { MultipleAvatars } from '..';
import {
  multipleAvatarsTagKindMap,
  type MultipleAvatarsProps,
} from '../multiple-avatars.interfaces';
import { getCounterText } from '../multiple-avatars.utils';

import type { Meta } from '@storybook/react-vite';

const demoOnAvatarClick: NonNullable<MultipleAvatarsProps['onAvatarClick']> = (id) => {
  console.info('MultipleAvatars: onAvatarClick', { id });
  window.alert(`MultipleAvatars: onAvatarClick("${id}")`);
};

const demoOnCounterClick: NonNullable<MultipleAvatarsProps['onCounterClick']> = () => {
  console.info('MultipleAvatars: onCounterClick');
  window.alert('MultipleAvatars: onCounterClick()');
};

const demoAvatars: MultipleAvatarsProps['avatars'] = [
  {
    id: '1',
    name: 'Ada Lovelace',
    src: 'https://avatars.githubusercontent.com/u/583231?v=4',
    initials: 'AL',
  },
  {
    id: '2',
    name: 'Grace Hopper',
    src: 'https://avatars.githubusercontent.com/u/583231?v=4',
    initials: 'GH',
  },
  {
    id: '3',
    name: 'Alan Turing',
    initials: 'AT',
  },
  {
    id: '4',
    name: 'Katherine Johnson',
    initials: 'KJ',
  },
  {
    id: '5',
    name: 'Margaret Hamilton',
    initials: 'MH',
  },
];

const demoAvatarsAllImages: MultipleAvatarsProps['avatars'] = demoAvatars.map((avatar) => ({
  ...avatar,
  src: avatar.src ?? 'https://avatars.githubusercontent.com/u/583231?v=4',
}));

const demoAvatarsAllInitials: MultipleAvatarsProps['avatars'] = demoAvatars.map(
  ({ src: _src, ...avatar }) => avatar,
);

const sizesVariants = ['24px', '32px'] as const;
const kindVariants = ['users', 'companies', 'groups', 'people'] as const;
const appearanceVariants = ['image', 'initials', 'mixed'] as const;
const disabledVariants = [false, true] as const;

const createDemoAvatars = (count: number): MultipleAvatarsProps['avatars'] =>
  Array.from({ length: count }, (_, i) => ({
    id: String(i + 1),
    name: `User ${i + 1}`,
    initials: `U${i + 1}`,
  }));

const avatarsForOverflow1 = createDemoAvatars(4); // maxCount=3 => overflow=1
const avatarsForOverflow12 = createDemoAvatars(15); // maxCount=3 => overflow=14
const avatarsForOverflow123 = createDemoAvatars(126); // maxCount=3 => overflow=123 (125 digits)
const avatarsForOverflow12_5K = createDemoAvatars(12503); // maxCount=0 => overflow=12,500 (+12.5K)

const avatarsTotal1 = createDemoAvatars(1);
const avatarsTotal2 = createDemoAvatars(2);
const avatarsTotal3 = createDemoAvatars(3);
const avatarsTotal4 = createDemoAvatars(4); // >= 4 => should collapse to 1 avatar + counter

export default {
  title: 'Components/Content/MultipleAvatars/Next',
  component: MultipleAvatars,
  args: {
    avatars: demoAvatars,
    kind: 'users',
    appearance: 'mixed',
    sizes: '32px',
    maxCount: 3,
    disabled: false,
    onAvatarClick: demoOnAvatarClick,
    onCounterClick: demoOnCounterClick,
    dataTestId: 'multiple-avatars',
  },
  argTypes: {
    kind: {
      control: { type: 'select' },
      options: ['users', 'companies', 'groups', 'people'],
    },
    appearance: {
      control: { type: 'select' },
      options: ['image', 'initials', 'mixed'],
    },
    sizes: {
      control: { type: 'select' },
      options: ['24px', '32px'],
      description: 'Used on ≥1280px. On smaller breakpoints it forces 24px.',
    },
    maxCount: { control: { type: 'number', min: 0, step: 1 } },
    onAvatarClick: { action: 'onAvatarClick' },
    onCounterClick: { action: 'onCounterClick' },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/PbZuyyTRGoXBcqFm848rvy/%F0%9F%92%A0-Nuclear-Components?node-id=20317-17728&t=Y8tm13afvnX5DMDP-4',
    },
  },
} as Meta<typeof MultipleAvatars>;

export const VariantsMatrix = (): ReactElement => {
  return (
    <div style={{ overflowX: 'auto' }}>
      <table
        style={{
          borderCollapse: 'collapse',
          width: '100%',
          minWidth: 720,
        }}
      >
        <thead>
          <tr>
            <th
              style={{
                textAlign: 'left',
                padding: 8,
                borderBottom: '1px solid rgba(0,0,0,0.1)',
                position: 'sticky',
                left: 0,
                background: 'var(--sb-background, #fff)',
              }}
            >
              kind / sizes / state
            </th>
            {appearanceVariants.map((appearance) => (
              <th
                key={appearance}
                style={{
                  textAlign: 'left',
                  padding: 8,
                  borderBottom: '1px solid rgba(0,0,0,0.1)',
                }}
              >
                {appearance}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {kindVariants.flatMap((kind) =>
            sizesVariants.flatMap((sizes) =>
              disabledVariants.map((disabled) => (
                <tr key={`${kind}-${sizes}-${disabled ? 'disabled' : 'enabled'}`}>
                  <td
                    style={{
                      padding: 8,
                      borderBottom: '1px solid rgba(0,0,0,0.06)',
                      position: 'sticky',
                      left: 0,
                      background: 'var(--sb-background, #fff)',
                      whiteSpace: 'nowrap',
                      fontFamily:
                        'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
                      fontSize: 12,
                    }}
                  >
                    {kind} · {sizes} · {disabled ? 'disabled' : 'enabled'}
                  </td>
                  {appearanceVariants.map((appearance) => (
                    <td
                      key={appearance}
                      style={{
                        padding: 8,
                        borderBottom: '1px solid rgba(0,0,0,0.06)',
                        verticalAlign: 'middle',
                      }}
                    >
                      <MultipleAvatars
                        avatars={
                          appearance === 'image'
                            ? demoAvatarsAllImages
                            : appearance === 'initials'
                              ? demoAvatarsAllInitials
                              : demoAvatars
                        }
                        kind={kind}
                        appearance={appearance}
                        sizes={sizes}
                        maxCount={3}
                        disabled={disabled}
                        onAvatarClick={demoOnAvatarClick}
                        onCounterClick={demoOnCounterClick}
                      />
                    </td>
                  ))}
                </tr>
              )),
            ),
          )}
        </tbody>
      </table>
    </div>
  );
};

VariantsMatrix.parameters = {
  controls: { disable: true, hideNoControlsWarning: true },
  actions: { disable: true },
};

export const CounterFormats = (): ReactElement => {
  return (
    <div style={{ display: 'grid', gap: 16, maxWidth: 820 }}>
      <div style={{ fontSize: 12, opacity: 0.75, marginBottom: 8 }}>
        Total avatars (1, 2, 3, 4). When total is 4+, it collapses to 1 visible avatar + counter.
      </div>

      <div>
        <div style={{ fontSize: 12, opacity: 0.75, marginBottom: 8 }}>Total = 1</div>
        <MultipleAvatars
          avatars={avatarsTotal1}
          maxCount={3}
          sizes="32px"
          kind="users"
          onAvatarClick={demoOnAvatarClick}
          onCounterClick={demoOnCounterClick}
        />
      </div>

      <div>
        <div style={{ fontSize: 12, opacity: 0.75, marginBottom: 8 }}>Total = 2</div>
        <MultipleAvatars
          avatars={avatarsTotal2}
          maxCount={3}
          sizes="32px"
          kind="users"
          onAvatarClick={demoOnAvatarClick}
          onCounterClick={demoOnCounterClick}
        />
      </div>

      <div>
        <div style={{ fontSize: 12, opacity: 0.75, marginBottom: 8 }}>Total = 3</div>
        <MultipleAvatars
          avatars={avatarsTotal3}
          maxCount={3}
          sizes="32px"
          kind="users"
          onAvatarClick={demoOnAvatarClick}
          onCounterClick={demoOnCounterClick}
        />
      </div>

      <div>
        <div style={{ fontSize: 12, opacity: 0.75, marginBottom: 8 }}>
          Total = 4 (1 avatar + counter)
        </div>
        <MultipleAvatars
          avatars={avatarsTotal4}
          maxCount={3}
          sizes="32px"
          kind="users"
          onAvatarClick={demoOnAvatarClick}
          onCounterClick={demoOnCounterClick}
        />
      </div>

      <hr style={{ width: '100%', border: 0, borderTop: '1px solid rgba(0,0,0,0.12)' }} />

      <div>
        <div style={{ fontSize: 12, opacity: 0.75, marginBottom: 8 }}>1 digit (overflow = 3)</div>
        <MultipleAvatars
          avatars={avatarsForOverflow1}
          maxCount={3}
          sizes="32px"
          kind="users"
          onAvatarClick={demoOnAvatarClick}
          onCounterClick={demoOnCounterClick}
        />
      </div>

      <div>
        <div style={{ fontSize: 12, opacity: 0.75, marginBottom: 8 }}>2 digits (overflow = 14)</div>
        <MultipleAvatars
          avatars={avatarsForOverflow12}
          maxCount={3}
          sizes="32px"
          kind="companies"
          onAvatarClick={demoOnAvatarClick}
          onCounterClick={demoOnCounterClick}
        />
      </div>

      <div>
        <div style={{ fontSize: 12, opacity: 0.75, marginBottom: 8 }}>
          3 digits (overflow = 125)
        </div>
        <MultipleAvatars
          avatars={avatarsForOverflow123}
          maxCount={3}
          sizes="32px"
          kind="people"
          onAvatarClick={demoOnAvatarClick}
          onCounterClick={demoOnCounterClick}
        />
      </div>

      <div>
        <div style={{ fontSize: 12, opacity: 0.75, marginBottom: 8 }}>K (overflow = 12,500)</div>
        <MultipleAvatars
          avatars={avatarsForOverflow12_5K}
          maxCount={3}
          appearance="initials"
          sizes="32px"
          kind="groups"
          onAvatarClick={demoOnAvatarClick}
          onCounterClick={demoOnCounterClick}
        />
      </div>

      <div>
        <div style={{ fontSize: 12, opacity: 0.75, marginBottom: 8 }}>
          M (overflow = 1,000,000) Simulation to avoid memory overload
        </div>
        <Tag
          kind={multipleAvatarsTagKindMap.companies}
          variant="light"
          size="lg"
        >
          {getCounterText(1_000_000)}
        </Tag>
      </div>
    </div>
  );
};

CounterFormats.parameters = {
  controls: { disable: true, hideNoControlsWarning: true },
  actions: { disable: true },
};
