import supabase from "./supabase";

const TABLE_NAME = "sampledatabase";

export async function getUsers(){
    const {data, error} = await supabase.from(TABLE_NAME).select("*");
    if(error) {
        throw error;
    }
    return data;
}

export async function insertTasks(tasks: string[]) {
    const tasksToInsert = tasks.map(task => ({ name: task }));
  
    const { data, error } = await supabase
      .from(TABLE_NAME)
      .insert(tasksToInsert);
  
    if (error) {
      console.error('Error inserting tasks:', error);
      return null;
    }
  
    return data;
  }