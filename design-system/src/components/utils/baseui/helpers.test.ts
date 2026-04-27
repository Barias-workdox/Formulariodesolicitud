import { mergeOverridesDeep } from './helpers';

describe('mergeOverridesDeep', () => {
  // Test when merging two simple overrides
  it('should deeply merge two overrides', () => {
    const overrides1 = { Root: { style: { color: 'blue' } } };
    const overrides2 = { Root: { style: { fontSize: '16px' } } };

    const result = mergeOverridesDeep(overrides1, overrides2);

    expect(result).toEqual({
      Root: {
        style: {
          color: 'blue',
          fontSize: '16px',
        },
      },
    });
  });

  // Test when merging multiple overrides
  it('should deeply merge multiple overrides', () => {
    const overrides1 = { Root: { style: { color: 'blue' } } };
    const overrides2 = { Root: { style: { fontSize: '16px' } } };
    const overrides3 = { Root: { style: { fontWeight: 'bold' } } };

    const result = mergeOverridesDeep(overrides1, overrides2, overrides3);

    expect(result).toEqual({
      Root: {
        style: {
          color: 'blue',
          fontSize: '16px',
          fontWeight: 'bold',
        },
      },
    });
  });

  // Test when merging overrides with different keys
  it('should merge overrides with different keys', () => {
    const overrides1 = { Root: { style: { color: 'blue' } } };
    const overrides2 = { Container: { style: { padding: '10px' } } };

    const result = mergeOverridesDeep(overrides1, overrides2);

    expect(result).toEqual({
      Root: {
        style: {
          color: 'blue',
        },
      },
      Container: {
        style: {
          padding: '10px',
        },
      },
    });
  });

  // Test when input is empty
  it('should return an empty object when no overrides are provided', () => {
    const result = mergeOverridesDeep();

    expect(result).toEqual({});
  });

  // Test when one of the overrides is null
  it('should ignore null overrides and merge the rest', () => {
    const overrides1 = { Root: { style: { color: 'blue' } } };
    const overrides2 = null;

    const result = mergeOverridesDeep(overrides1, overrides2);

    expect(result).toEqual({
      Root: {
        style: {
          color: 'blue',
        },
      },
    });
  });

  // Test when one of the overrides is not an object
  it('should ignore overrides that are not objects', () => {
    const overrides1 = { Root: { style: { color: 'blue' } } };
    const overrides2 = "I'm not an object!";

    const result = mergeOverridesDeep(overrides1, overrides2);

    expect(result).toEqual({
      Root: {
        style: {
          color: 'blue',
        },
      },
    });
  });

  // Test when overriding with empty objects
  it('should return the original overrides if the others are empty objects', () => {
    const overrides1 = { Root: { style: { color: 'blue' } } };
    const overrides2 = {};

    const result = mergeOverridesDeep(overrides1, overrides2);

    expect(result).toEqual({
      Root: {
        style: {
          color: 'blue',
        },
      },
    });
  });

  // Test when input overrides have conflicting values
  it('should use the value from the last override in case of conflict', () => {
    const overrides1 = { Root: { style: { color: 'blue' } } };
    const overrides2 = { Root: { style: { color: 'red' } } };

    const result = mergeOverridesDeep(overrides1, overrides2);

    expect(result).toEqual({
      Root: {
        style: {
          color: 'red',
        },
      },
    });
  });
});
