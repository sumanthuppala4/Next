"use server";

import { createAuthSession, deleteAuthSession } from "@/lib/auth-lucia";
import { addUser, getUserByEmail } from "@/lib/authenticate-user";
import { hashUserPassword, verifyPassword } from "@/lib/hash";
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
    console.log(id, "sumanth Row Id");
    await createAuthSession(id);
  } catch (error) {
    console.error("Error adding user:", error);
    return { error: "Failed to create user. Email Already Exists" };
  }
  redirect("/training");
}

export async function userLogin(prevState, formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  if (!email || !password) {
    return { error: "Email and password are required." };
  }

  const user = await getUserByEmail(email);
  if (!user) {
    return { error: "User not found. Email Not found in records." };
  }

  const isPasswordValid = await verifyPassword(user.password, password);
  if (!isPasswordValid) {
    return { error: "Entered password is incorrect." };
  }

  await createAuthSession(user.id);
  redirect("/training");
}

export async function auth(mode, prevState, formData) {
  if (mode === "login") {
    return userLogin(prevState, formData);
  } else if (mode === "signup") {
    return userSignup(prevState, formData);
  } else {
    return { error: "Invalid authentication mode." };
  }
}


export async function userLogout() {
  const { error } = await deleteAuthSession();
  if (error) {
    return { error: "Failed to log out." };
  }
  redirect("/");
}
