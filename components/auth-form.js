"use client";

import { userSignup } from "@/actions/auth-action";
import Link from "next/link";
import { useActionState } from "react";

export default function AuthForm() {
  const [formStatus, formAction, isPending] = useActionState(userSignup, {});
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
        <button type="submit">Create Account</button>
      </p>
      <p>
        <Link href="/">Login with existing account.</Link>
      </p>
      {formStatus.error && <p className="error">{formStatus.error}</p>}
    </form>
  );
}
