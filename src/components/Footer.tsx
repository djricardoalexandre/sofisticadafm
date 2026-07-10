import { MessageCircle, MapPin, Radio } from 'lucide-react';

export function Footer() {
  const whatsappNumber = '31983532534';
  const whatsappFormatted = '(31) 98353-2534';
  const whatsappLink = `https://wa.me/${whatsappNumber}`;
  const location = 'Rio Espera - MG';

  return (
    <footer className="bg-neutral-900 text-white py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-brand-red flex items-center justify-center">
              <Radio className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="font-bold text-lg">Sofisticada FM</span>
              <p className="text-xs text-neutral-400">Sua rádio premium</p>
            </div>
          </div>

          {/* Contact & Location */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            {/* WhatsApp */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-neutral-300 hover:text-white transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="font-medium">{whatsappFormatted}</span>
            </a>

            {/* Location */}
            <div className="flex items-center gap-2 text-neutral-400">
              <MapPin className="w-5 h-5" />
              <span>{location}</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-neutral-800 my-6" />

        {/* Developer Credit */}
        <div className="text-center">
          <p className="text-sm text-neutral-400">
            Desenvolvido pela{' '}
            <span className="font-semibold text-white">Souza Beats Produtora</span>{' '}
            {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
