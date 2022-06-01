import { createClient } from '@supabase/supabase-js'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  const { $supabase } = useNuxtApp()
  const { supabaseKey, supabaseUrl } = config.public

  const supabaseClient = createClient(supabaseUrl, supabaseKey)

  if (!$supabase) {
    return {
      provide: {
        supabase: supabaseClient,
      },
    }
  }
})
