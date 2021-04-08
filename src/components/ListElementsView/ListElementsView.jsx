import { createRef, useMemo, useState } from "react"
import useClickOutside from "../../hooks/useClickOutside";
import useDoubleClick from "../../hooks/useDoubleClick";
import Panel from "../Panel/Panel";

const ListElement = ({ name }) => {
    const thisRef = createRef();
    const [ editMode, setEditMode ] = useState(false)
    
    useDoubleClick(thisRef, () => {
        setEditMode(!editMode)
    });

    useClickOutside(thisRef, () => {
        if (editMode) {
            setEditMode(false);
        }
    });

    return (
        <div
            ref={thisRef}
            className={`cursor-pointer m-2 w-36`}>
            { editMode ? <input defaultValue={name} className="w-36"/> : name }
        </div>
    );
}

export default function ListElementsView ({ elements }) {

    const listElements = useMemo(() => {
        return elements.map(( el, id ) => <ListElement key={id} {...el} />)
    }, [ elements ]);

    return <Panel title="Hierarchy" borderRight>
        {listElements}
    </Panel>
}
