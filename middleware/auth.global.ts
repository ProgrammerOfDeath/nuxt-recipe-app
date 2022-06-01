export default defineNuxtRouteMiddleware((to) => {
  const supabase = useSupabase()

  if (!supabase.auth.user()) {
    if (to.name !== 'login' && to.name !== 'signup') {
      return '/login'
    }
  }
})
