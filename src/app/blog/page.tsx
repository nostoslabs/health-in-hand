import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { BlogPostCard } from "@/components/blog/BlogPostCard";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Explore natural health topics, holistic wellness insights, and educational articles about naturopathic medicine and therapies.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="py-16">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
            Health & Wellness Blog
          </h1>
          <p className="text-xl text-muted-foreground mb-12">
            Explore natural health topics, holistic wellness insights, and
            educational articles about the therapies and services we offer at
            Health in Hand.
          </p>

          {posts.length === 0 ? (
            <p className="text-muted-foreground text-center py-12">
              No blog posts available yet. Check back soon!
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {posts.map((post) => (
                <BlogPostCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}
