import { StyleObject } from 'styletron-react';
interface TextRotatorProps {
    texts: string[];
    align?: StyleObject['alignItems'];
}
/**
 * A component that rotates through an array of text strings, displaying
 * each one in sequence with a smooth transition.
 */
export declare const TextRotator: ({ texts, align }: TextRotatorProps) => JSX.Element;
export {};
