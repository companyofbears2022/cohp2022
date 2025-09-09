import './index.scss'
import UnitArea from './UnitArea'
import { useEffect, useRef } from 'react'

export default function DocumentContent({items, uid, handleClick}) {

    // console.log('doc',uid);
    // const headingIds = items.map(i => String(i.id));
    const itemsRef = useRef(null);
    

    useEffect(() => {
        // console.log('scrollTo 0');
        
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [items])
    useEffect(() => {
        // console.log(itemsRef);
        // scrollToUnit(uid)
        
        const timer = setTimeout(() => {
            scrollToUnit(uid)
        }, 500)

        return () => {
            clearTimeout(timer)
        }
    }, [uid])

    function scrollToUnit(id) {
        const map = getMap();
        
        const node = map.get(Number(id));

        if(node) {
            // node.scrollIntoView({
            // behavior: "smooth",
            // block: "start",
            // inline: "center",
            // });
            const remPx = parseFloat(getComputedStyle(document.documentElement).fontSize);
            const offsetPx = 8 * remPx;
            const finalTop = node.getBoundingClientRect().top + window.pageYOffset - offsetPx;

            window.scrollTo({ top: finalTop, behavior: 'smooth' });
        }
        
    }

    function getMap() {
        if (!itemsRef.current) {
        itemsRef.current = new Map();
        }
        return itemsRef.current;
    }

    return (
        <article className="document-content">
            {
                items.map((item) => (
                    <div key={item.id} id={item.id}
                    ref={(node) => {

                        
                        const map = getMap();
                        map.set(item.id, node);
                        // console.log(map);
                        
                        return () => {
                        map.delete(item.id);
                        };
                    }}>
                        <UnitArea item={item} handleClick={handleClick}></UnitArea>
                    </div>
                ))
            }
        </article>
    )
}

