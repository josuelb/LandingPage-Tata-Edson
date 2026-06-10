import SectionTitle from "../atoms/SectionTitle";
import HouseCard from "../molecules/HouseCard";
import {houses} from "../../data/houses.js";

export default function HousesSection() {
  return (
    <section id="casa" className="py-20 px-6 bg-pattern">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14 reveal">
            <SectionTitle
              title="✦ Nossa casa espirituais ✦"
              subtitle="Templos & Casas"
            />
            <div className="gold-divider max-w-xs mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {houses.map((house, index) => (
            <HouseCard
                key={house.id}
              alt={house.alt}
              logo={house.logo}
              title={house.title}
              subtitle={house.subtitle}
              description={house.description}
              delay={index++}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
