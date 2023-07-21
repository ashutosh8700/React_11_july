// import logo from './logo.svg';
import './App.css';
import Tile from './Tile';
import {A,B} from './named_export.js'; // named export

function App() {
  let count = 10;
  let imageaddress = 'https://i.pinimg.com/550x/cb/33/49/cb3349b86ca661ca61ae9a36d88d70d4.jpg'
  let styling = {backgroundColor:'brown'};
  return (
    <>
      <h1 style = {styling}>Welcome to react</h1> 
      <p style = {{backgroundColor:'pink'}} >How are u doing</p>
      {/* In jsx we use className instead of class */}
      <span className = "class"> test </span> 
      {/* calling the Tile component this componenet can be used multiple times*/}
      <Tile/>
      <p>{A}</p>
      <p>{B}</p>
      <img src={imageaddress} />
      <h1>The number is {count} </h1>
    </>
  );
}

export default App;
