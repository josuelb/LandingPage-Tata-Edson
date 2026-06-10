import WorkCard from "../molecules/WorkCard";
import { works } from "../../data/works";

import SectionTitle from "../atoms/SectionTitle";

export default function WorksSection() {
  return (
    <section
      id="trabalhos"
      className="py-24 px-6 bg-pattern"
      aria-labelledby="trab-heading"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 reveal">
          <SectionTitle
            title="✦ Rituais & Feitura ✦"
            subtitle="Trabalhos Espirituais"
          />
          <div className="gold-divider max-w-xs mx-auto mb-6"></div>
          <p className="font-crimson text-pergaminho/70 text-lg max-w-xl mx-auto">
            Trabalhos realizados com fundamento, seriedade e pleno conhecimento
            das tradições. Cada caso é único e recebe atenção personalizada.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {works.map((item, index) => (
            <WorkCard
              key={index}
              title={item.title}
              description={item.description}
              delay={index++}
            />
          ))}
        </div>

        <div
          className="mt-8 card-bg p-6 rounded-sm reveal text-center"
          style={{ transitionDelay: '0.5s' }}
        >
          <p className="font-cinzelPlain text-fumaca text-sm tracking-wider">
            ✦ Entre outros trabalhos conforme necessidade do consulente —
            consulte para verificar disponibilidade ✦
          </p>
        </div>
      </div>
    </section>
  );
}
