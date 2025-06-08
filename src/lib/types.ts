import type { Tables } from "./database.types";

export type Article = Tables<"articles">
export type ArticleData = Tables<"article_data">
export type APIResponseSingle =
  Pick<Article, 'title' | 'caption' | 'updated_at' |
    'created_at' | 'slug'>
  & Pick<ArticleData, 'content' | 'image_url'>


export type ArticleDetailData = {
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
