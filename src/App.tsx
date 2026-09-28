import { useEffect, useRef, useState } from 'react';
import {
  ArrowUpRight,
  ChevronRight,
  Headphones,
  Menu,
  MessageCircle,
  Pause,
  Play,
  Radio,
  ShoppingBag,
  Sparkles,
  Trophy,
  X,
  Zap,
} from 'lucide-react';

const logo = '/ChatGPT_Image_17_de_jul._de_2026,_20_18_25-200x200.jpg';
const streamUrl = 'https://stream.zeno.fm/asa9nfcu0a6tv';
const shoppingUrl = 'https://www.magazinevoce.com.br/magazinein_435876/';
const marketingUrl = 'https://souzabeatsmarketing.netlify.app/';
const whatsappUrl = 'https://wa.me/5531983532534';

const topTracks = [
  ['01', 'Michael Jackson', 'Human Nature', 'Pop adulto'],
  ['02', 'Madonna', 'Like a Prayer', 'Pop clássico'],
  ['03', 'Titãs', 'Epitáfio', 'Rock nacional'],
  ['04', 'Cazuza', 'Codinome Beija-Flor', 'Rock nacional'],
  ['05', 'Marisa Monte', 'Ainda Bem', 'MPB'],
  ['06', 'Elton John', 'Your Song', 'Flashback'],
  ['07', 'Simply Red', 'Stars', 'Pop internacional'],
  ['08', 'Rita Lee', 'Mania de Você', 'Clássicos'],
  ['09', 'Phil Collins', 'Against All Odds', 'Adult contemporary'],
  ['10', 'Lulu Santos', 'Como Uma Onda', 'Sucessos nacionais'],
];

const news = [
  { tag: 'CURADORIA', title: 'Grandes clássicos continuam atravessando gerações', date: 'Programação Sofisticada', copy: 'Uma seleção que conecta memórias, vozes marcantes e o melhor da música adulta.' },
  { tag: 'SINTONIA', title: 'Uma trilha sonora para todos os seus momentos', date: 'Especial Sofisticada FM', copy: 'Do primeiro café ao fim do dia: descubra uma programação feita para acompanhar você.' },
  { tag: 'EXPERIÊNCIA', title: 'Sua rádio premium, agora em qualquer tela', date: 'Sofisticada FM', copy: 'Leve a Sofisticada FM com você e ouça uma curadoria elegante, 24 horas por dia.' },
];

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [installPrompt, setInstallPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const handler = (event: Event) => {
      event.preventDefault();
      setInstallPrompt(event as BeforeInstallPromptEvent);
    };
    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const togglePlay = async () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      return;
    }
    try {
      await audioRef.current.play();
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  };

  const handleInstall = async () => {
    if (!installPrompt) return;
    await installPrompt.prompt();
    setInstallPrompt(null);
  };

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="app-shell">
      <audio ref={audioRef} src={streamUrl} onPause={() => setIsPlaying(false)} onPlay={() => setIsPlaying(true)} />
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="site-header">
        <a className="brand" href="#inicio" onClick={closeMenu}>
          <span className="brand-mark"><img src={logo} alt="Logo Sofisticada FM" /></span>
          <span className="brand-copy"><strong>SOFISTICADA <em>FM</em></strong><small>A SUA RÁDIO PREMIUM</small></span>
        </a>
        <button className="menu-button" aria-label="Abrir menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>{isMenuOpen ? <X /> : <Menu />}</button>
        <nav className={isMenuOpen ? 'main-nav open' : 'main-nav'}>
          {['Início', 'Ouça agora', 'Top 10', 'Notícias', 'Shopping', 'Marketing', 'Contato'].map((item) => {
            const ids: Record<string, string> = { 'Início': 'inicio', 'Ouça agora': 'ouca-agora', 'Top 10': 'top-10', 'Notícias': 'noticias', Shopping: 'shopping', Marketing: 'marketing', Contato: 'contato' };
            return <a key={item} href={`#${ids[item]}`} onClick={closeMenu}>{item}</a>;
          })}
        </nav>
        <a className="header-live" href="#ouca-agora"><span className="live-dot" /> Ao vivo</a>
      </header>

      <main>
        <section id="inicio" className="hero section-wrap">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-line" /> EXPERIÊNCIA SONORA PREMIUM</div>
            <h1>Mais que música.<br /><span>Uma atmosfera.</span></h1>
            <p className="hero-text">A Sofisticada FM toca o melhor da música nacional e internacional adulta, 24 horas, com a elegância que combina com o seu momento.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#ouca-agora" onClick={() => { setTimeout(() => void togglePlay(), 300); }}><Play size={17} fill="currentColor" /> Ouça ao vivo</a>
              <a className="text-link" href="#top-10">Descubra a programação <ChevronRight size={16} /></a>
            </div>
            <div className="hero-proof"><div className="avatar-stack"><span>♪</span><span>♫</span><span>◉</span></div><span>Uma curadoria que<br /><b>faz parte do seu dia.</b></span></div>
          </div>
          <div className="hero-art">
            <div className="hero-grid" />
            <div className="orbit orbit-one" /><div className="orbit orbit-two" />
            <div className="logo-disc"><div className="disc-ring" /><img src={logo} alt="Sofisticada FM" /></div>
            <div className="floating-note note-one">♪</div><div className="floating-note note-two">♫</div>
            <div className="hero-badge"><span className="live-dot" /> TRANSMITINDO<br /><strong>24 HORAS</strong></div>
          </div>
        </section>

        <section id="ouca-agora" className="player-section section-wrap">
          <div className="section-kicker"><Radio size={16} /> SUA TRILHA SONORA</div>
          <div className="player-card">
            <div className="player-main"><div className="player-art"><img src={logo} alt="Sofisticada FM" /><span className="art-live"><span className="live-dot" /> LIVE</span></div><div className="player-info"><span className="live-label"><i /> AO VIVO AGORA</span><h2>Sofisticada FM</h2><p>A sua rádio premium <span>·</span> 24 horas</p><div className={isPlaying ? 'equalizer playing' : 'equalizer'}>{[1,2,3,4,5,6,7,8,9,10,11,12].map((bar) => <i key={bar} />)}</div></div></div>
            <button className="play-button" onClick={togglePlay} aria-label={isPlaying ? 'Pausar rádio' : 'Tocar rádio'}>{isPlaying ? <Pause fill="currentColor" /> : <Play fill="currentColor" />}</button>
            <div className="player-meta"><span><span className="signal-icon">◉</span> Sinal digital</span><span className="volume-bars"><i /><i /><i /><i /><i /></span></div>
          </div>
        </section>

        <section id="top-10" className="content-section section-wrap">
          <div className="section-heading"><div><div className="section-kicker"><Trophy size={16} /> SELEÇÃO DA CASA</div><h2>Top 10 <span>Sofisticada FM</span></h2><p>Os grandes sucessos que fazem parte da nossa programação.</p></div><a href="#ouca-agora" className="round-arrow"><ArrowUpRight size={20} /></a></div>
          <div className="tracks-grid">{topTracks.map(([position, artist, song, genre]) => <button className="track-card" key={position} onClick={togglePlay}><span className="track-number">{position}</span><span className="track-cover"><span>{artist.split(' ').map((word) => word[0]).join('').slice(0, 2)}</span></span><span className="track-details"><b>{artist}</b><strong>{song}</strong><small>{genre}</small></span><span className="track-play"><Play size={14} fill="currentColor" /></span></button>)}</div>
        </section>

        <section id="noticias" className="content-section section-wrap news-section">
          <div className="section-heading"><div><div className="section-kicker"><Sparkles size={16} /> UNIVERSO SOFISTICADA</div><h2>Notícias & <span>inspiração</span></h2><p>Conteúdos para deixar seu dia ainda mais especial.</p></div><span className="rss-ready">RSS PRONTO <i /></span></div>
          <div className="news-grid">{news.map((item, index) => <article className={`news-card news-${index + 1}`} key={item.title}><div className="news-visual"><span>{String(index + 1).padStart(2, '0')}</span><div className="visual-wave" /></div><div className="news-body"><small>{item.tag} <i /> {item.date}</small><h3>{item.title}</h3><p>{item.copy}</p><button className="news-link" onClick={() => document.getElementById('ouca-agora')?.scrollIntoView({ behavior: 'smooth' })}>Ler notícia <ArrowUpRight size={15} /></button></div></article>)}</div>
        </section>

        <section className="promos section-wrap">
          <a id="shopping" className="promo-card shopping-card" href={shoppingUrl} target="_blank" rel="noreferrer"><div className="promo-glow" /><div className="promo-icon"><ShoppingBag size={24} /></div><span className="promo-label">SHOPPING SOFISTICADA FM</span><h2>Ofertas que<br /><em>combinam com você.</em></h2><p>Produtos selecionados para deixar sua rotina mais sofisticada.</p><span className="promo-button">Ver ofertas <ArrowUpRight size={16} /></span><div className="promo-orb orb-gold" /></a>
          <a id="marketing" className="promo-card marketing-card" href={marketingUrl} target="_blank" rel="noreferrer"><div className="promo-icon"><Zap size={24} /></div><span className="promo-label">SOUZA BEATS MARKETING</span><h2>Ideias que<br /><em>ganham vida.</em></h2><p>Marketing, sites e soluções digitais para empresas.</p><span className="promo-button">Conheça a Souza Beats <ArrowUpRight size={16} /></span><div className="promo-orb orb-blue" /></a>
        </section>

        <section id="contato" className="contact section-wrap"><div className="contact-inner"><div><div className="section-kicker"><MessageCircle size={16} /> CONEXÃO DIRETA</div><h2>Vamos conversar?</h2><p>Quer anunciar, sugerir uma música ou simplesmente dizer olá? A Sofisticada FM está a uma mensagem de distância.</p></div><a className="whatsapp-button" href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={22} /> Fale conosco pelo WhatsApp <ArrowUpRight size={18} /></a></div></section>
      </main>

      <footer className="site-footer"><div className="footer-main"><a className="brand" href="#inicio"><span className="brand-mark"><img src={logo} alt="Logo Sofisticada FM" /></span><span className="brand-copy"><strong>SOFISTICADA <em>FM</em></strong><small>A SUA RÁDIO PREMIUM</small></span></a><p>Tocando o melhor da música nacional e internacional adulta 24 horas.</p><div className="footer-links"><a href="#ouca-agora">Ouça ao vivo</a><a href="#top-10">Top 10</a><a href="#noticias">Notícias</a><a href={shoppingUrl} target="_blank" rel="noreferrer">Shopping</a><a href={marketingUrl} target="_blank" rel="noreferrer">Marketing</a><a href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp</a></div></div><div className="footer-bottom"><span>© 2026 Sofisticada FM. A sua rádio premium.</span><span>Desenvolvido com tecnologia e soluções digitais por <a href={marketingUrl} target="_blank" rel="noreferrer">Souza Beats Marketing</a></span></div></footer>
      <a className="floating-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Fale pelo WhatsApp"><MessageCircle size={23} /></a>
      {installPrompt && <button className="install-button" onClick={handleInstall}><Headphones size={16} /> Instalar Sofisticada FM</button>}
    </div>
  );
}

type BeforeInstallPromptEvent = Event & { prompt: () => Promise<void>; userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }> };

export default App;
