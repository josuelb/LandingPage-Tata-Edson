import Divider from "../../atoms/Divider";

export default function SectionHeader({
  subtitle,
  title
}) {
  return (
    <div className="text-center mb-16 reveal">
      <p className="font-cinzelPlain text-ouro/60 text-xs tracking-[0.5em] uppercase mb-3">
        {subtitle}
      </p>

      <h2 className="font-cinzel text-3xl md:text-4xl text-vela text-shadow-gold mb-4">
        {title}
      </h2>

      <Divider className="max-w-xs mx-auto" />
    </div>
  );
}