import Link from "next/link";
import styles from "/styles/Home.module.css";
export async function getStaticProps() {
console.log("ISR: getStaticProps ran at", new Date().toLocaleTimeString());
  const data = {
    message:
      "This page uses ISR — it is static but regenerates in the background every 7 seconds!",
    generatedAt: new Date().toLocaleTimeString(),
  };

  return {
    props: { data },
    revalidate: 7,
  };
}

export default function ISR({ data }) {
  return (
    <div className={styles.Description}>
      <h1>Incremental Static Regeneration (ISR)</h1>
      <p>{data.message}</p>
      <p>Generated at: <b>{data.generatedAt}</b></p>
      <p>Refresh after interval shows new version</p>
    <div className={styles.linkBox}>
        <Link href="/ssg" className={styles.link}>
          Static Site Generation (SSG)
        </Link>
        <Link href="/ssr" className={styles.link}>
          Server-Side Rendering (SSR)
        </Link>
        <Link href="/" className={styles.link}>
          HomePage
        </Link>
      </div>
      </div>
  );
}
