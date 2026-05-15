import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from 'figma:asset/2d1437ac156e6239079e00bfc1e21ec20d160abf.png';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'inicio', label: 'Início' },
    { id: 'servicos', label: 'Modalidades' },
    { id: 'quem-somos', label: 'Quem Somos' },
    { id: 'resultados', label: 'Resultados' },
    { id: 'contato', label: 'Contato' },
  ];

  const handleNavigation = (page: string) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-8 lg:px-16">
        <div className="flex justify-between items-center py-6">
          {/* Logo */}
          <button 
            onClick={() => handleNavigation('inicio')}
            className="flex items-center gap-4 hover:opacity-80 transition-opacity group"
          >
            <div className="w-28 h-28 rounded-full overflow-hidden bg-[#F8BF0F] flex-shrink-0">
              <img src={logo} alt="Minerva" className="w-full h-full object-cover" />
            </div>
            <div className="hidden sm:flex flex-col items-start gap-1">
              <span className="text-[#034460] tracking-wider text-2xl">MINERVA</span>
              <span className="text-[#034460] text-[11px] uppercase font-bold pl-[0.05em]" style={{ letterSpacing: '0.89em' }}>IDIOMAS</span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className={`text-sm tracking-wide transition-all duration-200 pb-1 ${
                  currentPage === item.id
                    ? 'text-[#034460] border-b-2 border-[#F8BF0F]'
                    : 'text-gray-500 hover:text-[#034460]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#034460] hover:bg-gray-50 rounded transition-colors"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-6 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className={`block w-full text-left px-4 py-3 text-sm tracking-wide transition-colors duration-200 ${
                  currentPage === item.id
                    ? 'text-[#034460] bg-[#F8BF0F]/10'
                    : 'text-gray-500 hover:text-[#034460]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}