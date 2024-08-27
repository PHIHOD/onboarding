import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <div className="card hero">
        <p className="text-display-1 hero-title">
          Let&apos;s start your journey <br /> with Midpilot
        </p>
        <p className="text-body-1 hero-tagline">Begin your onboarding process</p>

        <Link
          href="/dashboard"
          className="btn btn-light btn-big"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}
