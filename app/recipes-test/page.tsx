import { Suspense } from "react";
import { createClient } from "@/lib/supabase/server";

async function RecipeList() {
  const supabase = await createClient();
  const { data, error } = await supabase.from("recipes").select("id, name, skill");

  if (error) return <p className="mt-4">Error: {error.message}</p>;

  return (
    <ul className="mt-4 space-y-2">
      {data.map((r) => (
        <li key={r.id} className="poster p-3">
          {r.name} ({r.skill})
        </li>
      ))}
    </ul>
  );
}

export default function RecipesTest() {
  return (
    <main className="mx-auto max-w-2xl p-4">
      <h1 className="font-display text-3xl">Recipes in Supabase</h1>
      <Suspense fallback={<p className="mt-4 text-mute">Loading recipes…</p>}>
        <RecipeList />
      </Suspense>
    </main>
  );
}