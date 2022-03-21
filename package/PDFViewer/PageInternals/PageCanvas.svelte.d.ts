import { SvelteComponentTyped } from "svelte";
import type { PDFPageProxy } from 'pdfjs-dist';
import type { PageViewport } from 'pdfjs-dist/types/src/display/display_utils';
declare const __propDef: {
    props: {
        page: PDFPageProxy;
        viewport: PageViewport;
        render_text_layer: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type PageCanvasProps = typeof __propDef.props;
export declare type PageCanvasEvents = typeof __propDef.events;
export declare type PageCanvasSlots = typeof __propDef.slots;
export default class PageCanvas extends SvelteComponentTyped<PageCanvasProps, PageCanvasEvents, PageCanvasSlots> {
}
export {};
