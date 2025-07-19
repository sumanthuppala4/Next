import Link from "next/link";

export default function NewPostLayout({ children }) {
  return (
    <div style={{ padding: "20px" }}>
      Text Coming from New Post Layout
      <br />
      <br />
      {children}
    </div>
  );
}
