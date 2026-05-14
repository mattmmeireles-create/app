import { useEffect, useState } from "react";
import { MessageCircle, X } from "lucide-react";

const PHONE = "5521982478764";
const MESSAGE =
  "Olá! Vi o site e quero agendar minha aula experimental gratuita.";

export const WhatsappFloat = () => {
  const [visible, setVisible] = useState(false);
  const [tooltipOpen, setTooltipOpen] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 1200);
    const tip = setTimeout(() => setTooltipOpen(true), 2800);
    return () => {
      clearTimeout(t);
      clearTimeout(tip);
    };
  }, []);

  const handleClick = () => {
    const url = `https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      className={`fixed bottom-5 right-5 md:bottom-7 md:right-7 z-50 flex items-end gap-3 transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      {tooltipOpen && (
        <div
          data-testid="whatsapp-tooltip"
          className="hidden sm:flex items-center gap-3 bg-white text-black pl-4 pr-2 py-2.5 shadow-2xl max-w-[260px] animate-in fade-in slide-in-from-right-2"
        >
          <span className="text-sm font-medium leading-snug">
            Agende sua aula <strong>grátis</strong> agora
          </span>
          <button
            onClick={() => setTooltipOpen(false)}
            className="p-1 text-black/40 hover:text-black transition"
            aria-label="Fechar"
            data-testid="whatsapp-tooltip-close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      <button
        onClick={handleClick}
        data-testid="whatsapp-float-button"
        aria-label="Falar no WhatsApp"
        className="relative group"
      >
        {/* pulse rings */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-ping" />
        <span className="absolute inset-0 rounded-full bg-[#25D366]/30" />

        <span className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#25D366] text-white shadow-[0_10px_40px_-5px_rgba(37,211,102,0.6)] group-hover:scale-105 transition-transform">
          {/* WhatsApp glyph (svg) */}
          <svg
            viewBox="0 0 32 32"
            className="w-7 h-7 md:w-8 md:h-8"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.945 2.722.945.659 0 1.748-.272 2.292-.602.482-.302.86-1.092.86-1.62 0-.092-.014-.18-.043-.265-.1-.193-2.018-.866-2.077-.866zM16.13 6.16c-5.06 0-9.176 4.114-9.176 9.176 0 1.747.5 3.436 1.43 4.91l-1.46 5.347 5.46-1.43c1.42.787 3.04 1.2 4.745 1.2 5.06 0 9.176-4.114 9.176-9.176 0-5.062-4.114-9.176-9.176-9.176m0 16.78a7.564 7.564 0 0 1-3.984-1.137l-2.857.747.74-2.78a7.546 7.546 0 0 1-1.18-4.06c0-4.18 3.4-7.58 7.58-7.58 4.18 0 7.58 3.4 7.58 7.58 0 4.18-3.4 7.58-7.58 7.58" />
          </svg>
        </span>
      </button>
    </div>
  );
};
