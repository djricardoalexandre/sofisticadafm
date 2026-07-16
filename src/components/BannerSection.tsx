import { Carousel, CarouselItem } from './Carousel';
import { BannerPlaceholder } from './BannerPlaceholder';

const placeholders = [
  {
    id: 1,
    title: 'Banner 1',
    subtitle: 'Insira sua imagem e link',
    imageUrl: '/banner1.jpg',
    linkUrl: 'https://www.awin1.com/cread.php?awinmid=108626&awinaffid=2978615',
  },
  {
    id: 2,
    title: 'Banner 2',
    subtitle: 'Insira sua imagem e link',
    imageUrl: '/banner3.jpg',
    linkUrl: 'https://www.awin1.com/cread.php?awinmid=51271&awinaffid=1768964&campaign=Promo%C3%A7%C3%A3o',
  },
  {
    id: 3,
    title: 'Banner 3',
    subtitle: 'Insira sua imagem e link',
    imageUrl: '/banner3.jpg',
    linkUrl: 'https://www.awin1.com/cread.php?awinmid=51271&awinaffid=1768964&campaign=Promo%C3%A7%C3%A3o',
  },
  {
    id: 4,
    title: 'Banner 4',
    subtitle: 'Insira sua imagem e link',
    imageUrl: '/banner4.jpg',
    linkUrl: 'https://www.awin1.com/cread.php?awinmid=70963&awinaffid=1768964&campaign=Home+Calzedonia',
  },
  {
    id: 5,
    title: 'Banner 5',
    subtitle: 'Insira sua imagem e link',
    imageUrl: '/banner5.jpg',
    linkUrl: 'https://www.awin1.com/cread.php?awinmid=17729&awinaffid=1768964&campaign=Black+Friday',
  },
  {
    id: 6,
    title: 'Banner 6',
    subtitle: 'Insira sua imagem e link',
    imageUrl: '/banner6.jpg',
    linkUrl: 'https://www.magazinevoce.com.br/magazinein_435876/selecao/tvs_0607/',
  },
];

export function BannerSection() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <Carousel title="Ofertas imperdíveis: clique no banner e confira">
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
