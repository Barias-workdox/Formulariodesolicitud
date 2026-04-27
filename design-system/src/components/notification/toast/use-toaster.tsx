import { useContext } from 'react';

import { toaster as baseToaster } from 'baseui/toast';

import { ToastBody } from './toast';
import { DEFAULT_TOAST_DURATION_MS } from './toast.constants';

import type { KindType, ToastProps, ToasterKindParams, ToasterType } from './toast.interface';
import type { ToasterContainerContextType } from './toaster-container-context/toaster-container-context.interface';

/**
 * Enhanced version of the Baseweb toaster to support title, body and action props. (instead of
 * just children). This is used to replace the baseweb toaster.position, positive.negative, etc.
 *
 * @returns The toast key for future operations (update, dismiss) or null if the toast couldn't be created
 */
async function toasterShow(
  {
    title,
    body,
    kind,
    action,
    type = 'toast',
    dataTestId,
    link,
    duration,
    ...toastProps
  }: ToastProps,
  toastManager?: {
    canShowToast(): Promise<boolean>;
    addToastToQueue(key: React.Key): void;
    removeToastFromQueue(key: React.Key): void;
  },
): Promise<React.Key | null> {
  // First, check if we can show the toast (this will clean up old ones if needed with smooth transition)
  if (toastManager) {
    await toastManager.canShowToast();
  }

  const key = baseToaster.show(
    <ToastBody
      dataTestId={dataTestId}
      title={title}
      body={body}
      action={action}
      kind={kind}
      type={type}
      link={link}
    />,
    {
      ...toastProps,
      kind,
      notificationType: type,
      autoHideDuration: duration ?? DEFAULT_TOAST_DURATION_MS,
      onClose: () => {
        if (key && toastManager) {
          toastManager.removeToastFromQueue(key);
        }
        if (toastProps.onClose) {
          toastProps.onClose();
        }
      },
    },
  );

  if (key && toastManager) {
    toastManager.addToastToQueue(key);
  }

  return key ?? null;
}

/**
 * Generates the toast to show with all props. Also, receives the updateToasterContainer function
 * to set new props or default ones to Toaster context on update every toaster call on each component
 */
export const createToasterKind =
  (
    kind: KindType,
    updateToasterContainer: ToasterContainerContextType['updateToasterContainerProps'],
    toastManager: {
      canShowToast(): Promise<boolean>;
      addToastToQueue(key: React.Key): void;
      removeToastFromQueue(key: React.Key): void;
    },
  ) =>
  async ({
    placement,
    zIndex,
    marginX,
    marginY,
    width,
    duration,
    ...rest
  }: ToasterKindParams): Promise<React.Key | null> => {
    updateToasterContainer({
      placement,
      zIndex,
      marginX,
      marginY,
      width,
    });

    return await toasterShow(
      {
        ...rest,
        kind,
        duration,
      },
      toastManager,
    );
  };

/**
 * Update content of specific toast by toast key.
 * Wrapping function of baseToaster update method.
 */
const toasterUpdate = (
  key: React.Key,
  { dataTestId, title, body, kind, action, type = 'toast', link, ...toastProps }: ToastProps,
): void => {
  baseToaster.update(key, {
    ...toastProps,
    kind,
    notificationType: type,
    children: (
      <ToastBody
        dataTestId={dataTestId}
        title={title}
        body={body}
        action={action}
        kind={kind}
        type={type}
        link={link}
      />
    ),
  });
};

/**
 * Call toaster function with an updater function to Toaster context, to set new props or default
 * ones on each toaster call
 */
export const toaster = (
  updateToasterContainer: ToasterContainerContextType['updateToasterContainerProps'],
  toastManager: {
    canShowToast(): Promise<boolean>;
    addToastToQueue(key: React.Key): void;
    removeToastFromQueue(key: React.Key): void;
  },
): ToasterType => ({
  ...baseToaster,
  show: async (props: ToastProps) => await toasterShow(props, toastManager),
  positive: createToasterKind('positive', updateToasterContainer, toastManager),
  negative: createToasterKind('negative', updateToasterContainer, toastManager),
  warning: createToasterKind('warning', updateToasterContainer, toastManager),
  info: createToasterKind('info', updateToasterContainer, toastManager),
  update(key: React.Key, toastProps: ToastProps): void {
    toasterUpdate(key, toastProps);
  },
});

export type ToasterProps = ReturnType<typeof toaster>;

/**
 * All updates to toaster props, like placement or zIndex will trigger on Toaster
 * context and render the component with the desired props.
 *
 * The toaster automatically manages the queue and will limit to a maximum of 3 toasts
 * displayed simultaneously. When a 4th toast is added, the oldest one will be dismissed.
 */
export function useToaster(
  toasterContext: React.Context<ToasterContainerContextType>,
): ToasterProps {
  const context = useContext(toasterContext);

  if (!context) {
    throw new Error('useToaster must be used within a ToasterContainerProvider');
  }

  const { updateToasterContainerProps, canShowToast, addToastToQueue, removeToastFromQueue } =
    context;

  return toaster(updateToasterContainerProps, {
    canShowToast,
    addToastToQueue,
    removeToastFromQueue,
  });
}
