import Divider from "../atoms/Divider";

export default function HouseCard({
  logo,
  alt,
  title,
  subtitle,
  description, delay
}) {
  return (
    <article
      className="
      card-bg
      p-8
      rounded-sm
      service-card
    "
    style={{ transitionDelay: `0.${delay}s` }}
    >
      <div
        className="
        flex
        items-center
        gap-4
        mb-6
      "
      >
        <img
          src={logo}
          alt={alt}
          className="
          w-20
          h-20
          rounded-full
          object-cover
          photo-frame
        "
        />

        <div>
          <h3
            className="
            font-cinzel
            text-ouro
            text-lg
            leading-tight
          "
          >
            {title}
          </h3>

          <p
            className="
            text-fumaca
            text-sm
            font-cinzelPlain
            tracking-wider
            mt-1
          "
          >
            {subtitle}
          </p>
        </div>
      </div>

      <Divider className="mb-5" />

      <p
        className="
        font-crimson
        text-pergaminho/80
        text-base
        leading-relaxed
      "
      >
        {description}
      </p>
    </article>
  );
}