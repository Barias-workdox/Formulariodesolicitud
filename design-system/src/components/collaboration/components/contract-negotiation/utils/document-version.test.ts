import { getDocumentVersion } from './document-version';

describe('getDocumentVersion - tests', () => {
  it('should return the correct value', () => {
    const mockVersion = 1;
    const versionText = getDocumentVersion(mockVersion);

    expect(versionText).toEqual(`V ${mockVersion}.0`);
  });
});
