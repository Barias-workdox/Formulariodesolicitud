import { useCallback, useRef, useState } from 'react';

import { EmptyState } from '@components/empty-state';
import { Text } from '@components/text';
import { getFile } from '@utils/upload-manager/__mocks__/upload-files.mocks';
import { worker } from '@utils/upload-manager/__mocks__/worker.mock';
import { UploadManager } from '@utils/upload-manager/upload-manager';

import { Button } from '../../button/button';
import { mockFilesEveryType, mockWithManyFiles } from '../__mocks__/files.mocks';
import { FileUploadManager } from '../file-upload-manager';

import type { FileUploadManagerStatus } from '../contexts/file-uploader-manager.context';
import type { FileUploadItem } from '../file-upload-manager.interfaces';
import type { Meta, StoryFn } from '@storybook/react-vite';
import type {
  FileData,
  UploadManagerResult,
} from '@utils/upload-manager/upload-manager.interfaces';

export default {
  title: 'Components/Progress & Validation/FileUploadManager',
  component: FileUploadManager,
  args: {
    files: mockFilesEveryType,
    isDraggable: true,
    status: 'uploading',
    hiddenTabs: ['uploading', 'pending', 'canceled'],
    initialTab: 'all',
    position: 'BOTTOM',
    margin: 0,
    onCancelUpload: () => {
      alert('Cancel upload');
    },
    onRetryUpload: () => {
      alert('Retry upload');
    },
    onCloseUpload: () => {
      alert('Close upload');
    },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/5wHMfnjVOtQEAmj82s2xhu/Importaci%C3%B3n-de-documentos-2024?node-id=9953-101137&embed-host=share',
    },
  },
} as Meta<typeof FileUploadManager>;

const Template: StoryFn<typeof FileUploadManager> = (args) => {
  return (
    <div style={{ flex: 1, height: 'calc(100vh - 32px)', position: 'relative' }}>
      <div>
        <Text
          variant="body"
          margin={0}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia accusantium corrupti
          voluptatibus sapiente? Unde ipsum nobis optio dolor asperiores ea quo, debitis quibusdam,
          ipsam voluptates ratione repudiandae sit, natus alias?
        </Text>
        <Text
          variant="body"
          margin={`0 ${16}`}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque quasi fugit
          necessitatibus et animi, eaque reprehenderit rem eum veritatis nostrum ullam, aperiam, nam
          accusamus magni praesentium at nisi blanditiis voluptas!
        </Text>
        <Text
          variant="body"
          margin={0}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus voluptatum et nesciunt
          explicabo nemo at delectus, ea architecto blanditiis totam dignissimos porro iste ad sint
          enim consequuntur magni. Eius, iusto.
        </Text>
      </div>
      <FileUploadManager {...args} />
    </div>
  );
};

export const Default = Template.bind({});

export const Empty = Template.bind({});

Empty.args = {
  files: [],
  status: 'finished',
};

export const WithManyFiles = Template.bind({});

WithManyFiles.args = {
  files: mockWithManyFiles,
};

export const WithOneEmptyTab = Template.bind({});

WithOneEmptyTab.args = {
  files: mockFilesEveryType.filter((file) => file.status !== 'rejected'),
};

export const WithContentHelper = Template.bind({});

WithContentHelper.args = {
  contentHelper: (
    <div style={{ padding: '32px' }}>
      <EmptyState
        title="Content Helper"
        description="Optional secondary content"
        primaryButtonProps={{ text: 'action', onClick: () => alert('Action') }}
      />
    </div>
  ),
  showContentHelper: true,
};

const SimulatedUploadTemplate: StoryFn<typeof FileUploadManager> = () => {
  const [files, setFiles] = useState<FileUploadItem[]>([]);
  const [status, setStatus] = useState<FileUploadManagerStatus>('uploading');
  const [isOpen, setIsOpen] = useState(false);
  const uploaderRef = useRef<UploadManagerResult | null>(null);

  const handleOnUpload = useCallback((batch: FileData[]) => {
    setFiles((prevFiles) => {
      const newFiles = [...prevFiles];

      batch.forEach((file) => {
        const index = newFiles.findIndex((f) => f.id === file.id);

        if (index !== -1) {
          newFiles[index] = {
            ...newFiles[index],
            progress: 0,
            status: 'uploading',
          };
        }
      });

      return newFiles;
    });
  }, []);

  const handleOnProgress = useCallback((batch: FileData[], progress: number) => {
    setFiles((prevFiles) => {
      const newFiles = [...prevFiles];

      batch.forEach((file) => {
        const index = newFiles.findIndex((f) => f.id === file.id);

        if (index !== -1) {
          newFiles[index] = {
            ...newFiles[index],
            progress,
            status: 'uploading',
            onClickAction: () => {
              uploaderRef.current?.cancel(file.id);
            },
          };
        }
      });

      return newFiles;
    });
  }, []);

  const handleOnReject = useCallback((batch: FileData[], err: unknown) => {
    setFiles((prevFiles) => {
      const newFiles = [...prevFiles];

      batch.forEach((file) => {
        const index = newFiles.findIndex((f) => f.id === file.id);

        if (index !== -1) {
          newFiles[index] = {
            ...newFiles[index],
            status: err instanceof DOMException ? 'canceled' : 'rejected',
            reason: err.toString(),
            onClickAction: () => {
              if (err instanceof DOMException) {
                return;
              }

              const { id } = newFiles[index];

              setFiles((prevFiles) =>
                prevFiles
                  .filter((file) => file.id !== id)
                  .concat({ ...newFiles[index], status: 'pending' }),
              );

              uploaderRef.current?.retry(file.id);
            },
          };
        }
      });

      return newFiles;
    });
  }, []);

  const handleOnComplete = useCallback((batch: FileData[]) => {
    setFiles((prevFiles) => {
      const newFiles = [...prevFiles];

      batch.forEach((file) => {
        const index = newFiles.findIndex((f) => f.id === file.id);

        if (index !== -1) {
          newFiles[index] = {
            ...newFiles[index],
            status: 'completed',
            onClickAction: () => {
              alert(`File ${file.name} uploaded successfully`);
            },
          };
        }
      });

      return newFiles;
    });
  }, []);

  const handleStartUpload = useCallback(async () => {
    setFiles([]);
    setStatus('uploading');

    const filesToUpload = [
      getFile(1, 4),
      getFile(2, 6),
      getFile(3, 7),
      getFile(4, 1),
      getFile(5, 3),
      getFile(6, 15),
    ];

    filesToUpload.forEach((file) => {
      setFiles((prevFiles) => [
        ...prevFiles,
        {
          id: file.name,
          name: file.name,
          fileType: 'txt',
          status: 'pending',
          onClickAction: () => {
            uploaderRef.current?.cancel(file.name);
          },
          path: `folder/subfolder/long subfolder name/another folder name/${file.name}`,
        },
      ]);
    });

    uploaderRef.current = UploadManager({
      retryLimit: 1,
      worker: worker([true, true], 1000),
      onComplete: handleOnComplete,
      onReject: handleOnReject,
      onProgress: handleOnProgress,
      onUpload: handleOnUpload,
    });

    setIsOpen(true);
    await uploaderRef.current.upload(filesToUpload);

    setStatus('finished');
  }, [handleOnUpload, handleOnProgress, handleOnReject, handleOnComplete]);

  const handleCancelUpload = async () => {
    await uploaderRef.current?.cancelAll();

    setTimeout(() => {
      setStatus('canceled');
    }, 0);
  };

  return (
    <div style={{ height: 'calc(100vh - 32px)', position: 'relative' }}>
      <Button onClick={handleStartUpload}>Start upload</Button>

      {isOpen && (
        <FileUploadManager
          files={files}
          status={status}
          hiddenTabs={['pending', 'canceled']}
          initialTab="all"
          onCancelUpload={handleCancelUpload}
          position="BOTTOM"
        />
      )}
    </div>
  );
};

export const SimulatedUpload = SimulatedUploadTemplate.bind({});
