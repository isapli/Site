import { WhatsAppButton } from './WhatsAppButton';
import { User, Users, Award, Plane } from 'lucide-react';

export function ServicesPage() {
  const services = [
    {
      title: 'Aulas Particulares',
      description: 'Aprendizado personalizado com estratégias exclusivas para alcançar seus objetivos.',
      features: [
        'Atenção individualizada',
        'Ritmo personalizado',
        'Flexibilidade de horários',
      ],
      icon: User,
      whatsappMessage: 'Olá! Gostaria de saber mais sobre as Aulas Particulares. Pode me ajudar?',
    },
    {
      title: 'Aulas em Grupo',
      description: 'Turmas seletivas com até 5 alunos para interação autêntica e networking.',
      features: [
        'Grupos por nível',
        'Aprendizado colaborativo',
        'Prática conversacional intensiva',
      ],
      icon: Users,
      whatsappMessage: 'Olá! Gostaria de saber mais sobre as Aulas em Grupo. Pode me ajudar?',
    },
    {
      title: 'Preparatório para Exames',
      description: 'Preparação estratégica para certificações internacionais com metodologia comprovada.',
      features: [
        'TOEFL, IELTS e Cambridge',
        'Simulados com feedback detalhado',
        'Estratégias de alta performance',
      ],
      icon: Award,
      whatsappMessage: 'Olá! Gostaria de saber mais sobre o Preparatório para Exames. Pode me ajudar?',
    },
    {
      title: 'Inglês para Viagens',
      description: 'Desenvolva autonomia e confiança para se comunicar em qualquer destino.',
      features: [
        'Linguagem prática e contextualizada',
        'Simulações de situações reais',
        'Foco em fluência imediata',
      ],
      icon: Plane,
      whatsappMessage: 'Olá! Gostaria de saber mais sobre Inglês para Viagens. Pode me ajudar?',
    },
  ];

  const handleWhatsAppClick = (message: string) => {
    const phoneNumber = '5512981075584';
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-8 lg:px-16 py-20 text-center">
          <h1 className="mb-8 text-[#034460] text-4xl tracking-tight" style={{ letterSpacing: '0.08em' }}>Modalidades</h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Experiências de aprendizado desenhadas para seu sucesso
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-8 lg:px-16">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="group bg-white rounded-xl p-10 border-2 border-gray-100 hover:border-[#F8BF0F] hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start justify-between mb-8">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ 
                      background: 'linear-gradient(135deg, #FF69B4 0%, #BA68C8 40%, #F8BF0F 100%)'
                    }}>
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <h3 className="mb-4 text-[#034460] text-xl">{service.title}</h3>
                  <p className="text-gray-500 mb-8 leading-relaxed text-sm">{service.description}</p>
                  <ul className="space-y-3 mb-10">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600 text-sm">
                        <div className="w-1.5 h-1.5 bg-[#F8BF0F] rounded-full mr-3"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="text-[#034460] group-hover:text-[#F8BF0F] transition-colors text-sm tracking-wide flex items-center gap-2" onClick={() => handleWhatsAppClick(service.whatsappMessage)}>
                    Saber mais 
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-8 lg:px-16">
        <div className="h-px bg-gray-100"></div>
      </div>

      {/* Additional Info Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-8 lg:px-16">
          <h2 className="text-center mb-12 text-[#034460] text-3xl tracking-tight">Benefícios exclusivos</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gray-50 rounded-xl hover:bg-[#F8BF0F]/5 hover:border-[#F8BF0F] border-2 border-transparent transition-all duration-300">
              <div className="w-12 h-12 bg-[#034460]/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-[#034460]">✓</span>
              </div>
              <h3 className="mb-4 text-[#034460]">Material Exclusivo</h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                Conteúdo curado e recursos digitais de alta qualidade.
              </p>
            </div>
            <div className="text-center p-8 bg-gray-50 rounded-xl hover:bg-[#F8BF0F]/5 hover:border-[#F8BF0F] border-2 border-transparent transition-all duration-300">
              <div className="w-12 h-12 bg-[#034460]/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-[#034460]" style={{ letterSpacing: '-0.4em' }}>✓✓</span>
              </div>
              <h3 className="mb-4 text-[#034460]">Acompanhamento Dedicado</h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                Suporte personalizado durante toda sua jornada.
              </p>
            </div>
            <div className="text-center p-8 bg-gray-50 rounded-xl hover:bg-[#F8BF0F]/5 hover:border-[#F8BF0F] border-2 border-transparent transition-all duration-300">
              <div className="w-12 h-12 bg-[#034460]/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-[#034460]" style={{ letterSpacing: '-0.4em' }}>✓✓✓</span>
              </div>
              <h3 className="mb-4 text-[#034460]">Avaliação Contínua</h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                Feedback regular para garantir sua evolução constante.
              </p>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppButton />
    </div>
  );
}
