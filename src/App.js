import logo from './logo.svg';
import './App.css';
import Game from './game';

function App(props) {
  return <Game setting={props.set}></Game>
}

export default App;
