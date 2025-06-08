import { json } from "@sveltejs/kit";
import { supabase } from "$lib/supabase/client";

type ArticleDetailData = {
  title: string | null;
  caption: string | null;
  updated_at: string | null;
  created_at: string | null;
  slug: string | null;
  article_data: {
    content: string | null;
    image_url: string | null;
  };
};

export async function GET({ params }) {
  const slug = params.id;
  const { data, error } = await supabase
    .from('articles')
    .select('title, caption, updated_at, created_at, slug, article_data(content, image_url)')
    .eq('slug', slug)
    .eq('draft', false)
    .single() as { data: ArticleDetailData | null, error: any };

  if (error) {
    return json({ data: null, error: error.message }, { status: 400 });
  }

  if (!data) {
    return json({ data: null, error: 'Not found' }, { status: 404 });
  }

  return json({
    data: {
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
