export interface ArticleObj {
  url: string;
  urlToImage: string;
  title: string;
}

export interface ArticleProps {
  art: ArticleObj;
  key: string;
}

export interface RegisterFormData {
  email: string;
}
