import { WhatsAppButton } from './WhatsAppButton';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

export function ResultsPage() {
  // Array completo de imagens de depoimentos
  const testimonialImages = [
    '/images/testimonials/testimonial1.png',
    '/images/testimonials/testimonial2.png',
    '/images/testimonials/testimonial5.png',
    '/images/testimonials/testimonial9.png',
    '/images/testimonials/testimonial16.png',
    '/images/testimonials/testimonial17.png',
    '/images/testimonials/testimonial18.png',
    '/images/testimonials/testimonial19.png',
    '/images/testimonials/testimonial20.png',
  ];

  return (
    <div className="min-h-screen bg-[#FFFBF0]">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-8 lg:px-16 py-16 text-center">
          <h1 className="mb-6 text-[#034460] text-4xl tracking-tight">Resultados Reais</h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed mb-6">
            Veja o que nossos alunos alcançaram em 2024
          </p>
          
          {/* Aviso sobre próximos depoimentos */}
          <div className="inline-block bg-[#FFFBF0] px-6 py-3 rounded-full border border-gray-200">
            <p className="text-[#034460] text-sm">
              ✨ Em breve: depoimentos de 2025
            </p>
          </div>
        </div>
      </section>

      {/* Grid de Depoimentos - Layout Masonry */}
      <section className="py-10 bg-[#FFFBF0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 768: 2, 1200: 3 }}
          >
            <Masonry gutter="1.25rem">
              {testimonialImages.map((image, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <img
                    src={image}
                    alt={`Depoimento ${index + 1}`}
                    className="w-full h-auto block"
                  />
                </div>
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-8 lg:px-16 text-center">
          <h2 className="mb-6 text-[#034460] text-3xl tracking-tight">
            Quer fazer parte dessas histórias?
          </h2>
          <p className="mb-10 text-lg text-gray-500 leading-relaxed">
            Comece sua jornada de aprendizado hoje mesmo.
          </p>
          <button 
            onClick={() => {
              const phoneNumber = '5512981075584';
              const message = encodeURIComponent('Olá, vi os resultados dos alunos e gostaria de saber mais sobre as aulas. Pode me ajudar?');
              window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
            }}
            className="bg-[#F8BF0F] text-[#034460] px-12 py-5 rounded-full hover:bg-[#e0ae00] transition-all duration-300 text-sm"
          >
            Agende sua Aula Experimental
          </button>
        </div>
      </section>

      <WhatsAppButton />
    </div>
  );
}