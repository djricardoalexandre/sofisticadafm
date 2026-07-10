import { AudioPlayer } from './AudioPlayer';

export function Header() {
  return (
    <header className="bg-neutral-900 sticky top-0 z-50 shadow-xl">
      <div className="max-w-7xl mx-auto">
        {/* Logo Section */}
        <div className="flex items-center justify-center py-3 border-b border-neutral-800">
          <img
            src="/logo_sofisticada copy.png"
            alt="Sofisticada FM"
            className="h-20 md:h-28 w-auto object-contain drop-shadow-[0_0_18px_rgba(230,0,18,0.5)]"
          />
        </div>

        {/* Audio Player Section */}
        <div className="py-4 bg-gradient-to-r from-neutral-800 to-neutral-900">
          <AudioPlayer />
        </div>
      </div>
    </header>
  );
}
