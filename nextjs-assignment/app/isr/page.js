export const revalidate = 10;

export default async function ISRPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/comments");
  const comments = await res.json();

  return (
    <div>
      <h1>Incremental Static Regeneration (ISR)</h1>
      <p>This is IRS</p>
    </div>
  );
}