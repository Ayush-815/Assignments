export const metadata = {
  title: "Ayush",
  description: "Parallel and Intercepting Routes demo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "sans-serif", margin: "20px" }}>
        <h1>Next.js Routing Assignment</h1>
        <nav style={{ marginBottom: "20px" }}>
          <a href="/">Home</a> |{" "}
          <a href="/dashboard">Dashboard</a> |{" "}
          <a href="/feed">Feed</a>
        </nav>
        <hr />
        {children}
      </body>
    </html>
  );
}
