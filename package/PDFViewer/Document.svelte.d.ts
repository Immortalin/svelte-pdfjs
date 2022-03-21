import { SvelteComponentTyped } from "svelte";
import type { DocumentInitParameters, OnProgressParameters, PDFDocumentProxy } from 'pdfjs-dist/types/src/display/api';
export declare const key: unique symbol;
declare const __propDef: {
    props: {
        /** The URL of the file to load. */ file?: string | URL;
        /**
             * Extra options provided to PDFJS.getDocument. [See](https://github.com/mozilla/pdf.js/blob/41dab8e7b6c1e2684d4afabb8f02e40a874d8e85/src/display/api.js#L126)
             */ loadOptions?: DocumentInitParameters;
        /**
             * Callback that fires everytime a part of the PDF is downloaded. Can be useful for showing a progress bar.
             */ onProgress?: (params: OnProgressParameters) => void;
    };
    slots: {
        default: {};
    };
    getters: {};
    events: {
        /** Dispatched when a document is successfully loaded. */
        loadsuccess: CustomEvent<PDFDocumentProxy>;
        /** Dispatched when there's an error while loading the document. */
        loaderror: CustomEvent<any>;
    };
};
export declare type DocumentProps = typeof __propDef.props;
export declare type DocumentEvents = typeof __propDef.events;
export declare type DocumentSlots = typeof __propDef.slots;
/**
 * Renderless component responsible for just loading the document and providing it to
 * children Page components through the context API.
 */
export default class Document extends SvelteComponentTyped<DocumentProps, DocumentEvents, DocumentSlots> {
}
export {};
