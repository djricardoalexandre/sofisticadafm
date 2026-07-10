import { useRef, useEffect, useState, useCallback } from 'react';

interface UseInfiniteCarouselOptions {
  itemWidth: number;
  gap: number;
  itemCount: number;
  autoplaySpeed?: number;
}

interface UseInfiniteCarouselReturn {
  scrollRef: React.RefObject<HTMLDivElement | null>;
  canScrollLeft: boolean;
  canScrollRight: boolean;
  scrollLeft: () => void;
  scrollRight: () => void;
  handleScroll: () => void;
}

export function useInfiniteCarousel({
  itemWidth,
  gap,
  itemCount,
  autoplaySpeed = 0,
}: UseInfiniteCarouselOptions): UseInfiniteCarouselReturn {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  const checkScrollPosition = useCallback(() => {
    if (scrollRef.current) {
      const { scrollLeft: sLeft, scrollWidth: sWidth, clientWidth: cWidth } = scrollRef.current;
      setCanScrollLeft(sLeft > 0);
      setCanScrollRight(sLeft + cWidth < sWidth - 1);
    }
  }, []);

  const handleScroll = useCallback(() => {
    checkScrollPosition();

    // Infinite scroll logic
    if (scrollRef.current) {
      const { scrollLeft: sLeft } = scrollRef.current;
      const singleSetWidth = itemCount * (itemWidth + gap);

      // Reset to start when reaching end
      if (sLeft >= singleSetWidth * 2) {
        scrollRef.current.scrollLeft = sLeft - singleSetWidth;
      }
      // Reset to end when reaching start
      if (sLeft <= 0) {
        scrollRef.current.scrollLeft = singleSetWidth * 3;
      }
    }
  }, [checkScrollPosition, itemWidth, gap, itemCount]);

  const scrollTo = useCallback((direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = itemWidth + gap;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  }, [itemWidth, gap]);

  useEffect(() => {
    checkScrollPosition();

    if (autoplaySpeed > 0) {
      autoplayRef.current = setInterval(() => {
        scrollTo('right');
      }, autoplaySpeed);
    }

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [autoplaySpeed, checkScrollPosition, scrollTo]);

  return {
    scrollRef,
    canScrollLeft,
    canScrollRight,
    scrollLeft: () => scrollTo('left'),
    scrollRight: () => scrollTo('right'),
    handleScroll,
  };
}
