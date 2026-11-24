import Link from "next/link";

export default function CookPage() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-6">
      <h1 className="font-display text-3xl font-bold">Cook</h1>
      <p className="mt-2 text-mute">The step-by-step cook page is coming next.</p>
      <Link href="/" className="mt-4 inline-block min-h-11 py-2 font-bold text-pri underline">
        Back to home
      </Link>
    </main>
  );
}