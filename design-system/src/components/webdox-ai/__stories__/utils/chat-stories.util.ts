import { Idea } from '@carbon/icons-react';
import { faker } from '@faker-js/faker';

import type { TempAnswerProps } from '@components/webdox-ai/interfaces/chat-bot-component.interface';
import type { Quote } from '@components/webdox-ai/interfaces/legal-whisper.interfaces';
import type { CustomPrompt } from '@components/webdox-ai/interfaces/webdox-ai.interfaces';

/** All utilities to reuse on chat stories */
export class ChatStoriesUtils {
  public timeout = 1500;
  private markdownString =
    '# Lorem Ipsum\n\nMagnam rem fuga earum nostrum ullam voluptatem sunt. \n\nDebitis eum totam quis. \n\nPraesentium maxime eius reiciendis occaecati sequi ex aut. \n\nLaboriosam tempore tempora. \n\nNisi reiciendis laudantium est adipisci sunt. \n\nNobis suscipit facilis debitis voluptatibus repudiandae dolores ipsum. \n\nOdit voluptates repudiandae ea mollitia harum odit quam inventore. \n\nAliquid ipsam ea minima doloribus accusantium voluptatibus inventore provident. \n\nSimilique natus aliquam iusto amet id. \n\nAliquid totam est illum tempora a distinctio deleniti ratione.';

  private markdownStringWithRef =
    'Inventore provident Similique natus .aliquam iusto amet id. {{{"page": "9" }}}Aliquid totam est [{\'index_id\': null},{“index_id“: null},{“index_id“: 1}] illum tempora a distinctio deleniti ratione.{{{"page": "7" }}}  [{\'index_id\': 1},{“index_id“: 2},{“index_id\': 3},{"index_id": 3},{"index_id": 3}] dasd [{"index_id: 4},{index_id: 5},{"index_id": 6},{"index_id": 9999}]';

  /** Get fake data for a message */
  public getAnswerData(onSubmit?: TempAnswerProps['onSubmit']): TempAnswerProps {
    return {
      item: {
        id: faker.color.space(),
        label: faker.music.songName(),
        value: faker.airline.aircraftType(),
      },
      options: [
        ...new Array(10).fill(undefined).map((_, index) => ({
          id: `id-${index}`,
          label: faker.music.songName(),
          value: faker.color.human(),
          Icon: Idea,
        })),
      ],
      disabled: false,
      onSubmit: onSubmit ?? ((): void => console.log('answer data submit')),
    };
  }

  /** Get a fake lorem with a supplied quantity of paragraph lines */
  public getFakeLorem(qty = 3): string {
    return faker.lorem.paragraph(qty);
  }

  /** Get a fake lorem with the common body of an answer */
  public getFakeAnswer(qty = 3, isRefEnabled = false): string {
    const fake = faker.lorem.paragraph(qty);

    // Add page references to each `.`
    return !isRefEnabled
      ? fake
      : fake.replaceAll('.', () => {
          const page = Math.ceil(10 * Math.random());

          return `. {{{"page": "${page}" }}}`;
        });
  }

  /** Get an answer string as a markdown text */
  public getFakeAnswerMarkdown(isRefEnabled = false): string {
    return isRefEnabled ? this.markdownStringWithRef : this.markdownString;
  }

  /** Retrieves a fake legal quotes. */
  public getFakeLegalQuotes(): Quote[] {
    return Array(8)
      .fill(undefined)
      .map(
        (): Quote => ({
          name: `Ley ${faker.number.int({ min: 1, max: 1000 })}`,
          url: Math.random() > 0.5 ? faker.internet.url() : undefined,
          children: Array(faker.number.int({ min: 0, max: 8 }))
            .fill(undefined)
            .map(() => ({
              name: `Artículo ${faker.number.int({ min: 1, max: 100 })}`,
              text: faker.lorem.paragraph(),
              url: faker.internet.url(),
            })),
        }),
      );
  }

  /** Retrieves a fake jurisprudential quotes. */
  public getFakeJurisprudentialQuotes(): Quote[] {
    return Array(8)
      .fill(undefined)
      .map(
        (): Quote => ({
          name: `Rol Nº${faker.number.int({ min: 1, max: 1000 })} - ${faker.lorem.words({ min: 6, max: 12 })}`,
          source: faker.lorem.words({ min: 8, max: 20 }),
          text: faker.lorem.paragraph(),
          url: Math.random() > 0.5 ? faker.internet.url() : undefined,
          children: Array(faker.number.int({ min: 0, max: 8 }))
            .fill(undefined)
            .map(() => ({
              name: `Artículo ${faker.number.int({ min: 1, max: 100 })} - ${faker.lorem.words({ min: 1, max: 10 })}`,
              text: faker.lorem.paragraph(),
              url: faker.internet.url(),
              fatherName: `Ley ${faker.number.int({ min: 1, max: 1000 })}`,
            })),
        }),
      );
  }

  /** Retrieves a fake administrative quotes. */
  public getFakeAdministrativeQuotes(): Quote[] {
    return Array(8)
      .fill(undefined)
      .map(
        (): Quote => ({
          name: `Dictamen Nº${faker.number.int({ min: 1, max: 1000 })}`,
          source: faker.lorem.words({ min: 2, max: 3 }),
          text: faker.lorem.paragraph(),
          date: faker.date.past().toString(),
          url: Math.random() > 0.5 ? faker.internet.url() : undefined,
        }),
      );
  }

  /** Retrieves fake custom prompts . */
  public getFakeCustomPrompts(): CustomPrompt[] {
    return Array(8)
      .fill(undefined)
      .map(
        (): CustomPrompt => ({
          title: Math.random() > 0.5 ? faker.lorem.words({ min: 1, max: 4 }) : undefined,
          content: faker.lorem.paragraph(),
          id: faker.number.int({ min: 1, max: 1000 }),
        }),
      );
  }
}

export const chatStoriesUtils = new ChatStoriesUtils();
