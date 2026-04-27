import type { ReactElement } from 'react';

import DOMPurify from 'dompurify';
import { marked } from 'marked';
import { Trans } from 'react-i18next';

import { useMarkdownComponents } from './hooks/use-markdown-components';

export type MarkdownProps = {
  children: string | string[] | number | number[];
  extraComponents?: Record<string, ReactElement>;
};

/**
 * Renders markdown content as sanitized HTML.
 * Supports basic HTML tags and custom components for enhanced rendering.
 */
export const Markdown = ({ children, extraComponents = {} }: MarkdownProps): ReactElement => {
  const components = useMarkdownComponents();
  const markdown = Array.isArray(children) ? children.join('\n') : children.toString();

  // Use marked to parse markdown content into HTML
  const parsedMarkdown = marked.parse(markdown) as string;

  // Sanitize the HTML content to prevent XSS attacks
  const sanitizedHtml = DOMPurify.sanitize(parsedMarkdown, {
    ADD_TAGS: Object.keys(extraComponents),
  });

  return sanitizedHtml ? (
    <Trans
      defaults={sanitizedHtml}
      tOptions={{ ignoreErrors: true }}
      components={{ ...components, ...extraComponents }}
    />
  ) : (
    <></>
  );
};
