import { faker } from '@faker-js/faker';

import type { FieldSelectOptionType } from '@components/decision-tree/hooks';
import type { CommonOption } from '@components/select/next';

/** Utility function to generate mock arrays with faker */
const generateMocks = (count: number, labelGenerator: () => string): CommonOption[] => {
  return [...Array(count)].map((_, index) => ({
    id: `${index + 1}`,
    label: labelGenerator(),
  }));
};

export const decisionTreeUsersMock: CommonOption[] = generateMocks(15, () =>
  faker.person.fullName(),
);

export const decisionTreeGroupsMock: CommonOption[] = generateMocks(
  15,
  () => `${faker.company.name()} Group`,
);

export const decisionTreeProfilesMock: CommonOption[] = generateMocks(
  15,
  () => `${faker.person.fullName()} Profile`,
);

export const decisionTreeDynamicAttributesMock: FieldSelectOptionType[] = [
  { id: '1', label: 'String', dataType: 'string' },
  { id: '2', label: 'Number', dataType: 'numeric' },
  {
    id: '3',
    label: 'List',
    dataType: 'list',
    options: [
      { id: '1', label: 'Option 1' },
      { id: '2', label: 'Option 2' },
    ],
  },
  { id: '4', label: 'Boolean', dataType: 'boolean' },
  { id: '5', label: 'Date', dataType: 'date' },
  { id: '6', label: 'String 2', dataType: 'string' },
  { id: '7', label: 'Number 2', dataType: 'numeric' },
  { id: '8', label: 'Boolean 2', dataType: 'boolean' },
  { id: '9', label: 'Date 2', dataType: 'date' },
  { id: '10', label: 'String 3', dataType: 'string' },
  { id: '11', label: 'Number 3', dataType: 'numeric' },
  { id: '12', label: 'Boolean 3', dataType: 'boolean' },
  { id: '13', label: 'Date 3', dataType: 'date' },
];

export const decisionTreeWorkflowTemplatesMock: CommonOption[] = generateMocks(
  15,
  () => `Workflow Template ${faker.lorem.words({ min: 2, max: 4 })}`,
);
