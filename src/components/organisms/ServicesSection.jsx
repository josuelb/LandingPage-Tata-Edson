import ServiceCard from "../molecules/ServiceCard";
import SectionTitle from "../atoms/SectionTitle";
import {services} from "../../data/services";

export default function Services() {
  return (
    <section id="atendimentos" className="py-24 px-6 bg-brasa/40 bg-pattern" aria-labelledby="atend-heading">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 reveal">
          <SectionTitle title="✦ Presencial & Online ✦" subtitle="Atendimentos Espirituais"/>
          <div className="gold-divider max-w-xs mx-auto mb-6"></div>
          <p className="font-crimson text-pergaminho/70 text-lg max-w-xl mx-auto">
            Consultas realizadas com seriedade, sigilo e profundo respeito às
            tradições. Atende em todo o Brasil, presencial no Nordeste.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {services.map((service, index)=> (
            <ServiceCard
              key={service.title}
              {...service}
              delay={index++}
            />
          ))}
        </div>
      </div>
    </section>
  );
}