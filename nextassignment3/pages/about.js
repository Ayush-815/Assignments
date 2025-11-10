import Head from "next/head";
import Link from "next/link";

export default function About() {
  return (
    <>
      <Head>
        <title>AYUHS INDEX</title>
      </Head>

      <div className="page">
        <h1>About Us</h1>
        <p>This is the about us page.</p>
        <Link href="/">
          <button id="button">Go Back Home</button>
        </Link>
        <Link href="/about/team">
          <button id="button">Meet Our Team</button>
        </Link>
        <Link href="/about/team">
          <button id="button">Department</button>
        </Link>
      </div>
    </>
  );
}
