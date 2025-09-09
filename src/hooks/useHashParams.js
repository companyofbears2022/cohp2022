import { useEffect, useState } from 'react';

export function useHashParams() {
  const [hash, setHash] = useState(() =>
    window.location.hash.split('#').slice(-1)[0]
  );

  useEffect(() => {
    const onHashChange = () =>
      {
        console.log(window.location.hash);
        
        setHash(window.location.hash.split('#').slice(-1)[0]);}
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return hash;
}