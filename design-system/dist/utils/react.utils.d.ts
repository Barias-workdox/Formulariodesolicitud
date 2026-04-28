import { default as React, ReactNode } from 'react';
/**
 * Utility function to extract a string from a React node.
 */
export declare const getStringFromReactNode: (node: ReactNode) => string;
/**
 * Function to get all allowed components from enhancer.
 */
export declare const getAllAllowedComponent: (node: React.ReactNode, allowedElements?: React.ElementType[]) => React.ReactNode;
/**
 * Function to get the allowed component from enhancer.
 */
export declare const getAllowedComponent: (node: React.ReactNode, allowedElements?: React.ElementType[]) => React.ReactElement<unknown, string | React.JSXElementConstructor<unknown>> | undefined;
