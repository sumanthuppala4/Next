import Posts from "@/components/posts";
import { getPosts } from "@/lib/posts";
import { Suspense } from "react";

async function LatestPosts() {
  const latestPosts = await getPosts(2);
  return <Posts posts={latestPosts} />;
}

export default async function posts() {
  return (
    <div>
      <h1>Posts Page</h1>
      <p>This is the posts page content.</p>

      <Suspense fallback={<p>Loading recent posts...</p>}>
        <LatestPosts />
      </Suspense>
    </div>
  );
}
