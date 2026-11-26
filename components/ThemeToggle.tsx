"use client";

export default function ThemeToggle() {
  function toggle() {
    const root = document.documentElement;
    const current =
      root.getAttribute("data-theme") ??
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    const next = current === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    document.cookie = `theme=${next}; path=/; max-age=31536000; samesite=lax`;
  }

  return (
    <button
      type="button"
      onClick={toggle}
      className="min-h-11 rounded-full border-2 border-line px-4 text-sm font-semibold text-ink hover:border-pri"
    >
      <span className="to-dark">Dark mode</span>
      <span className="to-light">Light mode</span>
    </button>
  );
}