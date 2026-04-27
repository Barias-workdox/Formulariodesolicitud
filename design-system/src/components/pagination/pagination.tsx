import { Pagination as BaseWebPagination, SIZE } from 'baseui/pagination';

import { useCss } from '@components/utils/hooks/use-css';

import type { PaginationProps } from 'baseui/pagination';

/** Pagination Component */
export function Pagination(props: PaginationProps): JSX.Element {
  const { theme } = useCss();

  return (
    <BaseWebPagination
      size={SIZE.mini}
      {...props}
      overrides={{
        PrevButton: {
          style: ({ $disabled }) => ({
            ...theme.typography.ParagraphSmall,
            color: theme.colors.neutralSubdued,
            borderRadius: theme.borders.borderSm,
            ':disabled': {
              backgroundColor: theme.colors.neutralWashed,
              color: theme.colors.neutralDepressed,
            },
            ...(!$disabled && {
              ':hover': {
                backgroundColor: theme.colors.neutralSubtle,
                color: theme.colors.neutralStrong,
              },
            }),
          }),
        },
        NextButton: {
          style: ({ $disabled }) => ({
            ...theme.typography.ParagraphSmall,
            color: theme.colors.neutralSubdued,
            borderRadius: theme.borders.borderSm,
            ':disabled': {
              backgroundColor: theme.colors.neutralWashed,
              color: theme.colors.neutralDepressed,
            },
            ...(!$disabled && {
              ':hover': {
                backgroundColor: theme.colors.neutralSubtle,
                color: theme.colors.neutralStrong,
              },
            }),
          }),
        },
        MaxLabel: {
          style: {
            ...theme.typography.ParagraphSmall,
            color: theme.colors.neutralSubdued,
            fontWeight: 500,
            fontSize: '0.875rem',
          },
        },
        DropdownContainer: {
          style: {
            outline: 'none',
            backgroundColor: 'transparent',
          },
        },
        Select: {
          props: {
            overrides: {
              ControlContainer: {
                style: ({ $isFocused }) => ({
                  paddingTop: '3px',
                  paddingBottom: '3px',
                  border: `1px solid ${$isFocused ? theme.colors.brand : theme.colors.neutralSubtle}`,
                  backgroundColor: 'transparent',
                  borderRadius: theme.borders.borderSm,
                  outline: 'none',
                  ':hover': {
                    background: 'transparent',
                    border: `1px solid ${theme.colors.neutral}`,
                  },
                }),
              },
              ValueContainer: {
                style: {
                  ...theme.typography.ParagraphSmall,
                  color: theme.colors.neutralSubdued,
                  fontWeight: 500,
                  fontSize: '0.875rem',
                },
              },
              DropdownContainer: {
                style: {
                  outline: 'none',
                  backgroundColor: 'transparent',
                },
              },
              Dropdown: {
                style: {
                  boxShadow: 'none',
                  borderRadius: theme.borders.borderSm,
                },
              },
              Popover: {
                props: {
                  overrides: {
                    Body: {
                      style: {
                        boxShadow: theme.lighting.shadowDefault,
                      },
                    },
                  },
                },
              },
            },
          },
        },
      }}
    />
  );
}
