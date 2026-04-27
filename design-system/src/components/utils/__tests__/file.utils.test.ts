import { bytesToShortNotation, isFiletypeAccepted } from '../files/file.utils';

describe('bytesToShortNotation - tests', () => {
  it('should display 750 bytes', () => {
    expect(bytesToShortNotation(750)).toEqual('750 Bytes');
  });

  it('should display 2 KB for 2000 bytes', () => {
    expect(bytesToShortNotation(2_048)).toEqual('2 KB');
  });

  it('should display 2.07 MB for 2_070_000 bytes', () => {
    expect(bytesToShortNotation(2_170_552)).toEqual('2.07 MB');
  });

  it('should display 5.8 GB for 5_800_000_000 bytes', () => {
    expect(bytesToShortNotation(6_227_702_579)).toEqual('5.8 GB');
  });
});

describe('isFiletypeAccepted', () => {
  it('should return true if no file or acceptedFiles are provided', () => {
    const file = undefined;
    const acceptedFiles = undefined;

    expect(isFiletypeAccepted(file, acceptedFiles)).toEqual(true);
  });

  it('should return true if file type matches acceptedFiles', () => {
    const file = new File([''], 'test.png', { type: 'image/png' });
    const acceptedFiles = 'image/png';

    expect(isFiletypeAccepted(file, acceptedFiles)).toEqual(true);
  });

  it('should return false if file type does not match acceptedFiles', () => {
    const file = new File([''], 'test.jpg', { type: 'image/jpeg' });
    const acceptedFiles = 'image/png';

    expect(isFiletypeAccepted(file, acceptedFiles)).toEqual(false);
  });

  it('should return true if file extension matches acceptedFiles', () => {
    const file = new File([''], 'test.png', { type: 'image/png' });
    const acceptedFiles = '.png';

    expect(isFiletypeAccepted(file, acceptedFiles)).toEqual(true);
  });

  it('should return false if file extension does not match acceptedFiles', () => {
    const file = new File([''], 'test.jpg', { type: 'image/jpeg' });
    const acceptedFiles = '.png';

    expect(isFiletypeAccepted(file, acceptedFiles)).toEqual(false);
  });

  it('should return true if file type matches wildcard acceptedFiles', () => {
    const file = new File([''], 'test.png', { type: 'image/png' });
    const acceptedFiles = 'image/*';

    expect(isFiletypeAccepted(file, acceptedFiles)).toEqual(true);
  });

  it('should return false if file type does not match wildcard acceptedFiles', () => {
    const file = new File([''], 'test.txt', { type: 'text/plain' });
    const acceptedFiles = 'image/*';

    expect(isFiletypeAccepted(file, acceptedFiles)).toEqual(false);
  });

  it('should return true if file type matches one of the acceptedFiles in array', () => {
    const file = new File([''], 'test.png', { type: 'image/png' });
    const acceptedFiles = ['image/jpeg', 'image/png'];

    expect(isFiletypeAccepted(file, acceptedFiles)).toEqual(true);
  });

  it('should return false if file type does not match any of the acceptedFiles in array', () => {
    const file = new File([''], 'test.txt', { type: 'text/plain' });
    const acceptedFiles = ['image/jpeg', 'image/png'];

    expect(isFiletypeAccepted(file, acceptedFiles)).toEqual(false);
  });
});
