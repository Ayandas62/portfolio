"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const skills = [
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "REST APIs",
  "Postman",
  "GitHub",
];

const skillIcons: Record<string, string> = {
  React: "fa-brands fa-react",
  "Next.js": "fa-solid fa-n",
  "Node.js": "fa-brands fa-node-js",
  Express: "fa-solid fa-server",
  MongoDB: "fa-solid fa-leaf",
  HTML: "fa-brands fa-html5",
  CSS: "fa-brands fa-css3-alt",
  "Tailwind CSS": "fa-solid fa-wind",
  "REST APIs": "fa-solid fa-network-wired",
  Postman: "fa-solid fa-paper-plane",
  GitHub: "fa-brands fa-github",
};

const projects = [
  {
    no: "01",
    title: "CRM Platform",
    type: "Customer management",
    year: "2026",
    color: "from-[#48d7ff] to-[#3178ff]",
    desc: "A centralized CRM platform that helps teams organize customer data, manage relationships, track interactions, and keep day-to-day workflows clear and efficient.",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    no: "02",
    title: "Shopwave",
    type: "Full-stack commerce",
    year: "2026",
    color: "from-[#c6ff3d] to-[#56d364]",
    desc: "A fast, conversion-focused storefront with secure checkout, inventory management, and a frictionless admin experience.",
    tags: ["Next.js", "MongoDB", "Stripe"],
  },
  {
    no: "03",
    title: "Pulseboard",
    type: "Realtime workspace",
    year: "2025",
    color: "from-[#b8a5ff] to-[#6b5cff]",
    desc: "A collaborative productivity dashboard built for distributed teams, live updates, and decisions that move quickly.",
    tags: ["React", "Node.js", "Socket.io"],
  },
  {
    no: "04",
    title: "Nomad Notes",
    type: "Travel platform",
    year: "2025",
    color: "from-[#ff9f68] to-[#ff5c35]",
    desc: "A visual travel journal for discovering places, collecting stories, and turning scattered memories into beautiful maps.",
    tags: ["Next.js", "Express", "REST API"],
  },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () =>
      setTime(
        new Intl.DateTimeFormat("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
          timeZone: "Asia/Kolkata",
        }).format(new Date()),
      );
    tick();
    const timer = setInterval(tick, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="grain overflow-hidden">
      <nav className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-ink/80 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 md:px-10">
          <a
            href="#home"
            className="font-mono text-sm font-bold tracking-tight"
          >
            <span className="text-acid">&lt;</span>AM
            <span className="text-acid">/&gt;</span>
          </a>
          <div className="hidden items-center gap-8 font-mono text-[11px] uppercase tracking-[.18em] md:flex">
            <a className="transition hover:text-acid" href="#work">
              Work
            </a>
            <a className="transition hover:text-acid" href="#about">
              About
            </a>
            <a className="transition hover:text-acid" href="#contact">
              Contact
            </a>
          </div>
          <div className="hidden items-center gap-3 md:flex">
            <span className="h-2 w-2 rounded-full bg-acid shadow-[0_0_14px_#c6ff3d]" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-fog">
              Available for work
            </span>
          </div>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="font-mono text-xs uppercase md:hidden"
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>
        {menuOpen && (
          <div className="border-t border-white/10 bg-ink px-5 py-6 font-mono uppercase md:hidden">
            <a
              onClick={() => setMenuOpen(false)}
              className="block py-3"
              href="#work"
            >
              Work
            </a>
            <a
              onClick={() => setMenuOpen(false)}
              className="block py-3"
              href="#about"
            >
              About
            </a>
            <a
              onClick={() => setMenuOpen(false)}
              className="block py-3"
              href="#contact"
            >
              Contact
            </a>
          </div>
        )}
      </nav>

      <section
        id="home"
        className="grid-bg relative flex min-h-screen items-end border-b border-white/10 px-5 pb-12 pt-32 md:px-10 md:pb-16"
      >
        <div className="absolute right-[8%] top-[19%] hidden h-44 w-44 rotate-6 border border-acid/50 p-3 lg:block float">
          <div className="flex h-full flex-col justify-between bg-acid p-4 text-ink">
            <i className="fa-solid fa-code text-4xl" />
            <p className="font-mono text-[10px] font-bold uppercase leading-relaxed">
              Design-minded
              <br />
              code-driven
              <br />
              human
            </p>
          </div>
        </div>
        <div className="mx-auto w-full max-w-[1440px]">
          <div className="mb-8 flex items-center justify-between font-mono text-[10px] uppercase tracking-[.18em] text-fog">
            <span>Full-stack developer / India</span>
            <span>{time} IST</span>
          </div>
          <h1 className="max-w-6xl text-[18vw] font-bold uppercase leading-[.72] tracking-[-.075em] sm:text-[14vw] lg:text-[10.5rem]">
            I build
            <br />
            <span className="outline-text">digital</span>
            <br />
            <span className="text-acid">things.</span>
          </h1>
          <div className="mt-10 flex flex-col items-start justify-between gap-8 border-t border-white/20 pt-6 md:flex-row md:items-end">
            <p className="max-w-md text-lg leading-relaxed text-fog md:text-xl">
              I turn ambitious ideas into fast, expressive, and scalable web
              experiences—end to end.
            </p>
            <a
              href="#work"
              className="group flex h-20 w-20 items-center justify-center rounded-full border border-white/30 text-2xl transition hover:rotate-45 hover:border-acid hover:bg-acid hover:text-ink"
            >
              <Arrow />
            </a>
          </div>
        </div>
      </section>

      <div className="overflow-hidden border-b border-white/10 bg-acid py-4 text-ink">
        <div className="marquee flex w-max whitespace-nowrap font-mono text-sm font-bold uppercase tracking-widest">
          {[...skills, ...skills].map((s, i) => (
            <span key={i}>
              {s}
              <span className="mx-6">✦</span>
            </span>
          ))}
        </div>
      </div>

      <section id="work" className="px-5 py-24 md:px-10 md:py-36">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-16 flex items-end justify-between">
            <div>
              <p className="mb-4 font-mono text-xs uppercase tracking-[.2em] text-acid">
                01 / Selected work
              </p>
              <h2 className="text-5xl font-bold uppercase tracking-[-.05em] md:text-8xl">
                Built to
                <br />
                matter.
              </h2>
            </div>
            <p className="hidden max-w-xs text-right text-sm leading-relaxed text-fog md:block">
              A few projects where clean engineering meets sharp product
              thinking.
            </p>
          </div>
          <div className="border-t border-white/20">
            {projects.map((p) => (
              <article
                key={p.no}
                className="project-card group relative grid gap-6 overflow-hidden border-b border-white/20 py-10 md:grid-cols-[80px_1.2fr_1fr_80px] md:items-center"
              >
                <div className="project-fill absolute inset-0 origin-left scale-x-0 bg-white/[.025] transition-transform duration-500" />
                <span className="project-number relative font-mono text-sm text-fog transition">
                  {p.no}
                </span>
                <div className="relative">
                  <span
                    className={`mb-4 inline-block rounded-full bg-gradient-to-r ${p.color} px-3 py-1 font-mono text-[9px] font-bold uppercase tracking-wider text-ink`}
                  >
                    {p.type}
                  </span>
                  <h3 className="text-4xl font-bold uppercase tracking-[-.04em] md:text-6xl">
                    {p.title}
                  </h3>
                </div>
                <div className="relative">
                  <p className="mb-5 max-w-md leading-relaxed text-fog">
                    {p.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/20 px-3 py-1 font-mono text-[9px] uppercase"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="project-arrow relative text-right text-3xl transition-transform duration-300">
                  <Arrow />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="about"
        className="grid-bg border-y border-white/10 px-5 py-24 md:px-10 md:py-36"
      >
        <div className="mx-auto grid max-w-[1440px] gap-16 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="mb-5 font-mono text-xs uppercase tracking-[.2em] text-acid">
              02 / About me
            </p>
            <div className="relative inline-block">
              <div className="relative h-72 w-64 overflow-hidden border border-white/20 bg-[#141814] md:h-96 md:w-80">
                <Image
                  src="/SAVE_20260331_114719.jpg.jpeg"
                  alt="Ayan Kumar Das"
                  fill
                  sizes="(min-width: 768px) 320px, 256px"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-acid px-5 py-3 font-mono text-xs font-bold uppercase text-ink rotate-[-4deg]">
                Based in India
              </div>
            </div>
          </div>
          <div className="lg:pt-12">
            <h2 className="mb-10 text-4xl font-bold leading-tight tracking-[-.04em] md:text-6xl">
              I care about the details{" "}
              <span className="text-fog">
                that make products feel effortless.
              </span>
            </h2>
            <div className="grid gap-8 text-fog md:grid-cols-2">
              <p className="leading-relaxed">
                I’m a full-stack developer focused on the MERN ecosystem. From
                an empty canvas to a deployed product, I build robust
                experiences that look good, load fast, and make sense.
              </p>
              <p className="leading-relaxed">
                When I’m not shipping features, I’m exploring new tools,
                refining interfaces, or figuring out why one tiny CSS rule has
                declared war on the entire layout.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-3 border-y border-white/20 py-7">
              <div>
                <strong className="block text-3xl text-acid md:text-5xl">
                  2+
                </strong>
                <span className="font-mono text-[9px] uppercase tracking-wider text-fog">
                  Years coding
                </span>
              </div>
              <div>
                <strong className="block text-3xl text-acid md:text-5xl">
                  15+
                </strong>
                <span className="font-mono text-[9px] uppercase tracking-wider text-fog">
                  Projects built
                </span>
              </div>
              <div>
                <strong className="block text-3xl text-acid md:text-5xl">
                  100%
                </strong>
                <span className="font-mono text-[9px] uppercase tracking-wider text-fog">
                  Curious
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-24 md:px-10 md:py-36">
        <div className="mx-auto max-w-[1440px]">
          <p className="mb-10 font-mono text-xs uppercase tracking-[.2em] text-acid">
            03 / My toolkit
          </p>
          <div className="grid border-l border-t border-white/20 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((s, i) => (
              <div
                key={s}
                className="group flex min-h-36 flex-col justify-between border-b border-r border-white/20 p-5 transition hover:bg-acid hover:text-ink"
              >
                <div className="flex items-start justify-between">
                  <i
                    className={`${skillIcons[s]} text-3xl text-acid transition-colors group-hover:text-ink`}
                    aria-hidden="true"
                  />
                  <span className="font-mono text-[10px] opacity-50">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <span className="text-xl font-bold">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer
        id="contact"
        className="relative overflow-hidden border-t border-white/10 bg-acid px-5 pb-8 pt-24 text-ink md:px-10 md:pt-36"
      >
        <div className="mx-auto max-w-[1440px]">
          <p className="mb-6 font-mono text-xs font-bold uppercase tracking-[.2em]">
            Have a project in mind?
          </p>
          <h2 className="max-w-5xl text-6xl font-bold uppercase leading-[.85] tracking-[-.065em] md:text-9xl">
            Let’s make
            <br />
            it real.
          </h2>
          <a
            href="mailto:ayandas6234@gmail.com"
            className="mt-12 inline-flex items-center gap-4 border-b-2 border-ink pb-2 text-xl font-bold transition hover:gap-7 md:text-3xl"
          >
            ayandas6234@gmail.com <Arrow />
          </a>
          <div className="mt-28 flex flex-col justify-between gap-6 border-t border-ink/30 pt-6 font-mono text-[10px] font-bold uppercase tracking-wider md:flex-row">
            <span>© 2026 Ayan Kumar Das</span>
            <div className="flex gap-6">
              <a
                className="hover:underline"
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                className="hover:underline"
                href="https://www.linkedin.com/in/ayan-kumar-das-developer/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a className="hover:underline" href="#home">
                Back to top ↑
              </a>
            </div>
            <span>Designed & coded with intent</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
