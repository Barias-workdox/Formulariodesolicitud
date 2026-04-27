import { describe, expect, it } from '@test/test-utils';

import { getBatchesGroups, getChunks, getChunksToUpload } from '../upload-manager.utils';

import type { FileData } from '../upload-manager.interfaces';

describe('upload-manager.utils', () => {
  describe('getChunks', () => {
    it('should split a file into chunks of the specified maxChunkSize', () => {
      const file: FileData = {
        id: 'file1',
        name: 'file1.txt',
        blob: new Blob(['a'.repeat(1000)]),
        index: 0,
        parts: 1,
        length: 5000,
      };

      const maxChunkSize = 2000;
      const chunks = getChunks(file, maxChunkSize);

      expect(chunks).toHaveLength(3);
      expect(chunks[0].length).toBe(2000);
      expect(chunks[1].length).toBe(2000);
      expect(chunks[2].length).toBe(1000);
    });

    it('should return a single chunk if the file size is less than maxChunkSize', () => {
      const file: FileData = {
        id: 'file1',
        name: 'file1.txt',
        blob: new Blob(['a'.repeat(1000)]),
        index: 0,
        parts: 1,
        length: 1000,
      };

      const maxChunkSize = 2000;
      const chunks = getChunks(file, maxChunkSize);

      expect(chunks).toHaveLength(1);
      expect(chunks[0].length).toBe(1000);
    });
  });

  describe('getChunksToUpload', () => {
    it('should split files into chunks if their size exceeds maxChunkSize', () => {
      const files: FileData[] = [
        {
          id: 'file1',
          name: 'file1.txt',
          blob: new Blob(['a'.repeat(5000)]),
          index: 0,
          parts: 1,
          length: 5000,
        },
        {
          id: 'file2',
          name: 'file2.txt',
          blob: new Blob(['b'.repeat(1000)]),
          index: 0,
          parts: 1,
          length: 1000,
        },
        {
          id: 'file3',
          name: 'file3.txt',
          blob: new Blob(['b'.repeat(1000)]),
          index: 0,
          parts: 1,
          length: 1000,
        },
      ];

      const maxChunkSize = 2000;
      const chunks = getChunksToUpload(files, maxChunkSize);

      expect(chunks).toHaveLength(5);
      expect(chunks[0].length).toBe(2000);
      expect(chunks[1].length).toBe(2000);
      expect(chunks[2].length).toBe(1000);
      expect(chunks[3].length).toBe(1000);
      expect(chunks[4].length).toBe(1000);
    });

    it('should return the file as is if its size is less than maxChunkSize', () => {
      const files: FileData[] = [
        {
          id: 'file1',
          name: 'file1.txt',
          blob: new Blob(['a'.repeat(1000)]),
          index: 0,
          parts: 1,
          length: 2000,
        },
      ];

      const maxChunkSize = 1000;
      const chunks = getChunksToUpload(files, maxChunkSize);

      expect(chunks).toHaveLength(2);
      expect(chunks[0].length).toBe(1000);
      expect(chunks[1].length).toBe(1000);
    });
  });

  describe('getBatchesGroups', () => {
    it('should group files with the same id into separate batches', () => {
      const files: FileData[] = [
        { id: 'file1', name: 'file1.txt', blob: new Blob(['a']), index: 0, parts: 1, length: 11 },
        { id: 'file2', name: 'file2.txt', blob: new Blob(['b']), index: 0, parts: 1, length: 39 },
        { id: 'file3', name: 'file3.txt', blob: new Blob(['c']), index: 0, parts: 1, length: 2 },
        { id: 'file4', name: 'file4.txt', blob: new Blob(['d']), index: 0, parts: 1, length: 3 },
        { id: 'file5', name: 'file5.txt', blob: new Blob(['e']), index: 0, parts: 1, length: 5 },
      ];

      const maxChunkSize = 10;
      const maxBatchSize = maxChunkSize;

      const chunksToUpload = getChunksToUpload(files, maxBatchSize);
      const batchesGroups = getBatchesGroups(chunksToUpload, maxBatchSize);

      expect(batchesGroups).toHaveLength(3);

      expect(batchesGroups[0]).toHaveLength(2);
      expect(batchesGroups[0][0]).toHaveLength(1);
      expect(batchesGroups[0][0][0]).toHaveLength(10);
      expect(batchesGroups[0][1]).toHaveLength(1);
      expect(batchesGroups[0][1][0]).toHaveLength(1);

      expect(batchesGroups[1]).toHaveLength(4);
      expect(batchesGroups[1][0]).toHaveLength(1);
      expect(batchesGroups[1][0][0]).toHaveLength(10);
      expect(batchesGroups[1][1]).toHaveLength(1);
      expect(batchesGroups[1][1][0]).toHaveLength(10);
      expect(batchesGroups[1][2]).toHaveLength(1);
      expect(batchesGroups[1][2][0]).toHaveLength(10);
      expect(batchesGroups[1][3]).toHaveLength(1);
      expect(batchesGroups[1][3][0]).toHaveLength(9);

      expect(batchesGroups[2]).toHaveLength(1);
      expect(batchesGroups[2][0]).toHaveLength(3);
      expect(batchesGroups[2][0][0]).toHaveLength(2);
      expect(batchesGroups[2][0][1]).toHaveLength(3);
      expect(batchesGroups[2][0][2]).toHaveLength(5);
    });

    it('should create a separate batch for files larger than maxBatchSize', () => {
      const files: FileData[] = [
        { id: 'file1', name: 'file1.txt', blob: new Blob(['a']), index: 0, parts: 1, length: 3000 },
        { id: 'file2', name: 'file2.txt', blob: new Blob(['b']), index: 0, parts: 1, length: 1000 },
      ];

      const maxBatchSize = 2000;
      const batches = getBatchesGroups(files, maxBatchSize);

      expect(batches).toHaveLength(2);
      expect(batches[0][0][0].length).toBe(3000); // Large file in its own batch
      expect(batches[1][0]).toHaveLength(1); // Remaining file
    });
  });
});
