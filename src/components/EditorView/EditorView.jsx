import { lazy, Suspense } from 'react';
import { atom, selector, useRecoilValue } from 'recoil';

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

export const viewElementsState = atom({
    key: 'viewElementsState',
    default: {
        "spinner": {
            id: 0,
            name: "spinner",
            isSelected: false,
            properties: {
                type: "div",
                id: "divel",
                className: "",
                style: {
                    width: "200px",
                    height: "200px",
                    backgroundColor: "black"
                },
                
            },
            keyframes: [],
            timing: {}
        },
    }
})


export const lastElementSelected = atom({
    key: "lastElementSelected",
    default: null
})
  
export const currentViewElementState = selector({
    key: 'currentViewElementState',
    get: ({ get }) => {
        const last = get(lastElementSelected);
        const viewElements = get(viewElementsState);
        return viewElements[last];
    },
    set: ({ get, set }, { newValueName, newValue }) => {
        const oldValue = get(viewElementsState);
        set(viewElementsState, { ...oldValue, [`${newValueName}`]: Object.assign({}, oldValue[newValueName], newValue) })
    }
})
  
  
export default function EditorView({ view }) {
    const viewStateValue = useRecoilValue(viewElementsState)
    return (
        <>
        <div className="flex flex-row flex-1 overflow-auto">
            <Suspense fallback={<div className="flex flex-col border-r border-gray-300 overflow-auto items-center justify-center" style={{ minWidth: 200}}>Loading</div>}>
                <ListElementsView />
            </Suspense>
            <Suspense fallback={<div>Loading</div>}>
                <EditorViewport/>
            </Suspense>
            <Suspense fallback={<div className="flex flex-col border-l border-gray-300 overflow-auto items-center justify-center" style={{ minWidth: 200}}>Loading</div>}>
                <ElementPropertiesView />
            </Suspense>
        </div>
        <Suspense fallback={<div className="flex flex-col border-l border-gray-300 overflow-auto items-center justify-center" style={{ minHeight: 200}}>Loading</div>}>
            <TimeLineEditor elements={viewStateValue} />
        </Suspense>
        </>
    );
}