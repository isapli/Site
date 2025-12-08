import { WhatsAppButton } from './WhatsAppButton';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import testimonial1 from 'figma:asset/85d66f75a994ac6b3d3b6940925c426c351554c5.png';
import testimonial2 from 'figma:asset/485ed39894f98286f74595b1d15ff99c960093be.png';
import testimonial5 from 'figma:asset/994fdf4e3361dad396994ee08d9d5aa5888f0631.png';
import testimonial9 from 'figma:asset/8cafe1b1f01b6631131fbdd7b3bc2512c85bdc3a.png';
import testimonial16 from 'figma:asset/e762ab89fc184438191190bc2fd2e664bcb04f7c.png';
import testimonial17 from 'figma:asset/3c70654d8b1503243c71723e3d8c9faae877b0c6.png';
import testimonial18 from 'figma:asset/afa71c77f550c63e02b370648e8ae6d4d1b5c26c.png';
import testimonial19 from 'figma:asset/7c128afd705447b03a6fe9e3f8d87d06e1e6663e.png';
import testimonial20 from 'figma:asset/950fae6f669b18eef3bf5fbb95cc8e5c1bfcb7d8.png';

export function ResultsPage() {
  // Array completo de imagens de depoimentos
  const testimonialImages = [
    testimonial1,
    testimonial2,
    testimonial5,
    testimonial9,
    testimonial16,
    testimonial17,
    testimonial18,
    testimonial19,
    testimonial20,
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