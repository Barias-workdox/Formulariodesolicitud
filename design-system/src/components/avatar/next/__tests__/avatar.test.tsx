import { userEvent } from '@testing-library/user-event';

import { render, screen } from '@test/test-utils';
import { lightTheme } from '@themes';

import { Avatar } from '../avatar';
import { processInitials } from '../avatar.overrides';

import type { AvatarProps } from '../avatar.interface';
import type { RenderType } from '@test/test-utils';

const baseTestId = 'avatar';

const defaultProps: AvatarProps = {
  'data-testid': baseTestId,
  name: 'Test Name',
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<AvatarProps>): RenderType =>
  render(
    <Avatar
      {...defaultProps}
      {...props}
    />,
  );

describe('Avatar - test', () => {
  test('should render component correctly', () => {
    renderComponent();

    expect(screen.getByTestId(`${baseTestId}--root`)).toBeInTheDocument();
    expect(screen.getByTestId(`${baseTestId}--initials`)).toBeInTheDocument();
    expect(screen.getByText('T')).toBeInTheDocument();
  });

  test('should render component correctly when is disabled', () => {
    renderComponent({ disabled: true });

    const avatarElement = screen.getByTestId(`${baseTestId}--root`);

    expect(avatarElement).toHaveStyle(`backgroundColor: '${lightTheme.colors.neutralDepressed}'`);
  });

  test('should render tooltip correctly', async () => {
    renderComponent();

    const avatarElement = screen.getByTestId(`${baseTestId}--root`);

    await userEvent.hover(avatarElement);

    expect(await screen.findByText(defaultProps.name!)).toBeInTheDocument();
  });

  test('should not show tooltip when showTooltip is false', async () => {
    renderComponent({ showTooltip: false });

    const avatarElement = screen.getByTestId(`${baseTestId}--root`);

    await userEvent.hover(avatarElement);

    expect(screen.queryByText(defaultProps.name!)).not.toBeInTheDocument();
  });

  test('should show tooltip by default (showTooltip true)', async () => {
    renderComponent({ showTooltip: true });

    const avatarElement = screen.getByTestId(`${baseTestId}--root`);

    await userEvent.hover(avatarElement);

    expect(await screen.findByText(defaultProps.name!)).toBeInTheDocument();
  });

  test('should not render role="button" when not clickable', () => {
    renderComponent({ clickable: false });

    const avatarElement = screen.getByTestId(`${baseTestId}--root`);

    expect(avatarElement).not.toHaveAttribute('role', 'button');
  });

  test('should set alt attribute with name value when image is provided', () => {
    const testName = 'John Doe';
    const testSrc = 'https://example.com/avatar.jpg';

    renderComponent({ name: testName, src: testSrc });

    const avatarImage = screen.getByTestId(`${baseTestId}--image`);

    expect(avatarImage).toHaveAttribute('alt', testName);
  });

  describe('initials functionality', () => {
    test('should show 2 characters for 44px size', () => {
      renderComponent({ initials: 'AB', size: '44px' });
      expect(screen.getByText('AB')).toBeInTheDocument();
    });

    test('should show 1 character for 32px size', () => {
      renderComponent({ initials: 'AB', size: '32px' });
      expect(screen.getByText('A')).toBeInTheDocument();
    });

    test('should show 1 character for 24px size', () => {
      renderComponent({ initials: 'AB', size: '24px' });
      expect(screen.getByText('A')).toBeInTheDocument();
    });

    test('should truncate long initials for 44px size', () => {
      renderComponent({ initials: 'ABCDEF', size: '44px' });
      expect(screen.getByText('AB')).toBeInTheDocument();
    });

    test('should truncate long initials for 32px size', () => {
      renderComponent({ initials: 'ABCDEF', size: '32px' });
      expect(screen.getByText('A')).toBeInTheDocument();
    });

    test('should handle empty initials', () => {
      renderComponent({ initials: '', size: '44px' });
      expect(screen.getByTestId(`${baseTestId}--root`)).toBeInTheDocument();
    });

    test('should work as fallback when no src is provided', () => {
      renderComponent({ initials: 'FB', size: '44px', src: undefined });
      expect(screen.getByText('FB')).toBeInTheDocument();
    });
  });

  describe('processInitials utility function', () => {
    test('should return up to 2 characters for 44px size', () => {
      expect(processInitials('AB', '44px')).toBe('AB');
      expect(processInitials('ABCDEF', '44px')).toBe('AB');
    });

    test('should return up to 1 character for 32px size', () => {
      expect(processInitials('AB', '32px')).toBe('A');
      expect(processInitials('ABCDEF', '32px')).toBe('A');
    });

    test('should return up to 1 character for 24px size', () => {
      expect(processInitials('AB', '24px')).toBe('A');
      expect(processInitials('ABCDEF', '24px')).toBe('A');
    });

    test('should handle undefined initials', () => {
      expect(processInitials(undefined, '44px')).toBeUndefined();
    });

    test('should handle empty string', () => {
      expect(processInitials('', '44px')).toBeUndefined();
      expect(processInitials('   ', '44px')).toBeUndefined();
    });

    test('should convert to uppercase', () => {
      expect(processInitials('ab', '44px')).toBe('AB');
      expect(processInitials('abcdef', '32px')).toBe('A');
    });

    test('should trim whitespace', () => {
      expect(processInitials('  AB  ', '44px')).toBe('AB');
      expect(processInitials('  AB  ', '32px')).toBe('A');
    });

    test('should use name as fallback when initials are not provided', () => {
      expect(processInitials(undefined, '44px', 'John Doe')).toBe('JD');
      expect(processInitials(undefined, '32px', 'John Doe')).toBe('J');
      expect(processInitials(undefined, '24px', 'John Doe')).toBe('J');
    });

    test('should handle single word names as fallback', () => {
      expect(processInitials(undefined, '44px', 'John')).toBe('J');
      expect(processInitials(undefined, '32px', 'John')).toBe('J');
      expect(processInitials(undefined, '24px', 'John')).toBe('J');
    });

    test('should handle multiple word names as fallback', () => {
      expect(processInitials(undefined, '44px', 'John Michael Doe')).toBe('JM');
      expect(processInitials(undefined, '32px', 'John Michael Doe')).toBe('J');
      expect(processInitials(undefined, '24px', 'John Michael Doe')).toBe('J');
    });

    test('should prioritize initials over name when both are provided', () => {
      expect(processInitials('XY', '44px', 'John Doe')).toBe('XY');
      expect(processInitials('XY', '32px', 'John Doe')).toBe('X');
    });

    test('should handle empty strings in name fallback', () => {
      expect(processInitials('', '44px', 'John Doe')).toBe('JD');
      expect(processInitials('   ', '32px', 'John Doe')).toBe('J');
    });

    test('should return undefined when both initials and name are not provided', () => {
      expect(processInitials(undefined, '44px', undefined)).toBeUndefined();
      expect(processInitials(undefined, '44px', '')).toBeUndefined();
      expect(processInitials('', '44px', '')).toBeUndefined();
    });

    test('should handle names with extra whitespace', () => {
      expect(processInitials(undefined, '44px', '  John   Doe  ')).toBe('JD');
      expect(processInitials(undefined, '32px', '  John   Doe  ')).toBe('J');
    });

    test('should convert name initials to uppercase', () => {
      expect(processInitials(undefined, '44px', 'john doe')).toBe('JD');
      expect(processInitials(undefined, '32px', 'john doe')).toBe('J');
    });
  });
});
