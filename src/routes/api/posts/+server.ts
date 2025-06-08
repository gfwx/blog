import { json } from "@sveltejs/kit"
import { supabase } from "$lib/supabase/client"
import { jwtDecode } from "jwt-decode";
import type { Article } from "$lib/types.js";
import type { PostgrestError } from '@supabase/supabase-js';

export async function GET({ request, cookies }) {
  const { data, error } = await supabase
    .from("articles")
    .select("*")
    .eq('draft', false)
    .order('created_at', { ascending: false }) as { data: Article[], error: PostgrestError | null }

  if (error) {
    return json({ articles: [], error }, { status: 404 });
  }

  return json({ articles: data, error: null }, { status: 200 })
}

// TODO: Implement this when merging the CMS to the main website

export async function POST({ request, cookies }) {
  //@ts-ignore
  const { jwt, article } = await request.json();
  if (!jwt) {
    return json({ error: 'No JWT provided' }, { status: 400 });
  }

  const decoded = jwtDecode(jwt);
  //@ts-ignore
  const user_role = decoded.user_role || "noob";

  if (user_role == 'noob') {
    return json({ error: 'Not authorized' }, { status: 401 });
  }

  if (user_role == 'pro') {
    // logic here
    return json({ result: 'Data goes here' }, { status: 201 });
  }


  return json({ error: 'Not authorized' }, { status: 401 });
}
