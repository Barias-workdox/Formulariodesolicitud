import React from 'react';

import { AddonPanel } from 'storybook/internal/components';
import { addons, types } from 'storybook/manager-api';

import { ADDON_ID, PANEL_ID } from './constants';
import { TestIdList } from './test-id-list';

addons.register(ADDON_ID, () => {
  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: 'Test IDs',
    render: ({ active }) => {
      const isActive = Boolean(active);

      return (
        <AddonPanel active={isActive}>
          <TestIdList active={isActive} />
        </AddonPanel>
      );
    },
    paramKey: 'testids',
  });
});
