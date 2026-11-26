import type { Metadata } from "next";
import { cookies } from "next/headers";
import { Pirata_One, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const pirata = Pirata_One({ subsets: ["latin"], weight: "400", variable: "--font-pirata" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta" });

export const metadata: Metadata = {
  title: "Kitchen Genie",
  description: "Learn to cook, one skill at a time.",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const saved = (await cookies()).get("theme")?.value;
  const theme = saved === "light" || saved === "dark" ? saved : undefined;

  return (
    <html
      lang="en-GB"
      data-theme={theme}
      className={`${pirata.variable} ${jakarta.variable}`}
    >
      <body className="bg-bg font-sans text-ink antialiased">{children}</body>
    </html>
  );
}