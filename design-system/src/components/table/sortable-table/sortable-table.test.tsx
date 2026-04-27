import type { ReactElement, ReactNode } from 'react';

import { render, screen, testHelpers } from '@test/test-utils';
import { lightTheme } from '@themes';

import { TableCell } from '../components';
import { DraggableCellTable } from '../draggable-rows-table';

import { SortableTable } from './sortable-table';
import { getTableBody, getTableHeader } from './sortable-table.utils';

import type { SortableTableProps } from './sortable-table';
import type { RenderType } from '@test/test-utils';

const mockDataTestId = 'component';
const mockHeaders = ['Header 1', 'Header 2'];
const mockChildren = [
  ['Cell 1', 'Cell 2'],
  ['Cell 3', 'Cell 4'],
];
const mockHeadersWithCustomCell: SortableTableProps['headers'] = [
  'Header 1',
  (props) => <TableCell {...props}>Header 2</TableCell>,
];
const mockChildrenWithCustomCell: SortableTableProps['children'] = [
  ['Cell 1', 'Cell 2'],
  [
    (props) => <DraggableCellTable {...props}>Cell 3</DraggableCellTable>,
    (props) => <DraggableCellTable {...props}>Cell 4</DraggableCellTable>,
  ],
];
const mockOnDragEnd = testHelpers.fn();

const defaultProps: SortableTableProps = {
  'data-testid': mockDataTestId,
  droppableId: 'droppableId',
  isDragDisabled: false,
  headers: mockHeaders,
  children: mockChildren,
  onDragEnd: mockOnDragEnd,
};

/** Utility to render component */
const renderComponent = (props?: Partial<SortableTableProps>): RenderType => {
  return render(
    <SortableTable
      {...defaultProps}
      {...props}
    />,
  );
};

const getTableTemplate = ({
  headers,
  children,
}: {
  headers?: ReactNode[];
  children?: ReactNode[];
}): ReactElement => {
  return (
    <table>
      <tbody>
        {children ? (
          children.map((row, indexRow) => <tr key={`row-${indexRow}`}>{row}</tr>)
        ) : headers ? (
          <tr>{headers}</tr>
        ) : undefined}
      </tbody>
    </table>
  );
};

describe('sortable-table component', () => {
  it('render with header and cells', () => {
    renderComponent();

    mockHeaders.forEach((header) => {
      expect(screen.getByText(header)).toBeInTheDocument();
    });

    mockChildren.flat().forEach((cellContent) => {
      expect(screen.getByText(cellContent)).toBeInTheDocument();
    });
  });

  describe('getTableHeader', () => {
    it('renders table header correctly', () => {
      const tableWithHeader = getTableTemplate({
        headers: getTableHeader(mockHeadersWithCustomCell, lightTheme),
      });

      render(tableWithHeader);

      const headerContents = mockHeadersWithCustomCell.map((headerCell) =>
        typeof headerCell === 'function' ? headerCell({}) : headerCell,
      );
      const stringHeaders = headerContents.filter(
        (content): content is string => typeof content === 'string',
      );
      const elementHeaders = headerContents.filter(
        (content): content is ReactElement => typeof content !== 'string',
      );

      stringHeaders.forEach((content) => {
        expect(screen.getByText(content)).toBeInTheDocument();
      });

      elementHeaders.forEach((element) => {
        expect(screen.getByText(element.props.children)).toBeInTheDocument();
      });
    });
  });

  describe('getTableBody', () => {
    it('renders table body correctly', () => {
      const tableWithBody = getTableTemplate({
        children: getTableBody(mockChildrenWithCustomCell, false, lightTheme),
      });

      render(tableWithBody);

      const allCells = mockChildrenWithCustomCell.flat();
      const cellContents = allCells.map((cell) => (typeof cell === 'function' ? cell({}) : cell));
      const stringCells = cellContents.filter(
        (content): content is string => typeof content === 'string',
      );
      const elementCells = cellContents.filter(
        (content): content is ReactElement => typeof content !== 'string',
      );

      stringCells.forEach((content) => {
        expect(screen.getByText(content)).toBeInTheDocument();
      });

      elementCells.forEach((element) => {
        expect(screen.getByText(element.props.children)).toBeInTheDocument();
      });
    });
  });
});
