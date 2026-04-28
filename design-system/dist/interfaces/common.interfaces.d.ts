import { FileType } from '../components/file-icon';
import { PLACEMENT } from '../constants/placement.constants';
type WithTestIdProps = {
    /** @deprecated Use `dataTestId` instead for easier implementation. */
    'data-testid'?: string;
    dataTestId?: string;
};
type WithZIndexProps = {
    zIndex?: number;
};
/** Extends T only if it is not an empty object */
export type WithTestId<T extends object = undefined> = T extends undefined ? WithTestIdProps : WithTestIdProps & T;
/** Extends T only if it is not an empty object */
export type WithZIndex<T extends object = undefined> = T extends undefined ? WithZIndexProps : WithZIndexProps & T;
export type CommonInputKind = 'white' | 'gray';
/** Represents the sorting order direction. */
export type OrderDirection = 'asc' | 'desc';
/** Common user properties */
export type UserType = {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
};
/** Common document properties */
export type DocumentType = {
    id: number;
    uuid?: string;
    name: string;
    fileExt: FileType;
    createdAt?: string;
    updatedAt?: string;
    deletedAt?: string;
    negotiable?: boolean;
};
export type GenerativeTextType = {
    /**
     * The accumulated text is the static text in the generative component.
     * It can have any special html tag like mark, strong, etc, thats why it is
     * a ReactNode type
     */
    accumulatedText: string;
    /**
     * The generative text is the dynamic part of the generative component.
     * It will generate with a delay of milliseconds and with a dynamic strategy
     * (by char or word usually) and will render each string in the UI. when this process
     * finishes, it will then be set as the accumulated text and could be rendered as html
     */
    generativeText: string;
};
/**
 * A Prop required to work with zIndex of `DocumentViewerModal` legacy component
 *
 * @deprecated Only required for legacy support with `DocumentViewerModal`
 */
export type ZIndexType = number;
/**
 * All base page scopes
 */
export type PageScopeType = 'documents' | 'workflows' | 'signature';
export type PlacementType = (typeof PLACEMENT)[keyof typeof PLACEMENT];
/**
 * Type alias for a React component that renders an inline SVG.
 * it ensures they accept standard SVG props (e.g., width, height, fill).
 */
export type SvgIconComponent = React.FC<React.SVGProps<SVGSVGElement>>;
export {};
