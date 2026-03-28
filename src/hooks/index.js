import { useEffect, useState } from "react";

/**
 * Adds .visible to all .reveal elements when they enter the viewport.
 * Uses a negative rootMargin so elements already on screen fire immediately.
 */
export function useScrollReveal() {
  useEffect(() => {
    // Small timeout ensures the DOM has fully painted before observing
    const timer = setTimeout(() => {
      const els = document.querySelectorAll(".reveal:not(.visible)");
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("visible");
              io.unobserve(e.target);
            }
          });
        },
        { threshold: 0, rootMargin: "0px 0px -40px 0px" }
      );
      els.forEach((el) => io.observe(el));
      return () => io.disconnect();
    }, 50);

    return () => clearTimeout(timer);
  });
}

/**
 * Returns true when the page has been scrolled past `threshold` px.
 */
export function useScrolled(threshold = 40) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > threshold);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, [threshold]);
  return scrolled;
}
