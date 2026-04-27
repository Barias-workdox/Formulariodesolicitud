import type { RuleGroupType } from '../../interfaces';

export const emptyDecisionTreeRulesMock: RuleGroupType[] = [
  {
    id: 1,
    logicConnector: 'OR',
    treeRules: [
      {
        id: 1,
        logicConnector: 'AND',
        conditions: [
          {
            id: 1,
          },
          {
            id: 2,
          },
        ],
      },
    ],
    actions: [
      {
        id: 1,
      },
    ],
  },
];

export const decisionTreeRulesMock: RuleGroupType[] = [
  {
    id: 1,
    logicConnector: 'OR',
    treeRules: [
      {
        id: 1,
        logicConnector: 'OR',
        conditions: [
          {
            id: 1,
            objectToEval: 'User',
            field: 'job_ids',
            operator: '!=',
            value: '1',
            dataType: 'string',
          },
          {
            id: 2,
            objectToEval: 'WorkflowRequest',
            field: '1',
            operator: '!=',
            value: 'Value',
            dataType: 'string',
          },
        ],
      },
      {
        id: 2,
        logicConnector: 'OR',
        conditions: [
          {
            id: 1,
            objectToEval: 'WorkflowRequest',
            field: '2',
            operator: '<=',
            value: '12345',
            dataType: 'numeric',
          },
        ],
      },
    ],
    actions: [
      {
        id: 1,
        actionType: 'start_workflow',
        targetId: '1',
      },
    ],
  } satisfies RuleGroupType,
];
