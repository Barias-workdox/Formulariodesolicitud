# Upload Manager Flow Documentation

This document provides detailed flow diagrams for the upload manager utilities, explaining how each component works and interacts with others.

## Table of Contents

- [Queue Utility](#queue-utility)
- [Upload Manager](#upload-manager)
- [Upload Process Flow](#upload-process-flow)
- [Retry Mechanism](#retry-mechanism)
- [Cancellation Process](#cancellation-process)
- [Chunk Management](#chunk-management)

## Queue Utility

The queue utility is a generic implementation that processes items one by one using a worker function.

```plantuml
@startuml Queue Utility Flow
title Queue Utility Flow

start
:Create queue with worker function;
note right: queue<TData, TResult>(worker)

:Return enqueue function;

partition "Enqueue Function Flow" {
  :Receive item to process;
  :Add item to queueItems array;
  :Schedule runNext via setTimeout;
}

partition "runNext Function Flow" {
  :Check if already working;
  if (isWorking?) then (yes)
    stop
  endif
  
  if (Queue empty?) then (yes)
    stop
  endif
  
  :Shift first item from queue;
  :Set isWorking = true;
  
  :Create callback function;
  note right
    This callback will:
    1. Set isWorking = false
    2. Process next item
    3. Call original callback with result
  end note
  
  :Execute worker with item and callback;
}

stop
@enduml
```

## Upload Manager

The Upload Manager orchestrates the file upload process, handling batching, retries, and progress tracking.

```plantuml
@startuml Upload Manager Component
title Upload Manager Component

class "UploadManager" as UM {
  - isLoading: boolean
  - pendingBatches: FileData[][][]
  - trash: FileData[][][]
  - currentTask: Task
  - queue: FileData[][][]
  - uploadQueue: Function
  + upload(files: File[]): Promise<void>
  + cancel(id: string): Promise<void>
  + cancelAll(): Promise<void>
  + retry(id: string): Promise<void>
  + retryAll(): Promise<void>
  - addToQueue(batch, signal, onProgress): Promise<boolean>
  - continueQueue(): void
  - prepareTasks(files: File[]): void
  - processChunks(batches: FileData[][]): Promise<ProcessChunksResult>
  - addMultiplesToQueue(multiplesBatches): Promise<ProcessChunksResult>
  - progressQueue(): Promise<void>
  - restart(): Promise<void>
}

@enduml
```

## Upload Process Flow

The following diagram illustrates the complete flow of the upload process.

```plantuml
@startuml Upload Process Flow
title Upload Process Flow

start

:Call upload(files);

:prepareTasks(files);
note right
  1. Convert Files to FileData
  2. Split into chunks if needed
  3. Group into batches
  4. Add first batch to queue
end note

:Set isLoading = true;

while (queue not empty and isLoading) is (true)
  :Shift batch from queue;
  :Call onUpload callback;
  
  :Process chunks in batch;
  note right
    Process all chunks in the batch,
    with retry mechanism for failures
  end note
  
  if (Error occurred?) then (yes)
    :Add failed chunks to trash;
    :Call onReject callback;
  else (no)
    :Call onComplete callback;
  endif
  
  if (Should continue?) then (yes)
    :Continue queue - add next batch;
  endif
end while

:Set isLoading = false;

stop
@enduml
```

## Retry Mechanism

The retry mechanism handles failed uploads and allows retrying specific files or all files.

```plantuml
@startuml Retry Mechanism
title Retry Mechanism

start

partition "retry(id)" {
  :Find batch with file ID in trash;
  
  if (Batch found?) then (no)
    stop
  endif
  
  :Remove file from trash;
  :Keep other files in trash;
  
  :Create new batch with just the file to retry;
  
  if (isLoading?) then (yes)
    :Add to pendingBatches;
  else (no)
    :Set pendingBatches to this batch;
    :Call restart();
  endif
}

partition "retryAll()" {
  :Move all trash to pendingBatches;
  :Clear trash;
  :Call restart();
}

partition "restart()" {
  :Shift first batch from pendingBatches;
  :Add to queue;
  :Set isLoading = true;
  :Process queue;
  :Set isLoading = false;
}

stop
@enduml
```

## Cancellation Process

The following diagram shows how the cancellation process works.

```plantuml
@startuml Cancellation Process
title Cancellation Process

start

partition "cancel(id)" {
  if (File is in current task?) then (yes)
    :Abort current task;
    :Set abort handler to move remaining files back to queue;
  else (no)
    :Filter file from pendingBatches;
    :Move filtered batch to trash;
    :Call onReject callback;
  endif
}

partition "cancelAll()" {
  :Set isLoading = false;
  
  if (Current task exists?) then (yes)
    :Abort current task;
    :Set abort handler to move all pending batches to trash;
    :Call onReject for each batch;
    :Clear pendingBatches;
  endif
}

stop
@enduml
```

## Chunk Management

This diagram illustrates how files are split into chunks and batches.

```plantuml
@startuml Chunk Management
title Chunk Management

start

partition "getChunksToUpload(files, maxChunkSize)" {
  :Iterate through each file;
  
  if (File size > maxChunkSize?) then (yes)
    :Split file into chunks using getChunks();
  else (no)
    :Keep file as is;
  endif
  
  :Return all chunks;
}

partition "getChunks(file, maxChunkSize)" {
  :Calculate total chunks needed;
  :Iterate through each chunk;
  :Create slice of file blob;
  :Return array of chunks;
}

partition "getBatchesGroups(files, maxBatchSize, maxFilesPerBatch)" {
  :Group files by ID;
  
  :Separate multi-part files (same ID);
  
  :Group remaining files by size;
  note right
    - Create new group if:
      1. File exceeds maxBatchSize
      2. Current group would exceed maxBatchSize
      3. Current group would exceed maxFilesPerBatch
  end note
  
  :Return organized batch groups;
}

stop
@enduml
```

## Queue Processing

This diagram shows how the items are processed in the queue.

```plantuml
@startuml Queue Processing
title Queue Processing

start

partition "processChunks(batches)" {
  :Create inner queue with batches;
  :Initialize tracking variables;
  
  while (Inner queue not empty and isLoading) is (true)
    :Shift task from inner queue;
    
    :Try to upload using addToQueue;
    
    if (Upload successful?) then (yes)
      :Add to success list;
    else (no)
      :Add to fails list if max retries reached;
      
      if (Retry < retryLimit) then (yes)
        :Increment retry count;
        :Add back to start of inner queue;
      endif
    endif
  end while
  
  :Return result with fails, success, and continuation flag;
}

stop
@enduml
```
