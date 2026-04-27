import type { ReactElement } from 'react';

export type MarkdownComponents = {
  // Headings
  h1: ReactElement;
  h2: ReactElement;
  h3: ReactElement;
  h4: ReactElement;
  h5: ReactElement;
  h6: ReactElement;

  // Text formatting
  p: ReactElement;
  strong: ReactElement;
  em: ReactElement;
  del: ReactElement;
  blockquote: ReactElement;
  code: ReactElement;
  pre: ReactElement;
  u: ReactElement;

  // Links and images
  a: ReactElement;
  img: ReactElement;

  // Lists
  ul: ReactElement;
  ol: ReactElement;
  li: ReactElement;

  // Tables
  table: ReactElement;
  thead: ReactElement;
  tbody: ReactElement;
  tr: ReactElement;
  th: ReactElement;
  td: ReactElement;

  // Additional elements
  hr: ReactElement;
  br: ReactElement;

  // Adding support for SVGs could be important for some markdown documents
  svg: ReactElement;
  path: ReactElement;

  // Support for custom elements like span for inline styles or classes
  span: ReactElement;

  // Other semantic elements
  figure: ReactElement;
  figcaption: ReactElement;
};
