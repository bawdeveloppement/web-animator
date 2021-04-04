import { createRef } from "react";
import Panel from "../Panel/Panel";


export default function TimeLineEditor () {
    const thisRef = createRef();
    
    return <Panel ref={thisRef} title="TimeLineEditor" borderTop />
}