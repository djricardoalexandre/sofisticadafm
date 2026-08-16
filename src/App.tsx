import { Header, MagaluSection, Footer } from './components';
import { useReveal } from './hooks/useReveal';

function Hero() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section ref={ref} className="relative bg-ink-950 overflow-hidden">
      {/* Subtle ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-brand-red/[0.07] blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 py-24 md:py-36 text-center">
        <p className="reveal text-xs font-semibold tracking-[0.35em] text-brand-red uppercase mb-6">
          Adulto Contemporânea
        </p>
        <h1 className="reveal text-4xl md:text-7xl font-bold text-white tracking-tightest leading-[1.1] mb-6">
          Música que<br />define o momento.
        </h1>
        <p className="reveal text-base md:text-lg text-ink-300 max-w-lg mx-auto font-light">
          Uma experiência sonora refinada, curada para quem aprecia o melhor da música — 24 horas por dia.
        </p>
      </div>
    </section>
  );
}

function About() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section ref={ref} className="bg-ink-900 py-20 md:py-28 border-y border-white/[0.04]">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <p className="reveal text-xs font-semibold tracking-[0.3em] text-brand-red uppercase mb-4">
          Nossa Essência
        </p>
        <h2 className="reveal text-2xl md:text-4xl font-bold text-white tracking-tightest mb-6">
          Sofisticação em cada nota
        </h2>
        <p className="reveal text-ink-300 text-sm md:text-base leading-relaxed font-light">
          A Sofisticada FM traz uma programação cuidadosamente curada, unindo o melhor da música
          brasileira e internacional. Para quem busca qualidade, elegância e uma trilha sonora que
          eleva cada momento do dia.
        </p>
      </div>
    </section>
  );
}

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-ink-950">
      <Header />
      <main className="flex-1">
        <MagaluSection />
        <Hero />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
