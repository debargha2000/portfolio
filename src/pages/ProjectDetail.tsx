import { useEffect } from "react";
import { useDocumentMeta } from "../hooks/useDocumentMeta";
import { useParams, Link } from "react-router-dom";
import { getProject, getNextProject, getPrevProject } from "../data/projects";
import { type CaseBlock } from "../data/types";
import { CharReveal, WordReveal } from "../components/motion/Motion";

import {
  ProjectProgress,
  HeroImage,
  CASColumn,
  CreditRow,
} from "../components/work/ProjectComponents";

import { Block } from "../components/work/CaseBlocks";

export default function ProjectDetail() {
  const { slug } = useParams();
  const p = getProject(slug ?? "");
  const next = slug ? getNextProject(slug) : null;
  const prev = slug ? getPrevProject(slug) : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useDocumentMeta(
    `${p ? p.title : "Not Found"} — DEBARGHA MORIARTY`,
    p ? p.subtitle : "Project not found"
  );

  if (!p) {
    return (
      <main id="main" tabIndex={-1} className="pt-40 pb-40 px-6 md:px-10">
        <h1 className="font-display text-7xl">Project not found</h1>
        <Link to="/work" className="chip mt-8 inline-block">
          Back to archive ↗
        </Link>
      </main>
    );
  }

  return (
    <>
      <ProjectProgress />
      <main id="main" tabIndex={-1} className="pt-32 md:pt-40">
        {/* Prev / next bar with scramble */}
        <div className="px-6 md:px-10 flex justify-between items-center text-xs uppercase tracking-widest text-[var(--bone)]/60 border-b border-[var(--bone)]/15 pb-4 mb-10">
          {prev ? (
            <Link to={`/work/${prev.slug}`} className="link-line hover:text-[var(--acid)]">
              ← {prev.title}
            </Link>
          ) : (
            <span />
          )}
          <Link to="/work" className="link-line hover:text-[var(--acid)]">
            ↑ Archive
          </Link>
          {next ? (
            <Link to={`/work/${next.slug}`} className="link-line hover:text-[var(--acid)]">
              {next.title} →
            </Link>
          ) : (
            <span />
          )}
        </div>

        {/* Hero */}
        <section className="px-6 md:px-10 mb-10 md:mb-16">
          <div className="grid grid-cols-12 gap-6 mb-10 md:mb-16 items-end">
            <div className="col-span-12 md:col-span-8">
              <div className="text-xs uppercase tracking-widest text-[var(--acid)] mb-6">
                ◉ Case Study {p.index} — {p.year}
              </div>
              <CharReveal
                as="h1"
                className="font-display text-[20vw] sm:text-[18vw] md:text-[14vw] lg:text-[13vw] leading-[0.85] tracking-[-0.03em]"
              >
                {p.title}
              </CharReveal>
              <WordReveal
                className="mt-4 font-display italic text-2xl md:text-4xl text-[var(--bone)]/80 max-w-2xl"
                as="p"
              >
                {p.subtitle}
              </WordReveal>
            </div>
            <div className="col-span-12 md:col-span-4 text-xs uppercase tracking-widest leading-loose">
              <div className="grid grid-cols-2 gap-4 border-t border-[var(--bone)]/15 pt-6">
                <div>
                  <div className="text-[var(--bone)]/40 mb-2">Client</div>
                  <div>{p.client}</div>
                </div>
                <div>
                  <div className="text-[var(--bone)]/40 mb-2">Year</div>
                  <div>{p.year}</div>
                </div>
                <div className="col-span-2">
                  <div className="text-[var(--bone)]/40 mb-2">Role</div>
                  <div>{p.role}</div>
                </div>
                <div className="col-span-2">
                  <div className="text-[var(--bone)]/40 mb-2">Disciplines</div>
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {p.tags.map((t: string) => (
                      <span
                        key={t}
                        className="border border-[var(--bone)]/20 px-2 py-0.5 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <HeroImage src={p.hero} title={p.title} />
        </section>

        {/* Overview */}
        <section className="px-6 md:px-10 py-16 md:py-24 border-t border-[var(--bone)]/15">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-3">
              <div className="sticky top-32 text-xs uppercase tracking-widest text-[var(--acid)]">
                ◉ Overview
              </div>
            </div>
            <div className="col-span-12 md:col-span-9">
              <WordReveal
                className="font-display text-3xl md:text-5xl leading-[1.15] tracking-tight"
                as="p"
              >
                {p.intro}
              </WordReveal>
            </div>
          </div>
        </section>

        {/* Challenge / Approach / Solution — each with unique entrance */}
        <section className="px-6 md:px-10 py-16 md:py-24 border-t border-[var(--bone)]/15">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
            {[
              { n: "I.", l: "Challenge", t: p.challenge },
              { n: "II.", l: "Approach", t: p.approach },
              { n: "III.", l: "Solution", t: p.solution },
            ].map((s, i) => (
              <CASColumn key={s.l} s={s} i={i} />
            ))}
          </div>
        </section>

        {/* Blocks */}
        <section className="px-6 md:px-10">
          {p.blocks.map((b: CaseBlock, i: number) => (
            <Block key={i} b={b} />
          ))}
        </section>

        {/* Credits */}
        <section className="px-6 md:px-10 py-20 md:py-28 border-t border-[var(--bone)]/15 mt-10">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-3">
              <div className="text-xs uppercase tracking-widest text-[var(--acid)]">◉ Credits</div>
            </div>
            <div className="col-span-12 md:col-span-9">
              <ul className="divide-y divide-[var(--bone)]/10 border-t border-b border-[var(--bone)]/10">
                {p.credits.map((c: { role: string; name: string }, i: number) => (
                  <CreditRow key={c.role} c={c} i={i} />
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Next project with BIG hover effect */}
        {next && (
          <section className="px-6 md:px-10 py-20 md:py-32 border-t border-[var(--bone)]/15">
            <div className="text-xs uppercase tracking-widest text-[var(--acid)] mb-6">
              ◉ Next — {next.index}
            </div>
            <Link
              to={`/work/${next.slug}`}
              className="next-project-link py-8 md:py-16"
              data-cursor="hover"
            >
              <div className="np-bg" />
              <h2 className="np-text font-display text-[18vw] sm:text-[16vw] md:text-[13vw] lg:text-[11vw] leading-[0.85] tracking-tight">
                {next.title} <span className="italic text-[var(--acid)]">→</span>
              </h2>
              <p className="np-text text-base text-[var(--bone)]/60 mt-4 max-w-xl">
                {next.subtitle}
              </p>
            </Link>
          </section>
        )}
      </main>
    </>
  );
}
