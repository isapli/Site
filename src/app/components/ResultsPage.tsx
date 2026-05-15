import { WhatsAppButton } from './WhatsAppButton';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import Slider from 'react-slick';
import testimonial1 from 'figma:asset/85d66f75a994ac6b3d3b6940925c426c351554c5.png';
import testimonial2 from 'figma:asset/485ed39894f98286f74595b1d15ff99c960093be.png';
import testimonial5 from 'figma:asset/994fdf4e3361dad396994ee08d9d5aa5888f0631.png';
import testimonial9 from 'figma:asset/8cafe1b1f01b6631131fbdd7b3bc2512c85bdc3a.png';
import testimonial16 from 'figma:asset/e762ab89fc184438191190bc2fd2e664bcb04f7c.png';
import testimonial17 from 'figma:asset/3c70654d8b1503243c71723e3d8c9faae877b0c6.png';
import testimonial18 from 'figma:asset/afa71c77f550c63e02b370648e8ae6d4d1b5c26c.png';
import testimonial19 from 'figma:asset/7c128afd705447b03a6fe9e3f8d87d06e1e6663e.png';
import testimonial20 from 'figma:asset/950fae6f669b18eef3bf5fbb95cc8e5c1bfcb7d8.png';
import newTestimonial6 from '../../imports/6.png';
import newTestimonial8 from '../../imports/8.png';
import newTestimonial9 from '../../imports/9.png';
import newTestimonialGiovana from '../../imports/Avalia__es_2026.png';
import testimonialBarbara from '../../imports/3.png';
import photoBarbara from '../../imports/WhatsApp_Image_2026-05-06_at_11.41.55.jpeg';
import testimonialJackson from '../../imports/4.png';
import photoJackson from '../../imports/WhatsApp_Image_2026-05-07_at_11.30.46.jpeg';
import testimonialKauane from '../../imports/5.png';
import photoKauane from '../../imports/WhatsApp_Image_2026-05-12_at_09.49.41.jpeg';
import testimonialCrislane from '../../imports/7-1.png';
import photoCrislane from '../../imports/WhatsApp_Image_2026-05-06_at_17.08.49.jpeg';
import testimonialCarlos from '../../imports/2.png';
import photoCarlos from '../../imports/WhatsApp_Image_2026-05-12_at_12.33.33.jpeg';

export function ResultsPage() {
  // Novos depoimentos sem foto
  const newTestimonials = [
    newTestimonialGiovana,
    newTestimonial6,
    newTestimonial8,
    newTestimonial9,
  ];

  // Depoimentos com foto do aluno
  const testimonialsWithPhoto = [
    {
      testimonial: testimonialBarbara,
      photo: photoBarbara,
      name: 'Bárbara A.'
    },
    {
      testimonial: testimonialCrislane,
      photo: photoCrislane,
      name: 'Crislane B.'
    },
    {
      testimonial: testimonialKauane,
      photo: photoKauane,
      name: 'Kauane S.'
    },
    {
      testimonial: testimonialJackson,
      photo: photoJackson,
      name: 'Jackson T.'
    },
    {
      testimonial: testimonialCarlos,
      photo: photoCarlos,
      name: 'Carlos D.'
    }
  ];

  // Array completo de imagens de depoimentos de 2025
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

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: true,
  };

  return (
    <div className="min-h-screen bg-[#FFFBF0]">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-8 lg:px-16 py-16 text-center">
          <h1 className="mb-6 text-[#034460] text-4xl tracking-tight">Resultados Reais</h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Conquistas e aprovações dos nossos alunos
          </p>
        </div>
      </section>

      {/* Novos Depoimentos */}
      <section className="py-10 bg-[#FFFBF0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-center mb-8 text-[#034460] text-2xl font-bold tracking-tight">
            Veja o que nossos alunos alcançaram em 2026
          </h2>

          {/* Carrossel de depoimentos com foto do aluno */}
          <div className="mb-12 testimonials-carousel px-8">
            <Slider {...sliderSettings}>
              {testimonialsWithPhoto.map((item, index) => (
                <div key={`with-photo-${index}`} className="outline-none">
                  <div className="mx-4">
                    <div className="bg-white rounded-lg shadow-sm p-8">
                      <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
                        <div className="flex-shrink-0">
                          <img
                            src={item.photo}
                            alt={item.name}
                            className="w-56 h-56 md:w-72 md:h-72 object-cover rounded-lg"
                            loading="eager"
                          />
                        </div>
                        <div className="flex items-center justify-center flex-1">
                          <img
                            src={item.testimonial}
                            alt={`Depoimento de ${item.name}`}
                            className="max-w-[90%] md:max-w-[82%] h-auto"
                            loading="eager"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          {/* Separador visual */}
          <div className="flex items-center gap-4 mb-12">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
            <div className="flex-shrink-0">
              <div className="w-2 h-2 rounded-full bg-[#034460]"></div>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
          </div>

          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 768: 2, 1200: 3 }}
          >
            <Masonry gutter="1.25rem">
              {newTestimonials.map((image, index) => (
                <div
                  key={`new-${index}`}
                  className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <img
                    src={image}
                    alt={`Novo depoimento ${index + 1}`}
                    className="w-full h-auto block"
                  />
                </div>
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </section>

      {/* Depoimentos de 2025 */}
      <section className="py-10 bg-[#FFFBF0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-center mb-8 text-[#034460] text-2xl font-bold tracking-tight">
            Veja o que nossos alunos alcançaram em 2025
          </h2>

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