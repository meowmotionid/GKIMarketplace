
// In a real app, you would use:
// import { createClient } from '@supabase/supabase-js'
// export const supabase = createClient('https://vkxgtwjmgzmaqsydsesb.supabase.co', process.env.SUPABASE_ANON_KEY)

// Mocked version for preview purposes:
export const supabaseMock = {
  auth: {
    signInWithOAuth: async () => ({ data: null, error: null }),
    signOut: async () => ({ error: null }),
    getUser: () => ({ data: { user: { email: 'user@example.com', id: 'u1' } }, error: null })
  }
};
