"use client";
import { useRouter, useParams } from "next/navigation";

export default function InterceptedPost() {
  const router = useRouter();
  const { id } = useParams();

  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        background: "white",
        border: "2px solid black",
        padding: "20px",
        zIndex: 1000,
      }}
    >
      <h2>🪄 Intercepted Post #{id}</h2>
      <p>This is opened as a modal on top of Feed!</p>
      <button onClick={() => router.back()}>Close</button>
    </div>
  );
}