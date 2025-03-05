import { createClient } from '@supabase/supabase-js';
import Constants from 'expo-constants';

// Get the extra config from app.config.js
const { supabaseUrl, supabaseKey } = Constants.expoConfig.extra;

// Verify the URL and key exist
if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase credentials in app configuration');
}

// Create Supabase client
const supabase = createClient(supabaseUrl, supabaseKey);

const TABLE_NAME = 'users';

export async function getUsers() {
  const { data, error } = await supabase
    .from(TABLE_NAME)
    .select('*');

  if (error) {
    throw error;
  }

  return data;
}

export default supabase;