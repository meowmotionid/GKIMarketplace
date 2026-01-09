
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.7';

const supabaseUrl = 'https://vkxgtwjmgzmaqsydsesb.supabase.co';
// Ensure you set this in your Vercel Environment Variables or .env file
const supabaseAnonKey = (process.env.SUPABASE_ANON_KEY as string) || 'YOUR_SUPABASE_ANON_KEY';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

/**
 * Helper to initiate Google OAuth Login
 */
export const signInWithGoogle = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: window.location.origin,
      queryParams: {
        access_type: 'offline',
        prompt: 'consensus',
      },
    },
  });
  return { data, error };
};

/**
 * Helper to sign out
 */
export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  return { error };
};

/**
 * Database Fetching Helpers
 */
export const db = {
  products: {
    getAll: () => supabase.from('products').select('*, sellers(nama_toko)'),
    getByCategory: (category: string) => supabase.from('products').select('*, sellers(nama_toko)').eq('kategori', category),
    getById: (id: string) => supabase.from('products').select('*, sellers(*)').eq('id', id).single(),
  },
  sellers: {
    getAll: () => supabase.from('sellers').select('*'),
    getById: (id: string) => supabase.from('sellers').select('*, products(*)').eq('id', id).single(),
  },
  profiles: {
    get: (id: string) => supabase.from('profiles').select('*').eq('id', id).single(),
  }
};
