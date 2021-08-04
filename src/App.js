
import { RecoilRoot } from 'recoil';
import EditorView from './components/EditorView/EditorView';


function App() {
  return (
    <div className="h-full flex flex-col">
      <RecoilRoot>
        <EditorView />
      </RecoilRoot>
    </div>
  );
}
export default App;