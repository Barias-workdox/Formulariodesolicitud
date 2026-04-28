import { Context } from 'react';
import { Cable } from 'actioncable';
export interface ActionCableProviderProps<ChannelT extends string> {
    children: React.ReactNode;
    /** The instance of the cable consumer based on the implementation queue URL */
    cable: Cable;
    ActionCableContext: Context<ActionCableContextValues<ChannelT>>;
}
export interface ActionCableContextValues<ChannelT extends string> {
    subscribe(channel: ChannelT, params: any, receivedCallback: (data: any) => void): () => void;
}
export type ActionCableCable = Cable;
