import { ChangeEvent, useState } from "react";
import { filterType } from "../../App";


type TaskType = {
  id : string;
  title : string;
  isDone : boolean; 
}

type PropsType = {
  title : string;
  increState : Array<TaskType>;
  changefilter : filterType;
  remuve : (id: string)=> void;
  callfilter: (value: filterType)=> void;
  callAddLine: (title : string)=> void;
  callChangeStatus: (id: string, isDone: boolean)=> void;
}

function Box(props: PropsType ) {

  let [increvalue, setvalue] = useState('');
  let [increError, setError] = useState<string | null >(null);

  const sendNewLine = ()=>{
  if (increvalue.trim() !== ''){
    props.callAddLine(increvalue); 
    setvalue(' ');
  }else{
    setError('Поля обязательно')
  }
  
  }

  const onchangeInput = (e : ChangeEvent<HTMLInputElement>)=>{
    if(e.currentTarget.value !== ''){
      setError('');
    }
    setvalue(e.currentTarget.value)
  }

  return (
    <div>
      <h3>{props.title}</h3>
      <div>
        <input type="text" value={increvalue} onChange={onchangeInput} className={increError ? "error" : ''}/>
        <button onClick={sendNewLine}>+</button>
        {increError && <div className="error-message">{increError}</div>} 
      </div>
      <ul>
        {
          props.increState.map((i)=> {
            const onChangeStatus = (e : ChangeEvent<HTMLInputElement>) => {
              props.callChangeStatus(i.id,e.currentTarget.checked);
            }

           return <li><input type="checkbox" 
           onChange={onChangeStatus} 
           checked={i.isDone}
           className={i.isDone ? 'is-done' : ''}
           /><span>{i.title}</span>
           <button onClick={()=> props.remuve(i.id)}>Удалить</button>
           </li>
          })
        }
      </ul>
      <div>
        <button onClick={()=>{props.callfilter('All')}} 
        className={props.changefilter === 'All' ? 'active-filter' : ''}>All</button>
        <button onClick={()=>{props.callfilter('Active')}} 
        className={props.changefilter === 'Active'? 'active-filter' : ''}>Active</button>
        <button onClick={()=>{props.callfilter('Complated')}} 
        className={props.changefilter === 'Complated' ? 'active-filter' : ''}>Complated</button>
      </div>
    </div>
  )
}

export default Box;