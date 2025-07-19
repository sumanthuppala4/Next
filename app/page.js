import Link from "next/link";
import { getPosts } from "@/lib/posts";
import { Suspense } from "react";
import Posts from "@/components/posts";

async function LatestPosts() {
  const latestPosts = await getPosts(2);
  console.log(latestPosts, "noPosts");
  return <Posts posts={latestPosts} />;
}

export default async function Home() {
  return (
    <>
      <div>
        <h1>Next Js</h1>
        <Link href={`/awesome`}> Awesome </Link> |
        <Link href={`/meals`}> Meals </Link>|<Link href={`/news`}> News </Link>|
        <Link href={`/shareMeal`}> Share Meal </Link>|
        <Link href={`/interceptedMeals`}> Intercepted Meals </Link>|
      </div>
      --------------Starting Project----------------
      <br />
      <br />
      <br />
      <h1>Welcome back!</h1>
      <p>Here's what you might've missed.</p>
      <section id="latest-posts">
        <Suspense fallback={<p>Loading recent posts...</p>}>
          <LatestPosts />
        </Suspense>
      </section>
    </>
  );
}
