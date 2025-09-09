import './index.scss'

export default function ImageCard({ item, handleClick }) {

    return (
        <div className="image-card" onClick={() => {handleClick(item.id)}}>
            <img src={item.imgUrl} alt={item.title}></img>
            <div className="time-text">{item.time}</div>
            <div className="item-title">{item.title}</div>
        </div>
    )
}