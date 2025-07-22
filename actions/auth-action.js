"use server";

import { addUser } from "@/lib/authenticate-user";
import { redirect } from "next/navigation";

export async function userSignup(prevState, formData) {
  console.log(formData, "formData");
  const email = formData.get("email");
  const password = formData.get("password");
  console.log(email, password, "email and password");

  if (!email || !password) {
    return { error: "Email and password are required." };
  }
  // Simulate successful signup
  addUser(email, password);
  redirect("/training");
}
