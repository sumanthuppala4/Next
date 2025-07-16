import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <h1>Next Js</h1>
      <Link href={`/awesome`}> Awesome </Link> |
      <Link href={`/meals`}> Meals </Link>|<Link href={`/news`}> News </Link>|
      <Link href={`/shareMeal`}> Share Meal </Link>|
      <Link href={`/interceptedMeals`}> Intercepted Meals </Link>|
    </div>
  );
}
