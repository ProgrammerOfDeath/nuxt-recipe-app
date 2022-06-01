export const useSupabase = () => {
  const { $supabase } = useNuxtApp()
  if (!$supabase) throw new Error('Supabase Client not provided')
  return $supabase
}
