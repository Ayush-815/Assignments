export const dynamic = "force-static";

export default async function SSGPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return (
    <div>
      <h1>Static Site Generation (SSG)</h1>
      <p>This is SSG</p>
    </div>
  );
}