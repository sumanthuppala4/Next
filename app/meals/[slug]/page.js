import { getMeal } from "@/lib/meals";

const mealDetails = async ({ params }) => {
  let urlFirst = params.slug;

  const meal = await getMeal(urlFirst);

  return (
    <>
      {meal && (
        <div>
          {" "}
          Meal Details  Page Js<br />
          {meal.title}
        </div>
      )}
    </>
  );
};

export default mealDetails;
