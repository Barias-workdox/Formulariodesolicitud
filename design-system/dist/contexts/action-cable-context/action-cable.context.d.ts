import { ReactElement } from 'react';
import { ActionCableProviderProps } from './action-cable.interface';
/**
 * A generic provider for action cable queue to subscribe to a broadcast channel
 * and receive messages through that subscription to resolve async long tasks.
 * Do not consume this directly, always create an implementation with the types
 * required and consume that implementation
 */
export declare function ActionCableProvider<
/** Add the possible channels to the consumer type */
ChannelT extends string>({ children, cable, ActionCableContext }: ActionCableProviderProps<ChannelT>): ReactElement;
