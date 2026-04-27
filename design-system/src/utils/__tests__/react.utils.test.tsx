import { getStringFromReactNode } from '@utils/react.utils';

describe('getStringFromReactNode', () => {
  it('returns the same string when given a string', () => {
    expect(getStringFromReactNode('Hello')).toBe('Hello');
  });

  it('returns the number as string when given a number', () => {
    expect(getStringFromReactNode(123)).toBe('123');
  });

  it('returns concatenated text from multiple children', () => {
    const node = (
      <>
        Hello <span>world</span>!
      </>
    );

    expect(getStringFromReactNode(node)).toBe('Hello world!');
  });

  it('returns nested text from deeply nested elements', () => {
    const node = (
      <div>
        <p>
          This is <strong>deep</strong> inside
        </p>
      </div>
    );

    expect(getStringFromReactNode(node)).toBe('This is deep inside');
  });

  it('returns empty string when given null, undefined or a boolean', () => {
    expect(getStringFromReactNode(null)).toBe('');
    expect(getStringFromReactNode(undefined)).toBe('');
    expect(getStringFromReactNode(true)).toBe('');
  });

  it('handles arrays of nodes', () => {
    const node = ['Hello', <span key="1"> world</span>, '!', 42];

    expect(getStringFromReactNode(node)).toBe('Hello world!42');
  });
});
