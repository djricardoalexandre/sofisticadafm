import { Image, ExternalLink } from 'lucide-react';

interface BannerPlaceholderProps {
  title: string;
  subtitle?: string;
  imageUrl?: string;
  linkUrl?: string;
  size?: 'large' | 'medium' | 'small';
}

export function BannerPlaceholder({
  title,
  subtitle,
  imageUrl,
  linkUrl,
  size = 'large',
}: BannerPlaceholderProps) {
  const sizes = {
    large: 'w-80 h-40 md:w-96 md:h-48',
    medium: 'w-64 h-32 md:w-72 md:h-36',
    small: 'w-48 h-24 md:w-56 md:h-28',
  };

  const content = imageUrl ? (
    <img
      src={imageUrl}
      alt={title}
      className={`${sizes[size]} rounded-xl object-cover transition-all duration-300 hover:shadow-lg group-hover:opacity-90`}
    />
  ) : (
    <div
      className={`${sizes[size]} rounded-xl border-2 border-brand-red bg-gradient-to-br from-neutral-100 to-neutral-200 flex flex-col items-center justify-center gap-2 transition-all duration-300 hover:border-brand-red-dark hover:shadow-lg group relative overflow-hidden`}
    >
      <div className="text-neutral-400 group-hover:text-neutral-500 transition-colors">
        <Image className="w-8 h-8" />
      </div>
      <p className="text-sm font-medium text-neutral-600 text-center px-3">
        {title}
      </p>
      {subtitle && (
        <p className="text-xs text-neutral-400 text-center px-3">
          {subtitle}
        </p>
      )}
      <div className="absolute top-0 right-0 w-16 h-16 bg-brand-red/10 rounded-bl-full" />
    </div>
  );

  if (linkUrl) {
    return (
      <a
        href={linkUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block group relative"
      >
        {content}
        <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-white/80 rounded-full p-1">
          <ExternalLink className="w-4 h-4 text-brand-red" />
        </div>
      </a>
    );
  }

  return content;
}
