import Link from "next/link";

export default function Home() {
  return (
    <div className="container px-4 py-8 mx-auto max-w-screen-xl">
      <div className="card hero text-center p-6 md:p-12">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 hero-title">
          Let&apos;s start your journey <br className="hidden md:inline" /> with Midpilot
        </h1>
        <p className="text-lg md:text-xl mb-6 md:mb-8 hero-tagline">
          Begin your onboarding process
        </p>

        <Link
          href="/dashboard"
          className="btn btn-light btn-small inline-block px-6 py-3 text-lg md:text-xl"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}
