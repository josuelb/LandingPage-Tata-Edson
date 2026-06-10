import Tag from "../atoms/Tag";
import SectionTitle from "../atoms/SectionTitle";

const gallery = import.meta.glob(
  "/src/assets/gallery/*.{jpg,jpeg,png,webp,avif}",
  {
    eager: true,
    import: "default",
  },
);

const images = Object.values(gallery);

export default function AboutSection() {
  return (
    <section
      id="sobre"
      className="py-24 px-6 relative bg-brasa/40 bg-pattern"
      aria-labelledby="sobre-heading"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 reveal">
          <SectionTitle title="✦ Quem sou ✦" subtitle="O Sacerdote" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className="grid grid-cols-2 gap-4 reveal"
            style={{ transitionDelay: "0.1s" }}
          >
            <div className="col-span-2">
              <img
                src={images[0]}
                alt="Tata Edson Tertuliano realizando trabalho espiritual com fumaça ritual e chapéu característico"
                className="w-full h-72 object-cover photo-frame rounded-sm"
              />
            </div>
            <img
              src={images[1]}
              alt="Tata Edson Tertuliano diante da Capela de São João Batista(Igrejinha da Acais) no Sítio do Acais no interior do Nordeste"
              className="w-full h-44 object-cover photo-frame rounded-sm"
            />
            <img
              src={images[2]}
              alt="Tata Edson Tertuliano realizando trabalho espiritual na natureza"
              className="w-full h-44 object-cover photo-frame rounded-sm"
            />
          </div>
          <div>
            <p
              className="
              font-fell
              italic
              text-ouro
              text-xl
              mb-4
              leading-relaxed
            "
            >
              "Entre os mundos visível e invisível, sirvo como ponte."
            </p>

            <div className="gold-divider max-w-[80px] mb-6" />

            <p
              className="
              font-crimson
              text-pergaminho/85
              text-lg
              leading-relaxed
              mb-4
            "
            >
              Edson Tertuliano é sacerdote dedicado às tradições
              afro-nordestinas, atuando como{" "}
              <strong className="text-vela">Juremeiro</strong> na Casa de Jurema
              Cruzeiro de Luz (fundada em 15.12.2023) e como
              <strong className="text-vela"> Tata de Quimbanda</strong> no
              Templo de Quimbanda Nordestina.
            </p>

            <p
              className="
              font-crimson
              text-pergaminho/75
              text-lg
              leading-relaxed
              mb-6
            "
            >
              Com profundo conhecimento nas linhas de Exú, das Almas e dos
              Mestres da Jurema, oferece atendimentos espirituais presenciais e
              online para pessoas que buscam orientação, cura e transformação em
              suas vidas.
            </p>

            <div
              className="
                flex
                flex-wrap
                gap-3
              "
            >
              <Tag>Juremeiro</Tag>
              <Tag>Tata de Quimbanda</Tag>
              <Tag>Sacerdote Nordestino</Tag>
              <Tag>Atendimento Online</Tag>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
