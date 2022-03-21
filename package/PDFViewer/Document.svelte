<!-- @component
Renderless component responsible for just loading the document and providing it to
children Page components through the context API.
 -->
<script  context="module">import * as PDFJS from 'pdfjs-dist';
import { createEventDispatcher, onDestroy, setContext } from 'svelte';
import { readable, writable } from 'svelte/store';
const PDFWorker = readable(null, (set) => {
    const worker = new PDFJS.PDFWorker();
    set(worker);
    return () => worker.destroy();
});
export const key = Symbol.for('current_doc');
</script>

<script >const dispatch = createEventDispatcher();
/** The URL of the file to load. */
export let file = undefined;
/**
 * Extra options provided to PDFJS.getDocument. [See](https://github.com/mozilla/pdf.js/blob/41dab8e7b6c1e2684d4afabb8f02e40a874d8e85/src/display/api.js#L126)
 */
export let loadOptions = undefined;
/**
 * Callback that fires everytime a part of the PDF is downloaded. Can be useful for showing a progress bar.
 */
export let onProgress = undefined;
let current_doc = writable();
let loading_task;
setContext(key, current_doc);
onDestroy(() => {
    $current_doc?.destroy();
    $current_doc?.cleanup(false);
});
function load_document() {
    const prev_doc = $current_doc;
    current_doc.set(null);
    loading_task = PDFJS.getDocument({ url: file, worker: $PDFWorker, ...loadOptions });
    loading_task.onProgress = onProgress;
    loading_task.promise
        .then((doc) => {
        prev_doc?.destroy();
        prev_doc?.cleanup();
        dispatch('loadsuccess', doc);
        return doc;
    }, (err) => {
        dispatch('loaderror', err);
        return prev_doc;
    })
        .then(current_doc.set);
}
$: file, loadOptions, load_document();
</script>

<slot />
