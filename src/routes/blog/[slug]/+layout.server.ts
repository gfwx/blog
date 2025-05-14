import type { LayoutServerLoad } from '../../$types';

export const load: LayoutServerLoad = async ({ locals: { supabase }, params }) => {
  const slug = params.slug;

  const { data: article, error } = await supabase
    .from('articles')
    .select('title, caption, updated_at, created_at, slug, article_data(content, image_url)')
    .eq('slug', slug)
    .single();

  if (error) {
    throw new Error(`An unexpected error occurred: ${error.message}`);
  }

  if (!article || !article.article_data) {
    throw new Error(`Article or associated content not found for slug: ${slug}`);
  }

  return {
    slug,
    article: JSON.stringify({
      title: article.title,
      caption: article.caption,
      content: article.article_data.content,
      last_updated: article.updated_at,
      created_at: article.created_at,
      image_url: article.article_data.image_url
    })
  };
};
