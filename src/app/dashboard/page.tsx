import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="container">
      <div className="card start-hero">
        <p className="text-body-2 start-hero-intro">Welcome aboard!</p>
        <h1 className="text-display-2">
          Your Midpilot journey begins here
        </h1>
        <p className="text-body-1 hero-tagline">
          Get ready to explore our onboarding guides and documentation
        </p>
      </div>
      <section className="next-steps-section">
        <h2 className="text-heading-1">Coming Soon</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <h3 className="text-heading-2">Onboarding Guides</h3>
            <p className="text-body-3">Step-by-step tutorials to get you started</p>
          </div>
          <div className="feature-card">
            <h3 className="text-heading-2">Documentation</h3>
            <p className="text-body-3">Comprehensive resources for Midpilot features</p>
          </div>
          <div className="feature-card">
            <h3 className="text-heading-2">API References</h3>
            <p className="text-body-3">Detailed API documentation for developers</p>
          </div>
          <div className="feature-card">
            <h3 className="text-heading-2">Best Practices</h3>
            <p className="text-body-3">Tips and tricks to optimize your workflow</p>
          </div>
        </div>
      </section>
      <section className="cta-section">
        <h2 className="text-heading-1">Stay Tuned</h2>
        <p className="text-body-2">We&apos;re working hard to bring you the best resources. Check back soon!</p>
        <Link href="/" className="btn btn-dark btn-big">
          Return to Home
        </Link>
      </section>
    </div>
  );
}
