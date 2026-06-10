export default function ServiceCard({
  icon,
  title,
  description, delay
}) {
  return (
    <article
      className="
      card-bg
      p-7
      rounded-sm
      service-card
      text-center
    "
    style={{ transitionDelay: `0.${delay}s` }}
    >
      <div
        className="
        text-ouro
        text-3xl
        mb-4
      "
      >
        {icon}
      </div>

      <h3
        className="
        font-cinzel
        text-ouro
        text-base
        mb-3
      "
      >
        {title}
      </h3>

      <p
        className="
        font-crimson
        text-pergaminho/75
        text-sm
        leading-relaxed
      "
      >
        {description}
      </p>
    </article>
  );
}