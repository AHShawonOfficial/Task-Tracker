import { useState } from 'react';

const Addtask = ({ onAdd }) => {
   const [title, setTitle] = useState('');
   const [day, setDay] = useState('');
   const [reminder, setReminder] = useState(false);

   const onSubmit = (e) => {
      e.preventDefault();

      if (!title || !day) {
         alert("Input can't be empty");
         return;
      }

      onAdd({ title, day, reminder });

      setTitle('');
      setDay('');
      setReminder(false);
   };

   return (
      <form className='add-form' onSubmit={onSubmit}>
         <div className='form-control'>
            <label>Task</label>
            <input
               type='text'
               name='title'
               placeholder='Add Title'
               value={title}
               onChange={(e) => setTitle(e.target.value)}
            />
         </div>
         <div className='form-control'>
            <label>Day & Time</label>
            <input
               type='text'
               name='date'
               placeholder='Add Day & Time'
               value={day}
               onChange={(e) => setDay(e.target.value)}
            />
         </div>
         <div className='form-control-check'>
            <label>Reminder</label>
            <input
               type='checkbox'
               //  checked={reminder}
               name='reminder'
               value={reminder}
               onChange={(e) => setReminder(e.currentTarget.checked)}
            />
         </div>
         <input
            type='submit'
            value='Save Task'
            className='btn btn-block submit-btn'
         />
      </form>
   );
};

export default Addtask;
