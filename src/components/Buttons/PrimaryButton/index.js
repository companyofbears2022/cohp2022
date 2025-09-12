import './index.scss'


export default function PrimaryButton({text, handleClick}) {

    return (
        <div className="primary-button" onClick={() => {handleClick()}}>{text}</div>
    )
}