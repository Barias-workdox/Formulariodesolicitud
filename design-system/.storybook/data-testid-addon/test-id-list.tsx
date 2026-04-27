import React, { useState, useEffect } from 'react';

import { AddonPanel } from 'storybook/internal/components';
import { useGlobals, useStorybookState } from 'storybook/manager-api';
import { useTheme } from 'storybook/theming';

import { GLOBAL_KEY_DATA_TEST_ID, GLOBAL_KEY_DATA_TEST_ID_HOVER } from './constants';

interface PanelProps {
  active: boolean;
}

/**
 * TestIdList component for displaying available data-testids.
 *
 * @param props - The panel properties.
 * @returns The rendered component.
 */
export const TestIdList: React.FC<PanelProps> = (props) => {
  const [testIds, setTestIds] = useState<string[]>([]);
  const [
    { [GLOBAL_KEY_DATA_TEST_ID]: showDataTestId, [GLOBAL_KEY_DATA_TEST_ID_HOVER]: hoveredTestId },
    updateGlobals,
  ] = useGlobals();
  const { storyId } = useStorybookState();
  const theme = useTheme();

  useEffect(() => {
    const iframe = document.getElementById('storybook-preview-iframe') as HTMLIFrameElement;
    if (!iframe?.contentDocument || !showDataTestId) {
      setTestIds([]);

      return;
    }

    const storyRoot = iframe.contentDocument.body;

    /**
     * Retrieves all data-testids from the story root.
     */
    const getTestIds = (): void => {
      const elements = storyRoot.querySelectorAll('[data-testid]');
      const ids = Array.from(elements)
        .map((el) => el.getAttribute('data-testid'))
        .filter(Boolean) as string[];
      const uniqueIds = [...new Set(ids)];

      setTestIds(uniqueIds);
    };

    getTestIds();

    const observer = new MutationObserver(getTestIds);

    observer.observe(storyRoot, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['data-testid'],
    });

    return (): void => {
      observer.disconnect();
    };
  }, [showDataTestId, storyId]);

  /**
   * Handles mouse enter event on a test id list item.
   *
   * @param id - The test id.
   */
  const handleMouseEnter = (id: string): void => {
    const iframe = document.getElementById('storybook-preview-iframe') as HTMLIFrameElement;

    iframe?.contentDocument
      ?.querySelector(`[data-testid="${id}"]`)
      ?.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
    updateGlobals({ [GLOBAL_KEY_DATA_TEST_ID_HOVER]: id });
  };

  /**
   * Handles mouse leave event on a test id list item.
   */
  const handleMouseLeave = (): void => {
    updateGlobals({ [GLOBAL_KEY_DATA_TEST_ID_HOVER]: null });
  };

  return (
    <AddonPanel {...props}>
      <div style={{ padding: '10px' }}>
        {showDataTestId ? (
          <>
            <h3>Available data-testids:</h3>
            {testIds.length > 0 ? (
              <ul style={{ listStyle: 'none', padding: 0, margin: `16px 0 0`, gap: '4px' }}>
                {testIds.map((id) => (
                  <li
                    key={id}
                    onMouseEnter={() => handleMouseEnter(id)}
                    onMouseLeave={handleMouseLeave}
                    style={{
                      fontFamily: 'monospace',
                      cursor: 'pointer',
                      borderRadius: '4px',
                      padding: '4px 8px',
                      backgroundColor: hoveredTestId === id ? theme.color.secondary : 'transparent',
                      color: hoveredTestId === id ? 'white' : theme.textColor,
                    }}
                  >
                    {id}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No data-testids found.</p>
            )}
          </>
        ) : (
          <p>Enable the &quot;Highlight data-testid&quot; option in the toolbar to see the list.</p>
        )}
      </div>
    </AddonPanel>
  );
};
