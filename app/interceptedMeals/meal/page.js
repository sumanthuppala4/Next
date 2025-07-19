import Link from "next/link";

const NormalMealDetails = ({}) => {
  return (
    <div>
      <h1>Normal Meal Details Component With Link </h1>
      <Link href={`/interceptedMeals/meal/title`}> Title </Link>{" "}
    </div>
  );
};

export default NormalMealDetails;
