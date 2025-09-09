import { useEffect, useRef, useCallback } from 'react';

export default function useDragScroll() {
  const navRef = useRef(null);

  const onMouseDown = useCallback((e) => {
    const target = navRef.current;
    if (!target) return;

    target.dataset.flag = 'true';
    target.dataset.downX = e.clientX;
    target.dataset.scrollLeft = target.scrollLeft;
  }, []);

  const onMouseMove = useCallback((e) => {
    const target = navRef.current;
    if (!target || target.dataset.flag !== 'true') return;

    const moveX = e.clientX;
    const scrollX = moveX - Number(target.dataset.downX);
    target.scrollLeft = Number(target.dataset.scrollLeft) - scrollX;
  }, []);

  const onMouseUpOrLeave = useCallback(() => {
    const target = navRef.current;
    if (target) target.dataset.flag = 'false';
  }, []);

  useEffect(() => {
    const el = navRef.current;
    if (!el) return;

    el.addEventListener('mousedown', onMouseDown);
    el.addEventListener('mousemove', onMouseMove);
    el.addEventListener('mouseup', onMouseUpOrLeave);
    el.addEventListener('mouseleave', onMouseUpOrLeave);

    return () => {
      el.removeEventListener('mousedown', onMouseDown);
      el.removeEventListener('mousemove', onMouseMove);
      el.removeEventListener('mouseup', onMouseUpOrLeave);
      el.removeEventListener('mouseleave', onMouseUpOrLeave);
    };
  }, [onMouseDown, onMouseMove, onMouseUpOrLeave]);

  return navRef;
}