<script lang="ts">
  export default defineComponent({
    setup() {
      const supabase = useSupabase()
      const router = useRouter()

      const logout = async () => {
        try {
          const { error } = await supabase.auth.signOut()
          if (error) throw new Error(error.message)

          router.replace('/login')
        } catch (err) {
          console.log(err)
        }
      }

      return {
        logout,
      }
    },
  })
</script>

<template>
  <div class="container">
    <h1>Home</h1>
    <button class="bg-yellow-50" @click="logout">Logout</button>
  </div>
</template>
