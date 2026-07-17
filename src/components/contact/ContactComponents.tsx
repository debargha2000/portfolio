import React from "react";
import { Scramble } from "../../components/motion/Motion";
import { useClipReveal, useReveal } from "../../hooks/motionUtils";

export const AvailCell = React.memo(function AvailCell({
  a,
  i,
}: {
  a: { q: string; s: string; c: string; pulse: boolean };
  i: number;
}) {
  return (
    <div
      ref={useClipReveal<HTMLDivElement>("v", i * 0.1)}
      className={`${a.c} ${a.pulse ? "slot-pulse" : ""} px-6 py-5 group hover:scale-105 transition-transform duration-500`}
    >
      <div className="text-xs uppercase tracking-widest mb-1 opacity-80">{a.q}</div>
      <div className="font-display text-3xl md:text-4xl group-hover:rotate-[-5deg] transition-transform duration-500">
        {a.s}
      </div>
    </div>
  );
});

/* Shared field wrapper for label + error pattern */
function FieldWrapper({
  label,
  name,
  error,
  children,
}: {
  label: string;
  name?: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block group">
      <span className="text-xs uppercase tracking-widest text-[var(--bone)]/50 group-focus-within:text-[var(--acid)] transition-colors">
        {label}
      </span>
      {children}
      {error && (
        <span
          id={name ? `${name}-err` : undefined}
          className="text-xs text-[var(--rust)] mt-1 block"
        >
          {error}
        </span>
      )}
    </label>
  );
}

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
    <FieldWrapper label={label} name={name} error={error}>
      <input
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-err` : undefined}
        className="input-line w-full py-3 text-lg font-display"
      />
    </FieldWrapper>
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
    <FieldWrapper label={label}>
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
    </FieldWrapper>
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
  return (
    <div ref={useClipReveal<HTMLDivElement>("h")}>
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
  return (
    <div
      ref={useReveal<HTMLDivElement>(i * 0.1)}
      className="border-t border-[var(--bone)]/15 pt-6 group hover:border-[var(--acid)] transition-colors"
    >
      <h4 className="font-display text-2xl md:text-3xl mb-3 group-hover:text-[var(--acid)] transition-colors">
        <Scramble>{f.q}</Scramble>
      </h4>
      <p className="text-sm leading-relaxed text-[var(--bone)]/70">{f.a}</p>
    </div>
  );
});
