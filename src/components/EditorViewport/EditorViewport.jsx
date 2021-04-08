import { createElement, useMemo } from "react";


const ViewportElement = ({ name, properties }) => {
    console.log(properties, name)
    return createElement(properties.type, {
        name: properties.name,
        id: properties.id,
        style: properties.style
    });
}

export default function EditorViewport ({ elements }) {

    const viewportElements = useMemo(() => {
        return elements.map(( el, id ) => <ViewportElement key={id} {...el} />)
    }, [ elements ]);

    return (
        <div
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