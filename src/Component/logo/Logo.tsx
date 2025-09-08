import { Link } from "react-router-dom";
import ELogo from "../../assets/logo.svg";

const Logo = () => {
    return (
        <div>
            <Link to='/'>
                <img 
                    src={ELogo} 
                    alt="BazarBond" 
                    className="w-10 h-10 md:w-[55px] md:h-[55px] md:mr-16" 
                />
            </Link>
        </div>
    );
};

export default Logo;
