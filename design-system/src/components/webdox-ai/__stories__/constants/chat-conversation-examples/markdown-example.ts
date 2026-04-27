import { faker } from '@faker-js/faker';

import { conversationUtils } from '@components/webdox-ai/utils/conversation.util';

export const markdownExample = {
  conversation: {
    ...conversationUtils.createConversation({
      questions: [
        conversationUtils.createQuestion({
          variant: 'persist',
          value: faker.lorem.words(5),
          answers: [
            conversationUtils.createAnswer({
              variant: 'persist',
              value: `
**Tabla**
| Header1 | Header2 | Header3 | Header4 |Header5|
|---|---|---|---|---|
| content1 | content2 | content3 | content4 | content5 |
| content1 | content2 | content3 | content4 | content5 |
| content1 | content2 | content3 | content4 | content5 |
| content1 | content2 | content3 | content4 | content5 |
| content1 | content2 | content3 | content4 | content5 |
| content1 | content2 | content3 | content4 | content5 |
| content1 | content2 | content3 | content4 | content5 |
| content1 | content2 | content3 | content4 | content5 |
| content1 | content2 | content3 | content4 | content5 |
| content1 | content2 | content3 | content4 | content5 |
| content1 | content2 | content3 | content4 | content5 |
| content1 | content2 | content3 | content4 | content5 |
| content1 | content2 | content3 | content4 | content5 |
| content1 | content2 | content3 | content4 | content5 |
| content1 | content2 | content3 | content4 | content5 |
| content1 | content2 | content3 | content4 | content5 |
| content1 | content2 | content3 | content4 | content5 |
| content1 | content2 | content3 | content4 | content5 |
| content1 | content2 | content3 | content4 | content5 |
| content1 | content2 | content3 | content4 | content5 |
| content1 | content2 | content3 | content4 | content5 |
| content1 | content2 | content3 | content4 | content5 |
| content1 | content2 | content3 | content4 | content5 |
| content1 | content2 | content3 | content4 | content5 |
| content1 | content2 | content3 | content4 | content5 |
| content1 | content2 | content3 | content4 | content5 |
| content1 | content2 | content3 | content4 | content5 |
| content1 | content2 | content3 | content4 | content5 |
              `,
            }),
          ],
        }),
        conversationUtils.createQuestion({
          variant: 'persist',
          value: faker.lorem.words(5),
          answers: [
            conversationUtils.createAnswer({
              variant: 'persist',
              value: `
\`\`\`js
What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis lorem convallis vulputate faucibus. Suspendisse ornare diam quis elit convallis, ac pellentesque ipsum consequat. In maximus justo sit amet augue eleifend, sit amet tempus dolor dignissim. Vestibulum eu sollicitudin nulla. Aenean a ex sapien. Pellentesque congue pulvinar sapien sed fringilla. Fusce magna lectus, viverra quis feugiat vel, gravida id nulla. Phasellus id sagittis quam, non malesuada justo.

Maecenas vestibulum interdum diam, et laoreet erat tincidunt sagittis. Nam luctus nunc at dui mattis, eget posuere dolor commodo. Vestibulum eget dui scelerisque, cursus metus at, tempus enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque, ante et fermentum sodales, mauris odio consectetur nulla, eu fermentum ipsum felis quis eros. Duis semper euismod nisl, accumsan tempus odio posuere quis. Ut in quam sapien. Duis id commodo lorem. Duis interdum, libero non luctus luctus, tortor tellus pharetra nulla, eget tincidunt tortor urna non risus. Sed blandit malesuada urna, ut maximus libero posuere eget. Praesent in efficitur purus, maximus aliquet augue. Fusce dapibus eu nunc tincidunt efficitur.

Vestibulum nunc dui, lobortis nec ante eget, pulvinar elementum diam. Duis lobortis odio eros, sed convallis mauris congue non. Nam suscipit magna ac accumsan malesuada. Nam diam purus, malesuada quis fermentum non, vestibulum a mauris. Nulla malesuada accumsan ligula, at interdum enim blandit nec. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean feugiat tincidunt sem a gravida. Vivamus fermentum convallis tortor sed finibus. Quisque eleifend purus quis dui maximus, in congue felis suscipit. Etiam blandit nisl eu nunc iaculis, in volutpat urna sagittis. Nullam venenatis tristique dapibus. Vestibulum tempor ultrices est, non venenatis erat mattis in. In rhoncus finibus est nec lobortis.

Quisque magna odio, scelerisque ut ultrices ullamcorper, vulputate vel arcu. Sed fringilla eros vitae lectus mattis, in hendrerit metus imperdiet. Donec et metus lectus. Curabitur vitae dapibus lacus. Cras ullamcorper risus sed elit condimentum hendrerit. Nullam in sapien in ex vestibulum varius ac ac quam. Nullam porta vestibulum euismod. Vestibulum et lacinia velit. Mauris id varius tortor. Duis in turpis arcu. Proin venenatis neque id posuere suscipit.

Vivamus non accumsan est, nec efficitur lectus. Ut venenatis, lectus eu semper eleifend, odio sem pretium metus, ut placerat est metus eu purus. Nullam luctus varius enim at porttitor. Ut gravida tincidunt vulputate. Nam nec est risus. Sed nec libero quis nulla sollicitudin rutrum a eget quam. Praesent id nulla id turpis venenatis sodales non in dolor. Proin tortor nisi, auctor sed tristique sit amet, pharetra vel augue. Nunc ut mauris sed metus lacinia tempus sed eu velit. Nunc at ligula leo. Integer interdum posuere velit, ac bibendum arcu fringilla quis.
\`\`\`
              `,
            }),
          ],
        }),
        conversationUtils.createQuestion({
          variant: 'persist',
          value: faker.lorem.words(5),
          answers: [
            conversationUtils.createAnswer({
              variant: 'persist',
              value: `
Un accidente que ocurre en el trayecto desde el hogar del trabajador al lugar de trabajo o viceversa se considera un accidente de trayecto y está cubierto bajo la Ley N° 16.744 sobre Accidentes del Trabajo y Enfermedades Profesionales.

### Cita legal

#### Ley N°10.000
 - Artículo 000.
 - Artículo 000.
 - Artículo 000.
 - Artículo 000.
#### Ley N°21.000
 - Artículo 000.
 - Artículo 000.
 - Artículo 000.
 - Artículo 000.
---
texto
---
              `,
            }),
          ],
        }),
      ],
    }),
  },
};
