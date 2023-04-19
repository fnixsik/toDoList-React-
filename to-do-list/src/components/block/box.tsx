type TaskType = {
  id : number;
  title : string;
  isDone : boolean; 
}

type PropsType = {
  title : string;
  boxValue : Array<TaskType>;
}

function Box(props: PropsType ) {
  return (
    <div>
      <h3>{props.title}</h3>
      <div>
        <input type="text" />
        <button>+</button>
      </div>
      <ul>
        {
          props.boxValue.map((i)=> {
           return <li><input type="checkbox" checked={i.isDone}/><span>{i.title}</span></li>
          })
        }
      </ul>
    </div>
  );
}

export default Box;