import { ExternalLink } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

interface MagaluOffer {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  linkUrl: string;
}

const offers: MagaluOffer[] = [
  {
    id: 1,
    title: 'Moda e Esportes',
    category: 'Estilo',
    imageUrl: 'https://images.pexels.com/photos/17938771/pexels-photo-17938771.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    linkUrl: 'https://www.magazinevoce.com.br/magazinein_435876/moda/l/md/',
  },
  {
    id: 2,
    title: 'Tecnologia',
    category: 'Inovação',
    imageUrl: 'https://images.pexels.com/photos/6373177/pexels-photo-6373177.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    linkUrl: 'https://www.magazinevoce.com.br/magazinein_435876/celulares-e-smartphones/l/te/',
  },
  {
    id: 3,
    title: 'Casa',
    category: 'Conforto',
    imageUrl: 'https://images.pexels.com/photos/38697210/pexels-photo-38697210.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    linkUrl: 'https://www.magazinevoce.com.br/magazinein_435876/moveis/l/mo/',
  },
  {
    id: 4,
    title: 'Beleza',
    category: 'Bem-estar',
    imageUrl: 'https://images.pexels.com/photos/21547037/pexels-photo-21547037.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    linkUrl: 'https://www.magazinevoce.com.br/magazinein_435876/beleza-perfumaria/l/pf/',
  },
  {
    id: 5,
    title: 'Eletro',
    category: 'Conectividade',
    imageUrl: 'https://images.pexels.com/photos/13844013/pexels-photo-13844013.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    linkUrl: 'https://www.magazinevoce.com.br/magazinein_435876/eletrodomesticos/l/ed/',
  },
  {
    id: 6,
    title: 'Ofertas do Dia',
    category: 'Elegância',
    imageUrl: 'https://images.pexels.com/photos/1327369/pexels-photo-1327369.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    linkUrl: 'https://www.magazinevoce.com.br/magazinein_435876/eletroportateis/l/ep/',
  },
];

export function MagaluSection() {
  const sectionRef = useReveal<HTMLDivElement>();

  return (
    <section ref={sectionRef} className="py-12 md:py-20 bg-ink-950">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="reveal text-xs font-semibold tracking-[0.3em] text-brand-red uppercase mb-4">
            Parceiro Oficial
          </p>
          <h2 className="reveal text-3xl md:text-5xl font-bold text-white tracking-tightest mb-4">
            Ofertas Magalu
          </h2>
          <p className="reveal text-ink-400 text-sm md:text-base max-w-md mx-auto">
            Uma seleção de produtos para o seu dia a dia, com a qualidade que você conhece.
          </p>
        </div>

        {/* Grid — 3 columns desktop, 2 tablet, 1 mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {offers.map((offer) => (
            <a
              key={offer.id}
              href={offer.linkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal group relative overflow-hidden rounded-2xl bg-ink-850 aspect-[4/5] block"
            >
              {/* Image */}
              <img
                src={offer.imageUrl}
                alt={offer.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover opacity-70 transition-all duration-700 ease-out group-hover:opacity-90 group-hover:scale-105"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/30 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-6">
                <p className="text-[10px] font-semibold tracking-[0.2em] text-brand-red uppercase mb-1.5">
                  {offer.category}
                </p>
                <h3 className="text-lg md:text-xl font-semibold text-white tracking-tight mb-3">
                  {offer.title}
                </h3>
                <div className="flex items-center gap-1.5 text-white/70 text-xs font-medium transition-all duration-300 group-hover:text-white group-hover:gap-2.5">
                  <span>Ver oferta</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Subtle top accent */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-brand-red scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
