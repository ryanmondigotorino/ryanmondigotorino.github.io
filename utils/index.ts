import smoothscroll from 'smoothscroll-polyfill';
import { elementScrollIntoView } from 'seamless-scroll-polyfill';

export const redirect = (id: string) => {
  const layoutElement = document.getElementById(id) as HTMLElement;
  smoothscroll.polyfill();
  elementScrollIntoView(layoutElement, {
    behavior: 'smooth',
    block: 'start',
    inline: 'start',
  });
};
