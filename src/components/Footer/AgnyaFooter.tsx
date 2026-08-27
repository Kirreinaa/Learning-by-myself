import './Footer.css'
import { HiAcademicCap } from "react-icons/hi";
import gitHubIcon from '../../assets/github.svg'

type AgnyaFooterProps = {
    text: string
}

function AgnyaFooter() {
    return (
        <div className="footerContainer">
            <div className="footerItemsContainer">

                <div className="footerIcon">
                    <HiAcademicCap size={32} color="#766163" />
                </div>

                <div className="footerTextContainer">
                    <h2 className="footerTitle">Learning By Myself</h2>
                    <p className="footerDescription">
                        My journey into frontend development
                    </p>
                </div>
            </div>

            <div className="footerItemsContainer">

                <a href='https://github.com/Kirreinaa'>
                    <div className="footerIcon">
                        <img className='linkIcon' src={gitHubIcon}></img>
                    </div>

                    <div className="footerTextContainer">
                        <h2 className="footerTitle">GitGub</h2>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default AgnyaFooter