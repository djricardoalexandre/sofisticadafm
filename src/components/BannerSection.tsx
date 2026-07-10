import { Carousel, CarouselItem } from './Carousel';
import { BannerPlaceholder } from './BannerPlaceholder';

const placeholders = [
  {
    id: 1,
    title: 'Banner 1',
    subtitle: 'Insira sua imagem e link',
    imageUrl: 'https://images.pexels.com/photos/3785704/pexels-photo-3785704.jpeg?auto=compress&cs=tinysrgb&w=800',
    linkUrl: 'https://example.com/promo1',
  },
  {
    id: 2,
    title: 'Banner 2',
    subtitle: 'Insira sua imagem e link',
    imageUrl: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800',
    linkUrl: 'https://example.com/promo2',
  },
  {
    id: 3,
    title: 'Banner 3',
    subtitle: 'Insira sua imagem e link',
    imageUrl: 'https://images.pexels.com/photos/3785704/pexels-photo-3785704.jpeg?auto=compress&cs=tinysrgb&w=800',
    linkUrl: 'https://example.com/promo3',
  },
  {
    id: 4,
    title: 'Banner 4',
    subtitle: 'Insira sua imagem e link',
    imageUrl: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800',
    linkUrl: 'https://example.com/promo4',
  },
  {
    id: 5,
    title: 'Banner 5',
    subtitle: 'Insira sua imagem e link',
    imageUrl: 'https://images.pexels.com/photos/3785704/pexels-photo-3785704.jpeg?auto=compress&cs=tinysrgb&w=800',
    linkUrl: 'https://example.com/promo5',
  },
  {
    id: 6,
    title: 'Banner 6',
    subtitle: 'Insira sua imagem e link',
    imageUrl: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800',
    linkUrl: 'https://example.com/promo6',
  },
];

export function BannerSection() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <Carousel title="Ofertas Especiais">
          {placeholders.map((item) => (
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
