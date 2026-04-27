import { render, screen } from '@test/test-utils';

import {
  Card,
  CardAction,
  CardBody,
  CardFooter,
  CardHeader,
  CardIcon,
  CardText,
  CardTitle,
} from '../card';

describe('Card Component', () => {
  it('should render Card component', () => {
    render(<Card>Card Content</Card>);
    expect(screen.getByText('Card Content')).toBeInTheDocument();
  });

  it('should render CardHeader component', () => {
    render(<CardHeader>Header Content</CardHeader>);
    expect(screen.getByText('Header Content')).toBeInTheDocument();
  });

  it('should render CardBody component', () => {
    render(<CardBody>Body Content</CardBody>);
    expect(screen.getByText('Body Content')).toBeInTheDocument();
  });

  it('should render CardFooter component', () => {
    render(<CardFooter>Footer Content</CardFooter>);
    expect(screen.getByText('Footer Content')).toBeInTheDocument();
  });

  it('should render CardAction component', () => {
    render(<CardAction>Action Content</CardAction>);
    expect(screen.getByText('Action Content')).toBeInTheDocument();
  });

  it('should render CardIcon component', () => {
    render(<CardIcon>prueba</CardIcon>);
    expect(screen.getByText('prueba')).toBeInTheDocument();
  });

  it('should render CardTitle component', () => {
    render(<CardTitle>Title Content</CardTitle>);
    expect(screen.getByText('Title Content')).toBeInTheDocument();
  });

  it('should render CardText component', () => {
    render(<CardText>Text Content</CardText>);
    expect(screen.getByText('Text Content')).toBeInTheDocument();
  });
});
