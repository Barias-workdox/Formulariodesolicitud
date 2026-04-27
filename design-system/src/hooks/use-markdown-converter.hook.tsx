import type { ReactElement } from 'react';
import { useCallback, useEffect } from 'react';

import { marked } from 'marked';
import TurndownService from 'turndown';

import { useMarkdownComponents } from '@components/markdown/hooks/use-markdown-components';

export type UseMarkdownConverterProps = {
  /**
   * Allows passing custom components such as mentions, tags, etc. to extend the set of supported markdown elements.
   */
  extraComponents?: Record<string, ReactElement>;
};

export type UseMarkdownConverterReturn = {
  htmlToMarkdown(html: string): Promise<string>;
  markdownToHtml(markdown: string): Promise<string>;
};

const turndownService = new TurndownService({
  headingStyle: 'atx',
  codeBlockStyle: 'fenced',
});

/**
 * Hook to convert between HTML and Markdown
 */
export const useMarkdownConverter = (
  props?: UseMarkdownConverterProps,
): UseMarkdownConverterReturn => {
  const { extraComponents } = props ?? {};

  const markdownComponents = useMarkdownComponents();

  /**
  /**
   * Adds a custom rule to the TurndownService for converting a specific HTML tag
   * to markdown by matching its node name and providing a replacement.
   * This is useful for extending markdown support with custom or additional components.
   */
  const addComponentRule = useCallback((key: string) => {
    turndownService.addRule(key, {
      filter: (node) => node.nodeName.toUpperCase() === key.toUpperCase(),
      replacement: (content) => `<${key}>${content}</${key}>`,
    });
  }, []);

  /**
   * Adds custom Turndown rules for all core markdown components and any extra components passed in.
   */
  useEffect(() => {
    Object.keys(markdownComponents).forEach(addComponentRule);
  }, [addComponentRule, markdownComponents]);

  /**
   * Adds custom Turndown rules for any extra components passed in.
   */
  useEffect(() => {
    Object.keys(extraComponents ?? {}).forEach(addComponentRule);
  }, [addComponentRule, extraComponents]);

  /**
   * Converts HTML to markdown using the TurndownService.
   */
  const htmlToMarkdown = useCallback(async (html: string): Promise<string> => {
    if (!html) return '';

    return turndownService.turndown(html);
  }, []);

  /**
   * Converts markdown to HTML using the marked library.
   */
  const markdownToHtml = useCallback(async (markdown: string): Promise<string> => {
    if (!markdown) return '';

    return marked(markdown, { breaks: true });
  }, []);

  return { htmlToMarkdown, markdownToHtml };
};
