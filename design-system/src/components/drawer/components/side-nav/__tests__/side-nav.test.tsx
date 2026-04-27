import { render, screen } from '@test/test-utils';

import { SideNav } from '../side-nav';

const CONTENT_TEXT = 'content_text';

describe('SideNav component', () => {
  it('should render children', () => {
    const { getByText } = render(
      <SideNav isOpen>
        <div>{CONTENT_TEXT}</div>
      </SideNav>,
    );

    expect(getByText(CONTENT_TEXT)).toBeInTheDocument();
  });

  it('should set default properties correctly', () => {
    render(<SideNav isOpen>{CONTENT_TEXT}</SideNav>);
    expect(screen.getByText(CONTENT_TEXT)).toMatchSnapshot();
  });

  it('should set full size and left anchor correctly', () => {
    render(
      <SideNav
        size="full"
        anchor="right"
        isOpen={false}
      >
        {CONTENT_TEXT}
      </SideNav>,
    );
    expect(screen.getByText(CONTENT_TEXT)).toMatchSnapshot();
  });

  it('should set the size and anchor properly', () => {
    render(
      <SideNav
        size="auto"
        anchor="top"
        isOpen
      >
        {CONTENT_TEXT}
      </SideNav>,
    );
    expect(screen.getByText(CONTENT_TEXT)).toMatchSnapshot();
  });
});
