"use server";

import { createAuthSession } from "@/lib/auth-lucia";
import { addUser } from "@/lib/authenticate-user";
import { hashUserPassword } from "@/lib/hash";
import { redirect } from "next/navigation";

export async function userSignup(prevState, formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  if (!email || !password) {
    return { error: "Email and password are required." };
  }
  // Simulate successful signup
  const hashedPassword = hashUserPassword(password);

  try {
    const id = await addUser(email, hashedPassword);
    console.log(id,"sumanth Row Id")
    await createAuthSession(id);
  } catch (error) {
    console.error("Error adding user:", error);
    return { error: "Failed to create user. Email Already Exists" };
  }
  redirect("/users");
}
