import { useState } from 'react';
import './App.css';
import Box from './components/block/box';
import {v1} from 'uuid';

export type filterType = 'All' | 'Active' | 'Complated'

function App() {

  let [increState, setState] = useState(
    [
    {id : v1(), title: 'js', isDone: true},
    {id : v1(), title: 'css', isDone: false},
    {id : v1(), title: 'React', isDone: true},
  ]
  )
  let [increFilter, setFilter] = useState<filterType>('All')

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
    const isDoneStatus = increState.find(e => e.id === id)
    if(isDoneStatus){
      isDoneStatus.isDone = isDone;
    }
    setState([...increState]);
  }


  let filterState = increState;
  if(increFilter === 'Active'){
    filterState = increState.filter(u => u.isDone === true)
  }
  else if (increFilter === 'Complated'){
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
      changefilter = {increFilter}
      />
      <Box title = 'What you need lernd' 
      increState = {filterState} 
      remuve = {remuveBoxValue}
      callfilter = {filterStateCall}
      callAddLine = {addTableLine}
      callChangeStatus = {changeSatus}
      changefilter = {increFilter}
      />
    </div>
  )
  
}


export default App;
