import type { StyleObject } from 'styletron-react';

export const styles = {
  containerStyles: {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'unset',
    height: '100%',
  } as StyleObject,
  tabContentStyles: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    overflow: 'auto',
  } as StyleObject,
};
