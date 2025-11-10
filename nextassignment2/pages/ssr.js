import Link from "next/link";
import styles from "/styles/Home.module.css";
export async function getServerSideProps() {
  console.log("SSR: getServerSideProps ran at", new Date().toLocaleTimeString());
  const data = {
    message: "This page was rendered on the server — every time you request it!",
    generatedAt: new Date().toLocaleTimeString(),
  };

  return {
    props: { data },
  };
}

export default function SSR({ data }) {
  return (
    <div className={styles.Description}>
      <h1>Server-Side Rendering (SSR)</h1>
      <p>{data.message}</p>
      <p>Generated at: <b>{data.generatedAt}</b></p>
      <p>Reload the page — notice the time updates each refresh.</p>
      <Link href="/ssg" className={styles.link}>
          Static Site Generation (SSG)
        </Link>
        <Link href="/isr" className={styles.link}>
          Incremental Static Regeneration (ISR)
        </Link>
        <Link href="/" className={styles.link}>
          HomePage
        </Link>
    </div>
  );
}
