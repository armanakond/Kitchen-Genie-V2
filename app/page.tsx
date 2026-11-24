import Link from "next/link";

const skills = ["Dry-pan searing", "Boiling and simmering", "Knife basics"];

export default function Page() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-6">
      <p className="font-display text-lg font-extrabold text-pri">Kitchen Genie</p>
      <h1 className="mt-1 font-display text-3xl font-bold">What are we cooking today?</h1>

      <section className="mt-6 rounded-2xl border border-line bg-card p-5">
        <p className="text-sm font-semibold text-mute">Up next</p>
        <h2 className="mt-1 font-display text-2xl font-bold">Dry-pan searing</h2>
        <p className="mt-1 text-mute">Crispy black bean quesadilla</p>
        <Link
          href="/cook"
          className="mt-5 flex min-h-12 items-center justify-center rounded-xl bg-pri px-5 font-bold text-onpri"
        >
          Start cooking
        </Link>
      </section>

      <section className="mt-8">
        <h2 className="font-display text-xl font-bold">Your skills</h2>
        <ul className="mt-3 space-y-3">
          {skills.map((name) => (
            <li key={name} className="rounded-2xl border border-line bg-card p-4">
              <p className="font-semibold">{name}</p>
              <p className="text-sm text-mute">Not started</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}