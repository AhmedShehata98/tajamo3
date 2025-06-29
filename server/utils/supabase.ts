import { createClient } from "@supabase/supabase-js";

const supabaseUrl = useRuntimeConfig().public.supabaseUrl;
const supabaseKey = useRuntimeConfig().supabaseKey;
const supabaseServiceRoleKey = useRuntimeConfig().supabaseServiceRoleKey;
const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);

export default supabase;
export type SupabaseClient = ReturnType<typeof createClient>;
