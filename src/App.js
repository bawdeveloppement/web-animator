import { useState } from 'react';
import EditorView from './components/EditorView/EditorView';
import TabsView from './components/TabsView/TabsView'

const db = {
  user: 0,
  views: [
    {
      name: "reactLogo",
      active: true,
      elements: [
        {
          name: "div",
        },
        {
          name: "div",
        },
        {
          name: "div",
        },
        {
          name: "div",
        },
        {
          name: "div",
        }
      ]
    },
    {
      name: "loadingScreen"
    }
  ]
}

function App() {
  const [ viewsDb, setViewsDb ] = useState(db.views)
  return (
    <div className="h-screen flex flex-col">
      <TabsView views={viewsDb}/>
      <EditorView view={viewsDb.filter(({ active }) => active && active === true)[0]}/>
    </div>
  );
}

export default App;