import React , {useState} from 'react';
import TaskItem from './TaskItem'
import { Task } from '../Types'

type Props = {
    tasks: Task[]
    setTasks:  React.Dispatch<React.SetStateAction<Task[]>>
}
const TaskInput: React.FC<Props> = () => {
    const [inputTitle, setInputTitle] = useState('')

    const handeInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputTitle(e.target.value)
    }
  return (
      <div className="input-form">
         <div className="inner">
             <input 
             type="text"
             className="input"
             value={inputTitle}
             onChange={handeInputChange}
             />
             <button className="btn is-primary">追加</button>
         </div>
      </div>
  );
}

export default TaskInput;
