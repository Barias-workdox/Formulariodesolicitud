import type { ReactElement } from 'react';

import { Text } from '@components/text';

export type FileUploaderMessageProps = {
  title: string;
  subtitle?: string;
};

/** Custom Message component for a `FileUploader` component */
export function FileUploaderMessage({ title, subtitle }: FileUploaderMessageProps): ReactElement {
  return (
    <div>
      <Text
        variant="body"
        margin={0}
        fontWeight="500"
        textAlign="center"
      >
        {title}
      </Text>

      {subtitle && (
        <Text
          variant="bodySmall"
          margin={0}
          textAlign="center"
          color="neutralDepressed"
        >
          {subtitle}
        </Text>
      )}
    </div>
  );
}
