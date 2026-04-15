"use server";

import sql from "better-sqlite3";
import { revalidatePath } from "next/cache";

const db = new sql("courses.db");

function initDb() {
  console.log("Initializing courses database");

  db.exec(`
    CREATE TABLE IF NOT EXISTS courses (
      id INTEGER PRIMARY KEY, 
      course_name TEXT
    )`);
}

initDb();

export async function getCoursesList() {
  console.log("Fetching courses from db");
  return db.prepare("SELECT * FROM courses").all();
}

async function addCourseToList(courseName) {
  db.prepare("INSERT INTO courses (course_name) VALUES (?)").run(courseName);
  revalidatePath("/courses");
}

export async function deleteCourseFromCourses(id) {
  db.prepare("DELETE FROM  courses WHERE id =(?)").run(id);
  revalidatePath("/courses");
}

export async function addCourseHelperFunc(course) {
  addCourseToList(course);
}

export async function updateSlectedCourse(id, value) {
  db.prepare( `UPDATE courses SET course_name = (?) WHERE id=(?)`).run(value, id);
  revalidatePath("/courses");
}
