import { Header, BannerSection, PartnersSection, Footer } from './components';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section with Gradient */}
        <section className="bg-gradient-to-b from-neutral-100 to-white py-8">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-4xl font-bold text-neutral-900 mb-2">
              Bem-vindo à Sofisticada FM
            </h2>
            <p className="text-lg text-neutral-600 max-w-xl mx-auto">
              A melhor seleção de música adulto contemporânea para você, 24 horas por dia.
            </p>
          </div>
        </section>

        {/* Banner Section */}
        <BannerSection />

        {/* Partners Section */}
        <PartnersSection />

        {/* About Section */}
        <section className="py-12 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-xl md:text-2xl font-bold text-neutral-900 mb-4">
              Nossa História
            </h3>
            <p className="text-neutral-600 leading-relaxed">
              A Sofisticada FM traz para você a melhor seleção de músicas do estilo Adulto Contemporânea,
              proporcionando momentos de qualidade, nostalgia e sofisticação. Nossa programação é cuidadosamente
              curada para oferecer o melhor da música brasileira e internacional.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
