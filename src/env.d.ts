/// <reference types="astro/client" />

interface Window {
  __lenis?: {
    scrollTo: (target: number) => void;
  };
}
