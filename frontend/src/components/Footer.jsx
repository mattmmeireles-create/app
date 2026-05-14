import { Instagram as InstagramIcon } from "lucide-react";
import { INSTAGRAM_URL, INSTAGRAM_HANDLE } from "./Instagram";

export const Footer = () => {
  return (
    <footer
      data-testid="site-footer"
      className="bg-black border-t border-white/5 py-10 md:py-14"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="h-7 w-1.5 bg-[var(--brand-accent)] block" />
            <span className="font-display text-lg tracking-tight text-white whitespace-nowrap">
              <span className="text-[var(--brand-accent)]">CT</span> PEDRO ALBUQUERQUE
            </span>
          </div>

          <div className="flex items-center gap-3 order-3 md:order-2">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="footer-instagram"
              aria-label="Instagram"
              className="group flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
            >
              <span className="w-9 h-9 flex items-center justify-center border border-white/15 group-hover:bg-gradient-to-tr group-hover:from-[#F77737] group-hover:via-[#E1306C] group-hover:to-[#833AB4] group-hover:border-transparent transition-all text-white">
                <InstagramIcon className="w-4 h-4" strokeWidth={2.2} />
              </span>
              <span className="hidden sm:inline">{INSTAGRAM_HANDLE}</span>
            </a>
          </div>

          <div className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-white/40 order-2 md:order-3">
            © {new Date().getFullYear()} CT Pedro Albuquerque. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};
