import logo from './logo.svg';
import './App.css';

// created component name Tile
function Tile(){
  return(
    <div>
      <span>x</span>
    </div>
  )
}



function App() {
  return (
    <div>
      <h1>Welcome to react</h1>
      <p>How are u doing</p>
      {/* calling the Tile component this componenet can be used multiple times*/}
      <Tile/>
    </div>
  );
}

export default App;
