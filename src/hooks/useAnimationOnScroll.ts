import React, { useEffect, useRef } from 'react';

type UseFadeInOnScrollReturn = {
  refs: React.RefObject<HTMLDivElement>[];
  ref: React.RefObject<HTMLDivElement>;
};

type Animation = 'fadeIn';

const useAnimationOnScroll = (animation: Animation = 'fadeIn', arraySize: number = 1): UseFadeInOnScrollReturn => {
  const array = Array.from({ length: arraySize }, () => React.createRef<HTMLDivElement>());

  const refs = useRef<React.RefObject<HTMLDivElement>[]>(array).current;

  useEffect(() => {
    const handleScroll = () => {
      refs.forEach((ref) => {
        const element = ref.current;

        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          const windowHeight = window.innerHeight;

          if (top + 150 <= windowHeight && bottom + 150 >= 0) {
            element.style.opacity = '1';
            element.classList.remove('fadeOut');
            return element.classList.add(animation);
          }

          element.style.opacity = '0';
          element.classList.add('fadeOut');
          element.classList.remove(animation);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [refs, animation]);

  return { refs, ref: refs[0] };
};

export default useAnimationOnScroll;
