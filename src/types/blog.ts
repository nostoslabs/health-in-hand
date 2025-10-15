export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  category: string;
  excerpt: string;
  content: string;
}

export interface BlogPostFrontmatter {
  title: string;
  date: string;
  author: string;
  category: string;
  excerpt: string;
  slug: string;
}
