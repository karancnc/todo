  import React,{useState ,useEffect} from 'react';

  function Home() {
      const [tasks, setTasks] = useState([]); // State to hold tasks
      const [task, setTask] = useState(''); // State for the input field
      const [editingIndex, setEditingIndex] = useState(-1); 

      useEffect(() => {
          const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
          setTasks(storedTasks);
      }, []);
      
      
      useEffect(() => {
          localStorage.setItem('tasks', JSON.stringify(tasks));
      }, [tasks]);
      

    const addTask = () => {
      if (!task) return;
      setTasks([...tasks, task]);
      setTask(''); // Clear the input field
    };

    // Delete task
    const deleteTask = (index) => {
      const newTasks = tasks.filter((_, i) => i !== index);
      setTasks(newTasks);
    };

    // Start editing task
    const startEditing = (index) => {
      setTask(tasks[index]);
      setEditingIndex(index);
    };

    // Update task
    const updateTask = () => {
      if (editingIndex < 0) return;
      const updatedTasks = tasks.map((t, i) => (i === editingIndex ? task : t));
      setTasks(updatedTasks);
      setTask(''); // Clear the input field after updating
      setEditingIndex(-1); // Reset editing index
    };


    return (
    <div className='main'>
          <h1>Todo List</h1>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={editingIndex >= 0 ? updateTask : addTask}>
          {editingIndex >= 0 ? 'Update Task' : 'Add Task'}
        </button>
          {tasks.map((t, index) => (
          <ul key={index}>
            <li >
              {t}
            </li>
            <li>
            <button onClick={() => startEditing(index)}>Edit</button>
            
            </li>
            <li><button onClick={() => deleteTask(index)}>Delete</button></li>
          </ul>
          ))}
    </div>
    );
  }

  export default Home;
