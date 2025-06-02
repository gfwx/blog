import type { LayoutServerLoad } from '../../$types';

type Article = {
  title: string;
  caption: string;
  content: string;
  updated_at: string;
  created_at: string;
  image_url: string;
};

export const load: LayoutServerLoad = async ({ fetch, locals, params }) => {
  const slug = params.slug;
  const response = await fetch(`/api/posts/${slug}`, { method: 'GET' });

  let article = null;
  if (response.ok) {
    article = await response.json();
  } else {
    console.error('Failed to fetch article:', response.status, response.statusText);
  }

  if (!article) {
    throw new Error('Article not found');
  }

  return {
    article: JSON.stringify({
      title: article.title,
      caption: article.caption,
      content: article.content,
      last_updated: article.updated_at,
      created_at: article.created_at,
      image_url: article.image_url
    })
  };
};
