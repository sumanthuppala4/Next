import { getUsers } from "@/lib/authenticate-user";

export default function Users() {
  const usersList = getUsers();

  return (
    <>
      {usersList.map((user) => (
        <div
          key={user.id}
          style={{
            marginBottom: "1rem",
            padding: "1rem",
            border: "1px solid #ccc",
          }}
        >
          {user.email}
          <br />
          {user.password}
        </div>
      ))}
    </>
  );
}
