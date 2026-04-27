import { userEvent } from '@testing-library/user-event';
import { vi } from 'vitest';

import { render, screen } from '@test/test-utils';

import { MultipleAvatars } from '../multiple-avatars';

import type { MultipleAvatarsProps } from '../multiple-avatars.interfaces';

const demoAvatars: MultipleAvatarsProps['avatars'] = [
  { id: '1', name: 'Ada Lovelace', initials: 'AL' },
  { id: '2', name: 'Grace Hopper', initials: 'GH' },
  { id: '3', name: 'Alan Turing', initials: 'AT' },
];

const fourAvatars: MultipleAvatarsProps['avatars'] = [
  { id: '1', name: 'Ada Lovelace', initials: 'AL' },
  { id: '2', name: 'Grace Hopper', initials: 'GH' },
  { id: '3', name: 'Alan Turing', initials: 'AT' },
  { id: '4', name: 'Katherine Johnson', initials: 'KJ' },
];

describe('multiple-avatars (next)', () => {
  it('renders null when avatars is empty', () => {
    render(
      <MultipleAvatars
        avatars={[]}
        dataTestId="multiple-avatars-next"
      />,
    );

    expect(screen.queryByTestId('multiple-avatars-next')).not.toBeInTheDocument();
  });

  it('renders maxCount avatars and shows +N counter for overflow', () => {
    render(
      <MultipleAvatars
        avatars={demoAvatars}
        maxCount={2}
        dataTestId="multiple-avatars-next"
      />,
    );

    // two visible avatars
    expect(screen.getByTestId('multiple-avatars-next--avatar-1--root')).toBeInTheDocument();
    expect(screen.getByTestId('multiple-avatars-next--avatar-2--root')).toBeInTheDocument();

    // overflow counter
    expect(screen.getByTestId('multiple-avatars-next--counter')).toHaveTextContent('+1');
  });

  it('renders full +N for double-digit overflow (e.g. +12)', () => {
    const manyAvatars: MultipleAvatarsProps['avatars'] = Array.from({ length: 14 }, (_, i) => ({
      id: String(i + 1),
      name: `User ${i + 1}`,
      initials: `U${i + 1}`,
    }));

    render(
      <MultipleAvatars
        avatars={manyAvatars}
        maxCount={2}
        dataTestId="multiple-avatars-next"
      />,
    );

    // 14 total => only 1 visible and 13 in the counter
    expect(screen.getByTestId('multiple-avatars-next--counter')).toHaveTextContent('+13');
  });

  it('when there are 4 avatars, renders only the first avatar and puts the rest in the counter', () => {
    render(
      <MultipleAvatars
        avatars={fourAvatars}
        maxCount={4}
        dataTestId="multiple-avatars-next"
      />,
    );

    // only the first avatar is visible
    expect(screen.getByTestId('multiple-avatars-next--avatar-1--root')).toBeInTheDocument();
    expect(screen.queryByTestId('multiple-avatars-next--avatar-2--root')).not.toBeInTheDocument();
    expect(screen.queryByTestId('multiple-avatars-next--avatar-3--root')).not.toBeInTheDocument();
    expect(screen.queryByTestId('multiple-avatars-next--avatar-4--root')).not.toBeInTheDocument();

    // rest goes to overflow counter
    expect(screen.getByTestId('multiple-avatars-next--counter')).toHaveTextContent('+3');
  });

  it('fires onAvatarClick when clicking an avatar', async () => {
    const onAvatarClick = vi.fn();

    render(
      <MultipleAvatars
        avatars={demoAvatars}
        maxCount={3}
        dataTestId="multiple-avatars-next"
        onAvatarClick={onAvatarClick}
      />,
    );

    await userEvent.click(screen.getByTestId('multiple-avatars-next--avatar-2--button'));
    expect(onAvatarClick).toHaveBeenCalledWith('2');
  });

  it('does not fire onAvatarClick when disabled', async () => {
    const onAvatarClick = vi.fn();

    render(
      <MultipleAvatars
        avatars={demoAvatars}
        maxCount={3}
        dataTestId="multiple-avatars-next"
        onAvatarClick={onAvatarClick}
        disabled
      />,
    );

    // when disabled, avatars should not be clickable
    expect(screen.queryByTestId('multiple-avatars-next--avatar-1--button')).not.toBeInTheDocument();
    await userEvent.click(screen.getByTestId('multiple-avatars-next--avatar-1--root'));
    expect(onAvatarClick).not.toHaveBeenCalled();
  });

  it('fires onCounterClick when clicking the +N counter', async () => {
    const onCounterClick = vi.fn();

    render(
      <MultipleAvatars
        avatars={demoAvatars}
        maxCount={2}
        dataTestId="multiple-avatars-next"
        onCounterClick={onCounterClick}
      />,
    );

    await userEvent.click(screen.getByTestId('multiple-avatars-next--counter'));
    expect(onCounterClick).toHaveBeenCalledTimes(1);
  });

  it('shows avatar tooltip on hover', async () => {
    render(
      <MultipleAvatars
        avatars={demoAvatars}
        maxCount={3}
        dataTestId="multiple-avatars-next"
      />,
    );

    expect(screen.queryByText('Ada Lovelace')).not.toBeInTheDocument();
    await userEvent.hover(screen.getByTestId('multiple-avatars-next--avatar-1--root'));
    expect(await screen.findByText('Ada Lovelace')).toBeInTheDocument();
  });
});
