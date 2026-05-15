import { Instagram, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100/50 mt-auto">
      <div className="max-w-5xl mx-auto px-8 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          {/* Sobre */}
          <div>
            <div className="text-[#034460] mb-6 text-xl tracking-wide">MINERVA</div>
            <p className="text-xs text-gray-500 leading-relaxed">
              Aulas de inglês e português<br />para todos os níveis.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="mb-6 text-[#034460] tracking-wide text-sm">Navegação</h3>
            <ul className="space-y-3 text-xs">
              <li>
                <a href="#" className="text-gray-500 hover:text-[#034460] transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-[#034460] transition-colors">
                  Modalidades
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-[#034460] transition-colors">
                  Quem Somos
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-[#034460] transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Redes Sociais */}
          <div>
            <h3 className="mb-6 text-[#034460] tracking-wide text-sm">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/minervaaulasdeingles/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E4405F] hover:opacity-80 transition-opacity"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.facebook.com/minervaaulasdeingles?_rdc=2&_rdr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1877F2] hover:opacity-80 transition-opacity"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://x.com/MinervaAulas?t=4SS6lvetIjs6Y0zvmYD-eA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#000000] hover:opacity-80 transition-opacity"
                aria-label="X (Twitter)"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100/50 pt-8 text-center">
          <p className="text-xs text-gray-400">&copy; {new Date().getFullYear()} Minerva. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}