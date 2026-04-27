export const en = {
  dataTypes: {
    string: {
      label: 'Text',
      description: 'Text data type that allows entering up to 70 characters in total.',
    },
    text: {
      label: 'Paragraph',
      description:
        'Extended text data type that allows entering paragraphs or long descriptions up to 250 characters in total.',
    },
    date: {
      label: 'Date',
      description: 'Calendar data type that allows entering and selecting a date.',
    },
    list: {
      label: 'List',
      description:
        'Single selection data type that allows choosing a value from different predefined options.',
    },
    boolean: {
      label: 'Boolean',
      description:
        'Switch data type that allows activating or deactivating an option in binary form (yes/no).',
    },
    number: {
      label: 'Number',
      description: 'Numeric data type that allows entering values only.',
    },
    percentage: {
      label: 'Percentage',
      description: 'Numeric data type that allows entering values in percentage format.',
    },
    email: {
      label: 'Email',
      description:
        'Text data type that allows entering email addresses in a valid format (example: user@domain.com)',
    },
    directory: {
      label: 'Contact',
      description: 'Reference data type that allows selecting a contact from the contact library.',
    },
    money: {
      label: 'Currency',
      description:
        'Numeric data type that allows entering monetary values with decimal separator and currency symbol.',
    },
    unknown: {
      label: 'Unknown',
      description: '',
    },
  },
  metadata: {
    amount: {
      label: 'Amount',
      description:
        'The contract amount is the total economic value that one party commits to pay to the other. It represents the agreed sum for the execution of the contract.',
    },
    contract_type: {
      label: 'Contract Type',
      description:
        'Indicates the main rights and obligations of a contract. For example, it can be a purchase and supply contract, lease, service provision or employment contract, among others.',
    },
    counterparty: {
      label: 'Counterparty',
      label_plural: 'Counterparties',
      description:
        'It is the entity or party with which the contract is made; it is who signs the agreement with you or your company and also assumes rights and obligations according to the established terms.',
    },
    end_date: {
      label: 'End Date',
      description:
        'Represents the official date on which the contract ends. From that moment, the parties are no longer bound by the main terms of the contract.',
    },
    start_date: {
      label: 'Start Date',
      description:
        'It is the date on which the contract comes into force and its main obligation becomes enforceable. It marks the beginning of the pure and simple obligations established in the contract.',
    },
    party: {
      label: 'Party',
      label_plural: 'Parties',
      description:
        'It is the entity or person that participates in the conclusion of a contract; represents your company or yourself in signing the agreement and, like the counterparty, assumes rights and obligations according to the established terms.',
    },
  },
};
