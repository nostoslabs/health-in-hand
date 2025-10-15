import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { BlogPost, BlogPostFrontmatter } from "@/types/blog";

const postsDirectory = path.join(process.cwd(), "content/blog");

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPosts = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      const frontmatter = data as BlogPostFrontmatter;

      return {
        slug,
        title: frontmatter.title,
        date: frontmatter.date,
        author: frontmatter.author,
        category: frontmatter.category,
        excerpt: frontmatter.excerpt,
        content,
      };
    });

  return allPosts.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    const frontmatter = data as BlogPostFrontmatter;

    return {
      slug,
      title: frontmatter.title,
      date: frontmatter.date,
      author: frontmatter.author,
      category: frontmatter.category,
      excerpt: frontmatter.excerpt,
      content,
    };
  } catch {
    return null;
  }
}

export function getPostsByCategory(category: string): BlogPost[] {
  const allPosts = getAllPosts();
  return allPosts.filter((post) => post.category === category);
}
