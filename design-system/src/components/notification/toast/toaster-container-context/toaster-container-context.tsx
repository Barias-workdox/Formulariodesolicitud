import { createContext, useState, useCallback } from 'react';
import type { Context, PropsWithChildren, ReactElement } from 'react';

import { toaster as baseToaster } from 'baseui/toast';

import { DEFAULT_TOAST_DURATION_MS } from '../toast.constants';
import { PLACEMENT } from '../toast.interface';
import { ToasterContainer } from '../toaster-container';

import type {
  ToasterContainerContextProps,
  ToasterContainerContextType,
  ToastManagerState,
} from './toaster-container-context.interface';

/**
 * Required to change dynamically the required props of the Global Toaster Container
 */
export const getToasterContainerContext = (): Context<ToasterContainerContextType | null> =>
  createContext<ToasterContainerContextType | null>(null);

const defaultProps: ToasterContainerContextType['toasterContainerProps'] = {
  placement: PLACEMENT.bottomRight,
  marginX: 0,
  marginY: 0,
  width: undefined,
  duration: DEFAULT_TOAST_DURATION_MS,
};

/** Creates the context for the toaster container. It should belong to the consumer app */
export const ToasterContainerProvider = ({
  children,
  toasterContext,
}: PropsWithChildren<{
  toasterContext: Context<ToasterContainerContextType>;
}>): ReactElement => {
  const [{ marginX, marginY, placement, zIndex, width, duration }, setProps] =
    useState<ToasterContainerContextType['toasterContainerProps']>(defaultProps);

  // Toast Manager State
  const [toastManager, setToastManager] = useState<ToastManagerState>({
    activeToasts: [],
    maxToasts: 3,
  });

  /** Update values when payload is sent. Otherwise, set the default ones */
  const updateProps = (newProps?: ToasterContainerContextProps): void =>
    setProps({
      ...defaultProps,
      ...newProps,
    });

  /** Check if we can show a new toast, and prepare queue by removing oldest if needed */
  const canShowToast = useCallback(async (): Promise<boolean> => {
    const currentCount = toastManager.activeToasts.length;

    // If we're at the limit, remove the oldest toast first with smooth transition
    if (currentCount >= toastManager.maxToasts) {
      const [toastToRemove] = toastManager.activeToasts;
      if (toastToRemove) {
        // Remove from BaseUI immediately
        baseToaster.clear(toastToRemove);
        // Update our state
        setToastManager((prevManager) => ({
          ...prevManager,
          activeToasts: prevManager.activeToasts.slice(1), // Remove first (oldest)
        }));
        // Wait for the removal animation to complete before allowing new toast
        await new Promise((resolve) => setTimeout(resolve, 150));
      }
    }

    return true;
  }, [toastManager.activeToasts, toastManager.maxToasts]);

  /** Add toast to queue (called after toast is successfully shown) */
  const addToastToQueue = useCallback((toastKey: React.Key): void => {
    setToastManager((prevManager) => ({
      ...prevManager,
      activeToasts: [...prevManager.activeToasts, toastKey],
    }));
  }, []);

  /** Remove toast from queue */
  const removeToastFromQueue = useCallback((toastKey: React.Key): void => {
    setToastManager((prevManager) => ({
      ...prevManager,
      activeToasts: prevManager.activeToasts.filter((key) => key !== toastKey),
    }));
  }, []);

  /** Update maximum number of toasts */
  const updateMaxToasts = useCallback((maxToasts: number): void => {
    setToastManager((prevManager) => {
      const newManager = { ...prevManager, maxToasts };

      // If current toasts exceed new limit, remove the excess
      if (newManager.activeToasts.length > maxToasts) {
        const toastsToRemove = newManager.activeToasts.slice(
          0,
          newManager.activeToasts.length - maxToasts,
        );

        toastsToRemove.forEach((toastKey) => {
          setTimeout(() => {
            baseToaster.clear(toastKey);
          }, 0);
        });
        newManager.activeToasts = newManager.activeToasts.slice(-maxToasts);
      }

      return newManager;
    });
  }, []);

  return (
    <toasterContext.Provider
      value={{
        toasterContainerProps: {
          marginX,
          marginY,
          placement,
          zIndex,
          width,
          duration,
        },
        updateToasterContainerProps: updateProps,
        toastManager,
        canShowToast,
        addToastToQueue,
        removeToastFromQueue,
        updateMaxToasts,
      }}
    >
      <ToasterContainer
        placement={placement ?? PLACEMENT.bottomRight}
        zIndex={zIndex ?? 1000}
        marginX={marginX}
        marginY={marginY}
        width={width}
        duration={duration}
      />
      {children}
    </toasterContext.Provider>
  );
};
