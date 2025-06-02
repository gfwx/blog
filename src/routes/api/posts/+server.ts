import { json } from "@sveltejs/kit"
import { supabase } from "$lib/supabase/client"
import { jwtDecode } from "jwt-decode";

export async function GET({ request, cookies }) {
  const { data, error } = await supabase
    .from("articles")
    .select("*")
    .eq('draft', false)

  if (error) {
    return json({ articles: [], error }, { status: 404 });
  }

  return json({ articles: data }, { status: 200 })
}

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
