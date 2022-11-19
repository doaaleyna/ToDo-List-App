import React,{useState,useEffect} from 'react'

 function Todo() {

    const [task,setTask] =useState("");
    //Task üzerinde yapılan değişiklikleri tutuyoruz.
    const [tasks,setTasks] = useState([]);

    // İle sayfa yenilense bile kaydedilenler localstorage dan localtasks karşımıza gelmektedir. 
    useEffect (()=>{
        if(localStorage.getItem("localTasks")){
            const storedList = JSON.parse(localStorage.getItem("localTasks"));
            setTasks(storedList);
        }
    })
    

    const addTask = (e) => {
       if(task){
        const newTask = {id: new Date().getTime().toString(), title: task} // task a idsi ve title'ı olan new task tanımladık
        setTasks([...tasks,newTask]) //Yapılan eklemeler setTasks içine eklendi
        localStorage.setItem("localTasks",JSON.stringify([...tasks,newTask])); //Aynı işlem ile localstorage a da ekleme yaptık
        setTask("") //Settask içeriği boş olmalı ekleme için
       }
    }

    const handleDelete = (task) =>{
        const deleted = tasks.filter((t) =>t.id !== task.id)
        setTasks(deleted);
        localStorage.setItem("localTasks",JSON.stringify(deleted)) //Sildiğimizi localstorage da da güncelliyoruz.
    }

    const handleClear = (task) =>{
        setTasks([]);
        localStorage.removeItem("localTasks");
    }

    const handleUpdate = (task) =>{

    }

  return (
    <div className='container row'>
       <h1 className='mt-1 text-black'>To-Do App</h1>
       <div className='col-8'>
           <input 
             name='task' 
             type="text" 
             value ={task} 
             placeholder='Write your task...' 
             className='form-control'
             onChange={(e)=> setTask(e.target.value)} // Yazılan değişiklikleri setTask ile tutuyoruz
            />
       </div>
       <div className='col-4'>
            <button className='btn btn-primary form-control material-icons' 
              onClick={addTask}>
                add
            </button>
       </div>
       <div className='badge'>
        You have 
        {
            !tasks.length? " no tasks"
            : tasks.length === 1 ? " 1 task"
            : tasks.length >1 ? ` ${tasks.length} tasks`
            : null
        }
        {/* Yazılan taskların sayısını gösteriyor. */}
       </div>
       {
          tasks.map(task =>(
             <React.Fragment key={task.id}> 
             {/* React fragment ile birden fazla öğeyi döndürüyoruz. */}
                <div className='col-9'>
                    <span className='form-control bg-white btn mt-2'
                     style={{textAlign:"left" , fontWeight:"bold"}}>
                        {task.title}
                     </span>
                </div>
                <div className='col-1'>
                    <button className='mt-2 btn btn-warning material-icons'
                     onClick = {()=> handleDelete(task)}
                    >delete</button>
                </div>
               <div className='col-1'>
                    <button className='mt-2 btn btn-warning btn-outlined material-icons'
                     onClick = {()=> handleUpdate(task)}
                    >edit</button>
                </div> 
             </React.Fragment>
          ))}
          {!tasks.length ? null:(
             <div>
                <button className='btn btn-secondary mt-4 mb-4' onClick={() => handleClear()}>
                    Clear
                </button>
             </div>
          )}
    </div>
  )
}

export default Todo; 
