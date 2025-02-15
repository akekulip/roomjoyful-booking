
import { createClient } from "@supabase/supabase-js";

// When using Lovable's Supabase integration, these variables are automatically injected
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Create the Supabase client
export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseAnonKey || 'placeholder'
);

// Log warning if Supabase is not properly configured
if (!supabaseUrl || !supabaseAnonKey) {
  console.error(
    "Missing Supabase URL or Anon Key. Make sure you have connected your Supabase project in the Lovable dashboard."
  );
}

export type UserRole = "admin" | "user";

export const getUserRole = async (userId: string): Promise<UserRole> => {
  if (!supabaseUrl || !supabaseAnonKey) {
    return "user"; // Default to user role if Supabase is not connected
  }

  try {
    const { data, error } = await supabase
      .from("user_roles")
      .select("role")
      .eq("user_id", userId)
      .single();

    if (error || !data) {
      return "user"; // Default to regular user if no role is found
    }

    return data.role as UserRole;
  } catch (error) {
    console.error("Error fetching user role:", error);
    return "user";
  }
};
