import { SvelteComponentTyped } from "svelte";
import type { CalcViewport, MultipleOf90 } from '../utils/target_dimension.js';
declare const __propDef: {
    props: {
        /**
             * What renderer implementation to use for the page.
             * SVG rendering not implemented yet.
             * @default {"canvas"}
             */ renderer?: 'canvas' | 'svg';
        /**
             * The page number to show.
             */ num: number;
        /**
             * The scale to show the PDF at.
             * @default {1}
             */ scale?: number;
        /**
             * Rotate the page by a multiple of 90 degrees.
             * @default {0}
             */ rotation?: MultipleOf90;
        /**
             * Render a separate text layer (only for the canvas renderer.)
             * @default {false}
             */ renderTextLayer?: boolean;
        /**
             * A callback invoked with the current page used to determine the viewport.
             * Use this if you need something more complicated than the default based on scale.
             */ getViewport?: CalcViewport;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type PageProps = typeof __propDef.props;
export declare type PageEvents = typeof __propDef.events;
export declare type PageSlots = typeof __propDef.slots;
/** Render a page from a PDF document. Must be a child of a `Document` component. */
export default class Page extends SvelteComponentTyped<PageProps, PageEvents, PageSlots> {
}
export {};
