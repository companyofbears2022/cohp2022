import './index.scss'
import ImageCard from '@/components/Cards/ImageCard'
export default function CardListGrid({ items, handleClick }) {

    return (
        <div className="card-list-grid">
            {items.map((item)=>(
                <ImageCard item={item} key={item.id} handleClick={handleClick}></ImageCard>
            ))}
        </div>
    )
}