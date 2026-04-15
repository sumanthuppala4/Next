"use client";

import {
  addCourseHelperFunc,
  deleteCourseFromCourses,
  updateSlectedCourse,
} from "@/lib/courses";
import { useState } from "react";

const CoursesList = ({ coursesList = [] }) => {
  const [inputValue, setInputValue] = useState("");
  const [mode, setMode] = useState({ mode: "new" });

  const handleDelete = (id) => {
    deleteCourseFromCourses(id);
  };

  const hanldeAddOrEdit = () => {
    if (inputValue === "") {
      return;
    }

    if (mode.mode === "new") {
      addCourseHelperFunc(inputValue);
    } else {
      updateSlectedCourse(mode.id, inputValue);
      setMode({ mode: "new" });
    }

    setInputValue("");
  };

  return (
    <>
      <input
        type="text"
        placeholder="Enter Course Name"
        name="course"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      -----
      <button onClick={hanldeAddOrEdit}>Add Or Edit Course </button>
      <br />
      <br />
      <br />
      {(coursesList || []).map(({ id, course_name }) => (
        <div key={id}>
          <p>
            {course_name} ------------- {id}----------
            <button
              onClick={() => {
                handleDelete(id);
              }}
            >
              Delete
            </button>
            ---------
            <button
              onClick={() => {
                setInputValue(course_name);
                setMode({ mode: "edit", id: id });
              }}
            >
              Edit
            </button>
          </p>
        </div>
      ))}
    </>
  );
};

export default CoursesList;
