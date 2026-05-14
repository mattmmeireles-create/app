import useReveal from "../hooks/useReveal";

const modalities = [
  {
    code: "01",
    name: "Boxe",
    tagline: "A Nobre Arte",
    description:
      "A 'Nobre Arte' não é sobre bater, é sobre precisão. Queime até 800 calorias enquanto domina a técnica dos grandes campeões.",
    stat: "800",
    statLabel: "kcal / sessão",
  },
  {
    code: "02",
    name: "Muay Thai",
    tagline: "Arte das Oito Armas",
    description:
      "A 'Arte das Oito Armas'. Aprenda a usar cotovelos, joelhos e canelas com eficiência máxima em um treino de alta intensidade.",
    stat: "08",
    statLabel: "pontos de impacto",
  },
  {
    code: "03",
    name: "Kickboxing",
    tagline: "Explosão & Definição",
    description:
      "A fusão perfeita entre a agilidade do boxe e o impacto dos chutes. Ideal para quem quer explosão muscular e definição rápida.",
    stat: "100%",
    statLabel: "alta intensidade",
  },
];

export const Modalities = () => {
  const { ref, visible } = useReveal();

  return (
    <section
      id="modalidades"
      data-testid="modalities-section"
      ref={ref}
      className="relative bg-[#0a0a0b] py-24 md:py-36 overflow-hidden"
    >
      {/* faint side label */}
      <div className="absolute top-24 right-0 hidden lg:block pointer-events-none">
        <span className="font-display text-[10rem] text-white/[0.025] leading-none tracking-tighter select-none">
          ARSENAL
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto px-5 md:px-10">
        {/* Section header */}
        <div
          className={`max-w-3xl mb-16 md:mb-24 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-12 bg-[var(--brand-accent)]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[var(--brand-accent)] font-semibold">
              Modalidades
            </span>
          </div>
          <h2 className="font-display uppercase text-4xl md:text-5xl lg:text-6xl text-white leading-[0.95] tracking-tight">
            Três disciplinas.
            <br />
            <span className="text-white/40">Uma só mentalidade.</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5">
          {modalities.map((m, i) => (
            <ModalityCard key={m.code} modality={m} index={i} parentVisible={visible} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ModalityCard = ({ modality, index, parentVisible }) => {
  return (
    <article
      data-testid={`modality-card-${modality.name.toLowerCase().replace(" ", "-")}`}
      className={`group relative bg-[#0a0a0b] p-8 md:p-10 transition-all duration-700 hover:bg-[#111113] cursor-default
        ${parentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      `}
      style={{ transitionDelay: parentVisible ? `${index * 120}ms` : "0ms" }}
    >
      {/* top accent line (animates on hover) */}
      <div className="absolute top-0 left-0 h-[2px] w-0 bg-[var(--brand-accent)] group-hover:w-full transition-all duration-500" />

      {/* code */}
      <div className="flex items-start justify-between mb-10">
        <span className="font-display text-sm tracking-[0.25em] text-white/30">
          /{modality.code}
        </span>
        <div className="text-right">
          <div className="font-display text-3xl md:text-4xl text-[var(--brand-accent)] leading-none">
            {modality.stat}
          </div>
          <div className="text-[10px] uppercase tracking-[0.2em] text-white/40 mt-1.5">
            {modality.statLabel}
          </div>
        </div>
      </div>

      <h3 className="font-display uppercase text-4xl md:text-5xl text-white tracking-tight leading-none">
        {modality.name}
      </h3>

      <div className="mt-3 text-xs uppercase tracking-[0.25em] text-white/40 font-medium">
        {modality.tagline}
      </div>

      <p className="mt-8 text-sm md:text-base text-white/60 leading-relaxed">
        {modality.description}
      </p>

      {/* footer */}
      <div className="mt-10 pt-6 border-t border-white/5 flex items-center justify-between">
        <span className="text-[11px] uppercase tracking-[0.25em] text-white/40">
          Todos os níveis
        </span>
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-accent)] animate-pulse" />
          <span className="text-[11px] uppercase tracking-[0.2em] text-white/60">
            Ativo
          </span>
        </div>
      </div>
    </article>
  );
};
