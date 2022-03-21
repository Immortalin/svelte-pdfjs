import type { PDFPageProxy } from 'pdfjs-dist';
import type { PageViewport } from 'pdfjs-dist/types/src/display/display_utils';
export declare type MultipleOf90 = 0 | 90 | 180 | 270;
export declare type CalcViewport = (page: PDFPageProxy, rotation: MultipleOf90) => PageViewport;
/**
 * A function that returns another function that returns a PageViewport with the given width.
 *
 * @param width - The width that you want the page to be.
 */
export declare function preferThisWidth(width: number): CalcViewport;
/**
 * A function that returns another function that returns a PageViewport with the given height.
 *
 * @param height - The height that you want the page to be.
 */
export declare function preferThisHeight(height: number): CalcViewport;
