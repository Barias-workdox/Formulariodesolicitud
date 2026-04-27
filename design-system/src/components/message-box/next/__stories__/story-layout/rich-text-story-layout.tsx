import type { PropsWithChildren } from 'react';

import { Markdown } from '@components/markdown';
import { Text } from '@components/text';
import { useCss } from '@components/utils/hooks/use-css';

import type { MessageBoxValue } from '../../message-box.interfaces';

export type RichTextStoryLayoutProps = PropsWithChildren<{
  value: MessageBoxValue;
  htmlToMarkdownValue: string;
  markdownToHtmlValue: string;
}>;

/**
 * RichTextStoryLayout component
 * This component is used to wrap the rich text story layout
 * and add the custom styles
 */
export const RichTextStoryLayout = ({
  children,
  value,
  htmlToMarkdownValue,
  markdownToHtmlValue,
}: RichTextStoryLayoutProps): JSX.Element => {
  const { theme } = useCss();

  return (
    <div style={{ display: 'flex', height: '400px' }}>
      <div
        style={{
          flex: 1,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          padding: theme.spacing.spacingXl,
        }}
      >
        {children}
      </div>
      <div
        style={{
          flex: 1,
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          borderLeft: `1px solid ${theme.colors.neutralSubtle}`,
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: theme.spacing.spacingXs }}>
          <div>
            <Text
              variant="h1"
              margin={0}
            >
              Text Value
            </Text>
          </div>
          <div>
            <Text
              variant="body"
              margin={0}
            >
              {value.textValue}
            </Text>
          </div>
        </div>
        <div>
          <div>
            <Text
              variant="h1"
              margin={0}
            >
              HTML Value
            </Text>
          </div>
          <div>
            <Text
              variant="body"
              margin={0}
            >
              {value.HTMLValue}
            </Text>
          </div>
        </div>
        <div>
          <div>
            <Text
              variant="h1"
              margin={0}
            >
              HTML to Markdown
            </Text>
          </div>
          <div>
            <Text
              variant="body"
              margin={0}
            >
              {htmlToMarkdownValue}
            </Text>
          </div>
        </div>
        <div>
          <div>
            <Text
              variant="h1"
              margin={0}
            >
              Markdown to HTML
            </Text>
          </div>
          <div>
            <Text
              variant="body"
              margin={0}
            >
              <Markdown>{markdownToHtmlValue}</Markdown>
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};
