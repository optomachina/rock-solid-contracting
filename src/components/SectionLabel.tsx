type Props = Readonly<{
  marker?: string;
  children: React.ReactNode;
  tone?: "dark" | "paper";
  className?: string;
}>;

export default function SectionLabel({
  marker = "§",
  children,
  tone = "dark",
  className = "",
}: Props) {
  const toneClass =
    tone === "paper" ? "text-[var(--on-paper-muted)]" : "text-shadow";
  return (
    <p className={`text-meta tracking-[0.18em] ${toneClass} ${className}`}>
      <span className="text-iron">{marker}</span>{" "}
      {marker.length > 1 ? <>&nbsp; </> : null}
      {children}
    </p>
  );
}
