import './index.scss'

import useDragScroll from '@/hooks/useDragScroll'

import ImageTextCard from '../ImageTextCard'

export default function CardsListH({items}) {
    const scrollRef = useDragScroll();
    return (
        <div className="cards-list-h">
            <div className="cards-list-body" ref={scrollRef}>
                {items.map((item) => (
                <ImageTextCard item={item} key={item.title}></ImageTextCard>
                ))}
            </div>
        </div>
    )
}