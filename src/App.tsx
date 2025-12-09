import { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { HomePage } from './components/HomePage';
import { ServicesPage } from './components/ServicesPage';
import { AboutPage } from './components/AboutPage';
import { ResultsPage } from './components/ResultsPage';
import { ContactPage } from './components/ContactPage';
import { Toaster } from './components/ui/sonner';

export default function App() {
  const [currentPage, setCurrentPage] = useState('inicio');

  const renderPage = () => {
    switch (currentPage) {
      case 'inicio':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'servicos':
        return <ServicesPage />;
      case 'quem-somos':
        return <AboutPage />;
      case 'resultados':
        return <ResultsPage />;
      case 'contato':
        return <ContactPage />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFBF0]">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer />
      {currentPage === 'inicio' && <WhatsAppButton />}
      <Toaster />
    </div>
  );
}