import './index.scss'


export default function PrimaryButton({text, handleClick}) {

    return (
        <div className="info-button" onClick={() => {handleClick()}}>{text}</div>
    )
}