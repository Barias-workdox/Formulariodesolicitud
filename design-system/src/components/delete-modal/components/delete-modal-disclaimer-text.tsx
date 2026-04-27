import { Text } from '@components/text';
import { useCss } from '@components/utils/hooks/use-css';

export type DeleteModalDisclaimerTextProps = {
  text: string;
};

/** Component that encapsulates the default styles needed to the render of the disclaimer text */
export const DeleteModalDisclaimerText = ({
  text,
}: DeleteModalDisclaimerTextProps): JSX.Element => {
  const { theme } = useCss();

  return (
    <Text
      variant="body"
      margin={0}
      fontWeight="400"
      $style={{ padding: `${theme.spacing.spacing2xs} 0px` }}
    >
      {text}
    </Text>
  );
};
