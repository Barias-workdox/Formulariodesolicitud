import { render, screen, testHelpers } from '@test/test-utils';

import { FormMetadataListItem } from '../../components/data-extraction/components/data-extraction-beta/components/form-metadata-list-item';

import type { FormMetadataListItemProps } from '../../components/data-extraction/components/data-extraction-beta/components/form-metadata-list-item';
import type { RenderType } from '@test/test-utils';

const labelText = 'labelText';
const inputText = 'inputText';
const captionText = 'captionText';

const defaultProps: FormMetadataListItemProps = {
  label: labelText,
  inputText,
  captionText,
  disabled: false,
  mode: 'caption',
  onChange: testHelpers.fn(),
  onSubmit: testHelpers.fn(),
  onToggle: testHelpers.fn(),
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<FormMetadataListItemProps>): RenderType =>
  render(
    <FormMetadataListItem
      {...defaultProps}
      {...props}
    />,
  );

describe('FormMetadataListItem - tests', () => {
  it('should render component correctly', () => {
    renderComponent();

    expect(screen.getByText(labelText)).toBeInTheDocument();
    expect(screen.getByText(captionText)).toBeInTheDocument();
  });
});
