<script >import * as PDFJS from 'pdfjs-dist';
export let page;
export let viewport;
let render_task;
let container;
function render_text_layer() {
    render_task?.cancel();
    while (container.firstChild)
        container.firstChild.remove();
    render_task = PDFJS.renderTextLayer({
        container,
        textContentStream: page.streamTextContent(),
        viewport,
    });
}
$: if (container && viewport)
    render_text_layer();
</script>

<div bind:this={container} />

<style>
	div {
		position: absolute;
		inset: 0;
		overflow: hidden;
		opacity: 0.2;
		line-height: 1;
	}

	div > :global(span) {
		color: transparent;
		position: absolute;
		white-space: pre;
		cursor: text;
		transform-origin: 0% 0%;
	}
</style>
