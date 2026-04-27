import { Notification } from '@components/notification/next';
import { DSTrans } from '@components/utils/i18n/translation-component';

interface DeprecatedComponentAlertProps {
  /** Component's name to deprecate */
  name: string;
}

/** Renders an alert with the deprecated component disclaimer */
export const DeprecatedComponentAlert = ({ name }: DeprecatedComponentAlertProps): JSX.Element => {
  return (
    <Notification
      kind="warning"
      closeable={false}
      description={
        <DSTrans
          i18nKey="storybook.deprecatedComponent"
          values={{ name }}
        />
      }
    />
  );
};
