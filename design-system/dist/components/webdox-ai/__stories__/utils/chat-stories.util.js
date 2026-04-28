var m = Object.defineProperty;
var o = (n, i, a) => i in n ? m(n, i, { enumerable: !0, configurable: !0, writable: !0, value: a }) : n[i] = a;
var t = (n, i, a) => o(n, typeof i != "symbol" ? i + "" : i, a);
import { Idea as l } from "@carbon/icons-react";
import { a as e } from "../../../../node_modules/@faker-js/faker/dist/chunk-KZPPZA2C.js";
class u {
  constructor() {
    t(this, "timeout", 1500);
    t(this, "markdownString", `# Lorem Ipsum

Magnam rem fuga earum nostrum ullam voluptatem sunt. 

Debitis eum totam quis. 

Praesentium maxime eius reiciendis occaecati sequi ex aut. 

Laboriosam tempore tempora. 

Nisi reiciendis laudantium est adipisci sunt. 

Nobis suscipit facilis debitis voluptatibus repudiandae dolores ipsum. 

Odit voluptates repudiandae ea mollitia harum odit quam inventore. 

Aliquid ipsam ea minima doloribus accusantium voluptatibus inventore provident. 

Similique natus aliquam iusto amet id. 

Aliquid totam est illum tempora a distinctio deleniti ratione.`);
    t(this, "markdownStringWithRef", `Inventore provident Similique natus .aliquam iusto amet id. {{{"page": "9" }}}Aliquid totam est [{'index_id': null},{“index_id“: null},{“index_id“: 1}] illum tempora a distinctio deleniti ratione.{{{"page": "7" }}}  [{'index_id': 1},{“index_id“: 2},{“index_id': 3},{"index_id": 3},{"index_id": 3}] dasd [{"index_id: 4},{index_id: 5},{"index_id": 6},{"index_id": 9999}]`);
  }
  /** Get fake data for a message */
  getAnswerData(i) {
    return {
      item: {
        id: e.color.space(),
        label: e.music.songName(),
        value: e.airline.aircraftType()
      },
      options: [
        ...new Array(10).fill(void 0).map((a, r) => ({
          id: `id-${r}`,
          label: e.music.songName(),
          value: e.color.human(),
          Icon: l
        }))
      ],
      disabled: !1,
      onSubmit: i ?? (() => console.log("answer data submit"))
    };
  }
  /** Get a fake lorem with a supplied quantity of paragraph lines */
  getFakeLorem(i = 3) {
    return e.lorem.paragraph(i);
  }
  /** Get a fake lorem with the common body of an answer */
  getFakeAnswer(i = 3, a = !1) {
    const r = e.lorem.paragraph(i);
    return a ? r.replaceAll(".", () => `. {{{"page": "${Math.ceil(10 * Math.random())}" }}}`) : r;
  }
  /** Get an answer string as a markdown text */
  getFakeAnswerMarkdown(i = !1) {
    return i ? this.markdownStringWithRef : this.markdownString;
  }
  /** Retrieves a fake legal quotes. */
  getFakeLegalQuotes() {
    return Array(8).fill(void 0).map(
      () => ({
        name: `Ley ${e.number.int({ min: 1, max: 1e3 })}`,
        url: Math.random() > 0.5 ? e.internet.url() : void 0,
        children: Array(e.number.int({ min: 0, max: 8 })).fill(void 0).map(() => ({
          name: `Artículo ${e.number.int({ min: 1, max: 100 })}`,
          text: e.lorem.paragraph(),
          url: e.internet.url()
        }))
      })
    );
  }
  /** Retrieves a fake jurisprudential quotes. */
  getFakeJurisprudentialQuotes() {
    return Array(8).fill(void 0).map(
      () => ({
        name: `Rol Nº${e.number.int({ min: 1, max: 1e3 })} - ${e.lorem.words({ min: 6, max: 12 })}`,
        source: e.lorem.words({ min: 8, max: 20 }),
        text: e.lorem.paragraph(),
        url: Math.random() > 0.5 ? e.internet.url() : void 0,
        children: Array(e.number.int({ min: 0, max: 8 })).fill(void 0).map(() => ({
          name: `Artículo ${e.number.int({ min: 1, max: 100 })} - ${e.lorem.words({ min: 1, max: 10 })}`,
          text: e.lorem.paragraph(),
          url: e.internet.url(),
          fatherName: `Ley ${e.number.int({ min: 1, max: 1e3 })}`
        }))
      })
    );
  }
  /** Retrieves a fake administrative quotes. */
  getFakeAdministrativeQuotes() {
    return Array(8).fill(void 0).map(
      () => ({
        name: `Dictamen Nº${e.number.int({ min: 1, max: 1e3 })}`,
        source: e.lorem.words({ min: 2, max: 3 }),
        text: e.lorem.paragraph(),
        date: e.date.past().toString(),
        url: Math.random() > 0.5 ? e.internet.url() : void 0
      })
    );
  }
  /** Retrieves fake custom prompts . */
  getFakeCustomPrompts() {
    return Array(8).fill(void 0).map(
      () => ({
        title: Math.random() > 0.5 ? e.lorem.words({ min: 1, max: 4 }) : void 0,
        content: e.lorem.paragraph(),
        id: e.number.int({ min: 1, max: 1e3 })
      })
    );
  }
}
const x = new u();
export {
  u as ChatStoriesUtils,
  x as chatStoriesUtils
};
//# sourceMappingURL=chat-stories.util.js.map
