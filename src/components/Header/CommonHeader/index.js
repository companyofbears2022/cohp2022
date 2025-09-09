import './index.scss'


export default function CommonHeader({title, action, clickHandler}) {

    return (
        <div className="common-header">
            <span className="header-title bling-text">{title}</span>
            <span className="header-action bling-text" onClick={() => {clickHandler()}}>{action}</span>
        </div>
    )
}