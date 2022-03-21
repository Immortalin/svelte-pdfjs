import { SvelteComponentTyped } from "svelte";
import * as PDFJS from 'pdfjs-dist';
import type { PageViewport } from 'pdfjs-dist/types/src/display/display_utils';
declare const __propDef: {
    props: {
        page: PDFJS.PDFPageProxy;
        viewport: PageViewport;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type TextLayerProps = typeof __propDef.props;
export declare type TextLayerEvents = typeof __propDef.events;
export declare type TextLayerSlots = typeof __propDef.slots;
export default class TextLayer extends SvelteComponentTyped<TextLayerProps, TextLayerEvents, TextLayerSlots> {
}
export {};
