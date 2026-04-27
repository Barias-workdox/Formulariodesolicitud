import { userEvent } from '@testing-library/user-event';

import { render, screen, testHelpers } from '@test/test-utils';

import { Breadcrumbs } from '../../next/breadcrumbs';

const onClickMock = testHelpers.fn();

const menuTestId = 'breadcrumbs__menu__button';

beforeEach(() => {
  onClickMock.mockClear();
});

describe('Breadcrumbs - tests', () => {
  test('should render the component correctly', () => {
    render(
      <Breadcrumbs>
        <Breadcrumbs.Item label="Home">Home</Breadcrumbs.Item>
        <Breadcrumbs.Item label="Products">Products</Breadcrumbs.Item>
        <Breadcrumbs.Item label="Product 1">Product 1</Breadcrumbs.Item>
      </Breadcrumbs>,
    );

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Products')).toBeInTheDocument();
    expect(screen.getByText('Product 1')).toBeInTheDocument();
  });
  test('should trigger onClick correctly', async () => {
    render(
      <Breadcrumbs>
        <Breadcrumbs.Item
          onClick={onClickMock}
          label="Home"
        >
          Home
        </Breadcrumbs.Item>
        <Breadcrumbs.Item label="Products">Products</Breadcrumbs.Item>
      </Breadcrumbs>,
    );

    await userEvent.click(screen.getByText('Home'));
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
  test('should render the component correctly with custom element in item', () => {
    render(
      <Breadcrumbs>
        <Breadcrumbs.Item
          onClick={onClickMock}
          label="Home"
        >
          <a href="/home">Home</a>
        </Breadcrumbs.Item>
        <Breadcrumbs.Item label="Products">
          <a
            data-testid="products-anchor-text"
            href="/products"
          >
            Products
          </a>
        </Breadcrumbs.Item>
      </Breadcrumbs>,
    );
    expect(screen.getByTestId('products-anchor-text')).toBeInTheDocument();
  });
  test('should not render the menu component when there are few than 4 elements', () => {
    render(
      <Breadcrumbs>
        <Breadcrumbs.Item label="Home">Home</Breadcrumbs.Item>
        <Breadcrumbs.Item label="Products">Products</Breadcrumbs.Item>
        <Breadcrumbs.Item label="Products">Product 1</Breadcrumbs.Item>
      </Breadcrumbs>,
    );
    expect(screen.queryByTestId(menuTestId)).not.toBeInTheDocument();
  });
  test('should render the menu component when there are 4 or more elements', () => {
    render(
      <Breadcrumbs>
        <Breadcrumbs.Item label="Home">Home</Breadcrumbs.Item>
        <Breadcrumbs.Item label="Products">Products</Breadcrumbs.Item>
        <Breadcrumbs.Item label="Product 1">Product 1</Breadcrumbs.Item>
        <Breadcrumbs.Item label="Product 1 Detail">Product 1 Detail</Breadcrumbs.Item>
      </Breadcrumbs>,
    );
    expect(screen.queryByText('Product')).not.toBeInTheDocument();
    expect(screen.getByTestId(menuTestId)).toBeInTheDocument();
  });
  test('should render the menu component when there are 4 or more elements and trigger onClick when item is clicked', async () => {
    render(
      <Breadcrumbs>
        <Breadcrumbs.Item label="Home">Home</Breadcrumbs.Item>
        <Breadcrumbs.Item
          onClick={onClickMock}
          label="Products"
        >
          Products
        </Breadcrumbs.Item>
        <Breadcrumbs.Item label="Product 1">Product 1</Breadcrumbs.Item>
        <Breadcrumbs.Item label="Product 1 Detail">Product 1 Detail</Breadcrumbs.Item>
      </Breadcrumbs>,
    );
    await userEvent.click(screen.getByTestId(menuTestId));
    expect(screen.getByText('Products')).toBeInTheDocument();
    expect(onClickMock).toHaveBeenCalledTimes(0);
    await userEvent.click(screen.getByText('Products'));
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  test('should ignore non-Breadcrumbs.Item children', () => {
    render(
      <Breadcrumbs>
        <div>Invalid Child</div>
        <Breadcrumbs.Item label="Home">Home</Breadcrumbs.Item>
      </Breadcrumbs>,
    );

    // "Invalid Child" should not be rendered
    expect(screen.queryByText('Invalid Child')).not.toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
  });
});
