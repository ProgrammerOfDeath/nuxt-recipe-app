<script lang="ts">
  export default defineComponent({
    setup() {
      const text = ref('')
      const supabase = useSupabase()

      const email = ref('')
      const password = ref('')

      const signUp = async () => {
        try {
          const { user, error } = await supabase.auth.signUp({
            email: email.value,
            password: password.value,
          })

          if (error) throw new Error(error.message)

          console.log(user)
        } catch (error) {
          console.log(error)
        }
      }

      return {
        text,
        supabase,
        signUp,
        password,
        email,
      }
    },
  })
</script>

<template>
  <div class="container px-4">
    <form
      class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-lg w-full bg-slate-100 shadow-sm p-8"
      @submit.prevent="signUp">
      <h1 class="mb-5">Sign Up</h1>
      <input
        v-model="email"
        class="border-2 border-gray-500 bg-slate-100 text-lg w-full mb-5"
        type="email"
        placeholder="E-Mail"
        required />
      <input
        v-model="password"
        class="border-2 border-gray-500 bg-slate-100 text-lg w-full"
        type="password"
        placeholder="Password"
        required />
      <button
        class="bg-slate-600 text-white text-lg border-2 border-gray-900 px-3 py-2 mt-5">
        Sign Up
      </button>
    </form>
  </div>
</template>

<style lang="scss"></style>
