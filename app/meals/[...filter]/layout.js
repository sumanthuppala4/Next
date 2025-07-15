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
          <a href={`/meals/${params.filter[0]}/title`}>Title</a> |
          <a href={`/meals/${params.filter[0]}/overview`}>overview</a>
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
        {children}
      </div>
    </>
  );
};

export default mealLayout;
