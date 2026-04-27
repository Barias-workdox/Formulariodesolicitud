import { testHelpers } from '@test/test-utils';

import { MessageBoxPluginNames } from '../../message-box.constants';
import { QuickActionsPlugin } from '../../plugins';

const customRenderMock = testHelpers.fn();

describe('QuickActionsPlugin', () => {
  afterEach(() => {
    testHelpers.clearAllMocks();
  });

  it('should return the plugin object correctly', () => {
    const plugin = QuickActionsPlugin({ customRender: customRenderMock });

    expect(plugin).toEqual({
      name: MessageBoxPluginNames.QuickActions,
      render: expect.any(Function),
    });
  });

  it('should execute the custom render function when the text value starts with the quick action trigger', () => {
    const plugin = QuickActionsPlugin({ customRender: customRenderMock });

    plugin.render?.({ textValue: '/test' });

    expect(customRenderMock).toHaveBeenCalledWith('test');
  });

  it('should not execute the custom render function when the text value does not start with the quick action trigger', () => {
    const plugin = QuickActionsPlugin({ customRender: customRenderMock });

    plugin.render?.({ textValue: 'test' });

    expect(customRenderMock).not.toHaveBeenCalled();
  });

  it('should the render function return null when the text value is not provided', () => {
    const plugin = QuickActionsPlugin({ customRender: customRenderMock });

    const result = plugin.render?.({});

    expect(result).toBeNull();
  });
});
