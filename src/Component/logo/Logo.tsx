import { Link } from "react-router-dom";
import ELogo from "../../assets/logo.svg";

const Logo = () => {
    return (
        <Link to='/' className="flex items-center">
            <img 
                src={ELogo} 
                alt="BazarBond" 
                className="w-10 h-10 md:w-[55px] md:h-[55px] md:mr-4" 
            />
            <h1 className="text-black font-bold text-lg md:text-xl">Comfortly</h1>
        </Link>
    );
};

export default Logo;
