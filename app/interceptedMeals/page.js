import Link from "next/link";

const IntercepetedOuter = () => {
  return (
    <>
      <h1>Intercepted Example Outer Component</h1>
      <Link href={`/interceptedMeals/meal`}> Meal </Link>{" "}
    </>
  );
};

export default IntercepetedOuter;
