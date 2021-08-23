import { createElement, createRef, useMemo } from "react";
import { useRecoilValue } from "recoil";
import { viewElementsState } from "../EditorView/EditorView";


const ViewportElement = ({ name, properties }) => {
    return createElement(properties.type, {
        name: properties.name,
        id: properties.id,
        style: properties.style
    });
}

export default function EditorViewport () {
    const thisRef = createRef();
    const viewElements = useRecoilValue(viewElementsState);

    const viewportElements = useMemo(() => {
        return Object.keys(viewElements).map(( el, id ) => {
            console.log(viewElements[el])
            return <ViewportElement key={id} {...viewElements[el]} />
        })
    }, [ viewElements ]);

    return (
        <div
            ref={thisRef}
            className="flex-1 flex flex-col overflow-auto items-center justify-center"
            style={{
                background: '#FFF',
                backgroundImage: 'linear-gradient(rgba(100, 100, 100, .1) .1em, transparent .1em), linear-gradient(90deg, rgba(100, 100, 100, .1) .1em, transparent .1em)',
                backgroundSize: '1em 1em'
            }}>
            {viewportElements}
        </div>
    )
}