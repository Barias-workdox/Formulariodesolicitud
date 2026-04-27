import { useState } from 'react';

import { useCss } from '@components/utils/hooks/use-css';

import { Button } from '../../../button';
import { Text } from '../../../text';
import { Spinner } from '../spinner';

import type { Meta, StoryFn } from '@storybook/react-vite';

export default {
  title: 'Components/Progress & Validation/Spinner/Next',
  component: Spinner,
  args: {
    kind: 'brand',
    size: 'medium',
    dataTestId: 'spinner',
  },
  argTypes: {
    kind: {
      control: {
        type: 'select',
      },
      options: ['brand', 'contrast', 'custom'],
    },
    size: {
      control: {
        type: 'select',
      },
      options: ['small', 'medium', 'large'],
    },
    label: {
      control: {
        type: 'text',
      },
    },
    ariaLabel: {
      control: {
        type: 'text',
      },
    },
    fullWidth: {
      control: {
        type: 'boolean',
      },
    },
    isRelative: {
      control: {
        type: 'boolean',
      },
    },
    opacity: {
      control: {
        type: 'range',
        min: 0,
        max: 1,
        step: 0.1,
      },
    },
    backgroundColor: {
      control: {
        type: 'text',
      },
    },
    delay: {
      control: {
        type: 'number',
        min: 0,
        max: 5000,
        step: 100,
      },
    },
    customColor: {
      control: {
        type: 'text',
      },
      description: 'Can be a hex color (#FF0000) or a DesignSystemTheme color token (e.g., brand)',
    },
    customSize: {
      control: {
        type: 'number',
        min: 8,
        max: 100,
        step: 2,
      },
    },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/PHw2i1GkSPbWaHepO1uw0R/Spinner-Component',
    },
  },
} as Meta<typeof Spinner>;

/** Default Spinner */
const Template: StoryFn<typeof Spinner> = (args) => {
  return <Spinner {...args} />;
};

export const Default = Template.bind({});

/** All Sizes */
export const Sizes: StoryFn<typeof Spinner> = () => {
  const { containerStyles } = useCss({
    containerStyles: {
      display: 'flex',
      alignItems: 'center',
      gap: '24px',
      flexWrap: 'wrap',
    },
  });

  return (
    <div className={containerStyles}>
      <div style={{ textAlign: 'center' }}>
        <Spinner
          kind="brand"
          size="small"
        />
        <Text variant="microCopy">Small (16px)</Text>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Spinner
          kind="brand"
          size="medium"
        />
        <Text variant="bodySmall">Medium (20px)</Text>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Spinner
          kind="brand"
          size="large"
        />
        <Text variant="body">Large (24px)</Text>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Spinner
          kind="brand"
          size="large"
          customSize={32}
        />
        <Text variant="body">Custom (32px)</Text>
      </div>
    </div>
  );
};

/** Color Kinds */
export const ColorKinds: StoryFn<typeof Spinner> = () => {
  const { containerStyles } = useCss({
    containerStyles: {
      display: 'flex',
      alignItems: 'center',
      gap: '24px',
      flexWrap: 'wrap',
    },
  });

  return (
    <div className={containerStyles}>
      <div style={{ textAlign: 'center' }}>
        <Spinner
          kind="brand"
          size="medium"
        />
        <Text variant="microCopy">Brand</Text>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Spinner
          kind="contrast"
          size="medium"
        />
        <Text variant="microCopy">Contrast</Text>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Spinner
          kind="custom"
          size="medium"
          customColor="#FF6B6B"
        />
        <Text variant="microCopy">Custom (Hex)</Text>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Spinner
          kind="custom"
          size="medium"
          customColor="positive"
        />
        <Text variant="microCopy">Custom (Token)</Text>
      </div>
    </div>
  );
};

/** With Labels - Shows Text Variant Integration */
export const WithLabels: StoryFn<typeof Spinner> = () => {
  const { containerStyles, itemStyles, descriptionStyles } = useCss({
    containerStyles: {
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
    },
    itemStyles: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
    },
    descriptionStyles: {
      marginBottom: '8px',
      color: '#666',
    },
  });

  return (
    <div className={containerStyles}>
      <div>
        <div className={descriptionStyles}>
          <Text variant="bodySmall">
            Small spinner uses <strong>microCopy</strong> text variant (Figma: Microcopy/Regular)
          </Text>
        </div>
        <div className={itemStyles}>
          <Spinner
            kind="brand"
            size="small"
            label="Processing your request"
          />
        </div>
      </div>

      <div>
        <div className={descriptionStyles}>
          <Text variant="bodySmall">
            Medium spinner uses <strong>bodySmall</strong> text variant (Figma: Small text/Regular)
          </Text>
        </div>
        <div className={itemStyles}>
          <Spinner
            kind="brand"
            size="medium"
            label="Loading data..."
          />
        </div>
      </div>

      <div>
        <div className={descriptionStyles}>
          <Text variant="bodySmall">
            Large spinner uses <strong>body</strong> text variant (Figma: Body/Regular)
          </Text>
        </div>
        <div className={itemStyles}>
          <Spinner
            kind="contrast"
            size="large"
            label="Please wait"
          />
        </div>
      </div>
    </div>
  );
};

/** Typography Integration Demo */
export const TypographyIntegration: StoryFn<typeof Spinner> = () => {
  const { containerStyles, comparisonStyles, spinnerSection, textSection } = useCss({
    containerStyles: {
      display: 'flex',
      flexDirection: 'column',
      gap: '32px',
    },
    comparisonStyles: {
      display: 'flex',
      gap: '32px',
      alignItems: 'flex-start',
    },
    spinnerSection: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      flex: 1,
    },
    textSection: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      flex: 1,
    },
  });

  return (
    <div className={containerStyles}>
      <Text variant="h2">Typography Integration: Spinner Labels vs. Standalone Text</Text>
      <Text variant="body">
        This demonstrates how spinner labels now use the same text variants as the design system,
        ensuring consistency between spinner labels and regular text.
      </Text>

      <div className={comparisonStyles}>
        <div className={spinnerSection}>
          <Text variant="bodySmall">
            <strong>Spinner Labels</strong> (using integrated Text component)
          </Text>

          <Spinner
            kind="brand"
            size="small"
            label="microCopy variant text"
          />

          <Spinner
            kind="brand"
            size="medium"
            label="bodySmall variant text"
          />

          <Spinner
            kind="brand"
            size="large"
            label="body variant text"
          />
        </div>

        <div className={textSection}>
          <Text variant="bodySmall">
            <strong>Equivalent Standalone Text</strong> (for comparison)
          </Text>

          <Text variant="microCopy">microCopy variant text</Text>

          <Text variant="bodySmall">bodySmall variant text</Text>

          <Text variant="body">body variant text</Text>
        </div>
      </div>

      <Text
        variant="bodySmall"
        color="neutral"
      >
        ✅ Notice how the font-family, font-size, and line-height are now identical between spinner
        labels and standalone text components.
      </Text>
    </div>
  );
};

/** Full Width Overlay */
export const FullWidthOverlay: StoryFn<typeof Spinner> = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { containerStyles, contentStyles } = useCss({
    containerStyles: {
      position: 'relative',
      height: '300px',
      border: '1px solid #e0e0e0',
      borderRadius: '8px',
      padding: '24px',
    },
    contentStyles: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
    },
  });

  return (
    <div className={containerStyles}>
      <div className={contentStyles}>
        <Text variant="h2">Content Area</Text>
        <Text variant="body">
          This is some content that will be covered by the overlay when loading.
        </Text>
        <Button
          kind="primary"
          size="default"
          onClick={() => {
            setIsLoading(true);
            setTimeout(() => setIsLoading(false), 3000);
          }}
        >
          {isLoading ? 'Loading...' : 'Start Loading'}
        </Button>
      </div>

      {isLoading && (
        <Spinner
          kind="brand"
          size="medium"
          label="Loading content..."
          fullWidth
          isRelative
          opacity={0.9}
          backgroundColor="bgBase"
        />
      )}
    </div>
  );
};

/** With Delay */
export const WithDelay: StoryFn<typeof Spinner> = () => {
  const [showSpinner, setShowSpinner] = useState(false);

  const { containerStyles } = useCss({
    containerStyles: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      alignItems: 'center',
    },
  });

  return (
    <div className={containerStyles}>
      <Text variant="body">
        The spinner will appear after 1 second to avoid flickering on fast loads.
      </Text>
      <Button
        kind="secondary"
        size="default"
        onClick={() => {
          setShowSpinner(true);
          setTimeout(() => setShowSpinner(false), 4000);
        }}
      >
        Show Delayed Spinner
      </Button>

      {showSpinner && (
        <Spinner
          kind="brand"
          size="medium"
          label="Loading with delay..."
          delay={1000}
        />
      )}
    </div>
  );
};

/** Custom Configurations */
export const CustomConfigurations: StoryFn<typeof Spinner> = () => {
  const { containerStyles } = useCss({
    containerStyles: {
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
    },
  });

  return (
    <div className={containerStyles}>
      <div>
        <Text variant="bodySmall">Custom Size and Hex Color</Text>
        <Spinner
          kind="custom"
          size="large"
          customSize={40}
          customColor="#9C27B0"
          label="Custom purple spinner"
        />
      </div>

      <div>
        <Text variant="bodySmall">Custom Size and Theme Token</Text>
        <Spinner
          kind="custom"
          size="large"
          customSize={60}
          customColor="warning"
          label="Warning color from theme"
        />
      </div>

      <div>
        <Text variant="bodySmall">Different Theme Tokens</Text>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <Spinner
            kind="custom"
            size="medium"
            customColor="positive"
            label="Success"
          />
          <Spinner
            kind="custom"
            size="medium"
            customColor="negative"
            label="Error"
          />
          <Spinner
            kind="custom"
            size="medium"
            customColor="power"
            label="Power"
          />
        </div>
      </div>
    </div>
  );
};

/** Real World Examples */
export const RealWorldExamples: StoryFn<typeof Spinner> = () => {
  const [loadingStates, setLoadingStates] = useState({
    button: false,
    page: false,
    section: false,
  });

  const { containerStyles, sectionStyles, cardStyles } = useCss({
    containerStyles: {
      display: 'flex',
      flexDirection: 'column',
      gap: '32px',
    },
    sectionStyles: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
    },
    cardStyles: {
      position: 'relative',
      border: '1px solid #e0e0e0',
      borderRadius: '8px',
      padding: '24px',
      minHeight: '200px',
    },
  });

  const handleButtonLoad = () => {
    setLoadingStates((prev) => ({ ...prev, button: true }));
    setTimeout(() => setLoadingStates((prev) => ({ ...prev, button: false })), 2000);
  };

  const handlePageLoad = () => {
    setLoadingStates((prev) => ({ ...prev, page: true }));
    setTimeout(() => setLoadingStates((prev) => ({ ...prev, page: false })), 3000);
  };

  const handleSectionLoad = () => {
    setLoadingStates((prev) => ({ ...prev, section: true }));
    setTimeout(() => setLoadingStates((prev) => ({ ...prev, section: false })), 2500);
  };

  return (
    <div className={containerStyles}>
      <div className={sectionStyles}>
        <Text variant="h2">Button Loading State</Text>
        <Button
          kind="primary"
          size="default"
          onClick={handleButtonLoad}
          disabled={loadingStates.button}
        >
          {loadingStates.button && (
            <Spinner
              kind="contrast"
              size="small"
              ariaLabel="Processing"
            />
          )}
          {loadingStates.button ? 'Processing...' : 'Submit Form'}
        </Button>
      </div>

      <div className={sectionStyles}>
        <Text variant="h2">Page Loading Overlay</Text>
        <Button
          kind="secondary"
          size="default"
          onClick={handlePageLoad}
        >
          Load Page Content
        </Button>
        {loadingStates.page && (
          <Spinner
            kind="brand"
            size="large"
            label="Loading page content..."
            fullWidth={false}
            backgroundColor="bgBase"
            opacity={1}
          />
        )}
      </div>

      <div className={sectionStyles}>
        <Text variant="h2">Section Loading</Text>
        <div className={cardStyles}>
          <Text variant="body">This is a content section that can be loaded independently.</Text>
          <Button
            kind="tertiary"
            size="compact"
            onClick={handleSectionLoad}
          >
            Refresh Section
          </Button>

          {loadingStates.section && (
            <Spinner
              kind="brand"
              size="medium"
              label="Refreshing content..."
              fullWidth
              isRelative
              opacity={0.8}
            />
          )}
        </div>
      </div>
    </div>
  );
};
