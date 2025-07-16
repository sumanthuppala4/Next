import MealOverview from "./overview/page";
import MealTitle from "./title/page";

const mealLayout = ({ children, params }) => {
  return (
    <>
      <div>
        <h1>Meal Layout</h1> <br />
        <br />
        <br />
        <br />
        <br />
        <div>
          <a href={`/meals/${params.slug}/title`}>Title</a> |
          <a href={`/meals/${params.slug}/overview`}>overview</a>
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
        {children}
        <MealOverview/>
        <MealTitle/>
      </div>
    </>
  );
};

export default mealLayout;
