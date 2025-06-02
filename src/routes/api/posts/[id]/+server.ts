import { json } from "@sveltejs/kit";
import { supabase } from "$lib/supabase/client";

export async function GET({ params }) {
  const slug = params.id;
  const { data, error } = await supabase
    .from('articles')
    .select('title, caption, updated_at, created_at, slug, article_data(content, image_url)')
    .eq('slug', slug)
    .single();

  if (error) {
    return json({ error: error }, { status: 400 });
  }

  if (!data) {
    return json({ error: 'Not found' }, { status: 404 });
  }

  return json({
    title: data.title,
    caption: data.caption,
    content: data.article_data.content,
    last_updated: data.updated_at,
    created_at: data.created_at,
    image_url: data.article_data.image_url
  }, { status: 200 });
}
