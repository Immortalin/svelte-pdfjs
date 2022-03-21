<!-- @component
Render a page from a PDF document. Must be a child of a `Document` component.
 -->
<svelte:options immutable />

<!--
	@todo Immutable could be a bad idea since it would not update 
	for getViewport functions that are defined inline
	when their dependencies change.
 -->
<script context="module" >import { getContext, onDestroy } from 'svelte';
import { key } from './Document.svelte';
function default_get_viewport(page, options) {
    return page.getViewport(options);
}
</script>

<script >// #region props
/**
 * What renderer implementation to use for the page.
 * SVG rendering not implemented yet.
 * @default {"canvas"}
 */
export let renderer = 'canvas';
/**
 * The page number to show.
 */
export let num;
/**
 * The scale to show the PDF at.
 * @default {1}
 */
export let scale = 1;
/**
 * Rotate the page by a multiple of 90 degrees.
 * @default {0}
 */
export let rotation = 0;
/**
 * Render a separate text layer (only for the canvas renderer.)
 * @default {false}
 */
export let renderTextLayer = false;
/**
 * A callback invoked with the current page used to determine the viewport.
 * Use this if you need something more complicated than the default based on scale.
 */
export let getViewport = undefined;
// #endregion props
onDestroy(() => page?.cleanup());
const current_doc = getContext(key);
let page;
let viewport;
/* <========================================================================================> */
$: if ($current_doc)
    $current_doc.getPage(num).then((p) => (page = p));
$: _get_viewport = getViewport ?? ((p) => default_get_viewport(p, { scale, rotation }));
$: if (page)
    viewport = _get_viewport(page, rotation);
</script>

{#await renderer === 'canvas' ? import('./PageInternals/PageCanvas.svelte') : null then { default: p }}
	<svelte:component
		this={p}
		{page}
		{viewport}
		render_text_layer={renderer === 'canvas' ? renderTextLayer : undefined}
	/>
{/await}
