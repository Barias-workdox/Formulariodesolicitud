import type { ReactNode } from 'react';
import { useState } from 'react';

import { ChevronRight, Exit, User, Wikis } from '@carbon/icons-react';
import { NestedMenus } from 'baseui/menu';

import { StatefulMenu } from '..';
import { IconButton } from '../../button';
import { TitleLayout } from '../../layouts';
import { Popover } from '../../popover';
import { Text } from '../../text';
import { useCss } from '../../utils/hooks/use-css';

import type { Meta, StoryFn } from '@storybook/react-vite';
import type { OnItemSelect } from 'baseui/menu';

export default {
  title: 'Components/Pickers/Menu/StatefulMenu',
  component: StatefulMenu,
  args: {
    placementChildMenu: 'rightTop',
    optionListBorderBottom: true,
    menuWidth: '500px',
  },
} as Meta<typeof StatefulMenu>;

/** A Stateful Menu */
const TemplateStateful: StoryFn<typeof StatefulMenu> = (args) => {
  const menuOptionsHandler = {
    option1: (): void => alert('Opción 1'),
    option2: (): void => alert('Opción 2'),
    option3: (): void => alert('Opción 3'),
  };

  return (
    <div
      style={{
        width: '32px',
      }}
    >
      <Popover
        placement="rightBottom"
        content={(): ReactNode => (
          <StatefulMenu
            {...args}
            items={[
              {
                id: 'option1',
                label: 'Opción 1',
              },

              {
                id: 'option2',
                label: 'Opción 2',
                disabled: true,
              },
              {
                id: 'option3',
                label: 'Opción 3',
              },
            ]}
            onItemSelect={({ item }): OnItemSelect =>
              menuOptionsHandler[item.id] && menuOptionsHandler[item.id]()
            }
          />
        )}
      >
        <IconButton
          $style={{
            position: 'relative',
          }}
        >
          <User size={16} />
        </IconButton>
      </Popover>
    </div>
  );
};

/** A Stateful Nested Menu */
const TemplateNestedStatefulMenu: StoryFn<typeof StatefulMenu> = (args) => {
  const { theme } = useCss();
  const [currentLocale, setCurrentLocale] = useState<string>('en');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const userMenuHandlers = {
    logout: (): void => alert('Cerrar Sesión'),
  };

  /** Handle language change */
  const handleChangeLanguage = async ({ item, close }): Promise<void> => {
    setCurrentLocale(item.id);
    setIsLoading(true);

    await new Promise((res) => {
      setTimeout(() => {
        setIsLoading(false);
        alert(`Lenguaje: ${currentLocale}`);
        res(item);
      }, 3000);
    });

    close();
  };

  return (
    <div
      style={{
        width: '32px',
      }}
    >
      <NestedMenus>
        <Popover
          placement="rightBottom"
          content={({ close }): ReactNode => (
            <StatefulMenu
              {...args}
              optionListBorderBottom={false}
              items={{
                __ungrouped: [],
                User: [
                  {
                    id: 'languages',
                    label: 'Lenguajes',
                    startEnhancer: <Wikis size={16} />,
                    endEnhancer: <ChevronRight size={16} />,
                  },
                  {
                    id: 'logout',
                    label: 'Cerrar Sesión',
                    startEnhancer: <Exit size={16} />,
                  },
                ],
              }}
              onItemSelect={({ item }): OnItemSelect =>
                userMenuHandlers[item.id] && userMenuHandlers[item.id]()
              }
              overrides={{
                Option: {
                  props: {
                    getChildMenu: (item: { label: string }): ReactNode => {
                      if (item.label === 'Lenguajes') {
                        return (
                          <StatefulMenu
                            menuWidth="216px"
                            optionListBorderBottom={false}
                            onItemSelect={({ item }): void => {
                              handleChangeLanguage({ item, close });
                            }}
                            items={{
                              __ungrouped: [],
                              Lenguajes: [
                                {
                                  id: 'es',
                                  label: 'Español',
                                  isLoading: isLoading && currentLocale === 'es',
                                  disabled: isLoading && currentLocale !== 'es',
                                  selected: currentLocale === 'es',
                                },
                                {
                                  id: 'en',
                                  label: 'Inglés',
                                  isLoading: isLoading && currentLocale === 'en',
                                  disabled: isLoading && currentLocale !== 'en',
                                  selected: currentLocale === 'en',
                                },
                                {
                                  id: 'pt',
                                  label: 'Portugués',
                                  isLoading: isLoading && currentLocale === 'pt',
                                  disabled: isLoading && currentLocale !== 'pt',
                                  selected: currentLocale === 'pt',
                                },
                              ],
                            }}
                          />
                        );
                      }
                    },
                  },
                },
                OptgroupHeader: {
                  component: (): JSX.Element => (
                    <TitleLayout
                      overrides={{
                        Root: {
                          padding: theme.spacing.spacingMd,
                          borderBottom: `1px solid ${theme.colors.divisionLine}`,
                          width: '255px',
                        },
                        StartEnhancer: {
                          width: '30px',
                          height: '30px',
                        },
                      }}
                      startEnhancer={
                        <div
                          style={{
                            borderRadius: '50%',
                            backgroundColor: theme.colors.brandDepressed,
                            height: '30px',
                            width: '30px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textTransform: 'uppercase',
                          }}
                        >
                          <Text
                            variant="bodySmall"
                            fontWeight="500"
                            color="white"
                          >
                            CR
                          </Text>
                        </div>
                      }
                      titleText={
                        <Text
                          variant="upperDetails"
                          margin={0}
                          color="gray60"
                          $style={{
                            letterSpacing: '1px',
                            textTransform: 'uppercase',
                          }}
                        >
                          Colaborador
                        </Text>
                      }
                      subtitleText={
                        <Text
                          variant="bodySmall"
                          fontWeight="500"
                          margin={0}
                        >
                          Carolina Rodriguez
                        </Text>
                      }
                    />
                  ),
                },
              }}
            />
          )}
        >
          <IconButton
            $style={{
              position: 'relative',
            }}
          >
            <User size={16} />
          </IconButton>
        </Popover>
      </NestedMenus>
    </div>
  );
};

export const DefaultStatefulMenu = TemplateStateful.bind({});

export const StatefulNestedMenu = TemplateNestedStatefulMenu.bind({});

export const StatefulMenuWithoutOptionComponentOverride = TemplateStateful.bind({});

StatefulMenuWithoutOptionComponentOverride.args = {
  overrides: {
    Option: {
      component: undefined,
    },
  },
};
