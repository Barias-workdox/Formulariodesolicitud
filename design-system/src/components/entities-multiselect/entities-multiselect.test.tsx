import { userEvent } from '@testing-library/user-event';

import { render, testHelpers, screen, waitFor } from '@test/test-utils';

import { EntitiesMultiSelect } from './entities-multiselect';
import { MOCK_ENTITIES } from './entities-multiselect.constants';

import type { EntitiesMultiSelectProps } from './entities-multiselect.types';
import type { RenderType } from '@test/test-utils';

const mockOnClick = testHelpers.fn();

const defaultProps = {
  options: MOCK_ENTITIES,
  values: [{ id: '16', label: 'ABC - LumenPath Energy' }],
  placeholder: 'TestPlaceholder',
  onChange: mockOnClick,
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<EntitiesMultiSelectProps>): RenderType => {
  return render(
    <EntitiesMultiSelect
      {...defaultProps}
      {...props}
    />,
  );
};

describe('EntitiesMultiSelect - test', () => {
  afterEach(() => {
    testHelpers.clearAllMocks();
  });

  it('should open the lists dropdown when the arrowIcon is clicked', async () => {
    renderComponent();

    const dropdownBtn = screen.getByTestId('entities-multiselect__wrapper');

    await userEvent.click(dropdownBtn);

    const listSearchInput = await waitFor(() =>
      screen.getByTestId('entities-multiselect-entities-list__search-input'),
    );

    const entityCompanyList = await waitFor(() =>
      screen.getByTestId('entities-multiselect-entities-list__entity-company-list'),
    );

    const entityPeopleList = await waitFor(() =>
      screen.getByTestId('entities-multiselect-entities-list__entity-people-list'),
    );

    expect(listSearchInput).toBeInTheDocument();
    expect(entityCompanyList).toBeInTheDocument();
    expect(entityPeopleList).toBeInTheDocument();
  });

  it('should render the spinner when main load is trigger', async () => {
    renderComponent({ isLoading: 'all' });

    const dropdownBtn = screen.getByTestId('entities-multiselect__wrapper');

    await userEvent.click(dropdownBtn);

    const dropdownSpinnerLoading = await waitFor(() =>
      screen.queryByTestId('entities-multiselect-entities-list__dropdown-loading'),
    );

    const entityCompanyList = await waitFor(() =>
      screen.queryByTestId('entities-multiselect-entities-list__entity-company-list'),
    );

    const entityPeopleList = await waitFor(() =>
      screen.queryByTestId('entities-multiselect-entities-list__entity-people-list'),
    );

    expect(dropdownSpinnerLoading).toBeInTheDocument();
    expect(entityCompanyList).not.toBeInTheDocument();
    expect(entityPeopleList).not.toBeInTheDocument();
  });

  it('should render one list and other show no result placeholder', async () => {
    const onlyCompanyOptions = MOCK_ENTITIES.filter((option) => option.type === 'company');

    renderComponent({ options: onlyCompanyOptions });

    const dropdownBtn = screen.getByTestId('entities-multiselect__wrapper');

    await userEvent.click(dropdownBtn);

    const entityCompanyList = await waitFor(() =>
      screen.queryByTestId('entities-multiselect-entities-list__entity-company-list'),
    );

    const entityPeopleList = await waitFor(() =>
      screen.queryByTestId('entities-multiselect-entities-list__entity-people-list'),
    );

    expect(entityCompanyList).toBeInTheDocument();
    expect(entityPeopleList).not.toBeInTheDocument();
  });

  it('should render the proper count for each entityList', async () => {
    renderComponent({ peopleTotalElements: 15, companyTotalElements: 15 });

    const dropdownBtn = screen.getByTestId('entities-multiselect__wrapper');

    await userEvent.click(dropdownBtn);

    const entityCompanyCount = await waitFor(() =>
      screen.queryByTestId('entities-multiselect-entities-list__entity-company-count'),
    );

    const entityPeopleCount = await waitFor(() =>
      screen.queryByTestId('entities-multiselect-entities-list__entity-people-count'),
    );

    expect(entityCompanyCount).toBeInTheDocument();
    expect(entityPeopleCount).toBeInTheDocument();

    /* 15 being the amount of options for each entity in the mock data provided */
    expect(entityCompanyCount).toHaveTextContent('(15)');

    expect(entityPeopleCount).toHaveTextContent('(15)');
  });

  it('should render "no value" placeholder when no options are available', async () => {
    renderComponent({ options: [], values: [] });

    const dropdownBtn = screen.getByTestId('entities-multiselect__wrapper');

    await userEvent.click(dropdownBtn);

    const noResultsPlaceHolder = await waitFor(() =>
      screen.queryByTestId('entities-multiselect-entities-list__no-results'),
    );

    const entityPeopleCount = await waitFor(() =>
      screen.queryByTestId('entities-multiselect-entities-list__entity-people-count'),
    );

    const entityCompanyCount = await waitFor(() =>
      screen.queryByTestId('entities-multiselect-entities-list__entity-people-count'),
    );

    expect(entityCompanyCount).not.toBeInTheDocument();
    expect(entityPeopleCount).not.toBeInTheDocument();

    expect(noResultsPlaceHolder).toBeInTheDocument();
  });
});
