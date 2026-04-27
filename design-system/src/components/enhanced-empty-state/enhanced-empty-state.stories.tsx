import { DocumentAdd } from '@carbon/icons-react';

import Image from './__mocks__/empty-table.svg';
import { EnhancedEmptyState } from './enhanced-empty-state';

import type { Meta, StoryFn } from '@storybook/react-vite';

export default {
  title: 'Components/Content/EnhancedEmptyState',
  component: EnhancedEmptyState,
  args: {},
} as Meta<typeof EnhancedEmptyState>;

/** An EnhancedEmptyState */
const Template: StoryFn<typeof EnhancedEmptyState> = () => {
  return (
    <EnhancedEmptyState
      dataTestId="enhanced-empty-state"
      imageSrc={Image}
    >
      <EnhancedEmptyState.Title>Mejora la gestión de tus documentos</EnhancedEmptyState.Title>
      <EnhancedEmptyState.Content>
        <EnhancedEmptyState.Paragraph>En esta sección podrás:</EnhancedEmptyState.Paragraph>
        <EnhancedEmptyState.List>
          <EnhancedEmptyState.ListItem>
            Almacenar y buscar documentos por sus atributos.
          </EnhancedEmptyState.ListItem>
          <EnhancedEmptyState.ListItem>
            Almacenar y buscar documentos por sus atributos.
          </EnhancedEmptyState.ListItem>
          <EnhancedEmptyState.ListItem>
            Almacenar y buscar documentos por sus atributos.
          </EnhancedEmptyState.ListItem>
        </EnhancedEmptyState.List>
      </EnhancedEmptyState.Content>
      <EnhancedEmptyState.Link
        to={{ pathname: 'https://google.com' }}
        target="_blank"
      >
        Explora más sobre el repositorio de documentos
      </EnhancedEmptyState.Link>
      <EnhancedEmptyState.PrimaryButton
        onClick={() => alert('Button clicked')}
        startEnhancer={DocumentAdd}
      >
        Nuevo documento
      </EnhancedEmptyState.PrimaryButton>
    </EnhancedEmptyState>
  );
};

export const Default = Template.bind({});
