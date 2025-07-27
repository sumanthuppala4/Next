import Link from "next/link";
import AuthForm from "@/components/auth-form";

export default async function Home({ searchParams }) {
  const mode = (await searchParams.mode) || "login";

  console.log(mode, "mode from home page");

  return (
    <>
      <div>
        <h1>Next Js</h1>
        <Link href={`/awesome`}> Awesome </Link> |
        <Link href={`/meals`}> Meals </Link>|<Link href={`/news`}> News </Link>|
        <Link href={`/shareMeal`}> Share Meal </Link>|
        <Link href={`/interceptedMeals`}> Intercepted Meals </Link>|
        <Link href={`/posts`}>Posts </Link>|<Link href={`/users`}>Users </Link>|
        <Link href={`/training`}>Training </Link>|
      </div>

      <br />
      <br />
      <br />
      <h1>Welcome back!</h1>
      <p>Here's what you might've missed.</p>

      <AuthForm mode={mode} />
    </>
  );
}
