import logo from './logo.svg';
import './App.css';
import { JupyterFrontEnd, JupyterFrontEndContextMenu, JupyterLab } from '@jupyterlab/application';

function App() {
  return (
    <div className="App">
      {/* <JupyterLab></JupyterLab> */}
      <JupyterFrontEndContextMenu></JupyterFrontEndContextMenu>
      {/* <JupyterFrontEnd></JupyterFrontEnd> */}
    
    </div>
  );
}

export default App;
