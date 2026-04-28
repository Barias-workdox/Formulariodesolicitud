import { FilterOverrides } from './filter.interfaces';
import { StyleObject } from 'styletron-react';
/**
 * Generates style overrides for the filter button based on its active state.
 */
export declare const getOverrides: ({ $isActive, $isOpen, $width, $minWidth, $maxWidth, $popoverMinWidth, }: {
    $isActive: boolean;
    $isOpen: boolean;
    $width?: number;
    $minWidth?: StyleObject["minWidth"];
    $maxWidth?: StyleObject["maxWidth"];
    $popoverMinWidth?: StyleObject["minWidth"];
}) => FilterOverrides;
