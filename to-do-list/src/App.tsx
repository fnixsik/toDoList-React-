import './App.css';
import Box from './components/block/box';

const boxName = {}
let boxValue = [
  {id : 1, title: 'js', isDone: true},
  {id : 2, title: 'css', isDone: false},
  {id : 3, title: 'React', isDone: true},
]

let boxValue1 = [
  {id : 1, title: 'ang', isDone: false},
  {id : 2, title: 'kz', isDone: false},
  {id : 3, title: 'turk', isDone: true},
]

function App() {
  return (
    <div className="App">
      <Box title = 'What you need lernd' boxValue = {boxValue}/>
      <Box title = 'how many languages know ?' boxValue = {boxValue1}/>
    </div>
  );
}

export default App;
