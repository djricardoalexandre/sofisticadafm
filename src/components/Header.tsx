import { AudioPlayer } from './AudioPlayer';

export function Header() {
  return (
    <header className="bg-ink-950 sticky top-0 z-50 border-b border-white/[0.06] backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        {/* Logo Section */}
        <div className="flex items-center justify-center py-3 md:py-4">
          <img
            src="/logo_sofisticada copy.png"
            alt="Sofisticada FM"
            className="h-14 md:h-20 w-auto object-contain"
          />
        </div>

        {/* Audio Player Section */}
        <div className="py-2 md:py-3 border-t border-white/[0.04]">
          <AudioPlayer />
        </div>
      </div>
    </header>
  );
}
