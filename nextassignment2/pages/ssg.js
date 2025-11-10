import Link from "next/link";
import styles from "/styles/Home.module.css";
export async function getStaticProps() {
    console.log("SSG: getStaticProps ran at", new Date().toLocaleTimeString());
    const data = {
    message: "This page was built once — at build time!",
    generatedAt: new Date().toLocaleTimeString(),
  };

  return {
    props: { data },
  };
}

export default function SSG({ data }) {
  return (
   <div className={styles.Description}>
      <h1>Static Site Generation (SSG)</h1>
      <p>{data.message}</p>
      <p>Generated at: <b>{data.generatedAt}</b></p>
      <p>Reloading this page will not change the time.</p>
      <div className={styles.linkBox}>
        <Link href="/isr" className={styles.link}>
          Incremental Static Regeneration (ISR)
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
