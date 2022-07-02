import './App.css';
import {ReactDropzoneHook} from './dropzone/hook'
import {ReactDropzoneComponent} from './dropzone/component'

function App() {
  return (
    <div className="App">
      <div
      >
        <h1>React Dropzone</h1>
        <div style={{ border: '1px solid green' }}>
          <h2>Hook</h2>
          <ReactDropzoneHook />
        </div>
        <div style={{ border: '1px solid blue' }}>
          <h2>Component</h2>
          <ReactDropzoneComponent />
        </div>
      </div>
    </div>
  );
}

export default App;
