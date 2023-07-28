import { useState } from 'react';

const ProfileP = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const delTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-4xl font-bold my-4'>Welcome to your Profile!</h1>
      <h2 className='text-4xl font-bold my-4'>Your ToDo List</h2>
      <div className='flex flex-col'>
        <input
          className='text-xl p-2 rounded-lg bg-transparent border-blue-600 border-[2px] my-4'
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a new task"
        />
        <button onClick={addTask} className=' border-emerald-500 border rounded-lg w-fit self-center p-3 hover:bg-emerald-600 hover:text-black transition'>Add Task</button>
      </div>
      <h2 className='text-xl my-6'>------ List of Tasks ------</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className='text-xl m-3'>
            {task} &nbsp;&nbsp;
            <button onClick={() => delTask(index)} className='text-sm bg-red-700 rounded p-1'>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfileP;
