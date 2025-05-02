export type Image = {
  url: string;
  alt: string;
}

export type ArticleData = {
  heading: string | null;
  subheading: string | null;
  quotation: string | null;
  paragraph: string | null;
  image: Image | null;
}

export type ArticleCollection = {
  created_date: string;
  description: string;
  id: string;
  title: string;
  data: ArticleData[];
}
