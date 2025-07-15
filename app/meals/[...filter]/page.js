import { getMeal } from "@/lib/meals";
import MealTitle from "./title/page";
import MealOverview from "./overview/page";

const mealDetails = async ({ params }) => {
  let urlFirst = params.filter[0];
  let urlSecond = params.filter[1];

  const meal = await getMeal(urlFirst);

  return (
    <>
      {meal && (
        <div>
          {" "}
          Meal Details <br />
          {meal.title}
        </div>
      )}
      {urlSecond === "title" && <MealTitle title={meal.title} />}
      {urlSecond === "overview" && (
        <MealOverview overview={meal.instructions} />
      )}
    </>
  );
};

export default mealDetails;
