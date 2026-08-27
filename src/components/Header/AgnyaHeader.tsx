import './Header.css'
import { HiAcademicCap } from "react-icons/hi";

function AgnyaHeader () {
    return (
        <div className="headerContainer">
            <HiAcademicCap size={32} color='#766163'/>
            <h2 className="headerText">Learning By Myself</h2>
        </div>
    )
}

export default AgnyaHeader