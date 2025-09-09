import { useEffect, useState } from 'react';

export default function useActiveHeading(ids = []) {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    if (!ids.length) return;

    const io = new IntersectionObserver(
      entries => {
        entries.forEach(en => {
          if (en.isIntersecting) {
            setActiveId(en.target.id);
          }
        });
      },
      { rootMargin: '-20% 0% -70% 0%', threshold: 0 }
    );

    const nodes = ids.map(id => document.getElementById(id)).filter(Boolean);
    nodes.forEach(n => io.observe(n));
    
    return () => nodes.forEach(n => io.unobserve(n));
  }, [ids]);

  return activeId;
}