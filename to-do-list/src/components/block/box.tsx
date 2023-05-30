import { useState } from "react";
import { filterType } from "../../App";


type TaskType = {
  id : string;
  title : string;
  isDone : boolean; 
}

type PropsType = {
  title : string;
  increState : Array<TaskType>;
  remuve : (id: string)=> void;
  callfilter: (value: filterType)=> void;
  callAddLine: (title : string)=> void;
}

function Box(props: PropsType ) {

const [increvalue, setvalue] = useState('');

  return (
    <div>
      <h3>{props.title}</h3>
      <div>
        <input type="text" value={increvalue} onChange={(e)=>{setvalue(e.currentTarget.value)}} />
        <button onClick={()=>{props.callAddLine(increvalue)}}>+</button>
      </div>
      <ul>
        {
          props.increState.map((i)=> {
           return <li><input type="checkbox" checked={i.isDone}/><span>{i.title}</span>
           <button onClick={()=> props.remuve(i.id)}>Удалить</button>
           </li>
          })
        }
      </ul>
      <div>
        <button onClick={()=>{props.callfilter('all')}}>All</button>
        <button onClick={()=>{props.callfilter('half')}}>Active</button>
        <button onClick={()=>{props.callfilter('last')}}>Complated</button>
      </div>
    </div>
  )
}

export default Box;