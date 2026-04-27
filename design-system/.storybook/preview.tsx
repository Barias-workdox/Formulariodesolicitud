import { useContext } from 'react';

import { Design } from '@storybook/addon-designs/blocks';
import { DocsPage } from '@storybook/addon-docs/blocks';

import { toaster } from '../src/components/notification';
import { allLocaleOptions, initI18next } from '../src/components/utils/i18n';

import {
  GLOBAL_KEY_DATA_TEST_ID,
  GLOBAL_KEY_DATA_TEST_ID_HOVER,
} from './data-testid-addon/constants';
import { withDataTestIdHighlight } from './data-testid-addon/decorator';
import { ToasterContainerContext } from './dual-theme-addon/context';
import { withDualTheme } from './dual-theme-addon/decorator';

import type { Preview } from '@storybook/react-vite';

import '@webdoxclm/document-viewer-front/renderers/pdf/pdf.css';

initI18next({
  /**
   * Add these options to track missing keys in the i18n files.
   */
  saveMissing: true,
  missingKeyHandler: (
    lngs: readonly string[],
    ns: string,
    key: string,
    _fallbackValue: string,
    _updateMissing: boolean,
    options: { ignoreErrors: boolean },
  ) => {
    if (options.ignoreErrors) {
      return;
    }
    const err = new Error(`Missing i18n key: ${key} (${lngs?.join(', ')})(${ns})`);

    console.error(err);
  },
});

export const excludedControls = ['overrides', 'onClick', 'data-testid'];

/** Utility that returns a toast with custom properties and styles. */
export const useToaster = (): ReturnType<typeof toaster> => {
  const context = useContext(ToasterContainerContext);

  if (!context) {
    throw new Error('useToaster must be used within a ToasterContainerProvider');
  }

  const { updateToasterContainerProps, canShowToast, addToastToQueue, removeToastFromQueue } =
    context;

  return toaster(updateToasterContainerProps, {
    canShowToast,
    addToastToQueue,
    removeToastFromQueue,
  });
};

export const preview: Preview = {
  parameters: {
    docs: {
      source: {
        type: 'dynamic',
      },
      canvas: { sourceState: 'shown' },
      page: () => (
        <>
          <DocsPage />
          <Design of="story" />
        </>
      ),
    },
    options: {
      storySort: (a, b) =>
        a.id === b.id ? 0 : a.id.localeCompare(b.id, undefined, { numeric: true }),
    },
    controls: {
      exclude: excludedControls,
    },
    // Disable the built-in backgrounds toolbar — theme (including background) is
    // controlled by the "Theme" toolbar item via the `withDualTheme` decorator.
    backgrounds: {
      disable: true,
    },
  },

  globalTypes: {
    [GLOBAL_KEY_DATA_TEST_ID]: {
      name: 'Data Test ID',
      description: 'Highlight elements with data-testid attribute',
      defaultValue: false,
      toolbar: {
        icon: 'eye',
        items: [
          { value: true, title: 'Highlight data-testid' },
          { value: false, title: 'Remove highlight' },
        ],
        title: 'Toggle data-testid',
      },
    },
    [GLOBAL_KEY_DATA_TEST_ID_HOVER]: {
      name: 'Data Test ID Hover',
      description: 'Highlight hovered element with data-testid attribute',
      defaultValue: null,
      toolbar: {
        items: [],
      },
    },
    locale: {
      name: 'Locale',
      description: 'Internationalization locale',
      defaultValue: 'es',
      toolbar: {
        icon: 'globe',
        items: allLocaleOptions.map(({ flag, label, value }) => ({
          value,
          right: flag,
          title: label,
        })),
      },
    },
    theme: {
      name: 'Theme',
      description: 'Switch between light, dark, or side-by-side view',
      defaultValue: 'light',
      toolbar: {
        dynamicTitle: true,
        items: [
          { value: 'light', title: 'Light', icon: 'sun' },
          { value: 'dark', title: 'Dark', icon: 'moon' },
          { value: 'both', title: 'Both', icon: 'contrast' },
        ],
      },
    },
  },

  decorators: [withDataTestIdHighlight, withDualTheme],

  tags: ['autodocs'],
};

export default preview;
