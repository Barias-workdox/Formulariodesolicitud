import type { ReactElement } from 'react';

import { ChevronLeft, Close } from '@carbon/icons-react';

import { Button, IconButton } from '../../button';
import { Text } from '../../text';
import { useCss } from '../../utils/hooks/use-css';

import {
  FullScreenAside,
  FullScreenBody,
  FullScreenFooter,
  FullScreenHeader,
  FullScreenLayout,
} from './full-screen-layout';

import type { Meta, StoryFn } from '@storybook/react-vite';

export default {
  title: 'Components/Content/FullScreenLayout',
  component: FullScreenLayout,
} as Meta<typeof FullScreenLayout>;

const Content = (): ReactElement => {
  return (
    <div>
      <div style={{ background: '#ccc', height: '50px', width: '350px', marginBottom: 4 }} />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit incidunt placeat
        praesentium tenetur, cum, sunt expedita id doloribus, magni fuga molestias quo fugiat
        nostrum. Quam fugiat hic inventore quaerat perferendis. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Tempora est odio, nemo provident voluptas facere assumenda
        tempore quidem neque doloremque id debitis corporis praesentium molestias harum possimus sed
        voluptatibus quas.
      </p>
      <div style={{ background: '#ccc', height: '50px', width: '350px', marginBottom: 4 }} />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In molestias illo consectetur.
        Natus earum ducimus explicabo, libero quos corrupti veritatis voluptas, magnam aperiam
        blanditiis, velit laborum. Temporibus cumque ad eum! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Nostrum est quasi, dolor rerum vel soluta accusamus praesentium similique
        autem architecto veritatis corrupti veniam, quis quibusdam, facilis sapiente nulla ipsa
        labore.
      </p>
      <div style={{ background: '#ccc', height: '50px', width: '350px', marginBottom: 4 }} />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut enim error excepturi quia
        doloremque nam vitae, optio nostrum! Corporis itaque perspiciatis, vel molestiae porro aut
        magnam non at. Voluptatem, quisquam.
      </p>
    </div>
  );
};

const ContentAside = (): ReactElement => {
  return (
    <div>
      <div style={{ background: '#ccc', height: '50px', width: '250px', marginBottom: 4 }} />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit incidunt placeat
        praesentium tenetur, cum, sunt expedita id doloribus, magni fuga molestias quo fugiat
        nostrum. Quam fugiat hic inventore quaerat perferendis. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Tempora est odio, nemo provident voluptas facere assumenda
        tempore quidem neque doloremque id debitis corporis praesentium molestias harum possimus sed
        voluptatibus quas.
      </p>
      <div style={{ background: '#ccc', height: '50px', width: '250px', marginBottom: 4 }} />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In molestias illo consectetur.
        Natus earum ducimus explicabo, libero quos corrupti veritatis voluptas, magnam aperiam
        blanditiis, velit laborum. Temporibus cumque ad eum! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Nostrum est quasi, dolor rerum vel soluta accusamus praesentium similique
        autem architecto veritatis corrupti veniam, quis quibusdam, facilis sapiente nulla ipsa
        labore.
      </p>
      <div style={{ background: '#ccc', height: '50px', width: '250px', marginBottom: 4 }} />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut enim error excepturi quia
        doloremque nam vitae, optio nostrum! Corporis itaque perspiciatis, vel molestiae porro aut
        magnam non at. Voluptatem, quisquam.
      </p>
    </div>
  );
};

const Template: StoryFn<typeof FullScreenLayout> = () => {
  const { css } = useCss();

  return (
    <div className={css({ height: '100vh', display: 'flex', margin: '-1rem' })}>
      <FullScreenLayout>
        <FullScreenHeader>
          <Text
            variant="bodySmall"
            margin={0}
          >
            Header
          </Text>
        </FullScreenHeader>

        <FullScreenBody>
          <Content />
        </FullScreenBody>
      </FullScreenLayout>
    </div>
  );
};

const TemplateWithFooter: StoryFn<typeof FullScreenLayout> = () => {
  const { css } = useCss();
  const handleClick = (): void => {
    alert('button clicked');
  };

  return (
    <div className={css({ height: '100vh', display: 'flex', margin: '-1rem' })}>
      <FullScreenLayout>
        <FullScreenHeader>
          <Text
            variant="bodySmall"
            margin={0}
          >
            Header
          </Text>
        </FullScreenHeader>

        <FullScreenBody $backgroundColor="neutralBase">
          <Content />
        </FullScreenBody>

        <FullScreenFooter>
          <Button
            kind="secondary"
            onClick={handleClick}
          >
            secondary button
          </Button>
          <Button onClick={handleClick}>primary button</Button>
        </FullScreenFooter>
      </FullScreenLayout>
    </div>
  );
};

const TemplateFullHeader: StoryFn<typeof FullScreenLayout> = () => {
  const { css } = useCss();
  const handleClick = (): void => {
    alert('button clicked');
  };

  return (
    <div className={css({ height: '100vh', display: 'flex', margin: '-1rem' })}>
      <FullScreenLayout>
        <FullScreenHeader
          hasElevation
          startEnhancer={
            <IconButton
              aria-label="BackButton"
              onClick={handleClick}
            >
              <ChevronLeft size={20} />
            </IconButton>
          }
          endEnhancer={
            <IconButton
              aria-label="BackButton"
              onClick={handleClick}
            >
              <Close size={20} />
            </IconButton>
          }
        >
          <Text
            variant="bodySmall"
            margin={0}
          >
            Header
          </Text>
        </FullScreenHeader>

        <FullScreenBody>
          <Content />
        </FullScreenBody>
      </FullScreenLayout>
    </div>
  );
};

const TemplateFullAsides: StoryFn<typeof FullScreenLayout> = () => {
  const { css } = useCss();
  const handleClick = (): void => {
    alert('button clicked');
  };

  return (
    <div className={css({ height: '100vh', display: 'flex', margin: '-1rem' })}>
      <FullScreenLayout>
        <FullScreenHeader>
          <Text
            variant="bodySmall"
            margin={0}
          >
            Header
          </Text>
        </FullScreenHeader>

        <FullScreenBody
          $padding={0}
          $hasAside
        >
          <FullScreenAside
            orientation="left"
            width="250px"
          >
            <ContentAside />
          </FullScreenAside>

          <FullScreenLayout>
            <FullScreenHeader
              hasElevation
              $padding={0}
            >
              <Text
                variant="bodySmall"
                margin={0}
              >
                Header
              </Text>
            </FullScreenHeader>

            <FullScreenBody $backgroundColor="neutralBase">
              <Content />
            </FullScreenBody>

            <FullScreenFooter>
              <Button
                kind="secondary"
                onClick={handleClick}
              >
                secondary button
              </Button>
              <Button onClick={handleClick}>primary button</Button>
            </FullScreenFooter>
          </FullScreenLayout>

          <FullScreenAside
            orientation="right"
            $width="350px"
          >
            <ContentAside />
          </FullScreenAside>
        </FullScreenBody>
      </FullScreenLayout>
    </div>
  );
};

const TemplateAsideLeft: StoryFn<typeof FullScreenLayout> = () => {
  const { css } = useCss();
  const handleClick = (): void => {
    alert('button clicked');
  };

  return (
    <div className={css({ height: '100vh', display: 'flex', margin: '-1rem' })}>
      <FullScreenLayout>
        <FullScreenHeader>
          <Text
            variant="bodySmall"
            margin={0}
          >
            Header
          </Text>
        </FullScreenHeader>

        <FullScreenBody
          $padding={0}
          $hasAside
        >
          <FullScreenAside
            orientation="left"
            $width="300px"
          >
            <ContentAside />
          </FullScreenAside>

          <FullScreenLayout>
            <FullScreenHeader
              hasElevation
              $padding={0}
            >
              <Text
                variant="bodySmall"
                margin={0}
              >
                Header
              </Text>
            </FullScreenHeader>

            <FullScreenBody $backgroundColor="neutralBase">
              <Content />
            </FullScreenBody>

            <FullScreenFooter>
              <Button
                kind="secondary"
                onClick={handleClick}
              >
                secondary button
              </Button>
              <Button onClick={handleClick}>primary button</Button>
            </FullScreenFooter>
          </FullScreenLayout>
        </FullScreenBody>
      </FullScreenLayout>
    </div>
  );
};

const TemplateAsideRight: StoryFn<typeof FullScreenLayout> = () => {
  const { css } = useCss();
  const handleClick = (): void => {
    alert('button clicked');
  };

  return (
    <div className={css({ height: '100vh', display: 'flex', margin: '-1rem' })}>
      <FullScreenLayout>
        <FullScreenHeader>
          <Text
            variant="bodySmall"
            margin={0}
          >
            Header
          </Text>
        </FullScreenHeader>

        <FullScreenBody
          $padding={0}
          $hasAside
        >
          <FullScreenLayout>
            <FullScreenHeader
              hasElevation
              $padding={0}
            >
              <Text
                variant="bodySmall"
                margin={0}
              >
                Header
              </Text>
            </FullScreenHeader>

            <FullScreenBody $backgroundColor="neutralBase">
              <Content />
            </FullScreenBody>

            <FullScreenFooter>
              <Button
                kind="secondary"
                onClick={handleClick}
              >
                secondary button
              </Button>
              <Button onClick={handleClick}>primary button</Button>
            </FullScreenFooter>
          </FullScreenLayout>

          <FullScreenAside
            orientation="right"
            $width="300px"
          >
            <ContentAside />
          </FullScreenAside>
        </FullScreenBody>
        <FullScreenFooter>
          <Button
            kind="secondary"
            onClick={handleClick}
          >
            secondary button
          </Button>
          <Button onClick={handleClick}>primary button</Button>
        </FullScreenFooter>
      </FullScreenLayout>
    </div>
  );
};

export const Default = Template.bind({});

export const WithFooter = TemplateWithFooter.bind({});

export const FullHeader = TemplateFullHeader.bind({});

export const WithFullAsides = TemplateFullAsides.bind({});

export const WithAsideLeft = TemplateAsideLeft.bind({});

export const WithAsideRight = TemplateAsideRight.bind({});
