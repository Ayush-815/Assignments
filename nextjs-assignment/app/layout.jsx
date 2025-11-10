import "../styles/styles.css";
import "./globals.css"; 

export const metadata = {
  title: "Next.js Data Fetching Assignment",
  description: "SSG, SSR, and ISR demo using JSONPlaceholder API",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <a href="/">Home</a>
            <a href="/ssg">SSG</a>
            <a href="/ssr">SSR</a>
            <a href="/isr">ISR</a>
          </nav>
        </header>
        <main className="container">{children}</main>
      </body>
    </html>
  );
}