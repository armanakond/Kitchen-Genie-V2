import type { Metadata } from "next";
import { Pirata_One, Plus_Jakarta_Sans } from "next/font/google";
import InlineScript from "@/components/InlineScripts";
import "./globals.css";

const pirata = Pirata_One({ subsets: ["latin"], weight: "400", variable: "--font-pirata" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta" });

export const metadata: Metadata = {
  title: "Kitchen Genie",
  description: "Learn to cook, one skill at a time.",
};

const themeScript = `try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark")document.documentElement.setAttribute("data-theme",t)}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en-GB"
      suppressHydrationWarning
      className={`${pirata.variable} ${jakarta.variable}`}
    >
      <head>
        <InlineScript html={themeScript} />
      </head>
      <body className="bg-bg font-sans text-ink antialiased">{children}</body>
    </html>
  );
}