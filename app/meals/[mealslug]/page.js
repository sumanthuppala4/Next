import { getMeal } from "@/lib/meals";
import Image from "next/image";

const mealDetailsComponent = async ({ params }) => {
  const meal = await getMeal(params.mealslug);

  return (
    <>
      {meal && (
        <div>
          {" "}
          Meal Details <br />
          {meal.title}
          <Image src={meal.image} alt={meal.title} fill/>
        </div>
      )}
    </>
  );
};

export default mealDetailsComponent;
