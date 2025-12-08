import { Instagram, Facebook } from 'lucide-react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { WhatsAppButton } from './WhatsAppButton';

export function ContactPage() {
  const handleWhatsAppClick = () => {
    const phoneNumber = '5512981075584';
    const message = encodeURIComponent('Olá, gostaria de saber mais sobre as aulas de idiomas. Pode me ajudar?');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-8 lg:px-16 py-20 text-center">
          <h1 className="mb-8 text-[#034460] text-4xl tracking-tight">Contato</h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Estamos prontos para ajudar você a começar
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-8 lg:px-16">
          <div className="grid md:grid-cols-5 gap-16">
            {/* Contact Info */}
            <div className="md:col-span-2 pt-10">
              {/* Título alinhado */}
              <h3 className="mb-8 text-[#034460] tracking-wide">Fale Conosco</h3>
              
              {/* WhatsApp - alinhado com Nome Completo */}
              <div className="mb-6">
                <p className="text-gray-400 mb-2 text-xs tracking-widest uppercase">WhatsApp</p>
                <button 
                  onClick={handleWhatsAppClick}
                  className="text-[#034460] hover:text-[#F8BF0F] transition-colors text-sm"
                >
                  (12) 98107-5584
                </button>
              </div>
              
              {/* E-mail - alinhado com E-mail do formulário */}
              <div className="mb-6">
                <p className="text-gray-400 mb-2 text-xs tracking-widest uppercase">E-mail</p>
                <a 
                  href="mailto:minervaidiomas@gmail.com"
                  className="text-[#034460] hover:text-[#F8BF0F] transition-colors text-sm"
                >
                  minervaidiomas@gmail.com
                </a>
              </div>
              
              {/* Localização - alinhado com Telefone */}
              <div className="mb-6">
                <p className="text-gray-400 mb-2 text-xs tracking-widest uppercase">Localização</p>
                <p className="text-gray-600 text-sm">São José dos Campos, SP</p>
                <p className="text-gray-400 text-xs mt-1">Aulas 100% online</p>
              </div>

              {/* Redes Sociais - alinhado com Mensagem */}
              <div className="mt-6">
                <p className="text-gray-400 mb-2 text-xs tracking-widest uppercase">Redes Sociais</p>
                <div className="flex gap-4">
                  <a
                    href="https://www.instagram.com/minervaaulasdeingles/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#E4405F] hover:opacity-80 transition-opacity"
                    aria-label="Instagram"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href="https://www.facebook.com/minervaaulasdeingles?_rdc=2&_rdr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1877F2] hover:opacity-80 transition-opacity"
                    aria-label="Facebook"
                  >
                    <Facebook size={20} />
                  </a>
                  <a
                    href="https://x.com/MinervaAulas?t=4SS6lvetIjs6Y0zvmYD-eA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#000000] hover:opacity-80 transition-opacity"
                    aria-label="X (Twitter)"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-3">
              <div className="bg-white rounded-2xl p-10 border-2 border-gray-100">
                <h3 className="mb-8 text-[#034460]">Envie sua Mensagem</h3>
                <form action="https://formspree.io/f/xyzvbgpd" method="POST" className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-[#034460] text-sm">
                      Nome Completo
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Seu nome completo"
                      required
                      className="w-full border-gray-200 focus:border-[#F8BF0F] focus:ring-[#F8BF0F]/20"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 text-[#034460] text-sm">
                      E-mail
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="seu@email.com"
                      required
                      className="w-full border-gray-200 focus:border-[#F8BF0F] focus:ring-[#F8BF0F]/20"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block mb-2 text-[#034460] text-sm">
                      Telefone (opcional)
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="(11) 99999-9999"
                      className="w-full border-gray-200 focus:border-[#F8BF0F] focus:ring-[#F8BF0F]/20"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block mb-2 text-[#034460] text-sm">
                      Mensagem
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Como podemos ajudá-lo?"
                      required
                      className="w-full min-h-[160px] border-gray-200 focus:border-[#F8BF0F] focus:ring-[#F8BF0F]/20 resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#F8BF0F] text-[#034460] px-10 py-4 rounded-full hover:bg-[#e0ae00] transition-all duration-300 text-sm"
                  >
                    Enviar Mensagem
                  </button>
                  
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-200"></div>
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-white px-2 text-gray-400">Ou</span>
                    </div>
                  </div>
                  
                  <button
                    type="button"
                    onClick={handleWhatsAppClick}
                    className="w-full bg-[#25D366] text-white px-10 py-4 rounded-full hover:bg-[#20BA5A] transition-all duration-300 text-sm flex items-center justify-center gap-2"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    Conversar no WhatsApp
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hours Section */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-8 lg:px-16">
          <div className="bg-gray-50 rounded-2xl p-12 border-2 border-gray-100">
            <h2 className="mb-12 text-[#034460] text-2xl text-center tracking-tight">Horário de Atendimento</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-[#F8BF0F]/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#F8BF0F]">📅</span>
                </div>
                <p className="text-[#034460] mb-2">Segunda a Sexta</p>
                <p className="text-gray-500 text-sm">8:00 - 20:00</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-[#F8BF0F]/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#F8BF0F]">📅</span>
                </div>
                <p className="text-[#034460] mb-2">Sábados</p>
                <p className="text-gray-500 text-sm">9:00 - 12:00</p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-500 text-sm">
                ⚡ Respondemos mensagens do WhatsApp em até 2 horas durante o horário de atendimento
              </p>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppButton />
    </div>
  );
}