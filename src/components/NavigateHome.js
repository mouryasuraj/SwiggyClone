
import { Link } from "react-router-dom"
const NavigateHome = ({name}) => {
    return (
        <div className="navigate">
            <p><Link to='/'><span>Home </span> </Link> <span style={{ fontSize: '12px', color: 'gray' }}> / </span> <span>{name}</span></p>
        </div>
    )
}

export default NavigateHome
