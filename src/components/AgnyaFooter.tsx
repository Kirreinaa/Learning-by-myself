import './Footer.css'
import { HiAcademicCap } from "react-icons/hi";

type AgnyaFooterProps = {
    text: string
}

function AgnyaFooter() {
    return (
        <div className='footerContainer'>
            <div className='footerIcon'>
                <HiAcademicCap size={32} color='#766163'/>
            </div>

            <div className='footerItemsContainer'>
                <div className='footerText'>Created by newbie developer</div>
            </div>
        </div>
    )
}

export default AgnyaFooter