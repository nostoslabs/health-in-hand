import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { getAllPosts, getPostBySlug } from "@/lib/blog";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage(props: PageProps) {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="py-16">
      <Container>
        <div className="max-w-3xl mx-auto">
          {/* Article Header */}
          <header className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="secondary">{post.category}</Badge>
              <span className="text-sm text-muted-foreground">
                {format(new Date(post.date), "MMMM d, yyyy")}
              </span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
              {post.title}
            </h1>
            <p className="text-lg text-muted-foreground">{post.excerpt}</p>
            <div className="mt-4 text-sm text-muted-foreground">
              By {post.author}
            </div>
          </header>

          <Separator className="mb-8" />

          {/* Article Content */}
          <div className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-primary prose-a:text-primary prose-strong:text-foreground">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {post.content}
            </ReactMarkdown>
          </div>

          <Separator className="my-12" />

          {/* Article Footer */}
          <footer>
            <p className="text-sm text-muted-foreground text-center">
              Have questions about this topic? Call us at 256-482-2801 to
              schedule a consultation.
            </p>
          </footer>
        </div>
      </Container>
    </article>
  );
}
