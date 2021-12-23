import { useState, useEffect } from 'react';
import Addtask from './components/Addtask';
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
   const [showAddTask, setShowAddTask] = useState(false);
   const [tasks, setTasks] = useState([]);
   useEffect(() => {
      const getTasks = async () => {
         const dataFromServer = await fetchTasks();
         setTasks(dataFromServer);
      };
      getTasks();
   }, []);

   const fetchTasks = async () => {
      const res = await fetch('http://localhost:5000/tasks');
      const data = await res.json();
      return data;
   };
   const fetchTask = async (id) => {
      const res = await fetch(`http://localhost:5000/tasks/${id}`);
      const data = await res.json();
      console.log(data);
      return data;
   };

   const deleteTask = async (id) => {
      await fetch(`http://localhost:5000/tasks/${id}`, {
         method: 'Delete',
      });

      setTasks(tasks.filter((task) => task.id !== id));
   };

   const toggleReminder = async (id) => {
      const taskToToggle = await fetchTask(id);
      const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

      const res = await fetch(`http://localhost:5000/tasks/${id}`, {
         method: 'PUT',
         headers: {
            'Content-type': 'application/json',
         },
         body: JSON.stringify(updTask),
      });

      const data = await res.json();
      console.log(data);

      setTasks(
         tasks.map((task) =>
            task.id === id ? { ...task, reminder: data.reminder } : task
         )
      );
   };

   const addTask = async (task) => {
      const res = await fetch('http://localhost:5000/tasks', {
         method: 'POST',
         headers: { 'Content-type': 'application/json' },
         body: JSON.stringify(task),
      });

      const data = await res.json();

      // const id = (tasks.length + 1)
      // const id = Math.floor(Math.random() * 10000) +1
      // console.log(id)

      // const newTask = {id, ...task}

      setTasks([...tasks, data]);
   };

   return (
      <div className='container'>
         <Header
            toggleAddTask={() => setShowAddTask(!showAddTask)}
            showAddTask={showAddTask}
         />
         {showAddTask && <Addtask onAdd={addTask} />}
         {tasks.length > 0 ? (
            <Tasks
               tasks={tasks}
               onDelete={deleteTask}
               onToggle={toggleReminder}
            />
         ) : (
            <div>
               There is no task to show,{' '}
               <strong style={{ color: 'green', cursor: 'pointer' }}>
                  Add some!
               </strong>
            </div>
         )}
      </div>
   );
}

export default App;
