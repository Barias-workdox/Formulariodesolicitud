import { useEffect } from 'react';

import { GLOBAL_KEY_DATA_TEST_ID, GLOBAL_KEY_DATA_TEST_ID_HOVER } from './constants';

import type { Decorator } from '@storybook/react';

/**
 * Decorator to highlight elements with data-testid attributes.
 *
 * @param Story - The story component.
 * @param context - The story context.
 * @returns The story with highlighted elements.
 */
export const withDataTestIdHighlight: Decorator = (Story, context) => {
  const { globals, id } = context;
  const showDataTestId = globals[GLOBAL_KEY_DATA_TEST_ID];
  const hoveredTestId = globals[GLOBAL_KEY_DATA_TEST_ID_HOVER];

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const rootElement = document.getElementById('storybook-root');
    const tooltipId = 'data-testid-tooltip';

    if (!rootElement) {
      return;
    }

    /**
     * Removes highlights from all elements.
     */
    const removeHighlights = (): void => {
      const elements = rootElement.querySelectorAll<HTMLElement>('[data-testid]');

      elements.forEach((element) => {
        element.style.outline = '';
        element.style.outlineOffset = '';
      });
    };

    const existingTooltip = document.getElementById(tooltipId);
    if (existingTooltip) {
      existingTooltip.remove();
    }

    removeHighlights();

    if (!showDataTestId) {
      return undefined;
    }

    const tooltipElement = document.createElement('div');

    tooltipElement.id = tooltipId;
    Object.assign(tooltipElement.style, {
      position: 'absolute',
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      color: 'white',
      padding: '8px',
      borderRadius: '4px',
      zIndex: '10000',
      visibility: 'hidden',
      fontSize: '12px',
      pointerEvents: 'none',
      fontFamily: 'monospace',
    });
    document.body.appendChild(tooltipElement);

    /**
     * Shows a tooltip with the data-testid value.
     *
     * @param event - The mouse event.
     */
    const showTooltip = (event: MouseEvent): void => {
      const target = event.target as HTMLElement;
      const testIdElement = target.closest<HTMLElement>('[data-testid]');
      if (testIdElement) {
        const testId = testIdElement.getAttribute('data-testid');
        if (testId) {
          tooltipElement.textContent = testId;
          tooltipElement.style.visibility = 'visible';
          const rect = testIdElement.getBoundingClientRect();

          tooltipElement.style.left = `${rect.left + window.scrollX}px`;
          tooltipElement.style.top = `${rect.bottom + window.scrollY + 5}px`;
        }
      }
    };

    /**
     * Hides the tooltip.
     */
    const hideTooltip = (): void => {
      tooltipElement.style.visibility = 'hidden';
    };

    rootElement.addEventListener('mouseover', showTooltip);
    rootElement.addEventListener('mouseout', hideTooltip);

    /**
     * Updates the highlights on the elements.
     */
    const updateHighlights = (): void => {
      const elements = rootElement.querySelectorAll<HTMLElement>('[data-testid]');

      elements.forEach((element) => {
        const testId = element.getAttribute('data-testid');
        const isHovered = hoveredTestId && testId === hoveredTestId;

        // Clear previous styles
        element.style.outline = '';
        element.style.outlineOffset = '';

        if (isHovered) {
          // Primary highlight for hovered element using inset outline
          element.style.outline = '2px solid red';
          element.style.outlineOffset = '-2px'; // Negative offset creates inset effect
        } else {
          // Secondary highlight for all other elements with data-testid
          element.style.outline = '1px solid rgba(255, 0, 0, 0.4)';
          element.style.outlineOffset = '-1px'; // Negative offset creates inset effect
        }
      });
    };

    updateHighlights();

    const observer = new MutationObserver(updateHighlights);

    observer.observe(rootElement, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['data-testid'],
    });

    return (): void => {
      observer.disconnect();
      rootElement.removeEventListener('mouseover', showTooltip);
      rootElement.removeEventListener('mouseout', hideTooltip);
      tooltipElement.remove();
      removeHighlights();
    };
  }, [showDataTestId, id, hoveredTestId]);

  return Story(context);
};
