import supabase from '../lib/supabase';
import tasksData from '../tasks.json';

async function initializeTasks() {
  const tasks = tasksData.tasks;

  const { data, error } = await supabase
    .from('tasks')
    .insert(tasks.map(task => ({ name: task })));

  if (error) {
    console.error('Error inserting tasks:', error);
    return;
  }

  console.log('Tasks inserted successfully:', data);
}

// Optional: If you want to run this directly
// initializeTasks();

export default initializeTasks;