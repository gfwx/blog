import { json } from "@sveltejs/kit";
import { supabase } from "$lib/supabase/client";
import type { ArticleDetailData } from "$lib/types";

export async function GET({ locals }) {
  const { session } = locals;

  const { data, error } = await supabase
    .from('articles')
    .select('title, caption, updated_at, created_at, slug, article_data(content, image_url)')
    .eq('featured', true)
    .order('created_at')
    .single() as { data: ArticleDetailData | null, error: any };

  if (!data) {
    return json({ featured: null, error: 'Not found!' }, { status: 404 })
  }

  if (error) {
    return json({ featured: null, error: error })
  }

  return json({
    featured: {
      title: data.title,
      caption: data.caption,
      content: data.article_data.content,
      last_updated: data.updated_at,
      created_at: data.created_at,
      image_url: data.article_data.image_url
    },
    error: null
  }, { status: 200 });
}
