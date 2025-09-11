import './index.scss'

export default function ImageTextCard({item, handleClick}) {


    return (
        <div className="image-text-card" onClick={() => {
            handleClick(item.id)
        }}>
            <div className="img-box">
                <img src={item.imgUrl} draggable="false" alt={item.title}></img>
                <div className="time-text">{ item.time }</div>
            </div>
            <div className="detail-box">
                <div className="title">{ item.title }</div>
                <div className="content">{ item.content }</div>
            </div>
        </div>
    )
}