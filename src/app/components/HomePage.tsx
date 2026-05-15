import { Star, ChevronLeft, ChevronRight, BookOpen, Award, Clock } from 'lucide-react';
import { useState } from 'react';

interface HomePageProps {
  onNavigate?: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps = {}) {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Julia Nunes',
      text: 'Posso dizer que tenho me sentido a vontade nas aulas de maneira gradual, na primeira aula estava ainda muito tímida, mas na última me senti mais segura, sobretudo para errar. A teacher Isabela foi muito sensível ao observar meu desempenho nas duas primeiras aulas e sugerir que eu migrasse para uma outra turma [mais avançada]. A mudança foi ótima, me senti mais desafiada a pensar na turma iniciante 2. Tenho gostado do ritmo das aulas e da forma como são conduzidas.',
      rating: 5,
    },
    {
      name: 'Cris Baima',
      text: 'Acho que o semestre foi bem produtivo, achei muito legal a criação do clube do livro e senti que o Minerva contribuiu muito na minha evolução no inglês.',
      rating: 5,
    },
    {
      name: 'Gabrielle Carvalho',
      text: 'Estou gostando das aulas e temas para as aulas. Gosto do material mas principalmente dos temas extras que a professora traz.',
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-8 lg:px-16 py-20 md:py-24">
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 text-xs tracking-[0.3em] uppercase text-[#D4A00D]">
              Desde 2018
            </div>
            <h1 className="mb-6 text-[#034460] text-3xl md:text-4xl lg:text-5xl tracking-tight max-w-4xl leading-tight uppercase">
              IDIOMAS SEM FRONTEIRAS
            </h1>
            <p className="mb-4 text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">
              Aulas de <span className="font-bold">inglês</span> e <span className="font-bold">português</span> online
            </p>
            <p className="mb-14 text-sm text-gray-500 leading-relaxed max-w-2xl">
              Professoras formadas pela UNICAMP
            </p>
            <a 
              href="https://api.whatsapp.com/send/?phone=5512981075584&text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20as%20aulas%20de%20inglês.&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#F8BF0F] text-[#034460] px-12 py-5 rounded-full hover:bg-[#e0ae00] transition-all duration-300 text-sm tracking-wide"
            >
              Entre em contato e sinta a diferença
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-8 lg:px-16">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center p-8 rounded-lg hover:bg-white transition-all duration-300">
              <div className="w-16 h-16 bg-[#034460]/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="text-[#034460]" size={28} />
              </div>
              <h3 className="mb-4 text-[#034460]">Ensino Afetivo</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Metodologia adaptável ao seu ritmo, tornando o inglês acessível e motivador.
              </p>
            </div>
            <div className="text-center p-8 rounded-lg hover:bg-white transition-all duration-300">
              <div className="w-16 h-16 bg-[#034460]/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="text-[#034460]" size={28} />
              </div>
              <h3 className="mb-4 text-[#034460]">Experiência Comprovada</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Corpo docente certificado pela UNICAMP e experiência comprovada em ensino.
              </p>
            </div>
            <div className="text-center p-8 rounded-lg hover:bg-white transition-all duration-300">
              <div className="w-16 h-16 bg-[#034460]/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="text-[#034460]" size={28} />
              </div>
              <h3 className="mb-4 text-[#034460]">Flexibilidade</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Horários que se adequam à sua rotina.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-8 lg:px-16">
        <div className="h-px bg-gray-100"></div>
      </div>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-8 lg:px-16">
          <h2 className="text-center mb-16 text-[#034460] text-3xl tracking-tight">Depoimentos</h2>
          <div className="relative bg-white p-16 md:p-20">
            <div className="text-center">
              <div className="flex justify-center mb-8">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="fill-[#F8BF0F] text-[#F8BF0F]" size={16} />
                ))}
              </div>
              <p className="text-xl md:text-2xl mb-12 text-gray-600 leading-relaxed font-light italic">
                "{testimonials[currentTestimonial].text}"
              </p>
              <p className="text-[#034460] text-sm tracking-widest uppercase">
                {testimonials[currentTestimonial].name}
              </p>
            </div>
            
            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 text-gray-600 hover:text-[#F8BF0F] transition-all flex items-center justify-center"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 text-gray-600 hover:text-[#F8BF0F] transition-all flex items-center justify-center"
              aria-label="Próximo depoimento"
            >
              <ChevronRight size={24} />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-12 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-[#F8BF0F] w-8' : 'bg-gray-200'
                  }`}
                  aria-label={`Ver depoimento ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          {/* Button to see all results */}
          <div className="text-center mt-12">
            <button 
              onClick={() => onNavigate?.('resultados')}
              className="text-[#034460] hover:text-[#F8BF0F] transition-colors text-sm tracking-wide group inline-flex items-center gap-2"
            >
              Ver Todos os Resultados 
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}