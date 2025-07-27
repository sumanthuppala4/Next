"use client";

import { auth } from "@/actions/auth-action";
import Link from "next/link";
import { useActionState } from "react";

export default function AuthForm({ mode }) {
  const [formStatus, formAction, isPending] = useActionState(
    auth.bind(null, mode),
    {}
  );
  return (
    <form id="auth-form" action={formAction}>
      <div>
        <img src="/images/auth-icon.jpg" alt="A lock icon" />
      </div>
      <p>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
      </p>
      <p>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
      </p>
      <p>
        <button type="submit">
          {mode === "login" ? "Login" : "Create Account"}
        </button>
      </p>
      <p>
        {mode === "login" ? (
          <Link href="?mode=signup">Create a New Account</Link>
        ) : (
          <Link href="?mode=login">Login with Existing Account</Link>
        )}
      </p>
      {formStatus.error && <p className="error">{formStatus.error}</p>}
    </form>
  );
}
