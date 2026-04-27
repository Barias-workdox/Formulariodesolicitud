import { useState } from 'react';

import { Button } from '@components/button';
import { FileListItem } from '@components/list/components/file-list-item';
import { Text } from '@components/text';

import { DeleteModal } from '../delete-modal';
import { DeleteModalController } from '../delete-modal-controller';

import type { DeleteModalControllerProps } from '../delete-modal.interfaces';
import type { Meta, StoryFn } from '@storybook/react-vite';

export default {
  title: 'Components/Surfaces/DeleteModal',
  component: DeleteModalController,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/8xKWL7oVg818bv0XyhFHgf/Workflows%3A-Acciones-masivas-en-documentos-de-WF?type=design&node-id=8523%3A8916&mode=design&t=kRt9arExHMIKO0JV-1',
    },
    docs: {
      story: {
        height: '300px',
      },
    },
  },
} as Meta<typeof DeleteModalController>;

/** DeleteModalController component */
const Template: StoryFn<typeof DeleteModalController> = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleConfirm = (): void => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(() => false);
    }, 4000);
  };

  const handleClose = (): void => {
    setIsOpen(false);
    setIsLoading(false);
  };

  return (
    <>
      <Button onClick={(): void => setIsOpen(!isOpen)}>Open Modal</Button>

      {isOpen && (
        <DeleteModalController
          {...props}
          isLoading={isLoading}
          isOpen={isOpen}
          onConfirm={handleConfirm}
          onClose={handleClose}
          confirmText={
            <>
              <Text
                variant="body"
                fontWeight="500"
              >
                ¿Deseas eliminar los siguientes elementos?
              </Text>
              <div
                style={{
                  border: `1px solid grey`,
                }}
              >
                <FileListItem
                  label="Documento de ejemplo.pdf"
                  fileExtension="pdf"
                />
                <FileListItem
                  label="Carpeta de proyectos"
                  fileExtension="folder"
                />
                <FileListItem
                  label="Reporte final.docx"
                  fileExtension="docx"
                />
              </div>
            </>
          }
          startingText={
            <Text
              variant="body"
              margin={0}
              fontWeight="400"
            >
              Si deseas conservar los documentos, haz clic en Cancelar.
            </Text>
          }
        />
      )}
    </>
  );
};

export const Default = Template.bind({});

Default.args = {
  variant: 'simple',
} satisfies Partial<DeleteModalControllerProps>;

export const CustomDisclaimerText = Template.bind({});

CustomDisclaimerText.args = {
  disclaimerText: <DeleteModal.DisclaimerText text="Esta acción es irreversible 👀" />,
} satisfies Partial<DeleteModalControllerProps>;

export const MultipleElements = Template.bind({});

MultipleElements.args = {
  deleteItemsCount: 4,
} satisfies Partial<DeleteModalControllerProps>;

export const ComplexConfirmText = Template.bind({});

ComplexConfirmText.args = {
  deleteItemsCount: 3,
  confirmText: (
    <>
      <Text
        variant="body"
        fontWeight="500"
      >
        ¿Deseas eliminar los siguientes elementos?
      </Text>
      <div
        style={{
          marginTop: '16px',
          maxHeight: '200px',
          overflowY: 'auto',
          minHeight: '0',
        }}
      >
        <FileListItem
          label="Documento de ejemplo.pdf"
          fileExtension="pdf"
        />
        <FileListItem
          label="Carpeta de proyectos"
          fileExtension="folder"
        />
        <FileListItem
          label="Reporte final.docx"
          fileExtension="docx"
        />
      </div>
    </>
  ),
  disclaimerText: (
    <DeleteModal.DisclaimerText text="Esta acción eliminará permanentemente los elementos seleccionados" />
  ),
  startingText: (
    <Text
      variant="body"
      margin={0}
      fontWeight="400"
    >
      Si deseas conservar estos elementos, haz clic en Cancelar antes de que termine el tiempo.
    </Text>
  ),
} satisfies Partial<DeleteModalControllerProps>;
