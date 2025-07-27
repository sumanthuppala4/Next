import { Lucia } from "lucia";
import { BetterSqlite3Adapter } from "@lucia-auth/adapter-sqlite";
import { cookies } from "next/headers";
import db from "./authenticate-user";

const adapter = new BetterSqlite3Adapter(db, {
  user: "users",
  session: "sessions",
});

const lucia = new Lucia(adapter, {
  sessionCookie: { expires: false, attributes: { secure: false } },
});

export async function createAuthSession(userId) {
  const session = await lucia.createSession(userId, {});
  console.log(session);
  const sessionCookie = lucia.createSessionCookie(session.id);
  console.log(sessionCookie);
  (await cookies()).set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  );
}

export async function verifyAuthSession() {
  console.log(lucia.sessionCookieName);

  const sessionCookie = (await cookies()).get(lucia.sessionCookieName);

  console.log(sessionCookie, "sessionCookie");

  if (!sessionCookie) {
    return { user: null, session: null };
  }
  const sesssionId = sessionCookie.value;

  if (!sesssionId) {
    return { user: null, session: null };
  }
  console.log(sesssionId, "sesssionId");

  const result = await lucia.validateSession(sesssionId);

  console.log(result, "result");
  try {
    if (result.session && result.session.fresh) {
      const sessionCookie = lucia.createSessionCookie(result.session.id);
      (await cookies()).set(
        sessionCookie.name,
        sessionCookie.value,
        sessionCookie.attributes
      );
    }
    if (!result.session) {
      const sessionCookie = lucia.createBlankSessionCookie();
      (await cookies()).set(
        sessionCookie.name,
        sessionCookie.value,
        sessionCookie.attributes
      );
    }
  } catch (error) {
    console.error("Error validating session:", error);
  }
  return result;
}
