import { Radio, Instagram, Facebook, Youtube, Music2 } from 'lucide-react';

const socialLinks = [
  { icon: Instagram, label: 'Instagram', href: 'https://instagram.com' },
  { icon: Facebook, label: 'Facebook', href: 'https://facebook.com' },
  { icon: Youtube, label: 'YouTube', href: 'https://youtube.com' },
  { icon: Music2, label: 'TikTok', href: 'https://tiktok.com' },
];

export function Footer() {
  return (
    <footer className="bg-ink-950 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="flex flex-col items-center gap-8">
          {/* Logo */}
          <img
            src="/logo_sofisticada copy.png"
            alt="Sofisticada FM"
            className="h-16 md:h-20 w-auto object-contain opacity-90"
          />

          {/* Brand */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-1">
              <div className="w-8 h-8 rounded-lg bg-brand-red flex items-center justify-center">
                <Radio className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-lg text-white tracking-tight">Sofisticada FM</span>
            </div>
            <p className="text-xs text-ink-400 tracking-wide">A rádio premium</p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-ink-850 border border-white/[0.06] flex items-center justify-center text-ink-300 hover:text-white hover:bg-ink-750 hover:border-brand-red/30 transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/[0.04] mt-10 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
            <p className="text-xs text-ink-400">
              Powered by{' '}
              <span className="font-semibold text-white">Souza Beats</span>
            </p>
            <p className="text-xs text-ink-500">
              © {new Date().getFullYear()} Sofisticada FM. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
