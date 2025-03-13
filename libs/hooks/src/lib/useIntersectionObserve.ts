import { useEffect, useState, useRef } from 'react';
import type { RefObject } from 'react';

export const useInterSectionObserve = (
  targetRef: RefObject<HTMLDivElement>
) => {
  const [isInViewport, setIsInViewport] = useState<boolean>(false);
  const observer = useRef<IntersectionObserver>(null);

  useEffect(() => {
    if (!observer.current) {
      const observerCallback = (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInViewport(true);
          }
        });
      };

      observer.current = new window.IntersectionObserver(observerCallback, {
        threshold: 0,
      });
    }

    if (targetRef.current) {
      observer.current.observe(targetRef.current);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [targetRef]);

  return isInViewport;
};
