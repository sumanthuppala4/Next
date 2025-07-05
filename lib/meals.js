import sql from "better-sqlite3";

const db = sql("meals.db");

export function getMeals() {
  // throw new Error("Error fetching Data");
  return db.prepare("SELECT * FROM MEALS").all();
}

export function getMeal(slug) {
  // throw new Error("Error fetching Data");
  return db.prepare("SELECT * FROM MEALS where slug = ?").get(slug);
}
