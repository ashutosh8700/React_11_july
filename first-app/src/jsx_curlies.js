// import logo from './logo.svg';
import './App.css';
let count  = 10;
let imageaddress = 'https://i.pinimg.com/550x/cb/33/49/cb3349b86ca661ca61ae9a36d88d70d4.jpg'
function App() {
  return (
    <>
      <h1>the number is {count}  </h1>
      <img src={imageaddress} />
    </>
  );
}

export default App;
