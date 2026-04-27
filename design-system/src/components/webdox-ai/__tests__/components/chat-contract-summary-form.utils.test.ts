import {
  inlineInputToggle,
  mapMetadataListValue,
  mapMetadataMode,
  resetValues,
} from '../../components/data-extraction/components/data-extraction-beta/data-extraction-beta.utils';

import type { MetadataListMode } from '../../components/data-extraction/components/data-extraction-beta/data-extraction-beta.interfaces';
import type { InlineEditInputMode } from '@components/inline-edit-input';
import type { MessageListItemType } from '@components/webdox-ai/interfaces/chat-bot-component.interface';

describe('inlineInputToggle function', () => {
  it('should toggle to input mode if currently in caption mode', () => {
    const mode: InlineEditInputMode = 'caption';
    const toggledMode = inlineInputToggle(mode);

    expect(toggledMode).toEqual('input');
  });

  it('should toggle to caption mode if currently in input mode', () => {
    const mode: InlineEditInputMode = 'input';
    const toggledMode = inlineInputToggle(mode);

    expect(toggledMode).toEqual('caption');
  });
});

describe('resetValues function', () => {
  it('should return an empty object if metadataList and localValues are empty', () => {
    const metadataList: MessageListItemType[] = [];
    const localValues: Record<string, string> = {};
    const result = resetValues({ metadataList, localValues, prevMode: {} });

    expect(result).toEqual({});
  });

  it('should keep input mode if localValues has been updated', () => {
    const metadataList: MessageListItemType[] = [
      { id: '1', value: 'content 1' },
      { id: '2', value: 'content 2' },
    ];
    const localValues: Record<string, string> = {
      1: 'updated content 1',
      2: 'content 2',
    };
    const prevMode: MetadataListMode = {
      1: 'input',
      2: 'caption',
    };
    const result = resetValues({ metadataList, localValues, prevMode });

    expect(result).toEqual({
      1: 'input',
      2: 'caption',
    });
  });

  it('should keep caption mode if localValues has not been updated', () => {
    const metadataList: MessageListItemType[] = [
      { id: '1', value: 'content 1' },
      { id: '2', value: 'content 2' },
    ];
    const localValues: Record<string, string> = {
      1: 'content 1',
      2: 'content 2',
    };
    const prevMode: MetadataListMode = {
      1: 'input',
      2: 'caption',
    };
    const result = resetValues({ metadataList, localValues, prevMode });

    expect(result).toEqual({
      1: 'caption',
      2: 'caption',
    });
  });
});

describe('mapMetadataMode function', () => {
  it('should return an empty object if metadataList is empty', () => {
    const metadataList: MessageListItemType[] = [];
    const result = mapMetadataMode(metadataList);

    expect(result).toEqual({});
  });

  it('should map each metadata item to caption mode', () => {
    const metadataList: MessageListItemType[] = [
      { id: '1', value: 'content 1' },
      { id: '2', value: 'content 2' },
    ];
    const result = mapMetadataMode(metadataList);

    expect(result).toEqual({
      1: 'caption',
      2: 'caption',
    });
  });
});

describe('mapMetadataListValue function', () => {
  it('should map metadata list values correctly', () => {
    const metadataList: MessageListItemType[] = [
      { id: '1', value: 'value 1' },
      { id: '2', value: 'value 2' },
    ];
    const result = mapMetadataListValue(metadataList);

    expect(result).toEqual({
      '1': 'value 1',
      '2': 'value 2',
    });
  });

  it('should handle empty metadata list', () => {
    const metadataList: MessageListItemType[] = [];
    const result = mapMetadataListValue(metadataList);

    expect(result).toEqual({});
  });

  it('should handle metadata list with duplicate ids', () => {
    const metadataList: MessageListItemType[] = [
      { id: '1', value: 'value 1' },
      { id: '1', value: 'value 2' },
    ];
    const result = mapMetadataListValue(metadataList);

    expect(result).toEqual({ '1': 'value 2' });
  });
});
