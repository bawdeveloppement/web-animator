import { useState } from 'react';
import EditorView from './components/EditorView/EditorView';

const db = {
  user: 0,
  views: [
    {
      name: "reactLogo",
      active: true,
      elements: [
        {
          name: "spinner",
          isSelected: false,
          properties: {
            type: "div",
            id: "divel",
            style: {
              width: "200px",
              height: "200px",
              backgroundColor: "black"
            }
          },
          keyframes: [],
          timing: {}
        },
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
    <div className="h-full flex flex-col">
      <EditorView view={viewsDb.filter(({ active }) => active && active === true)[0]}/>
    </div>
  );
}

export default App;