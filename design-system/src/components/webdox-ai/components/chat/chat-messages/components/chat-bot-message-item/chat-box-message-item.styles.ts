import type { StyleObject } from 'styletron-react';

export const styles = {
  markdownStyles: (): StyleObject => ({
    ':has(*) :first-child': {
      marginTop: 0,
    },
    ':has(*) :last-child': {
      marginBottom: 0,
    },
  }),
};
