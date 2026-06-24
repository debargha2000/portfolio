import { useState } from "react";
import { useDocumentMeta } from "../hooks/useDocumentMeta";
import { CharReveal, WordReveal, Magnetic, Scramble } from "../components/motion/Motion";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    timeline: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Please tell us your name.";
    if (!form.email.match(/^[^@]+@[^@]+\.[^@]+$/)) e.email = "Please use a valid email address.";
    if (!form.message.trim()) e.message = "Please describe the project.";
    return e;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
    // Confetti burst
    const colors = ["#c6ff3d", "#ff4d1f", "#f4f1ea", "#a4e022"];
    for (let i = 0; i < 60; i++) {
      const c = document.createElement("div");
      c.style.cssText = `
        position: fixed;
        width: ${Math.random() * 10 + 4}px;
        height: ${Math.random() * 10 + 4}px;
        background: ${colors[Math.floor(Math.random() * colors.length)]};
        left: 50vw;
        top: 50vh;
        z-index: 9999;
        pointer-events: none;
        border-radius: ${Math.random() > 0.5 ? "50%" : "2px"};
      `;
      document.body.appendChild(c);
      const angle = Math.random() * Math.PI * 2;
      const velocity = Math.random() * 400 + 200;
      const vx = Math.cos(angle) * velocity;
      const vy = Math.sin(angle) * velocity;
      const rotation = Math.random() * 720 - 360;
      c.animate(
        [
          { transform: "translate(0, 0) rotate(0deg)", opacity: "1" },
          { transform: `translate(${vx}px, ${vy + 500}px) rotate(${rotation}deg)`, opacity: "0" },
        ],
        { duration: 2000, easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)" }
      );
      setTimeout(() => c.remove(), 2100);
    }
    setTimeout(() => setSubmitted(false), 4500);
  };

  const availability = [
    { q: "Q1 '26", s: "Closed", c: "bg-[var(--bone)]/10 text-[var(--bone)]/50", pulse: false },
    { q: "Q2 '26", s: "2 slots", c: "bg-[var(--acid)] text-[var(--bg)]", pulse: true },
    { q: "Q3 '26", s: "3 slots", c: "bg-[var(--acid)] text-[var(--bg)]", pulse: true },
    { q: "Q4 '26", s: "Open", c: "bg-[var(--acid)] text-[var(--bg)]", pulse: false },
  ];

  const faq = [
    {
      q: "How quickly do you reply?",
      a: "Within two working days. Every enquiry is read by a partner, not an assistant.",
    },
    {
      q: "What's the minimum engagement?",
      a: "€80k for a focused project. Below that, we're probably not the right fit.",
    },
    {
      q: "Can we meet in person?",
      a: "Always — if you can get to Berlin. We don't travel for first meetings.",
    },
    { q: "Do you hire?", a: "Rarely. When we do, we announce it here and on Are.na." },
  ];

  useDocumentMeta(
    "Contact — DEBARGHA MORIARTY",
    "Let's make something worth it. Start a conversation with us."
  );

  return (
    <main id="main" tabIndex={-1} className="pt-32 md:pt-40 pb-20 px-6 md:px-10">
      <div className="mb-20 md:mb-32">
        <CharReveal as="div" className="text-xs uppercase tracking-widest text-[var(--acid)] mb-6">
          ◉ Contact — Chapter 04
        </CharReveal>
        <CharReveal
          as="h1"
          className="font-display text-[16vw] md:text-[11vw] leading-[0.85] tracking-tight"
        >
          Let's make something worth it.
        </CharReveal>
        <div className="mt-8">
          <WordReveal
            className="max-w-3xl font-display text-2xl md:text-4xl leading-tight text-[var(--bone)]/80"
            as="p"
          >
            We take on a handful of engagements each year — enough to do each one properly. If you
            have a project that deserves care, we'd love to hear about it.
          </WordReveal>
        </div>
      </div>

      {/* Availability with pulse */}
      <section className="py-14 border-y border-[var(--bone)]/15 mb-16">
        <CharReveal as="div" className="text-xs uppercase tracking-widest text-[var(--acid)] mb-6">
          ◉ Availability
        </CharReveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {availability.map((a, i) => (
            <AvailCell key={a.q} a={a} i={i} />
          ))}
        </div>
      </section>

      <div className="grid grid-cols-12 gap-10">
        {/* Form */}
        <div className="col-span-12 md:col-span-8">
          <CharReveal
            as="div"
            className="text-xs uppercase tracking-widest text-[var(--acid)] mb-6"
          >
            ◉ Enquiry
          </CharReveal>
          <form onSubmit={onSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <InputField
                label="Your name *"
                name="name"
                value={form.name}
                onChange={(v) => setForm({ ...form, name: v })}
                required
                error={errors.name}
              />
              <InputField
                label="Email *"
                name="email"
                value={form.email}
                onChange={(v) => setForm({ ...form, email: v })}
                required
                error={errors.email}
              />
              <InputField
                label="Company"
                name="company"
                value={form.company}
                onChange={(v) => setForm({ ...form, company: v })}
              />
              <SelectField
                label="Budget"
                value={form.budget}
                onChange={(v) => setForm({ ...form, budget: v })}
                options={[
                  { v: "", l: "Select…" },
                  { v: "80-150", l: "€80k — €150k" },
                  { v: "150-300", l: "€150k — €300k" },
                  { v: "300+", l: "€300k+" },
                  { v: "retainer", l: "Retainer" },
                ]}
              />
              <SelectField
                label="Timeline"
                value={form.timeline}
                onChange={(v) => setForm({ ...form, timeline: v })}
                options={[
                  { v: "", l: "Select…" },
                  { v: "q2-26", l: "Q2 2026" },
                  { v: "q3-26", l: "Q3 2026" },
                  { v: "q4-26", l: "Q4 2026" },
                  { v: "flexible", l: "Flexible" },
                ]}
              />
            </div>

            <label className="block group">
              <span className="text-xs uppercase tracking-widest text-[var(--bone)]/50 group-focus-within:text-[var(--acid)] transition-colors">
                Tell us about the project *
              </span>
              <textarea
                required
                rows={6}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? `message-err` : undefined}
                className="input-line w-full py-3 text-lg font-display resize-none"
              />
              {errors.message && (
                <span id="message-err" className="text-xs text-[var(--rust)] mt-1 block">
                  {errors.message}
                </span>
              )}
            </label>

            <div className="flex items-center justify-between gap-6 flex-wrap pt-4">
              <p className="text-xs uppercase tracking-widest text-[var(--bone)]/50 max-w-md">
                Every enquiry is read by a partner within two working days.
              </p>
              <Magnetic strength={0.2}>
                <button
                  type="submit"
                  className="chip !text-sm !px-8 !py-3 !bg-[var(--acid)] !text-[var(--bg)] !border-[var(--acid)] glow-pulse"
                >
                  {submitted ? "✓ Sent — we'll be in touch" : "Submit Inquiry"}
                </button>
              </Magnetic>
            </div>
          </form>
        </div>

        {/* Sidebar */}
        <aside className="col-span-12 md:col-span-4 space-y-12">
          <SidebarBlock
            label="Studio"
            content={
              <div className="font-display text-2xl leading-tight">
                Linienstraße 44
                <br />
                10119 Berlin
                <br />
                Germany
              </div>
            }
            extra={
              <div className="mt-4 text-sm text-[var(--bone)]/60 leading-relaxed">
                Second floor, above the bakery.
              </div>
            }
          />

          <SidebarBlock
            label="Write"
            content={
              <div>
                <a
                  href="mailto:studio@debarghamoriarty.com"
                  className="block font-display text-2xl link-line"
                >
                  <Scramble>studio@debarghamoriarty.com</Scramble>
                </a>
                <div className="mt-3 text-sm text-[var(--bone)]/60 space-y-1">
                  <div>
                    Press —{" "}
                    <a className="link-line" href="mailto:press@debarghamoriarty.com">
                      press@debarghamoriarty.com
                    </a>
                  </div>
                  <div>
                    Careers —{" "}
                    <a className="link-line" href="mailto:work@debarghamoriarty.com">
                      work@debarghamoriarty.com
                    </a>
                  </div>
                </div>
              </div>
            }
          />

          <SidebarBlock
            label="Elsewhere"
            content={
              <ul className="space-y-2 font-display text-2xl">
                {["Instagram", "Are.na", "Read.cv", "Vimeo", "GitHub"].map((x) => (
                  <li key={x}>
                    <a href="#" className="link-line hover:text-[var(--acid)] transition-colors">
                      <Scramble>{x}</Scramble> ↗
                    </a>
                  </li>
                ))}
              </ul>
            }
          />
        </aside>
      </div>

      {/* FAQ */}
      <section className="mt-32 border-t border-[var(--bone)]/15 pt-16">
        <CharReveal as="div" className="text-xs uppercase tracking-widest text-[var(--acid)] mb-10">
          ◉ FAQ
        </CharReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-10">
          {faq.map((f, i) => (
            <FAQCard key={f.q} f={f} i={i} />
          ))}
        </div>
      </section>

      <section className="mt-32 border-t border-[var(--bone)]/15 pt-16 text-center">
        <WordReveal
          className="font-display text-2xl md:text-4xl leading-tight max-w-3xl mx-auto text-[var(--bone)]/85"
          as="p"
        >
          If you've read this far, you are probably the kind of person we like to work with. Write
          to us — even if the project isn't quite real yet.
        </WordReveal>
      </section>
    </main>
  );
}

import {
  AvailCell,
  InputField,
  SelectField,
  SidebarBlock,
  FAQCard,
} from "../components/contact/ContactComponents";
