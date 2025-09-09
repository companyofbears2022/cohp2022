import './index.scss'
import { useState, useEffect } from 'react'
import useMediaQuery from '@/hooks/useMediaQuery'

export default function BackgroundPlayer({children, pictureList}) {
    const [bgOffset, setBgOffset] = useState('0rem')
    const isMobile = useMediaQuery()

    const picture = pictureList[0]
    const bgStyle = {
        backgroundPosition: `${bgOffset} 0`,
        backgroundImage: `url(${picture})`
    }
    useEffect(() => {
    const bgBasis = isMobile ? 7 : 15;
    const playSpeed = isMobile ? 18000 : 11000;
    setBgOffset(`-${bgBasis}rem`);
    // 用函数式更新，不依赖外部 bgOffset
    const anim = setInterval(() => {
        setBgOffset(prev => (prev === `-${bgBasis}rem` ? '0rem' : `-${bgBasis}rem`));
    }, playSpeed);

    return () => clearInterval(anim);
    }, [isMobile]);  // 只依赖 isMobile
    return (
        <div className="background-player" style={bgStyle}>{children}</div>
    )
}
