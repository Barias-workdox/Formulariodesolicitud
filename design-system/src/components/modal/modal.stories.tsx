import { useState } from 'react';

import { Button } from '../button';

import { Modal } from './modal';
import {
  RegularModalBody,
  RegularModalFooter,
  RegularModalHeader,
  RegularModalLabel,
} from './regular-modal';
import { SectionedModalBody, SectionedModalFooter, SectionedModalHeader } from './sectioned-modal';

import type { Meta, StoryFn } from '@storybook/react-vite';

export default {
  title: 'Components/Surfaces/Modal',
  component: Modal,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/eMhywyfWwKMjIyemY3PDoK/Design-System-Webdox-1.0?type=design&node-id=4305-12810&mode=dev',
    },
    docs: {
      story: {
        height: '300px',
      },
    },
  },
} as Meta<typeof Modal>;

/** A Regular Modal */
const TemplateRegular: StoryFn<typeof Modal> = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={(): void => setIsOpen(!isOpen)}>Open Modal</Button>
      <Modal
        onClose={(): void => setIsOpen(false)}
        isOpen={isOpen}
        {...args}
      >
        <RegularModalHeader>Header</RegularModalHeader>
        <RegularModalBody>Body</RegularModalBody>
        <RegularModalFooter>Footer</RegularModalFooter>
      </Modal>
    </>
  );
};

/** A Sectioned Modal */
const TemplateSectioned: StoryFn<typeof Modal> = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={(): void => setIsOpen(!isOpen)}>Open Sectioned Modal</Button>
      <Modal
        onClose={(): void => setIsOpen(false)}
        isOpen={isOpen}
        {...args}
      >
        <SectionedModalHeader>Header</SectionedModalHeader>
        <SectionedModalBody>Body</SectionedModalBody>
        <SectionedModalFooter>Footer</SectionedModalFooter>
      </Modal>
    </>
  );
};

/** A Regular Modal with Label */
const TemplateWithLabel: StoryFn<typeof Modal> = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={(): void => setIsOpen(!isOpen)}>Open Modal with Label</Button>
      <Modal
        onClose={(): void => setIsOpen(false)}
        isOpen={isOpen}
        {...args}
      >
        <RegularModalHeader>
          <RegularModalLabel>Label</RegularModalLabel>
          Header text
        </RegularModalHeader>
        <RegularModalBody>Body</RegularModalBody>
        <RegularModalFooter>Footer</RegularModalFooter>
      </Modal>
    </>
  );
};

/** A modal without header  */
const TemplateWithoutHeader: StoryFn<typeof Modal> = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={(): void => setIsOpen(!isOpen)}>Open Modal</Button>
      <Modal
        onClose={(): void => setIsOpen(false)}
        isOpen={isOpen}
        {...args}
      >
        <RegularModalBody>Body</RegularModalBody>
        <RegularModalFooter>
          <Button onClick={(): void => setIsOpen(false)}>Close</Button>
        </RegularModalFooter>
      </Modal>
    </>
  );
};

export const RegularModal = TemplateRegular.bind({});

export const SectionedModal = TemplateSectioned.bind({});

export const WithLabel = TemplateWithLabel.bind({});

export const FullScreen = TemplateRegular.bind({});

FullScreen.args = {
  size: 'full',
};

export const WithoutCloseButton = TemplateWithoutHeader.bind({});

WithoutCloseButton.args = {
  closeable: false,
};

/** @deprecated - don't use only for legacy support */
export const WithoutCloseButtonLegacy = TemplateWithoutHeader.bind({});

WithoutCloseButtonLegacy.args = {
  showCloseButton: false,
};
