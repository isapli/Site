import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
  const handleClick = () => {
    const phoneNumber = '5512981075584';
    const message = encodeURIComponent('Olá, gostaria de saber mais sobre as aulas de idiomas. Pode me ajudar?');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 z-50"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle size={28} />
    </button>
  );
}