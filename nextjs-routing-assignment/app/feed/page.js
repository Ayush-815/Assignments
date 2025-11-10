"use client";
import Link from "next/link";

const posts = [
  { id: 1, title: "Learning Next.js" },
  { id: 2, title: "Understanding Routing" },
  { id: 3, title: "Using App Router" },
];

export default function FeedPage() {
  return (
    <div>
      <h2>📰 Feed Page</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/feed/post/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
      <p>Click a post — it’ll open intercepted as a modal!</p>
    </div>
  );
}
