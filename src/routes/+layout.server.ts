import type { LayoutServerLoad } from './$types'

export const load: LayoutServerLoad = async ({ locals: { safeGetSession, supabase }, cookies }) => {
  const { session } = await safeGetSession()
  const { data: user } = await supabase.auth.getUser()
  return {
    session,
    cookies: cookies.getAll(),
    user: user
  }
}
