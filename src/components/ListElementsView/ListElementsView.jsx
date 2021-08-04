import { createRef, useCallback, useMemo, useState } from "react"
import { useRecoilState, useRecoilValue } from "recoil";
import useClick from "../../hooks/use-click";
import useClickOutside from "../../hooks/useClickOutside";
import useDoubleClick from "../../hooks/useDoubleClick";
import { replaceItemAtIndex } from "../../utils";
import { lastElementSelected, viewElementsState } from "../EditorView/EditorView";
import Panel from "../Panel/Panel";

const ListElement = ({ id, name }) => {
    const thisRef = createRef();
    const [ inputValue, setInputValue ] = useState(name);
    const [ editMode, setEditMode ] = useState(false)
    const [ viewValue, setViewState ] = useRecoilState(viewElementsState);
    const [ lastElement, setLastElement ] = useRecoilState(lastElementSelected);

    const handleClick = useCallback(() => {
        if (lastElement === name) console.log(name);
        else setLastElement(name);
    }, [lastElement, name, setLastElement]);

    useClick(thisRef, handleClick);

    const updateViewItem = useCallback(() => {
        const newList = replaceItemAtIndex(viewValue, id, {
            ...viewValue[id],
            name: inputValue,
        });
        setViewState(newList);
    }, [id, inputValue, setViewState, viewValue]);

    useDoubleClick(thisRef, () => {
        setEditMode(!editMode)
    });

    useClickOutside(thisRef, () => {
        if (editMode) {
            updateViewItem();
            setEditMode(false);
        }
    });


    const handleItemChange = useCallback(({ target: {value}}) => {
        setInputValue(value);
    }, []);



    return (
        <div
            ref={thisRef}
            className={`cursor-pointer m-2 w-36`}>
            { editMode ? <input value={inputValue} onChange={handleItemChange} className="w-36"/> : name }
        </div>
    );
}

export default function ListElementsView () {
    const viewValue = useRecoilValue(viewElementsState);

    const listElements = useMemo(() => {
        return Object.keys(viewValue).map(( el, id ) => <ListElement key={id} {...viewValue[el]} />)
    }, [ viewValue ]);

    return <Panel title="Hierarchy" borderRight>
        {listElements}
    </Panel>
}
