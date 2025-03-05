import 'dotenv/config';

export default {
  expo: {
    name: "CPRG-303-Labs",
    slug: "My-app-slug",
    version: "1.0.0",
    extra: {
      supabaseUrl: process.env.EXPO_PUBLIC_SUPABASE_URL,
      supabaseKey: process.env.EXPO_PUBLIC_SUPABASE_KEY
    }
  }
};