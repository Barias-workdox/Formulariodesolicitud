import { Text } from '@components/text';

import type { TextProps } from '@components/text';

/** The most reusable text among webdox AI module */
export const StyledBaseParagraphText = (
  props: Omit<TextProps, 'variant' | 'margin'>,
): ReturnType<typeof Text> => {
  return (
    <Text
      variant="bodySmall"
      color="neutralStrong"
      margin={0}
      {...props}
    />
  );
};
