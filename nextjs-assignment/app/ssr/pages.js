export const dynamic = "force-dynamic";

export default async function SSRPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });
  const users = await res.json();

  return (
    <div>
      <h1>Server Side Rendering (SSR)</h1>
      <p>This is SSR</p>
    </div>
  );
}