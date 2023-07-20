// import logo from './logo.svg';
import './App.css';
import Tile from './Tile';
import {A,B} from './named_export.js'; // named export

function App() {
  return (
    <>
      <h1>Welcome to react</h1>
      <p>How are u doing</p>
      {/* In jsx we use className instead of class */}
      <span className = "class"> test </span> 
      {/* calling the Tile component this componenet can be used multiple times*/}
      <Tile/>
      <p>{A}</p>
      <p>{B}</p>
    </>
  );
}

export default App;
