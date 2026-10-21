import { EasterEggs } from "@/components/easter-eggs/EasterEggs";
import { Graph } from "@/components/graph/Graph";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { About } from "@/components/sections/About";
import { Certifications } from "@/components/sections/Certifications";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { InitialCommit } from "@/components/sections/InitialCommit";
import { Projects } from "@/components/sections/Projects";
import { ToastProvider } from "@/components/Toast";

// The page reads top to bottom like `git log --graph`: newest commit first, initial commit last.
export default function Home() {
  return (
    <ToastProvider>
      <Header />

      <main className="wrap">
        <Graph>
          <Hero />
          <About />
          <Projects />
          <Certifications />
          <Contact />
          <InitialCommit />
        </Graph>
      </main>

      <Footer />
      <EasterEggs />
    </ToastProvider>
  );
}
