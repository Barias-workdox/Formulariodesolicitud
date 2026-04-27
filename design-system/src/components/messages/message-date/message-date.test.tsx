import { render, screen } from '@test/test-utils';

import { formatDatetime } from '../../utils/strings/date.utils';

import { MessageDate } from './message-date';

import type { MessageDateProps } from './message-date';
import type { RenderType } from '@test/test-utils';

const createdAt = '2022-04-16T13:15:23.690-04:00';
const updatedAt = '2022-04-16T16:15:23.690-04:00';

const defaultProps: MessageDateProps = {
  createdAt,
  updatedAt: '',
  isEditing: false,
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<MessageDateProps>): RenderType =>
  render(
    <MessageDate
      {...defaultProps}
      {...props}
    />,
  );

describe('MessageDate - test', () => {
  it('should render the correct date when updatedAt is empty', () => {
    renderComponent();

    expect(screen.getByText(formatDatetime(defaultProps.createdAt, 'es'))).toBeInTheDocument();
  });

  it('should render the correct date when updatedAt and createdAt props are equals', () => {
    renderComponent({ updatedAt: createdAt });

    expect(screen.getByText(formatDatetime(createdAt, 'es'))).toBeInTheDocument();
  });

  it('should render the correct date when updatedAt and createdAt props are not equals', () => {
    renderComponent({ updatedAt });

    expect(screen.getByText(`Editado: ${formatDatetime(updatedAt, 'es')}`)).toBeInTheDocument();
  });
});
