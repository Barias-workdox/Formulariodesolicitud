import { useState } from 'react';

import { CheckmarkFilled, ErrorFilled, InformationFilled } from '@carbon/icons-react';

import { lightTheme } from '@themes';
import { extractGroup } from '@themes/v3/utils/colors.utils';

import { sampleDocumentsData } from './__mocks__/documents.mock';
import { FeedFileAction } from './components';

import { FeedFile, StyledFeedFileContainer } from '.';

import type { FeedFileInfoTagProps, FeedFileProps, FeedFileType } from './feed-file.interfaces';
import type { Meta, StoryFn } from '@storybook/react-vite';

export default {
  title: 'Components/Content/FeedFile',
  component: FeedFile,
  args: {
    document: sampleDocumentsData[0],
  },
  argTypes: {
    backgroundColor: {
      options: Object.keys(extractGroup(lightTheme.colors, 'bg')),
      control: { type: 'select' },
    },
  },
} as Meta<typeof FeedFile>;

/** sample helper to validate document & return props for `FeedFileTag`*/
const getFeedFileTagInfo = (
  document: FeedFileProps['document'],
): FeedFileInfoTagProps | undefined => {
  const MAX_SIZE = 45;
  const ACCEPT_FILE_TYPES: FeedFileType['fileExt'][] = ['docx', 'pdf', 'xls', 'xlsx', 'lawgeex'];
  const { size = 1, fileExt } = document;
  if (size > MAX_SIZE) {
    return {
      title: 'Excede Tamaño',
      content: 'El peso maximo de los archivos permitidos a cargar en workflow es de 40MB',
      kind: 'negative',
      icon: ErrorFilled,
    };
  }
  if (!ACCEPT_FILE_TYPES.includes(fileExt)) {
    return {
      title: 'Archivo no soportado',
      content: 'El tipo de archivo no es soportado para la carga en workflow',
      kind: 'warning',
      icon: InformationFilled,
    };
  }
  if (fileExt === 'lawgeex') {
    return {
      title: 'Archivo correcto',
      kind: 'positive',
      icon: CheckmarkFilled,
    };
  }

  return undefined;
};

/** FeedFile */
const Template: StoryFn<typeof FeedFile> = (args: FeedFileProps) => {
  const tagProps = getFeedFileTagInfo(args.document);

  return (
    <FeedFile
      tagProps={tagProps}
      {...args}
    />
  );
};

/** FeedFile with action */
const TemplateWithAction: StoryFn<typeof FeedFile> = (args: FeedFileProps) => {
  const tagProps = getFeedFileTagInfo(args.document);

  return (
    <FeedFile
      tagProps={tagProps}
      {...args}
    >
      <FeedFileAction
        data-testid="feed-file-action"
        action="view"
        onClick={() => alert(`showing #${args.document.id}`)}
      />
    </FeedFile>
  );
};

/** FeedFile wrapped in a container */
const TemplateWithFeedFileContainer: StoryFn<typeof FeedFile> = (args: FeedFileProps) => {
  const [documents, setDocuments] = useState<FeedFileProps['document'][]>(sampleDocumentsData);

  /** sample delete action handler */
  const handleDeleteDocument = (documentId) => {
    alert(`... deleting document: #${documentId}`);
    const newDocumentsList = documents.filter(({ id }) => id !== documentId);

    setDocuments(newDocumentsList);
  };

  return (
    <StyledFeedFileContainer>
      {documents.map((document) => {
        const tagProps = getFeedFileTagInfo(document);

        return (
          <FeedFile
            key={document.id}
            document={document}
            backgroundColor={args.backgroundColor}
            tagProps={tagProps}
          >
            <FeedFileAction
              data-testid="feed-file-action"
              action="download"
              onClick={() => alert(`downloading #${document.id}`)}
            />
            <FeedFileAction
              data-testid="feed-file-action"
              action="delete"
              onClick={() => handleDeleteDocument(document.id)}
            />
          </FeedFile>
        );
      })}
    </StyledFeedFileContainer>
  );
};

/** FeedFile with path showing truncation behavior */
const TemplateWithPath: StoryFn<typeof FeedFile> = (args: FeedFileProps) => {
  const documentWithPath: FeedFileType = {
    ...sampleDocumentsData[0],
    name: 'very-long-name.pdf',
    webkitRelativePath: 'folder1/folder2/folder3/very-long-subfolder-name/very-long-name.pdf',
    fileExt: 'pdf',
  };

  return (
    <div style={{ width: '400px' }}>
      <FeedFile
        {...args}
        document={documentWithPath}
        showPath={true}
      />
    </div>
  );
};

export const Default = Template.bind({});

export const WithFeedFileAction = TemplateWithAction.bind({});

export const WithStyledFeedFileContainer = TemplateWithFeedFileContainer.bind({});

export const WithPath = TemplateWithPath.bind({});
