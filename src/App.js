import React, {useState} from 'react'
import './App.css';

const App = ()=>{
  const [task, setTask] = useState({title:'', desc:'', date:''});
  const [tasks, setTasks] = useState([]);

  const handleChange = (e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setTask({...task, [name]:value});
  };

  const handleSubmit = (e)=>{
    if(task.title){
      const newTask = {...task, id:new Date().getTime().toString()};
      setTasks([...tasks, newTask]);
      setTask({title:'', desc:'', date:''});
    }
  }

  const removeTask = (id)=>{
    let newTask = tasks.filter((t)=>t.id !== id);
    setTasks(newTask);
  };

  return(
    <>
        <div className='task'>

            <section className='task__manager'>
                <h1>Task Manager</h1>
                <input name='title' type='text' value={task.title} placeholder='Task Title' onChange={handleChange}/>
                <textarea name='desc' value={task.desc} placeholder='Task Description' onChange={handleChange}/>
                <input name='date' type='date' value={task.date} placeholder='Date' onChange={handleChange}/>
                <button onClick={handleSubmit}>
                    CREATE TASK
                </button>
            </section>

            <section className='task__list'>
                <h1>Your Tasks</h1>
                {tasks.map((t,index)=>{
                  const {title,desc,date,id} = t;
                  return(
                    <div key={id} className='task__listItem'>
                        <h3>{index+1}. {title}</h3>
                        <div>
                            <button onClick={()=>removeTask(id)} className='com_button'>Completed</button>
                            <button onClick={()=>removeTask(id)} className='del_button'>Delete</button>
                        </div>
                    </div>
                  )
                })}
            </section>

        </div>
    </>
  )
}

export default App;