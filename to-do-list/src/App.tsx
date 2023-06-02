import { useState } from 'react';
import './App.css';
import Box from './components/block/box';
import {v1} from 'uuid';

export type filterType = 'all' | 'half' | 'last'

function App() {

  let [increState, setState] = useState(
    [
    {id : v1(), title: 'js', isDone: true},
    {id : v1(), title: 'css', isDone: false},
    {id : v1(), title: 'React', isDone: true},
  ]
  )
  let [increFilter, setFilter] = useState<filterType>('all')

  function remuveBoxValue (id : string){
    let setNewDate = increState.filter(g=> g.id !== id)
    setState(setNewDate);
  }

  function filterStateCall (value : filterType){
    setFilter(value);
  }

  function addTableLine (title : string){
    let createNewLine = {id : v1(), title: title, isDone: false}
    let pushState = [createNewLine, ...increState]
    setState(pushState);
  }

  function changeSatus (id : string, isDone : boolean){
    console.log('id ', "|  isDone ", isDone)
    const isDoneStatus = increState.find(e => e.id === id)
    if(isDoneStatus){
      isDoneStatus.isDone = isDone;
    }
    setState([...increState]);
  }


  let filterState = increState;
  if(increFilter === 'half'){
    filterState = increState.filter(u => u.isDone === true)
  }
  else if (increFilter === 'last'){
    filterState = increState.filter(u => u.isDone === false)
  }


  return(
    <div className="App">
      <Box title = 'What you need lernd' 
      increState = {filterState} 
      remuve = {remuveBoxValue}
      callfilter = {filterStateCall}
      callAddLine = {addTableLine}
      callChangeStatus = {changeSatus}
      />
    </div>
  )
  
}


export default App;
