export { default as Document, key } from './PDFViewer/Document.svelte';
export { default as Page } from './PDFViewer/Page.svelte';
export * from './utils/target_dimension.js';
export { PDFJS };
import * as PDFJS from 'pdfjs-dist';
import workerSrc from 'pdfjs-dist/build/pdf.worker.min.js?url';
if (PDFJS.GlobalWorkerOptions) {
    // https://vitejs.dev/guide/assets.html#explicit-url-imports
    PDFJS.GlobalWorkerOptions.workerSrc = workerSrc;
}
