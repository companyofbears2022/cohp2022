import './index.scss'
import logo from '@/assets/logo_large.png'
export default function LogoBox() {

    return (
        <div className="main-logo-box unselectable">
            <img src={logo} alt="mod-logo" className="auto-fit-img undraggeable"></img>
        </div>
    )
}