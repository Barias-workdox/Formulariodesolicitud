import { ReactNode } from 'react';
import { EnhancerType } from '../input.interfaces';
import { SharedProps } from 'baseui/input';
/**
 * Utility to resolve enhancer (function or node)
 */
export declare const resolveEnhancer: (enhancer: EnhancerType, props: SharedProps) => ReactNode;
