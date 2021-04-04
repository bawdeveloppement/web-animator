import ListElementsView from "../ListElementsView/ListElementsView"
import TimeLineEditor from "../TimeLineEditor/TimeLineEditor"
import ElementPropertiesView from "../ElementPropertiesView/ElementPropertiesView"

export default function EditorView({ view }) {
    return <div className="flex-1 flex flex-col">
        <div className="flex-1 flex flex-row">
            <ListElementsView elements={view.elements} />
            <div
            className="flex-1 p-4"
            style={{
                background: '#FFF',
                backgroundImage: 'linear-gradient(rgba(100, 100, 100, .1) .1em, transparent .1em), linear-gradient(90deg, rgba(100, 100, 100, .1) .1em, transparent .1em)',
                backgroundSize: '1em 1em'
            }}>
                AnimationView
            </div>
            <ElementPropertiesView />
        </div>
        <TimeLineEditor />
    </div>
}