import { ImageWithFallback } from './figma/ImageWithFallback';
import { WhatsAppButton } from './WhatsAppButton';
import { Target, Heart, Trophy } from 'lucide-react';
import isabelaPhoto from 'figma:asset/58b4822e0b3c2a6fc7f61bdaa04c516bbf7f8bf2.png';

export function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-8 lg:px-16 py-20 text-center">
          <h1 className="mb-8 text-[#034460] text-4xl tracking-tight">Quem Somos</h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Conheça nossa história e filosofia de ensino
          </p>
        </div>
      </section>

      {/* About Isabela */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-8 lg:px-16">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="mb-8 text-[#034460] text-3xl tracking-tight">Isabela Oliveira</h2>
              <p className="mb-6 text-gray-500 leading-relaxed text-sm">
                Olá! Sou a Isabela, fundadora da Minerva. Minha paixão por ensinar 
                inglês começou há mais de 10 anos, quando percebi o poder transformador 
                que o domínio de um novo idioma traz.
              </p>
              <p className="mb-6 text-gray-500 leading-relaxed text-sm">
                Formada em licenciatura, leciono inglês desde 2011 quando iniciei em um projeto social para alunos do curso de mecatrônica. Já auxiliei centenas de alunos a alcançarem seus objetivos, desde oportunidades profissionais até experiências internacionais.
              </p>
              <p className="mb-12 text-gray-500 leading-relaxed text-sm">
                Na Minerva, cada aluno é único e merece um ensino verdadeiramente 
                personalizado. Dedico-me a conhecer as necessidades individuais 
                e adaptar as aulas para garantir resultados excepcionais.
              </p>
              <div className="flex flex-col gap-4 mt-8">
                <div className="flex items-center gap-3 p-4 bg-white rounded-lg">
                  <div className="w-2 h-2 bg-[#F8BF0F] rounded-full"></div>
                  <span className="text-sm text-gray-600">Abordagem Comunicativa</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white rounded-lg">
                  <div className="w-2 h-2 bg-[#F8BF0F] rounded-full"></div>
                  <span className="text-sm text-gray-600">10+ anos de experiência</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white rounded-lg">
                  <div className="w-2 h-2 bg-[#F8BF0F] rounded-full"></div>
                  <span className="text-sm text-gray-600">Licenciada pela Unicamp</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="w-full max-w-sm">
                <div className="aspect-[3/4] overflow-hidden bg-gray-100">
                  <img
                    src={isabelaPhoto}
                    alt="Isabela Oliveira - Professora de Inglês"
                    className="w-full h-full object-cover hover:scale-105 transition-all duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-8 lg:px-16">
        <div className="h-px bg-gray-100"></div>
      </div>

      {/* Mission & Values */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-8 lg:px-16">
          <h2 className="text-center mb-12 text-[#034460] text-3xl tracking-tight">Filosofia</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gray-50 rounded-xl hover:bg-[#F8BF0F]/5 border-2 border-transparent hover:border-[#F8BF0F] transition-all duration-300">
              <div className="w-16 h-16 bg-[#034460]/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="text-[#034460]" size={28} />
              </div>
              <h3 className="mb-4 text-[#034460]">Missão</h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                Capacitar pessoas a se comunicarem com confiança, abrindo portas para 
                novas oportunidades.
              </p>
            </div>
            <div className="text-center p-8 bg-gray-50 rounded-xl hover:bg-[#F8BF0F]/5 border-2 border-transparent hover:border-[#F8BF0F] transition-all duration-300">
              <div className="w-16 h-16 bg-[#034460]/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="text-[#034460]" size={28} />
              </div>
              <h3 className="mb-4 text-[#034460]">Dedicação</h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                Cada aluno recebe atenção personalizada e um plano adaptado aos seus 
                objetivos específicos.
              </p>
            </div>
            <div className="text-center p-8 bg-gray-50 rounded-xl hover:bg-[#F8BF0F]/5 border-2 border-transparent hover:border-[#F8BF0F] transition-all duration-300">
              <div className="w-16 h-16 bg-[#034460]/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <Trophy className="text-[#034460]" size={28} />
              </div>
              <h3 className="mb-4 text-[#034460]">Excelência</h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                Comprometimento com qualidade, utilizando métodos atualizados e 
                material de primeira linha.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-8 lg:px-16">
        <div className="h-px bg-gray-100"></div>
      </div>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-8 lg:px-16 text-center">
          <h2 className="mb-6 text-[#034460] text-3xl tracking-tight">
            Junte-se a nós
          </h2>
          <p className="mb-10 text-lg text-gray-500 leading-relaxed">
            Transforme sua vida através do inglês.
          </p>
          <button 
            onClick={() => {
              const phoneNumber = '5512981075584';
              const message = encodeURIComponent('Olá, gostaria de saber mais sobre as aulas de idiomas. Pode me ajudar?');
              window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
            }}
            className="bg-[#F8BF0F] text-[#034460] px-12 py-5 rounded-full hover:bg-[#e0ae00] transition-all duration-300 text-sm"
          >
            Agende sua Aula
          </button>
        </div>
      </section>

      <WhatsAppButton />
    </div>
  );
}