import './App.css';
import NavigationBar from './components/NavigationBar';
import { debug_init } from './utilities';
import { TextWritingArea } from './components/TextWritingArea';
import { StateHandler } from "./StateHandler";


let GLOBAL_STATE_HANDLER_HANDLE = new StateHandler()

function App() {
  return (
    <div>
    <NavigationBar StateHandler={GLOBAL_STATE_HANDLER_HANDLE}></NavigationBar>
    <TextWritingArea StateHandler={GLOBAL_STATE_HANDLER_HANDLE}/>
    </div>
  );
}

export default App;
