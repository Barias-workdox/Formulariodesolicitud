import userEvent from '@testing-library/user-event';
import zod from 'zod';

import { ReactComponent as BrainIcon } from '@assets/icons/webdox-ai/brain-icon.svg';
import { MOCK_ENTITIES } from '@components/entities-multiselect/entities-multiselect.constants';
import { Tag } from '@components/tag/next/tag';
import { render, screen, testHelpers, waitFor, within } from '@test/test-utils';

import { FormProviderControlWrapper } from '../../../../test/form-provider-utils';
import { Button } from '../../../button';

import {
  EntitiesMultiSelectControl,
  type EntitiesMultiselectControlProps,
} from './entities-multiselect-control';

import type { RenderType } from '@test/test-utils';

const mockOnClick = testHelpers.fn();

const defaultProps: EntitiesMultiselectControlProps = {
  options: MOCK_ENTITIES,
  label: 'Entities Test',
  name: 'entitiesMultiSelect',
  values: [{ id: '16', label: 'ABC - LumenPath Energy' }],
  placeholder: 'TestPlaceholder',
  onChange: mockOnClick,
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<EntitiesMultiselectControlProps>): RenderType => {
  return render(
    <FormProviderControlWrapper onSubmit={mockOnClick}>
      <EntitiesMultiSelectControl
        {...defaultProps}
        {...props}
      />
      <Button type="submit">Submit test</Button>
    </FormProviderControlWrapper>,
  );
};

describe('entities-multiselect-control - tests', () => {
  afterEach(() => {
    testHelpers.clearAllMocks();
  });

  it('should render the component properly', async () => {
    const { container } = renderComponent();

    /* Check if document was properly rendered */
    expect(container).toBeInTheDocument();

    /* Check if available selected tag is rendered */
    const selectedTag = screen.getByTestId('design-system-tag');

    const tagTextValue = within(selectedTag).getByText('ABC - LumenPath Energy');

    expect(tagTextValue).toBeInTheDocument();
  });

  it('should render the component with no value and proper placeholder', async () => {
    const { container } = renderComponent({ values: [] });

    /* Check if document was properly rendered */
    expect(container).toBeInTheDocument();

    const customPlaceholderText = screen.getByText('TestPlaceholder');

    expect(customPlaceholderText).toBeInTheDocument();
  });

  it('should render the component with proper leading', async () => {
    const leadingTestComponent = (
      <div>
        <Tag
          kind="ai"
          variant="light"
          shape="rounded"
          size="md"
          icon={BrainIcon}
        />
      </div>
    );
    const { container } = renderComponent({ leading: leadingTestComponent });

    expect(container).toBeInTheDocument();

    const tags = screen.getAllByTestId('design-system-tag');

    /* Tags is now an array of elements */
    expect(tags.length).toBeGreaterThan(1);

    /* Check first tag contains an SVG */
    const [firstTag] = tags;

    expect(firstTag.querySelector('svg')).toBeInTheDocument();
  });

  it('should open the popover with the correct information', async () => {
    const { container } = renderComponent({ peopleTotalElements: 10, companyTotalElements: 10 });

    expect(container).toBeInTheDocument();

    const wrapperDiv = screen.getByTestId('entities-multiselect__wrapper');

    await userEvent.click(wrapperDiv);

    const popover = document.querySelector('[data-baseweb="popover"]');

    expect(popover).toBeInTheDocument();

    const peopleCount = screen.getByTestId(
      'entities-multiselect-entities-list__entity-people-count',
    );

    const companyCount = screen.getByTestId(
      'entities-multiselect-entities-list__entity-company-count',
    );

    expect(peopleCount).toBeInTheDocument();
    expect(companyCount).toBeInTheDocument();
    expect(peopleCount).toHaveTextContent('(10)');
    expect(companyCount).toHaveTextContent('(10)');
  });

  it('should focus the multiselect when the form is submitted and there is an error', async () => {
    render(
      <FormProviderControlWrapper
        onSubmit={mockOnClick}
        schema={zod.object({
          entitiesMultiSelect: zod
            .any()
            .refine((value) => Array.isArray(value) && value.length > 0, 'Required'),
        })}
        resolverType="zod"
      >
        <EntitiesMultiSelectControl
          {...defaultProps}
          values={[]}
        />
        <Button type="submit">Submit test</Button>
      </FormProviderControlWrapper>,
    );

    const wrapperDiv = screen.getByTestId('entities-multiselect__wrapper');

    await userEvent.click(screen.getByRole('button', { name: 'Submit test' }));

    await waitFor(() => {
      expect(screen.getByText('Required')).toBeInTheDocument();
      expect(wrapperDiv).toHaveFocus();
    });
  });
});
