import { useCallback, useEffect, useMemo } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { currentViewElementState } from "../EditorView/EditorView";
import Panel from "../Panel/Panel";


export default function ElementPropertiesView () {
    const [currentViewElement, setCurrentElement ] = useRecoilState(currentViewElementState);
    useEffect(() => {
        console.log("current", currentViewElement);
    }, [currentViewElement])

    const handleProp = useCallback(( propName, propValue ) => {
        console.log(propName, propValue)
        setCurrentElement({ newValueName: currentViewElement.name, newValue: { ...currentViewElement, properties: { ...currentViewElement.properties, style: { ...currentViewElement.properties.style, [`${propName}`]: propValue }  } } })
    }, [currentViewElement, setCurrentElement]);

    return <Panel title="Properties" borderLeft>
        {
            currentViewElement ? 
            <>
                <input type="text" onChange={({ target: {value}}) => handleProp("width", value)} value={currentViewElement.properties.style.width}></input>
                <input type="text" onChange={({ target: {value}}) => handleProp("height", value) } value={currentViewElement.properties.style.height}></input>
            </>
            : null
        }
    </Panel>
}
