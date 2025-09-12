export function debounce(fn, delay) {
    let timer = null
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, args);
        }, delay)
    }
}

export const scrollToTop = (smooth = true) => {
  if ('scrollBehavior' in document.documentElement.style) {
    window.scrollTo({ top: 0, behavior: smooth ? 'smooth' : 'auto' });
  } else {
    window.scrollTo(0, 0);
  }
};