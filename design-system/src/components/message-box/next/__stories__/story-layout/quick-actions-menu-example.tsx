import { useEffect, useMemo, useState } from 'react';

import { faker } from '@faker-js/faker';

import { StatelessPopover } from '@components/popover';

interface QuickActionsMenuExampleProps {
  query: string;
}

const quickActionsOptions = Array.from({ length: 10 }, () => faker.lorem.sentence(2));

/**
 * QuickActionsMenuExample component
 * This component is used to wrap the quick actions menu example
 * and add the custom styles
 */
export const QuickActionsMenuExample = ({ query }: QuickActionsMenuExampleProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  const filteredQuickActionsOptions = useMemo(() => {
    return quickActionsOptions.filter((option) =>
      option.toLowerCase().includes(query.toLowerCase()),
    );
  }, [query]);

  /**
   * Open the popover when there are filtered quick actions options
   */
  useEffect(() => {
    setIsOpen(filteredQuickActionsOptions.length > 0);
  }, [filteredQuickActionsOptions]);

  return (
    <StatelessPopover
      isOpen={isOpen}
      zIndex={999}
      onEsc={() => setIsOpen(false)}
      onClickOutside={() => setIsOpen(false)}
      popoverMargin={40}
      content={
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            width: '200px',
            alignItems: 'start',
          }}
        >
          {filteredQuickActionsOptions.map((option) => (
            <div
              key={option}
              style={{ padding: '10px', borderBottom: '1px solid #ccc' }}
            >
              {option}
            </div>
          ))}
        </div>
      }
      placement="bottomLeft"
    >
      <span
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      />
    </StatelessPopover>
  );
};
