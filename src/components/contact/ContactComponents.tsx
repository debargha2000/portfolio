import React from "react";
import { Scramble } from "../../components/motion/Motion";
import { useClipReveal, useReveal } from "../../hooks/motionUtils";
import { mergeRefs } from "../../hooks/useMergedRefs";

export const AvailCell = React.memo(function AvailCell({
  a,
  i,
}: {
  a: { q: string; s: string; c: string; pulse: boolean };
  i: number;
}) {
  const clip = useClipReveal<HTMLDivElement>("v", i * 0.1);
  const mergedRef = mergeRefs(clip);
  return (
    <div
      ref={mergedRef}
      className={`${a.c} ${a.pulse ? "slot-pulse" : ""} px-6 py-5 group hover:scale-105 transition-transform duration-500`}
    >
      <div className="text-xs uppercase tracking-widest mb-1 opacity-80">{a.q}</div>
      <div className="font-display text-3xl md:text-4xl group-hover:rotate-[-5deg] transition-transform duration-500">
        {a.s}
      </div>
    </div>
  );
});

export const InputField = React.memo(function InputField({
  label,
  name,
  value,
  onChange,
  required,
  error,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  error?: string;
}) {
  return (
    <label className="block group">
      <span className="text-xs uppercase tracking-widest text-[var(--bone)]/50 group-focus-within:text-[var(--acid)] transition-colors">
        {label}
      </span>
      <input
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-err` : undefined}
        className="input-line w-full py-3 text-lg font-display"
      />
      {error && (
        <span id={`${name}-err`} className="text-xs text-[var(--rust)] mt-1 block">
          {error}
        </span>
      )}
    </label>
  );
});

export const SelectField = React.memo(function SelectField({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: { v: string; l: string }[];
}) {
  return (
    <label className="block group">
      <span className="text-xs uppercase tracking-widest text-[var(--bone)]/50 group-focus-within:text-[var(--acid)] transition-colors">
        {label}
      </span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="input-line w-full py-3 text-lg font-display"
      >
        {options.map((o) => (
          <option key={o.v} value={o.v} className="bg-[var(--bg)]">
            {o.l}
          </option>
        ))}
      </select>
    </label>
  );
});

export const SidebarBlock = React.memo(function SidebarBlock({
  label,
  content,
  extra,
}: {
  label: string;
  content: React.ReactNode;
  extra?: React.ReactNode;
}) {
  const clip = useClipReveal<HTMLDivElement>("h");
  const mergedRef = mergeRefs(clip);
  return (
    <div ref={mergedRef}>
      <div className="text-xs uppercase tracking-widest text-[var(--acid)] mb-4">◉ {label}</div>
      {content}
      {extra}
    </div>
  );
});

export const FAQCard = React.memo(function FAQCard({
  f,
  i,
}: {
  f: { q: string; a: string };
  i: number;
}) {
  const ref = useReveal<HTMLDivElement>(i * 0.1);
  return (
    <div
      ref={ref}
      className="border-t border-[var(--bone)]/15 pt-6 group hover:border-[var(--acid)] transition-colors"
    >
      <h4 className="font-display text-2xl md:text-3xl mb-3 group-hover:text-[var(--acid)] transition-colors">
        <Scramble>{f.q}</Scramble>
      </h4>
      <p className="text-sm leading-relaxed text-[var(--bone)]/70">{f.a}</p>
    </div>
  );
});
