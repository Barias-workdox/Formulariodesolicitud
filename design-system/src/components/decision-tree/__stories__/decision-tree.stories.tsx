import { useState } from 'react';

import { action } from 'storybook/actions';

import {
  decisionTreeDynamicAttributesMock,
  decisionTreeGroupsMock,
  decisionTreeProfilesMock,
  decisionTreeUsersMock,
  decisionTreeWorkflowTemplatesMock,
} from '../__tests__/__mocks__/decision-tree-options.mock';
import {
  decisionTreeRulesMock,
  emptyDecisionTreeRulesMock,
} from '../__tests__/__mocks__/decision-tree.mock';
import { DecisionTree } from '../decision-tree';
import { getOptionsConfig } from '../utils/decision-tree.utils';

import type { DecisionTreeProps } from '../decision-tree';
import type { DecisionTreeAction } from '../interfaces';
import type { Meta, StoryFn } from '@storybook/react-vite';

const fullDecisionTreeData: DecisionTreeProps = {
  isDistributionModeEnabled: false,
  rules: decisionTreeRulesMock,
  users: decisionTreeUsersMock,
  groups: decisionTreeGroupsMock,
  profiles: decisionTreeProfilesMock,
  dynamicAttributes: decisionTreeDynamicAttributesMock,
  workflowTemplates: decisionTreeWorkflowTemplatesMock,
  onChange: () => {},
} as const;

export default {
  title: 'Modules/Decision Tree',
  component: DecisionTree,
  args: {
    'data-testid': 'decision-tree',
    ...fullDecisionTreeData,
  },
  argTypes: {
    rules: {
      options: ['full', 'empty'],
      mapping: {
        full: decisionTreeRulesMock,
        empty: emptyDecisionTreeRulesMock,
      },
      control: { type: 'select' },
    },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/PHw2i1GkSPbWaHepO1uw0R/%C3%81rbol-de-decisi%C3%B3n?node-id=8293-32167&t=da56w9o5PJhdYxXZ-0',
    },
  },
} as Meta<typeof DecisionTree>;

/** Default component */
const Template: StoryFn<typeof DecisionTree> = (props) => {
  const [data, setData] = useState(() => props.rules);

  const onChange = ({ type, payload }: DecisionTreeAction): void => {
    action('onChange')({ type, payload });

    switch (type) {
      case 'ADD_CONDITION':
      case 'DELETE_RULE_GROUP':
      case 'DELETE_TREE_RULE':
      case 'DELETE_CONDITION':
        break;

      case 'UPDATE_RULE_GROUP_LOGICAL_CONNECTOR':
        setData((prev) =>
          prev.map((rule) =>
            rule.id === payload.ruleGroupId
              ? {
                  ...rule,
                  ...payload.body,
                }
              : rule,
          ),
        );

        break;

      case 'UPDATE_CONDITION':
        setData((prev) =>
          prev.map((rule) =>
            rule.id === payload.ruleGroupId
              ? {
                  ...rule,
                  treeRules: rule.treeRules.map((group) =>
                    group.id === payload.ruleGroupId
                      ? {
                          ...group,
                          conditions: group.conditions.map((condition) =>
                            condition.id === payload.conditionId
                              ? { ...condition, ...payload.body }
                              : condition,
                          ),
                        }
                      : group,
                  ),
                }
              : rule,
          ),
        );

        break;

      case 'UPDATE_CONDITION_LOGICAL_CONNECTOR':
        setData((prev) =>
          prev.map((rule) =>
            rule.id === payload.ruleGroupId
              ? {
                  ...rule,
                  treeRules: rule.treeRules.map((group) =>
                    group.id === payload.treeRuleId ? { ...group, ...payload.body } : group,
                  ),
                }
              : rule,
          ),
        );

        break;

      case 'UPDATE_ACTION':
        setData((prev) =>
          prev.map((rule) =>
            rule.id === payload.ruleGroupId
              ? {
                  ...rule,
                  actions: rule.actions.map((action) =>
                    action.id === payload.actionId ? { ...action, ...payload.body } : action,
                  ),
                }
              : rule,
          ),
        );

        break;
    }
  };

  return (
    <DecisionTree
      {...props}
      rules={data}
      onChange={onChange}
    />
  );
};

/** Paginated component */
const PaginatedTemplate: StoryFn<typeof DecisionTree> = (props) => {
  const {
    users: rawUsers,
    groups: rawGroups,
    profiles: rawProfiles,
    dynamicAttributes: rawDynamicAttributes,
    workflowTemplates: rawWorkflowTemplates,
  } = props;

  const propsConfig = {
    users: getOptionsConfig(rawUsers!),
    groups: getOptionsConfig(rawGroups!),
    profiles: getOptionsConfig(rawProfiles!),
    dynamicAttributes: getOptionsConfig(rawDynamicAttributes!),
    workflowTemplates: getOptionsConfig(rawWorkflowTemplates!),
  };

  const [loading, isLoading] = useState({
    users: false,
    groups: false,
    profiles: false,
    dynamicAttributes: false,
    workflowTemplates: false,
  });

  const [currentData, setCurrentData] = useState({
    users: propsConfig.users.options,
    groups: propsConfig.groups.options,
    profiles: propsConfig.profiles.options,
    dynamicAttributes: propsConfig.dynamicAttributes.options,
    workflowTemplates: propsConfig.workflowTemplates.options,
  });

  /** Fetch more data for a specific type */
  const fetchMoreData = (type: keyof typeof currentData): void => {
    const { options: fullOptions } = getOptionsConfig(fullDecisionTreeData[type]);
    const currentOptions = currentData[type];

    if (loading[type] || fullOptions.length <= currentOptions.length) return;

    isLoading((prev) => ({ ...prev, [type]: true }));
    propsConfig[type].onLoadMore();

    setTimeout(() => {
      isLoading((prev) => ({ ...prev, [type]: false }));
      setCurrentData((prev) => ({
        ...prev,
        [type]: [
          ...prev[type],
          ...(fullOptions.slice(prev[type].length, prev[type].length + 5) || []),
        ],
      }));
    }, 1000);
  };

  return (
    <Template
      {...props}
      users={{
        options: currentData.users,
        isLoadingMore: loading.users,
        onLoadMore: () => fetchMoreData('users'),
      }}
      groups={{
        options: currentData.groups,
        isLoadingMore: loading.groups,
        onLoadMore: () => fetchMoreData('groups'),
      }}
      profiles={{
        options: currentData.profiles,
        isLoadingMore: loading.profiles,
        onLoadMore: () => fetchMoreData('profiles'),
      }}
      dynamicAttributes={{
        options: currentData.dynamicAttributes,
        isLoadingMore: loading.dynamicAttributes,
        onLoadMore: () => fetchMoreData('dynamicAttributes'),
      }}
      workflowTemplates={{
        options: currentData.workflowTemplates,
        isLoadingMore: loading.workflowTemplates,
        onLoadMore: () => fetchMoreData('workflowTemplates'),
      }}
    />
  );
};

export const Default = Template.bind({});

export const Paginated = PaginatedTemplate.bind({});

Paginated.args = {
  users: {
    options: decisionTreeUsersMock.slice(0, 5),
    isLoadingMore: false,
    onLoadMore: () => action('load-more-users'),
  },
  groups: {
    options: decisionTreeGroupsMock.slice(0, 5),
    isLoadingMore: false,
    onLoadMore: () => action('load-more-groups'),
  },
  profiles: {
    options: decisionTreeProfilesMock.slice(0, 5),
    isLoadingMore: false,
    onLoadMore: () => action('load-more-profiles'),
  },
  dynamicAttributes: {
    options: decisionTreeDynamicAttributesMock.slice(0, 5),
    isLoadingMore: false,
    onLoadMore: () => action('load-more-dynamic-attributes'),
  },
  workflowTemplates: {
    options: decisionTreeWorkflowTemplatesMock.slice(0, 5),
    isLoadingMore: false,
    onLoadMore: () => action('load-more-workflow-templates'),
  },
};
