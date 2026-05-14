export const Footer = () => {
  return (
    <footer
      data-testid="site-footer"
      className="bg-black border-t border-white/5 py-12 md:py-16"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="h-7 w-1.5 bg-[var(--brand-accent)] block" />
            <span className="font-display text-lg tracking-tight text-white whitespace-nowrap">
              <span className="text-[var(--brand-accent)]">CT</span> PEDRO ALBUQUERQUE
            </span>
          </div>
          <div className="text-xs uppercase tracking-[0.25em] text-white/40">
            © {new Date().getFullYear()} CT Pedro Albuquerque. Todos os
            direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};
