import { createRef, useMemo } from "react";
import BookmarkIcon from "../../svgs/bookmark";
import ForwardIcon from "../../svgs/forward";
import PlayIcon from "../../svgs/play";
import PlusIcon from "../../svgs/plus";
import RewindIcon from "../../svgs/rewind";
import Panel from "../Panel/Panel";

const TimelineElement = ({ name }) => {
    return <div>{name}</div>
}

const TimelineKeyframe = ({ id, keyframes }) => {
    return (
        <div className={`${id & 1 ? "" : "bg-gray-100"} w-full h-4`}>
            <BookmarkIcon className="text-blue-300 hover:text-blue-400"/>
        </div>
    )
}

const TimelineListKeyframes = ({ elements }) => {
    return useMemo(() => Object.keys(elements).map((el, id) => <TimelineKeyframe key={id} id={id} keyframes={elements[el].keyframes} /> ), [ elements ])
}

export default function TimeLineEditor ({ elements }) {
    const thisRef = createRef();
    
    
    const timelineElements = useMemo(() => {
        return Object.keys(elements).map(( el, id ) => <TimelineElement key={id} {...elements[el]} />)
    }, [ elements ]);

    return <Panel ref={thisRef} title={
        <div className="flex flex-row justify-between px-4 mb-2">
            <div className="w-64"><span className="border-b-2 border-gray-600">Timeline Editor</span></div>
            <div className="flex-1 flex items-end justify-between">
                <PlusIcon className="text-gray-500 cursor-pointer"/>
                <div className="flex justify-center items-center self-center">
                    <RewindIcon className="text-gray-500 cursor-pointer"/>
                    <PlayIcon className="text-gray-500 cursor-pointer"/>
                    <ForwardIcon  className="text-gray-500 cursor-pointer"/>
                </div>
            </div>
        </div>
    } borderTop childrenClass="flex-1 overflow-auto px-2 flex flex-row">
        <div className="border-r border-gray-500 w-64">
            {timelineElements}
        </div>
        <div className="flex-1" style={{ height: 200}}>
            <div className="px-2 w-full h-full overflow-auto">
                <TimelineListKeyframes elements={elements}/>
            </div>
        </div>
    </Panel>
}