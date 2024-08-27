import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="container">
      <header className="dashboard-header">
        <h1 className="text-display-2">Welcome to Midpilot</h1>
      </header>
      
      <main className="dashboard-content">
        <section className="dashboard-section">
          <h2 className="text-heading-1">Quick Links</h2>
          <div className="dashboard-grid">
            <Link href="/guides" className="dashboard-card">
              <h3 className="text-heading-2">Guides</h3>
            </Link>
            <Link href="/docs" className="dashboard-card">
              <h3 className="text-heading-2">Documentation</h3>
            </Link>
            <Link href="/api" className="dashboard-card">
              <h3 className="text-heading-2">API</h3>
            </Link>
            <Link href="/best-practices" className="dashboard-card">
              <h3 className="text-heading-2">Best Practices</h3>
            </Link>
          </div>
        </section>
      </main>
      
      <footer className="dashboard-footer">
        <Link href="/" className="btn btn-light">
          Home
        </Link>
      </footer>
    </div>
  );
}
