// Fix some circular deps:
import "./core/node"
import "./types/type"

export {
    types,
    IType,
    ISimpleType,
    IComplexType,
    IModelType,
    ISnapshottable,
    IExtendedObservableMap
} from "./types"

export * from "./core/mst-operations"
export { escapeJsonPath, unescapeJsonPath, IJsonPatch } from "./core/json-patch"
export {
    decorate,
    addMiddleware,
    IMiddlewareEvent,
    IMiddlewareHandler,
    IMiddlewareEventType
} from "./core/action"
export { process } from "./core/process"
export { isStateTreeNode, IStateTreeNode } from "./core/node"

export {
    applyAction,
    onAction,
    IActionRecorder,
    ISerializedActionCall,
    recordActions
} from "./middlewares/on-action"

// mobx-devtools support
import { isStateTreeNode } from "./core/node"
import { applyAction, onAction, recordActions } from "./middlewares/on-action"
import {
    onSnapshot,
    onPatch,
    applySnapshot,
    applyPatch,
    getSnapshot,
    addDisposer,
    isRoot
} from "./core/mst-operations"
import { spy, extras } from "mobx"
declare const __MOBX_DEVTOOLS_GLOBAL_HOOK__: undefined | { inject?: ((any: any) => void) }
if (typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ === "object") {
    const hook = __MOBX_DEVTOOLS_GLOBAL_HOOK__
    const mobx = { spy, extras }
    const mst = {
        onSnapshot,
        onAction,
        onPatch,
        applySnapshot,
        applyAction,
        applyPatch,
        getSnapshot,
        isStateTreeNode,
        addDisposer,
        isRoot
    }
    if (hook.inject) hook.inject({ mobx, mst })
}
