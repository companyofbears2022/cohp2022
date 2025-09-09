import React from 'react';
import './index.scss';

/**
 * Tooltip
 * @param {React.ReactNode} children
 * @param {string} text
 * @param {'top'|'bottom'|'left'|'right'} [placement='top']
 */
export default function Tooltip({ children, text, placement = 'top' }) {
  return (
    <div className="tooltip-wrapper">
      {children}
      <div className={`tooltip-box ${placement}`}>{text}</div>
    </div>
  );
}