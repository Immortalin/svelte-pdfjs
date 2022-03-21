/** @typedef {typeof __propDef.props}  AnnotLayerProps */
/** @typedef {typeof __propDef.events}  AnnotLayerEvents */
/** @typedef {typeof __propDef.slots}  AnnotLayerSlots */
export default class AnnotLayer extends SvelteComponentTyped<{}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type AnnotLayerProps = typeof __propDef.props;
export type AnnotLayerEvents = typeof __propDef.events;
export type AnnotLayerSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {};
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
