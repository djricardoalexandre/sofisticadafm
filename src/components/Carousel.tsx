import { ReactNode, useRef, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps {
  children: ReactNode;
  className?: string;
  title?: string;
  autoplay?: boolean;
  interval?: number;
}

export function Carousel({
  children,
  className = '',
  title,
  autoplay = true,
  interval = 3000,
}: CarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeftStart = useRef(0);
  const [isPaused, setIsPaused] = useState(false);

  const childCount = Array.isArray(children) ? children.length : 1;
  const tripleChildren = Array.isArray(children)
    ? [...children, ...children, ...children]
    : [children, children, children];

  useEffect(() => {
    if (scrollRef.current && containerRef.current) {
      const firstItem = scrollRef.current.querySelector('.carousel-item');
      if (firstItem) {
        const itemWidth = firstItem.clientWidth;
        const gap = 16;
        const singleSetWidth = childCount * (itemWidth + gap);
        scrollRef.current.scrollLeft = singleSetWidth;
      }
    }
  }, [childCount]);

  // Autoplay effect
  useEffect(() => {
    if (!autoplay || isPaused) return;
    const timer = setInterval(() => {
      if (!scrollRef.current || isDragging.current) return;
      const firstItem = scrollRef.current.querySelector('.carousel-item');
      if (!firstItem) return;
      const itemWidth = (firstItem as HTMLElement).offsetWidth + 16;
      scrollRef.current.scrollBy({ left: itemWidth, behavior: 'smooth' });
    }, interval);
    return () => clearInterval(timer);
  }, [autoplay, interval, isPaused, childCount]);

  // Infinite loop reset after scroll
  const handleInfiniteLoop = () => {
    if (!scrollRef.current) return;
    const firstItem = scrollRef.current.querySelector('.carousel-item');
    if (!firstItem) return;

    const itemWidth = (firstItem as HTMLElement).offsetWidth;
    const gap = 16;
    const singleSetWidth = childCount * (itemWidth + gap);
    const currentScroll = scrollRef.current.scrollLeft;

    if (currentScroll >= singleSetWidth * 2) {
      scrollRef.current.style.scrollBehavior = 'auto';
      scrollRef.current.scrollLeft = currentScroll - singleSetWidth;
      requestAnimationFrame(() => {
        if (scrollRef.current) scrollRef.current.style.scrollBehavior = 'smooth';
      });
    } else if (currentScroll < singleSetWidth / 2) {
      scrollRef.current.style.scrollBehavior = 'auto';
      scrollRef.current.scrollLeft = currentScroll + singleSetWidth;
      requestAnimationFrame(() => {
        if (scrollRef.current) scrollRef.current.style.scrollBehavior = 'smooth';
      });
    }
  };

  // Monitor scroll for infinite loop reset
  useEffect(() => {
    const scrollEl = scrollRef.current;
    if (!scrollEl) return;
    let timeout: ReturnType<typeof setTimeout>;
    const handleScroll = () => {
      clearTimeout(timeout);
      timeout = setTimeout(handleInfiniteLoop, 150);
    };
    scrollEl.addEventListener('scroll', handleScroll);
    return () => {
      scrollEl.removeEventListener('scroll', handleScroll);
      clearTimeout(timeout);
    };
  }, [childCount]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    isDragging.current = true;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeftStart.current = scrollRef.current.scrollLeft;
    scrollRef.current.style.cursor = 'grabbing';
    scrollRef.current.style.scrollBehavior = 'auto';
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    scrollRef.current.scrollLeft = scrollLeftStart.current - walk;
  };

  const handleMouseUp = () => {
    if (!scrollRef.current) return;
    isDragging.current = false;
    scrollRef.current.style.cursor = 'grab';
    scrollRef.current.style.scrollBehavior = 'smooth';
    handleInfiniteLoop();
  };

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => {
    setIsPaused(false);
    if (isDragging.current) handleMouseUp();
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!scrollRef.current) return;
    isDragging.current = true;
    startX.current = e.touches[0].pageX - scrollRef.current.offsetLeft;
    scrollLeftStart.current = scrollRef.current.scrollLeft;
    scrollRef.current.style.scrollBehavior = 'auto';
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    scrollRef.current.scrollLeft = scrollLeftStart.current - walk;
  };

  const handleTouchEnd = () => {
    if (!scrollRef.current) return;
    isDragging.current = false;
    scrollRef.current.style.scrollBehavior = 'smooth';
    handleInfiniteLoop();
  };

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const firstItem = scrollRef.current.querySelector('.carousel-item');
    if (!firstItem) return;

    const itemWidth = (firstItem as HTMLElement).offsetWidth + 16;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -itemWidth : itemWidth,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className={`relative ${className}`}
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {title && (
        <h2 className="text-xl font-semibold text-neutral-900 mb-4 px-4 md:px-0">
          {title}
        </h2>
      )}

      <button
        onClick={() => scroll('left')}
        className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg items-center justify-center text-neutral-700 hover:bg-neutral-100 transition-colors border border-neutral-200"
        aria-label="Anterior"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={() => scroll('right')}
        className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg items-center justify-center text-neutral-700 hover:bg-neutral-100 transition-colors border border-neutral-200"
        aria-label="Próximo"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      <div
        ref={scrollRef}
        className="flex overflow-x-auto scrollbar-hide gap-4 px-4 md:px-12 cursor-grab select-none scroll-smooth"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch',
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {Array.isArray(children) ? tripleChildren : children}
      </div>

      <div className="flex justify-center gap-2 mt-4 md:hidden">
        {Array.isArray(children) &&
          children.map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 rounded-full bg-neutral-300"
            />
          ))}
      </div>
    </div>
  );
}

export function CarouselItem({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`carousel-item flex-shrink-0 ${className}`}
    >
      {children}
    </div>
  );
}
