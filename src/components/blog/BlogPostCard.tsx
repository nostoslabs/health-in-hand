import Link from "next/link";
import { format } from "date-fns";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { BlogPost } from "@/types/blog";

interface BlogPostCardProps {
  post: BlogPost;
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
        <CardHeader>
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="secondary">{post.category}</Badge>
            <span className="text-xs text-muted-foreground">
              {format(new Date(post.date), "MMMM d, yyyy")}
            </span>
          </div>
          <CardTitle className="text-xl line-clamp-2">{post.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground line-clamp-3">
            {post.excerpt}
          </p>
          <p className="text-sm font-medium text-primary mt-4">Read more →</p>
        </CardContent>
      </Card>
    </Link>
  );
}
