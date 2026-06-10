import Divider from "./Divider";

export default function SectionTitle({
  subtitle,
  title
}) {
  return (
    <>
      <p
        className="
        font-cinzelPlain
        text-ouro/60
        text-xs
        tracking-[0.5em]
        uppercase
        mb-3
      "
      >
        {title}
      </p>

      <h2
        className="
        font-cinzel
        text-3xl
        md:text-4xl
        text-vela
        text-shadow-gold
        mb-4
      "
      >
        {subtitle}
      </h2>

      <Divider className="max-w-xs mx-auto" />
    </>
  );
}