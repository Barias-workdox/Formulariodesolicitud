import { render, renderUseTranslation } from '@test/test-utils';

import { formatDateAsText } from '../../../utils/strings/date.utils';

import { DeletedDocumentAlert } from './deleted-document-alert';

import type { DeletedDocumentAlertProps } from './deleted-document-alert';
import type { RenderType } from '@test/test-utils';

const defaultProps: DeletedDocumentAlertProps = {
  deletedAt: '2022-04-16T13:15:33.741-04:00',
};

const { t } = renderUseTranslation();

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<DeletedDocumentAlertProps>): RenderType => {
  return render(
    <DeletedDocumentAlert
      {...defaultProps}
      {...props}
    />,
  );
};

describe('DeletedDocumentAlert - test', () => {
  it('should render correctly', () => {
    const { getByText } = renderComponent();

    expect(getByText(t('collaborationDetails.deletedDocumentAlert.title'))).toBeInTheDocument();
    expect(getByText(formatDateAsText(defaultProps.deletedAt, 'es', true))).toBeInTheDocument();
  });
});
