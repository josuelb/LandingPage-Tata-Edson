export default function WorkCard({
  title,
  description,
  delay
}) {
  return (
    <article
      className="
      card-bg
      p-6
      rounded-sm
      service-card
    "
    style={{ transitionDelay: `0.${delay}s` }}
    >
      <div
        className="
        w-10
        h-px
        bg-ouro/60
        mb-4
      "
      />

      <h3
        className="
        font-cinzelPlain
        text-ouro
        text-sm
        tracking-widest
        uppercase
        mb-3
      "
      >
        {title}
      </h3>

      <p
        className="
        font-crimson
        text-pergaminho/70
        text-sm
        leading-relaxed
      "
      >
        {description}
      </p>
    </article>
  );
}