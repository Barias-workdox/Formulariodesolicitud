import { render, screen } from '@test/test-utils';

import { Markdown } from './markdown';

describe('markdown - rendering tests', () => {
  it('renders heading tags correctly', () => {
    const headings = [1, 2, 3, 4, 5, 6];
    const markdown = headings.map((heading) => `${'#'.repeat(heading)} Heading ${heading}`);

    render(<Markdown>{markdown}</Markdown>);

    for (const heading of headings) {
      const element = screen.getByText(`Heading ${heading}`);

      expect(element).toBeInTheDocument();
      expect(element.tagName).toBe(`H${heading}`);
    }
  });

  it('renders links correctly', () => {
    render(<Markdown>{'[Webdox](https://webdoxclm.com)'}</Markdown>);

    const link = screen.getByText('Webdox');

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', 'https://webdoxclm.com');
  });

  it('renders blockquotes correctly', () => {
    render(<Markdown>{'> Blockquote'}</Markdown>);

    const blockquote = screen.getByText('Blockquote');

    expect(blockquote).toBeInTheDocument();
    expect(blockquote.parentElement.tagName).toBe('BLOCKQUOTE');
  });

  it('renders nested blockquotes correctly', () => {
    render(<Markdown>{'> Blockquote\n>> Nested Blockquote'}</Markdown>);

    const blockquote = screen.getByText('Blockquote');
    const nestedBlockquote = screen.getByText('Nested Blockquote');

    expect(blockquote).toBeInTheDocument();
    expect(nestedBlockquote).toBeInTheDocument();

    expect(blockquote.parentElement.tagName).toBe('BLOCKQUOTE');
    expect(nestedBlockquote.parentElement.tagName).toBe('BLOCKQUOTE');

    expect(nestedBlockquote.parentElement.parentElement.tagName).toBe('BLOCKQUOTE');
  });

  it('renders unordered lists correctly', () => {
    const markdown = ['- Item 1', '- Item 2'];

    render(<Markdown>{markdown}</Markdown>);

    const item1 = screen.getByText('Item 1');
    const item2 = screen.getByText('Item 2');

    expect(item1).toBeInTheDocument();
    expect(item2).toBeInTheDocument();

    expect(item1.tagName).toBe('LI');
    expect(item2.tagName).toBe('LI');
  });

  it('renders ordered list correctly', () => {
    const markdown = ['1. First item', '2. Second item'];

    render(<Markdown>{markdown}</Markdown>);

    const firstItem = screen.getByText('First item');
    const secondItem = screen.getByText('Second item');

    expect(firstItem).toBeInTheDocument();
    expect(secondItem).toBeInTheDocument();

    expect(firstItem.tagName).toBe('LI');
    expect(secondItem.tagName).toBe('LI');
  });

  it('renders inline code correctly', () => {
    render(<Markdown>{"`console.log('Hello, Markdown!');`"}</Markdown>);

    const code = screen.getByText("console.log('Hello, Markdown!');");

    expect(code).toBeInTheDocument();
    expect(code.tagName).toBe('CODE');
  });

  it('renders indented code blocks correctly', () => {
    const indentedCode = [
      '    // Some comments',
      '    line 1 of code',
      '    line 2 of code',
      '    line 3 of code',
    ];

    render(<Markdown>{indentedCode}</Markdown>);

    const code = screen.getByText('Some comments', { exact: false });

    expect(code).toBeInTheDocument();
    expect(code.tagName).toBe('CODE');
  });

  it('renders code blocks "fences" correctly', () => {
    render(<Markdown>{"```js\nconsole.log('Hello, Markdown!');\n```"}</Markdown>);

    const code = screen.getByText("console.log('Hello, Markdown!');");

    expect(code).toBeInTheDocument();
    expect(code.tagName).toBe('CODE');
    expect(code.parentElement.tagName).toBe('PRE');
  });

  it('renders images correctly', () => {
    render(<Markdown>{'![Alt text](https://example.com/image.png)'}</Markdown>);

    const image = screen.getByAltText('Alt text');

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'https://example.com/image.png');
  });

  it('renders italic text correctly', () => {
    const markdown = ['*Italic text 1*', '_Italic text 2_'];

    render(<Markdown>{markdown}</Markdown>);

    const italicText1 = screen.getByText('Italic text 1');
    const italicText2 = screen.getByText('Italic text 2');

    expect(italicText1).toBeInTheDocument();
    expect(italicText2).toBeInTheDocument();
    expect(italicText1.tagName).toBe('EM');
    expect(italicText2.tagName).toBe('EM');
  });

  it('renders bold text correctly', () => {
    const markdown = ['**Bold text 1**', '__Bold text 2__'];

    render(<Markdown>{markdown}</Markdown>);

    const boldText1 = screen.getByText('Bold text 1');
    const boldText2 = screen.getByText('Bold text 2');

    expect(boldText1).toBeInTheDocument();
    expect(boldText2).toBeInTheDocument();
    expect(boldText1.tagName).toBe('STRONG');
    expect(boldText2.tagName).toBe('STRONG');
  });

  it('renders strikethrough text correctly', () => {
    render(<Markdown>{'~~Strikethrough~~'}</Markdown>);

    const strikethroughText = screen.getByText('Strikethrough');

    expect(strikethroughText).toBeInTheDocument();
    expect(strikethroughText.tagName).toBe('DEL');
  });

  it('renders tables correctly', () => {
    const markdown = [
      '| Header One | Header Two |',
      '| ----------- | ----------- |',
      '| Row 1 Col 1 | Row 1 Col 2 |',
      '| Row 2 Col 1 | Row 2 Col 2 |',
    ];

    render(<Markdown>{markdown}</Markdown>);

    const headerOne = screen.getByText('Header One');
    const headerTwo = screen.getByText('Header Two');
    const row1Col1 = screen.getByText('Row 1 Col 1');
    const row2Col2 = screen.getByText('Row 2 Col 2');

    expect(headerOne).toBeInTheDocument();
    expect(headerTwo).toBeInTheDocument();
    expect(row1Col1).toBeInTheDocument();
    expect(row2Col2).toBeInTheDocument();

    expect(headerOne.tagName).toBe('TH');
    expect(headerTwo.tagName).toBe('TH');
    expect(row1Col1.tagName).toBe('TD');
    expect(row2Col2.tagName).toBe('TD');
  });

  it('renders horizontal rules correctly', () => {
    const markdown = ['---', '___', '***'];
    const { container } = render(<Markdown>{markdown}</Markdown>);

    expect(container.querySelectorAll('hr')).toHaveLength(3);
  });
});

describe('markdown - security tests', () => {
  // Testing script injection via plain text
  it('sanitizes script tags in plain text', () => {
    const { container } = render(<Markdown>{"<script>alert('XSS Attack');</script>"}</Markdown>);

    expect(container.innerHTML).not.toContain('<script>');
    expect(container.querySelector('script')).toBeNull();
  });

  // Testing script injection via image tags
  it('sanitizes script within image markdown', () => {
    // eslint-disable-next-line no-useless-escape
    const markdown = `![XSS Attack](https://example.com/image.png\" onerror=\"alert('XSS Attack'))`;

    const { container } = render(<Markdown>{markdown}</Markdown>);

    expect(container.querySelector('img')).not.toBeInTheDocument();
  });

  it('sanitizes script within image tags', () => {
    const markdown = `<img src="https://example.com/image.png" onerror="alert('XSS Attack')">`;

    const { container } = render(<Markdown>{markdown}</Markdown>);

    expect(container.querySelector('img')).toBeInTheDocument();
    expect(container.innerHTML).not.toContain('onerror');
  });

  // Testing script injection via links
  it('sanitizes javascript URLs in links', () => {
    const markdown = "[XSS Attack](javascript:alert('XSS Attack'))";
    const { container } = render(<Markdown>{markdown}</Markdown>);
    const links = container.querySelectorAll('a');

    links.forEach((link) => {
      expect(link.getAttribute('href')).not.toMatch(/^javascript:/i);
    });
  });

  // Testing onload attribute in images for script execution
  it('sanitizes onload attributes in images', () => {
    const markdown = '![XSS](https://example.com/image.png" onload="alert(\'XSS Attack\'))';
    const { container } = render(<Markdown>{markdown}</Markdown>);

    expect(container.querySelector('img')).not.toBeInTheDocument();
  });

  // Testing object tags
  it('sanitizes object tags', () => {
    const markdown = '<object data="javascript:alert(\'XSS Attack\');"></object>';
    const { container } = render(<Markdown>{markdown}</Markdown>);

    expect(container.innerHTML).not.toContain('<object>');
  });

  // Testing embedding scripts via markdown links
  it('sanitizes malicious links embedded in markdown', () => {
    const markdown = "[Click me](javascript:alert('XSS Attack'))";

    render(<Markdown>{markdown}</Markdown>);

    const link = screen.queryByText('Click me');

    expect(link).not.toBeInTheDocument();
  });
});
