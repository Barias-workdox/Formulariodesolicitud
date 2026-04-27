import React from 'react';
import { Children, isValidElement, type ReactNode } from 'react';

import { isFragment } from 'react-is';

/**
 * Utility function to extract a string from a React node.
 */
export const getStringFromReactNode = (node: ReactNode): string => {
  if (typeof node === 'string' || typeof node === 'number') {
    return String(node);
  }

  if (Array.isArray(node)) {
    const children = Children.toArray(node);

    return children.map(getStringFromReactNode).join('');
  }

  if (isValidElement(node)) {
    return getStringFromReactNode(node.props.children);
  }

  return '';
};

/**
 * Function to get all allowed components from enhancer.
 */
export const getAllAllowedComponent = (
  node: React.ReactNode,
  allowedElements: React.ElementType[] = [],
): React.ReactNode => {
  if (isFragment(node)) {
    return getAllAllowedComponent(node.props.children, allowedElements);
  }
  const currentElement: Array<React.ReactNode> = [];

  React.Children.forEach(node, (child) => {
    if (
      React.isValidElement(child) &&
      typeof child.type !== 'string' &&
      allowedElements.includes(child.type)
    ) {
      currentElement.push(child);
    } else {
      console.warn(child);
      console.warn(
        `This element cannot be rendered, please use the allowed elements: `,
        allowedElements.map((element) => (element as React.FunctionComponent).name).join(', '),
      );
    }
  });

  return currentElement;
};

/**
 * Function to get the allowed component from enhancer.
 */
export const getAllowedComponent = (
  node: React.ReactNode,
  allowedElements: React.ElementType[] = [],
): React.ReactElement<unknown, string | React.JSXElementConstructor<unknown>> | undefined => {
  let currentElement;

  React.Children.forEach(node, (child) => {
    if (
      React.isValidElement(child) &&
      typeof child.type !== 'string' &&
      allowedElements.includes(child.type)
    ) {
      currentElement = child;

      return;
    } else {
      console.warn(
        'This element cannot be rendered, please use the allowed elements: ',
        allowedElements.map((element) => (element as React.FunctionComponent).name).join(', '),
      );
    }
  });

  return currentElement;
};
