export default function DashboardLayout({
  analytics,
  settings,
}) {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <div style={{ flex: 1 }}>
        <h2> Analytics Section</h2>
        {analytics}
      </div>
      <div style={{ flex: 1 }}>
        <h2>Settings Section</h2>
        {settings}
      </div>
    </div>
  );
}
