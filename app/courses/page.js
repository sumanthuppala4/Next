import CoursesList from "@/components/courses";
import { getCoursesList } from "@/lib/courses";

const coursesFunc = async () => {
  const coursesList = await getCoursesList();

  return (
    <>
      <h1>Courses</h1>

      <br />
      <br />
      <br />
      <CoursesList coursesList={coursesList} />
    </>
  );
};

export default coursesFunc;
