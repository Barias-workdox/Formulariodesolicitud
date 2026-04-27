import { useState } from 'react';

import { Chat } from '@carbon/icons-react';

import { Panel } from '@components/collapsible-box/next';
import { FormProvider, InputControlContainer, useForm, useFormContext } from '@components/forms';

import { CollapsibleBoxDraggable } from '../collapsible-box-draggable';

import type {
  CollapsibleBoxDraggableProps,
  CollapsibleBoxDraggableOnDragEndParams as OnDragEndParams,
} from '../collapsible-box-draggable.interfaces';
import type { Meta } from '@storybook/react-vite';

export default {
  title: 'Components/Content/CollapsibleBoxDraggable',
  component: CollapsibleBoxDraggable,
  args: {},
} as Meta<typeof CollapsibleBoxDraggable>;

type FormValues = {
  test: string;
};

const Component1 = (): JSX.Element => {
  const { watch } = useFormContext<FormValues>();

  const testValue = watch('test');

  return (
    <div>
      <div>Test Value: {testValue}</div>
    </div>
  );
};

const Component3 = (): JSX.Element => {
  return (
    <div>
      <InputControlContainer name="test" />
    </div>
  );
};

export const Default = (props: CollapsibleBoxDraggableProps): JSX.Element => {
  const methods = useForm<FormValues>({ defaultValues: { test: 'Hello World!' } });

  const [panels, setPanels] = useState<CollapsibleBoxDraggableProps['panels']>([
    {
      id: 'test-1',
      panelProps: {
        dataTestId: 'test-1',
        title: 'Title 1',
        isDraggingDisabled: true,
        startEnhancer: () => (
          <Panel.BackgroundIcon
            data-testid="test-1--background-icon"
            Icon={Chat}
            backgroundColor="brandSubtle"
          />
        ),
        children: () => <Component1 />,
      },
    },
    {
      id: 'test-2',
      panelProps: {
        dataTestId: 'test-2',
        title: 'Title 2',
        endEnhancer: () => (
          <Panel.IconButton
            data-testid="test-2--icon-button"
            onClick={(event) => {
              event.stopPropagation();
              console.log('Icon button clicked');
            }}
          >
            <Chat />
          </Panel.IconButton>
        ),
        children: () => <div>Panel 2</div>,
      },
    },
    {
      id: 'test-3',
      panelProps: {
        dataTestId: 'test-3',
        title: 'Title 3',
        children: () => <Component3 />,
      },
    },
  ]);

  /** Action to handle the end of a drag event */
  const handleDragEnd = ({ panels: newPanels }: OnDragEndParams): void => {
    setPanels(newPanels);
  };

  return (
    <FormProvider {...methods}>
      <CollapsibleBoxDraggable
        {...props}
        panels={panels}
        expanded={panels.map(({ id }) => id)}
        onDragEnd={handleDragEnd}
      />
    </FormProvider>
  );
};
