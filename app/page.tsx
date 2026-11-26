import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

const MASTERY = 3;

const skills = [
  { name: "Dry-pan searing", cooks: 1 },
  { name: "Boiling and simmering", cooks: 0 },
  { name: "Knife basics", cooks: 0 },
];

export default function Page() {
  return (
    <>
      <header className="border-b-4 border-double border-line bg-card">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-3">
          <span className="font-display text-3xl text-pri">Kitchen Genie</span>
          <div className="flex items-center gap-2">
            <span className="hidden rounded-full border-2 border-line px-3 py-1 text-sm font-semibold text-mute sm:inline-block">
              Guest cook
            </span>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-6">
        <h1 className="font-display text-4xl leading-tight md:text-5xl">
          What’s on the galley menu today?
        </h1>

        <div className="mt-6 grid gap-6 lg:grid-cols-5">
          <section className="poster p-6 text-center lg:col-span-3">
            <p className="font-display text-5xl tracking-wide text-pri">WANTED</p>
            <p className="text-sm font-bold uppercase tracking-widest text-mute">
              for tonight’s dinner
            </p>
            <div className="mx-auto mt-4 flex aspect-[4/3] w-full max-w-sm items-center justify-center rounded border-2 border-line bg-bg text-mute">
              Dish photo
            </div>
            <h2 className="mt-4 font-display text-3xl">Crispy black bean quesadilla</h2>
            <p className="mt-1 text-mute">Skill to master: dry-pan searing</p>
            <ul className="mt-4 flex flex-wrap justify-center gap-2 text-sm font-semibold">
              <li className="rounded-full border border-line px-3 py-1">£1.15 a portion</li>
              <li className="rounded-full border border-line px-3 py-1">12 minutes</li>
              <li className="rounded-full border border-line px-3 py-1">1 pan</li>
            </ul>
            <Link
              href="/cook"
              className="mt-5 flex min-h-12 items-center justify-center rounded-md bg-pri px-5 font-bold text-onpri shadow-[0_3px_0_var(--ink)]"
            >
              Start cooking
            </Link>
          </section>

          <div className="space-y-6 lg:col-span-2">
            <section className="poster p-5">
              <h2 className="font-display text-2xl text-sea">Captain’s log</h2>
              <p className="mt-2 font-semibold">Crispy black bean quesadilla</p>
              <p className="mt-1 text-mute">
                Next time: turn the heat down a notch after the flip.
              </p>
            </section>

            <section className="poster p-5">
              <h2 className="font-display text-2xl text-sea">Provisions running low</h2>
              <p className="mt-2 font-semibold">Baby spinach</p>
              <p className="mt-1 text-mute">1 day left. Use it up soon.</p>
            </section>
          </div>
        </div>

        <div className="rope my-8" />

        <section>
          <h2 className="font-display text-3xl text-sea">Your sea chart</h2>
          <p className="mt-1 text-mute">
            Master a skill by cooking it {MASTERY} times, the last one on your own.
          </p>
          <ol className="route ml-4 mt-5 space-y-5 pl-6">
            {skills.map((s) => (
              <li key={s.name} className="relative">
                <span
                  aria-hidden="true"
                  className={`absolute -left-9 top-4 h-5 w-5 rounded-full border-4 border-card ${s.cooks > 0 ? "bg-pri" : "bg-line"
                    }`}
                />
                <div className="poster p-4">
                  <p className="font-semibold">{s.name}</p>
                  <p className="text-sm text-mute">
                    {s.cooks === 0 ? "Not started" : `${s.cooks} of ${MASTERY} cooks`}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>
      </main>
    </>
  );
}