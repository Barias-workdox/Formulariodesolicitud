import { useEffect } from 'react';
import type { ReactElement } from 'react';

import type { ActionCableProviderProps } from './action-cable.interface';
import type ActionCable from 'actioncable';

/**
 * A generic provider for action cable queue to subscribe to a broadcast channel
 * and receive messages through that subscription to resolve async long tasks.
 * Do not consume this directly, always create an implementation with the types
 * required and consume that implementation
 */
export function ActionCableProvider<
  /** Add the possible channels to the consumer type */
  ChannelT extends string,
>({ children, cable, ActionCableContext }: ActionCableProviderProps<ChannelT>): ReactElement {
  /* Close the ActionCable connection when the component unmounts */
  useEffect(() => {
    return (): void => {
      cable.disconnect();
    };

    // TODO: Evaluate if we can add the missing dependencies
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /** Subscription function to the cable channel */
  function subscribe(channelName: ChannelT, params, receivedCallback: (data) => void): () => void {
    const channel: ActionCable.Channel = cable.subscriptions.create(
      { channel: channelName, ...params },
      {
        received: receivedCallback,
      },
    );

    return function () {
      channel.unsubscribe();
    };
  }

  return (
    <ActionCableContext.Provider value={{ subscribe }}>{children}</ActionCableContext.Provider>
  );
}
