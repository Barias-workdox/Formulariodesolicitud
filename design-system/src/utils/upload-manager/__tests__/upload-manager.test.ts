import { getFile, restart } from '../__mocks__/upload-files.mocks';
import { worker } from '../__mocks__/worker.mock';
import { UploadManager } from '../upload-manager';

/**
 * Test timing constants
 *
 * These values are used with fake timers to control test execution deterministically.
 * All timings are in milliseconds and chosen to be fast while ensuring reliable test behavior.
 */

// Worker delay configurations (passed to mock worker to simulate upload processing time)
const WORKER_DELAY_FAST = 10; // Fast completion - used for tests that just need to verify final state
const WORKER_DELAY_MEDIUM = 50; // Medium timing - used for cancellation tests where we need to interrupt operations
const WORKER_DELAY_SLOW = 100; // Controlled timing - used for precise single-file operation tests

// Time advancement values (used with vi.advanceTimersByTimeAsync to control fake timer progression)
const TIME_MINIMAL_ADVANCE = 5; // Minimal advance to trigger initial operation without completing it
const TIME_SMALL_ADVANCE = 10; // Small advance for processing async callbacks
const TIME_ADVANCE_PAST_MEDIUM = 55; // Slightly more than WORKER_DELAY_MEDIUM to ensure operation completes
const TIME_ADVANCE_PAST_SLOW = 110; // Slightly more than WORKER_DELAY_SLOW to ensure operation completes

const mockOnUpload = vi.fn((batch) => batch);
const mockOnProgress = vi.fn((batch, progress) => ({ batch, progress }));
const mockOnReject = vi.fn((batch) => batch);
const mockOnComplete = vi.fn((batch) => batch);

const mockFiles = [getFile(1, 31), getFile(2, 4), getFile(3, 5), getFile(4, 21), getFile(5, 1)];

// Helper functions to reduce redundancy
const createManager = (successHistory: boolean[], customDelay?: number) =>
  UploadManager({
    worker: worker(successHistory, customDelay),
    onUpload: mockOnUpload,
    onProgress: mockOnProgress,
    onReject: mockOnReject,
    onComplete: mockOnComplete,
  });

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const expectBatchItems = (batch: any[], expectedItems: [string, number, number][]) => {
  expect(batch.map(({ id, index, parts }) => [id, index, parts])).toEqual(expectedItems);
};

const expectMockCallCounts = ({
  uploadTimes: upload,
  progressTimes: progress,
  rejectTimes: reject,
  completeTimes: complete,
}: {
  uploadTimes: number;
  progressTimes: number;
  rejectTimes: number;
  completeTimes: number;
}) => {
  expect(mockOnUpload).toBeCalledTimes(upload);
  expect(mockOnProgress).toBeCalledTimes(progress);
  expect(mockOnReject).toBeCalledTimes(reject);
  expect(mockOnComplete).toBeCalledTimes(complete);
};

describe('UploadManager', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.clearAllMocks();
    restart();
  });

  afterEach(() => {
    vi.runOnlyPendingTimers();
    vi.useRealTimers();
  });

  it('should log items status correctly', async () => {
    const manager = createManager([true, true, true, true], WORKER_DELAY_FAST);

    const uploadPromise = manager.upload(mockFiles);

    // Run all timers to completion
    await vi.runAllTimersAsync();
    await uploadPromise;

    expectMockCallCounts({ uploadTimes: 3, progressTimes: 16, rejectTimes: 2, completeTimes: 1 });

    // Test upload calls
    const uploadResults = mockOnUpload.mock.results.map(({ value }) => value);

    expectBatchItems(uploadResults[0], [['file-1.txt', 0, 4]]);
    expectBatchItems(uploadResults[1], [['file-4.txt', 0, 3]]);
    expectBatchItems(uploadResults[2], [
      ['file-2.txt', 0, 1],
      ['file-3.txt', 0, 1],
      ['file-5.txt', 0, 1],
    ]);

    // Test progress calls
    const progressResults = mockOnProgress.mock.results.map(({ value }) => value);

    progressResults.forEach(({ batch, progress }, i) => {
      expect(progress).toEqual(100);

      if ([0, 1, 2, 3].includes(i)) {
        expectBatchItems(batch, [['file-1.txt', i, 4]]);
      } else if ([4, 5, 6, 7, 8, 9].includes(i)) {
        expectBatchItems(batch, [['file-4.txt', 0, 3]]);
      } else if ([10, 11, 12, 13, 14, 15].includes(i)) {
        expectBatchItems(batch, [
          ['file-2.txt', 0, 1],
          ['file-3.txt', 0, 1],
          ['file-5.txt', 0, 1],
        ]);
      }
    });

    // Test reject calls
    const rejectResults = mockOnReject.mock.results.map(({ value }) => value);

    expectBatchItems(rejectResults[0], [['file-4.txt', 0, 3]]);
    expectBatchItems(rejectResults[1], [
      ['file-2.txt', 0, 1],
      ['file-3.txt', 0, 1],
      ['file-5.txt', 0, 1],
    ]);

    // Test complete calls
    const completeResults = mockOnComplete.mock.results.map(({ value }) => value);

    expect(
      completeResults[0].map((item: { index: number; parts: number }) => [item.index, item.parts]),
    ).toEqual([[0, 4]]);
  });

  it('should cancel all uploads', async () => {
    const manager = createManager([true, true, true, true], WORKER_DELAY_MEDIUM);

    manager.upload(mockFiles);

    // Advance time to start the first upload and let it progress
    await vi.advanceTimersByTimeAsync(TIME_ADVANCE_PAST_MEDIUM);

    // Cancel all uploads
    await manager.cancelAll();

    // Run remaining timers
    await vi.runAllTimersAsync();

    expectMockCallCounts({ uploadTimes: 1, progressTimes: 1, rejectTimes: 3, completeTimes: 0 });

    const uploadResults = mockOnUpload.mock.results.map(({ value }) => value);

    expectBatchItems(uploadResults[0], [['file-1.txt', 0, 4]]);

    const progressResults = mockOnProgress.mock.results.map(({ value }) => value);

    expect(progressResults[0]).toBeDefined();
    expect(progressResults[0]?.batch).toBeDefined();
    expectBatchItems(progressResults[0].batch, [['file-1.txt', 0, 4]]);
    expect(progressResults[0].progress).toEqual(100);

    const rejectResults = mockOnReject.mock.results.map(({ value }) => value);

    expect(rejectResults[0]).toBeDefined();
    expect(rejectResults[1]).toBeDefined();
    expect(rejectResults[2]).toBeDefined();
    expectBatchItems(rejectResults[0], [['file-4.txt', 0, 3]]);
    expectBatchItems(rejectResults[1], [
      ['file-2.txt', 0, 1],
      ['file-3.txt', 0, 1],
      ['file-5.txt', 0, 1],
    ]);
    expectBatchItems(rejectResults[2], [['file-1.txt', 1, 4]]);
  });

  it('should retry uploads', async () => {
    const manager = createManager(
      [true, true, true, true, true, true, true, true],
      WORKER_DELAY_MEDIUM,
    );

    manager.upload(mockFiles);

    // Advance time to start first upload
    await vi.advanceTimersByTimeAsync(TIME_ADVANCE_PAST_MEDIUM);

    // Cancel all uploads
    await manager.cancelAll();

    // Run timers to process cancellations
    await vi.advanceTimersByTimeAsync(TIME_SMALL_ADVANCE);

    expect(mockOnReject).toHaveBeenCalledTimes(3);

    // Retry all uploads
    const retryPromise = manager.retryAll();

    // Run all timers to complete retries
    await vi.runAllTimersAsync();
    await retryPromise;

    expectMockCallCounts({ uploadTimes: 4, progressTimes: 8, rejectTimes: 3, completeTimes: 3 });

    expect.hasAssertions();
  });

  it('should cancel an upload with id', async () => {
    const manager = createManager([true, true, true, true, true], WORKER_DELAY_SLOW);

    // Start upload but don't await it
    manager.upload(mockFiles);

    // Advance time to start the first upload (file-1.txt first chunk)
    await vi.advanceTimersByTimeAsync(TIME_MINIMAL_ADVANCE);

    // At this point: 1 upload started (file-1.txt chunk 0)
    expect(mockOnUpload).toHaveBeenCalledTimes(1);

    // Cancel file-1 while first chunk is in progress
    await manager.cancel('file-1.txt');

    // Run all remaining timers to complete other uploads
    await vi.runAllTimersAsync();

    // Expected flow after cancellation:
    // - file-1.txt chunk 0: 1 progress (completed before cancel) + cancel triggers 1 reject
    // - file-4.txt: 1 upload + 3 progress (3 chunks) + 1 complete
    // - files 2,3,5: 1 upload + 1 progress (1 batch) + 1 complete
    // Total: 3 uploads, 5 progress, 1 reject, 2 completes
    expectMockCallCounts({
      uploadTimes: 3,
      progressTimes: 5,
      rejectTimes: 1,
      completeTimes: 2,
    });

    expect.hasAssertions();
  });

  it('should retry a rejected upload with id', async () => {
    const manager = createManager([true, true, true, true, true], WORKER_DELAY_SLOW);

    // Start upload but don't await it
    manager.upload(mockFiles);

    // Advance time to start the first upload (file-1.txt first chunk) but not complete it
    await vi.advanceTimersByTimeAsync(TIME_SMALL_ADVANCE);

    // At this point: 1 upload started (file-1.txt chunk 0)
    expect(mockOnUpload).toHaveBeenCalledTimes(1);

    // Cancel file-1 while it's in progress
    await manager.cancel('file-1.txt');

    // Advance timers to trigger the cancellation callback and process it
    await vi.advanceTimersByTimeAsync(TIME_ADVANCE_PAST_SLOW);

    // At this point: file-1.txt is rejected (1 reject total)
    expect(mockOnReject).toHaveBeenCalledTimes(1);

    // Retry the rejected file
    const retryPromise = manager.retry('file-1.txt');

    // Run all remaining timers to complete retry and other uploads
    await vi.runAllTimersAsync();
    await retryPromise;

    // Expected flow:
    // Initial:
    // - file-1.txt chunk 0: 1 upload + 1 progress (completed) + 1 reject (cancelled)
    // After retry:
    // - file-1.txt retry: 1 upload + 4 progress (4 chunks) + 1 complete
    // - file-4.txt: 1 upload + 3 progress (3 chunks, rejected on 3rd)
    // - files 2,3,5: 1 upload + 3 progress (rejected)
    // Note: file-4 and files 2,3,5 get rejected because we only provided 5 success flags
    // Total: 4 uploads, 11 progress, 2 rejects (initial cancel + file-4/files 2,3,5), 2 completes
    expectMockCallCounts({
      uploadTimes: 4,
      progressTimes: 11,
      rejectTimes: 2,
      completeTimes: 2,
    });

    expect.hasAssertions();
  });
});
