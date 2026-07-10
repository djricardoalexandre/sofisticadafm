import { Carousel, CarouselItem } from './Carousel';
import { BannerPlaceholder } from './BannerPlaceholder';

const partners = [
  {
    id: 1,
    title: 'Parceiro 1',
    subtitle: 'Insira sua imagem e link',
    imageUrl: '/banner7.jpg',
    linkUrl: 'https://www.magazinevoce.com.br/magazinein_435876/selecao/ud_0607/',
  },
  {
    id: 2,
    title: 'Parceiro 2',
    subtitle: 'Insira sua imagem e link',
    imageUrl: '/banner8.jpg',
    linkUrl: 'https://www.magazinevoce.com.br/magazinein_435876/selecao/moveis_0607/',
  },
  {
    id: 3,
    title: 'Parceiro 3',
    subtitle: 'Insira sua imagem e link',
    imageUrl: '/banner9.jpg',
    linkUrl: 'https://www.magazinevoce.com.br/magazinein_435876/lojista/aliexpress/?page=1&sortOrientation=desc&sortType=soldQuantity',
  },
  {
    id: 4,
    title: 'Parceiro 4',
    subtitle: 'Insira sua imagem e link',
    imageUrl: '/banner10.jpg',
    linkUrl: 'https://www.magazinevoce.com.br/magazinein_435876/selecao/relampago1007/',
  },
  {
    id: 5,
    title: 'Parceiro 5',
    subtitle: 'Insira sua imagem e link',
    imageUrl: '/banner11.jpg',
    linkUrl: 'https://www.magazinevoce.com.br/magazinein_435876/selecao/ofertasdodia/?sortOrientation=desc&sortType=soldQuantity&filters=review---4',
  },
  {
    id: 6,
    title: 'Parceiro 6',
    subtitle: 'Insira sua imagem e link',
    imageUrl: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800',
    linkUrl: 'https://example.com/parceiro6',
  },
];

export function PartnersSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-neutral-50 to-white">
      <div className="max-w-7xl mx-auto">
        <Carousel title="Parceiros & Promoções">
          {partners.map((item) => (
            <CarouselItem key={item.id}>
              <BannerPlaceholder
                title={item.title}
                subtitle={item.subtitle}
                imageUrl={item.imageUrl}
                linkUrl={item.linkUrl}
                size="large"
              />
            </CarouselItem>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
