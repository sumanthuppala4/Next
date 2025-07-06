import { getMeal } from "@/lib/meals";

const mealDetailsComponent = async ({ params }) => {
  const meal = await getMeal(params.mealslug);

  return (
    <>
      {meal && (
        <div>
          {" "}
          Meal Details <br />
          {meal.title} | {meal?.instructions}
        </div>
      )}
    </>
  );
};

export default mealDetailsComponent;
