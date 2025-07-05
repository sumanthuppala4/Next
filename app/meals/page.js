import { getMeals } from "@/lib/meals";
import Link from "next/link";

const mealsComponent = async () => {
  const meals = await getMeals();

  console.log(meals);

  return (
    <>
      {meals.map((mealItem, index) => (
        <div key={index}>
          {mealItem.title}
          <button>
            <Link href={`/meals/${mealItem.slug}`}> {mealItem.slug} </Link>{" "}
            <br />
          </button>
        </div>
      ))}
    </>
  );
};

export default mealsComponent;
