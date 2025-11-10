import Link from "next/link";
import styles from "/styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Next.js Rendering Methods</h1>
      <div className={styles.linkBox}>
        <Link href="/ssg" className={styles.link}>
          Static Site Generation (SSG)
        </Link>
        <Link href="/ssr" className={styles.link}>
          Server-Side Rendering (SSR)
        </Link>
        <Link href="/isr" className={styles.link}>
          Incremental Static Regeneration (ISR)
        </Link>
      </div>
      <p className={styles.footer}>
        Click a link to see how each rendering method behaves.
      </p>
    </div>
  );
}
