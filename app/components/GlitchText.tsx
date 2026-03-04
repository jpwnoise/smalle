"use client";

export default function GlitchText({ text }: { text: string }) {
  return (
    <h1 className="glitch text-5xl md:text-6xl font-extrabold text-center" data-text={text}>
      {text}
    </h1>
  );
}