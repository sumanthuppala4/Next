"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

export async function shareMeal(formData) {
  console.log(formData, "formdata");

  const meal = {
    title: formData?.get("title"),
    summary: formData?.get("summary"),
    creator: formData.get("name"),
    instructions: formData.get("instructions"),
    image: formData.get("name"),
    creator_email: formData.get("email"),
  };

  await saveMeal(meal);
  redirect("/meals");
}
