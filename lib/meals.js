import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

const db = sql("meals.db");

export function getMeals() {
  // throw new Error("Error fetching Data");
  return db.prepare("SELECT * FROM MEALS").all();
}

export function getMeal(slug) {
  // throw new Error("Error fetching Data");
  return db.prepare("SELECT * FROM MEALS where slug = ?").get(slug);
}

export function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  db.prepare(
    `INSERT INTO meals 
    (title, summary , instructions ,creator ,creator_email ,image ,slug )
    VALUES
    (
     @title,
       @summary,
        @instructions,
         @creator,
         @creator_email,
         @image,
         @slug
    )`
  ).run(meal);
}
