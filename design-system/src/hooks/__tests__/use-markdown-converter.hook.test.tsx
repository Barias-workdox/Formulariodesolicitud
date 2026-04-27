import { renderHook } from '@testing-library/react';

import { useMarkdownConverter } from '@hooks/use-markdown-converter.hook';
import { ThemedComponent } from '@test/test-utils';

describe('useMarkdownConverter', () => {
  it('should convert HTML to markdown', async () => {
    const {
      result: {
        current: { htmlToMarkdown },
      },
    } = renderHook(() => useMarkdownConverter(), { wrapper: ThemedComponent });

    const html = '<p style="color: red;">Example text</p>';
    const markdown = await htmlToMarkdown(html);

    expect(markdown).toBe('<p>Example text</p>');
  });

  it('should convert markdown to HTML', async () => {
    const {
      result: {
        current: { markdownToHtml },
      },
    } = renderHook(() => useMarkdownConverter(), { wrapper: ThemedComponent });

    const markdown = '<p>Hello, world!</p>';
    const html = await markdownToHtml(markdown);

    expect(html).toBe('<p>Hello, world!</p>');
  });

  it('should convert HTML to markdown with extra components', async () => {
    const {
      result: {
        current: { htmlToMarkdown },
      },
    } = renderHook(
      () =>
        useMarkdownConverter({
          extraComponents: { customComponent: <span>Custom component</span> },
        }),
      { wrapper: ThemedComponent },
    );

    const html =
      '<p style="color: red;">Hello, world!<customComponent>Custom component</customComponent></p>';
    const markdown = await htmlToMarkdown(html);

    expect(markdown).toBe(
      '<p>Hello, world!<customComponent>Custom component</customComponent></p>',
    );
  });

  it('should convert markdown to HTML with extra components', async () => {
    const {
      result: {
        current: { markdownToHtml },
      },
    } = renderHook(
      () =>
        useMarkdownConverter({
          extraComponents: { customComponent: <span>Custom component</span> },
        }),
      { wrapper: ThemedComponent },
    );

    const markdown = '<p>Hello, world!<customComponent>Custom component</customComponent></p>';
    const html = await markdownToHtml(markdown);

    expect(html).toBe('<p>Hello, world!<customComponent>Custom component</customComponent></p>');
  });
});
