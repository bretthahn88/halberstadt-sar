interface Props {
  title: string;
  subtitle?: string;
  light?: boolean;
}

export default function SectionHeading({ title, subtitle, light }: Props) {
  return (
    <div className="text-center mb-10">
      <h2 className={`font-serif text-3xl sm:text-4xl font-bold ${light ? "text-parchment" : "text-navy"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-3 text-lg ${light ? "text-parchment/70" : "text-navy/60"}`}>{subtitle}</p>
      )}
      <div className="mt-4 mx-auto w-16 h-0.5 bg-gold" />
    </div>
  );
}
