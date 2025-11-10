import Link from "next/link";
export default function TeamPage() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Our Team</h1>
      <p>This is the nested About → Team page.</p>
      <Link href="/about">
          <button id="button">Go Back</button>
        </Link>
    </div>
  );
}
