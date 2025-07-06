import NewsFooterComponent from "./@footer/page";
import NewsHeaderComponent from "./@header/page";

const newsLayoutComponent = ({}) => {
  return (
    <div>
      <h1>Parallel Routing</h1> <br /> <br />
      <NewsHeaderComponent />
      <NewsFooterComponent />
    </div>
  );
};

export default newsLayoutComponent;
