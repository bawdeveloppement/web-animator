import { lazy, Suspense } from 'react';

const ListElementsView = lazy(() => {
    return new Promise(resolve => {
      setTimeout(() => resolve(import("../ListElementsView/ListElementsView")), 300);
    });
});
const TimeLineEditor = lazy(() => {
    return new Promise(resolve => {
      setTimeout(() => resolve(import("../TimeLineEditor/TimeLineEditor")), 300);
    });
});
const EditorViewport = lazy(() => {
    return new Promise(resolve => {
      setTimeout(() => resolve(import("../EditorViewport/EditorViewport")), 300);
    });
});
const ElementPropertiesView = lazy(() => {
    return new Promise(resolve => {
      setTimeout(() => resolve(import("../ElementPropertiesView/ElementPropertiesView")), 300);
    });
});

// const ListElementsView  = lazy(() => import("../ListElementsView/ListElementsView"));
// const TimeLineEditor    = lazy(() => import("../TimeLineEditor/TimeLineEditor"));
// const EditorViewport    = lazy(() => import("../EditorViewport/EditorViewport"));
// const ElementPropertiesView = lazy(() => import("../ElementPropertiesView/ElementPropertiesView"));

export default function EditorView({ view }) {
    return <>
        <div className="flex flex-row flex-1 overflow-auto">
            <Suspense fallback={<div className="flex flex-col border-r border-gray-300 overflow-auto items-center justify-center" style={{ minWidth: 200}}>Loading</div>}>
                <ListElementsView elements={view.elements} />
            </Suspense>
            <Suspense fallback={<div>Loading</div>}>
                <EditorViewport elements={view.elements}/>
            </Suspense>
            <Suspense fallback={<div className="flex flex-col border-l border-gray-300 overflow-auto items-center justify-center" style={{ minWidth: 200}}>Loading</div>}>
                <ElementPropertiesView />
            </Suspense>
        </div>
        <Suspense fallback={<div className="flex flex-col border-l border-gray-300 overflow-auto items-center justify-center" style={{ minHeight: 200}}>Loading</div>}>
            <TimeLineEditor elements={view.elements} />
        </Suspense>
    </>
}