// Stub for optional peer dependencies of the design system not needed in this app

const noop = () => {};
// debounce stub: returns the fn with .cancel() and .flush() so callers don't crash
const noopFn = (fn: unknown) => {
  const f = fn as any;
  if (typeof f === 'function') {
    f.cancel = noop;
    f.flush = f;
  }
  return f;
};
const identity = (x: unknown) => x;
const returnNull = () => null;
const returnEmpty = () => ({});
const returnFalse = () => false;

// Default export — callable as a function (lodash subpaths, TurndownService etc.)
// AND usable as an object with methods (lodash main, i18next).
function stubDefault(x?: unknown) { return x; }
stubDefault.prototype.turndown = (s: string) => s;
// lodash methods
(stubDefault as any).debounce = noopFn;
(stubDefault as any).isEqual = returnFalse;
(stubDefault as any).isNil = returnFalse;
(stubDefault as any).deburr = identity;
(stubDefault as any).mergeWith = returnEmpty;
(stubDefault as any).noop = noop;
(stubDefault as any).snakeCase = identity;
(stubDefault as any).camelCase = identity;
(stubDefault as any).cloneDeep = identity;
(stubDefault as any).get = () => undefined;
(stubDefault as any).set = identity;
(stubDefault as any).omit = identity;
(stubDefault as any).pick = identity;
(stubDefault as any).merge = returnEmpty;
(stubDefault as any).isEmpty = returnFalse;
(stubDefault as any).flatten = (x: unknown[]) => x;
(stubDefault as any).uniq = (x: unknown[]) => x;
(stubDefault as any).groupBy = () => ({});
(stubDefault as any).sortBy = (x: unknown[]) => x;
(stubDefault as any).orderBy = (x: unknown[]) => x;
(stubDefault as any).assign = Object.assign;
// i18next methods
(stubDefault as any).use = function() { return stubDefault; };
(stubDefault as any).init = () => Promise.resolve();
(stubDefault as any).t = (k: string) => k;
(stubDefault as any).language = 'es';
(stubDefault as any).languages = ['es'];
(stubDefault as any).changeLanguage = () => Promise.resolve(noop);
(stubDefault as any).on = noop;
(stubDefault as any).off = noop;
(stubDefault as any).getResource = () => undefined;
(stubDefault as any).addResourceBundle = noop;
(stubDefault as any).exists = returnFalse;

export default stubDefault;

// react-i18next / i18next
export const useTranslation = () => ({ t: (k: string) => k, i18n: {}, ready: true });
export const Trans = returnNull;
export const initReactI18next = {};
export const i18n = {};
export const t = (k: string) => k;

// @hello-pangea/dnd
export const DragDropContext = ({ children }: any) => children;
export const Droppable = ({ children }: any) => children?.({ innerRef: noop, droppableProps: {}, placeholder: null }, { isDraggingOver: false });
export const Draggable = ({ children }: any) => children?.({ innerRef: noop, draggableProps: {}, dragHandleProps: {} }, { isDragging: false, isDropAnimating: false });

// @dnd-kit/core
export const DndContext = ({ children }: any) => children;
export const DragOverlay = ({ children }: any) => children ?? null;

// @dnd-kit/sortable
export const SortableContext = ({ children }: any) => children;
export const useSortable = () => ({
  attributes: {},
  listeners: {},
  setNodeRef: noop,
  transform: null,
  transition: null,
  isDragging: false,
});
export const verticalListSortingStrategy = noop;

// @dnd-kit/utilities
export const CSS = { Transform: { toString: () => '' }, Transition: { toString: () => '' } };

// react-use
export const useClickAway = noop;
export const useIntersection = () => null;
export const useMedia = () => false;
export const useMountedState = () => () => true;
export const useToggle = (init: boolean) => [init, noop];

// react-idle-timer
export const useIdleTimer = () => ({ isIdle: () => false, reset: noop });

// react-intersection-observer
export const useInView = () => ({ ref: returnNull, inView: false });

// @tanstack/react-virtual
export const useVirtualizer = () => ({
  getVirtualItems: () => [],
  getTotalSize: () => 0,
  scrollToIndex: noop,
  measure: noop,
});

// react-hook-form
export const useForm = returnEmpty;
export const useFormContext = returnEmpty;
export const useFieldArray = () => ({ fields: [], append: noop, remove: noop, move: noop });
export const Controller = returnNull;
export const FormProvider = ({ children }: any) => children;

// @hookform/resolvers
export const yupResolver = () => returnEmpty;
export const zodResolver = () => returnEmpty;

// @formkit/auto-animate
export const useAutoAnimate = () => [returnNull];

// @tiptap/react
export const EditorContent = returnNull;
export const EditorContext = { Provider: ({ children }: any) => children };
export const useEditor = () => null;
export const useCurrentEditor = () => ({ editor: null });
export const useEditorState = () => null;

// @tiptap/extension-placeholder
export const Placeholder = { configure: () => ({}) };
export const CharacterCount = { configure: () => ({}) };
export const Bold = { configure: () => ({}) };
export const Document = {};
export const HardBreak = {};
export const History = {};
export const Italic = { configure: () => ({}) };
export const Paragraph = { configure: () => ({}) };
export const Text = {};
export const Underline = { configure: () => ({}) };

// nanoid
export const nanoid = () => Math.random().toString(36).slice(2);

// marked
export const marked = (s: string) => s;

// turndown
export const TurndownService = class { turndown(s: string) { return s; } };

// dompurify
export const sanitize = (s: string) => s;

// html-minifier-terser
export const minify = async (s: string) => s;

// lodash named exports (also imported as named from 'lodash')
export const debounce = noopFn;
export const isEqual = returnFalse;
export const isNil = returnFalse;
export const deburr = identity;
export const mergeWith = returnEmpty;
export const cloneDeep = identity;
export const noop2 = noop;
export { noop };
