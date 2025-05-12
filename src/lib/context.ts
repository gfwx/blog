import type { Tables } from '$lib/database.types';

export type Article = Tables<'articles'>;

export const articlesContextKey = 'articles';

export type ArticlesContext = {
  articles: Article[];
};
