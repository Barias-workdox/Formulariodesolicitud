import { getPlacementStyles, getShapeStyles } from './badge.styles';

describe('getPlacementStyles function', () => {
  it('returns the correct properties when the placement is topLeft', () => {
    const styles = getPlacementStyles('topLeft');

    expect(styles).toEqual({
      left: '-50%',
      top: '-50%',
    });
  });
  it('returns the correct properties when the placement is topRight', () => {
    const styles = getPlacementStyles('topRight');

    expect(styles).toEqual({
      right: '-50%',
      top: '-50%',
    });
  });
  it('returns the correct properties when the placement is bottomLeft', () => {
    const styles = getPlacementStyles('bottomLeft');

    expect(styles).toEqual({
      left: '-50%',
      bottom: '-50%',
    });
  });
  it('returns the correct properties when the placement is bottomRight', () => {
    const styles = getPlacementStyles('bottomRight');

    expect(styles).toEqual({
      right: '-50%',
      bottom: '-50%',
    });
  });
});

describe('getShapeStyles function', () => {
  it('returns the correct properties when the shape is circle', () => {
    const styles = getShapeStyles('circle');

    expect(styles).toEqual({
      minWidth: '18px',
      height: '18px',
      borderRadius: '50%',
    });
  });
  it('returns the correct properties when the shape is rectangle', () => {
    const styles = getShapeStyles('rectangle');

    expect(styles).toEqual({
      minWidth: '36px',
      height: '18px',
      borderRadius: 0,
    });
  });
  it('returns the correct properties when the shape is pill', () => {
    const styles = getShapeStyles('pill');

    expect(styles).toEqual({
      minWidth: '36px',
      height: '18px',
      borderRadius: '18px',
    });
  });
});
