import { Play, Pause, Volume2, VolumeX, Loader2 } from 'lucide-react';
import { useAudioPlayer } from '../hooks/useAudioPlayer';

const STREAM_URL = 'https://stream.zeno.fm/asa9nfcu0a6tv';

const VU_BARS = 24;

export function AudioPlayer() {
  const { isPlaying, isLoading, volume, isMuted, togglePlay, setVolume, toggleMute } = useAudioPlayer(STREAM_URL);

  return (
    <div className="flex flex-col items-center gap-2 w-full max-w-3xl mx-auto px-4">
      {/* VU Meter */}
      <div className="flex items-end justify-center gap-[3px] h-8 w-full px-2">
        {Array.from({ length: VU_BARS }).map((_, i) => {
          const center = Math.abs(i - (VU_BARS - 1) / 2);
          const baseDelay = center * 0.06;
          const duration = 0.45 + (i % 3) * 0.15;
          return (
            <div
              key={i}
              className="w-[4px] rounded-full"
              style={{
                height: isPlaying ? '100%' : '12%',
                background: `linear-gradient(to top, #E60012, #FF4D5A)`,
                opacity: isPlaying ? 1 : 0.2,
                transformOrigin: 'bottom',
                transform: isPlaying ? 'scaleY(1)' : 'scaleY(0.12)',
                transition: 'opacity 0.4s ease, transform 0.4s ease',
                animation: isPlaying
                  ? `vuPulse ${duration}s ease-in-out ${baseDelay}s infinite alternate`
                  : 'none',
              }}
            />
          );
        })}
      </div>

      {/* Controls Row */}
      <div className="flex items-center gap-4 md:gap-6 w-full">
        {/* Play/Pause Button */}
        <button
          onClick={togglePlay}
          disabled={isLoading && !isPlaying}
          className={`w-12 h-12 md:w-14 md:h-14 rounded-full bg-brand-red hover:bg-brand-red-dark text-white flex items-center justify-center transition-all duration-200 hover:shadow-xl active:scale-95 disabled:opacity-70 flex-shrink-0 ${isPlaying ? 'animate-glow' : ''}`}
          aria-label={isPlaying ? 'Pausar' : 'Reproduzir'}
        >
          {isLoading && !isPlaying ? (
            <Loader2 className="w-5 h-5 md:w-6 md:h-6 animate-spin" />
          ) : isPlaying ? (
            <Pause className="w-5 h-5 md:w-6 md:h-6" />
          ) : (
            <Play className="w-5 h-5 md:w-6 md:h-6 ml-0.5" />
          )}
        </button>

        {/* Now Playing Info */}
        <div className="flex-1 min-w-0">
          <p className="text-white font-semibold text-sm md:text-base truncate tracking-tight">Sofisticada FM</p>
          <p className="text-white/50 text-xs md:text-sm truncate">Adulto Contemporânea</p>
        </div>

        {/* Volume Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleMute}
            className="text-white/70 hover:text-white transition-colors p-1"
            aria-label={isMuted ? 'Ativar som' : 'Mudo'}
          >
            {isMuted || volume === 0 ? (
              <VolumeX className="w-4 h-4 md:w-5 md:h-5" />
            ) : (
              <Volume2 className="w-4 h-4 md:w-5 md:h-5" />
            )}
          </button>

          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={isMuted ? 0 : volume}
            onChange={(e) => setVolume(parseFloat(e.target.value))}
            className="w-16 md:w-20 lg:w-24 h-1 rounded-full"
          />
        </div>

        {/* Live Indicator */}
        {isPlaying && (
          <div className="flex items-center gap-1.5 ml-1 flex-shrink-0">
            <span className="w-2 h-2 rounded-full bg-brand-red animate-live-pulse" />
            <span className="text-[10px] md:text-xs text-white font-semibold tracking-widest hidden sm:inline">AO VIVO</span>
          </div>
        )}
      </div>
    </div>
  );
}
