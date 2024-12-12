import { Menu } from "../styled-components/MobileMenuStyle"
import arrow from "/images/icon-chevron.svg"
import { useNavigate } from "react-router-dom"

const MobileMenu: React.FC<{
    setMobileMenu: React.Dispatch<React.SetStateAction<boolean>>
}> = ({setMobileMenu}) => {
    const nav = useNavigate();
    const navigate = (str: string) => {
        nav(str);
        setMobileMenu(false);
    };

    return(
        <Menu>
            <div className="planets" onClick={() => navigate("/Mercury")}>
                <div className="planets-child">
                    <div className="Oval bg-[#DEF4FC]"></div>
                    <h2>MERCURY</h2>
                </div>
                <img src={arrow} alt="arrow" />
            </div>
            <div className="line"></div>
            <div className="planets" onClick={() => navigate("/Venus")}>
                <div className="planets-child">
                    <div className="Oval bg-[#F7CC7F]"></div>
                    <h2>VENUS</h2>
                </div>
                <img src={arrow} alt="arrow" />
            </div>
            <div className="line"></div>
            <div className="planets" onClick={() => navigate("/Earth")}>
                <div className="planets-child">
                    <div className="Oval bg-[#545BFE]"></div>
                    <h2>EARTH</h2>
                </div>
                <img src={arrow} alt="arrow" />
            </div>
            <div className="line"></div>
            <div className="planets" onClick={() => navigate("/Mars")}>
                <div className="planets-child">
                    <div className="Oval bg-[#FF6A45]"></div>
                    <h2>MARS</h2>
                </div>
                <img src={arrow} alt="arrow" />
            </div>
            <div className="line"></div>
            <div className="planets" onClick={() => navigate("/Jupiter")}>
                <div className="planets-child">
                    <div className="Oval bg-[#ECAD7A]"></div>
                    <h2>JUPITER</h2>
                </div>
                <img src={arrow} alt="arrow" />
            </div>
            <div className="line"></div>
            <div className="planets" onClick={() => navigate("/Saturn")}>
                <div className="planets-child">
                    <div className="Oval bg-[#FCCB6B]"></div>
                    <h2>SATURN</h2>
                </div>
                <img src={arrow} alt="arrow" />
            </div>
            <div className="line"></div>
            <div className="planets" onClick={() => navigate("/Uranus")}>
                <div className="planets-child">
                    <div className="Oval bg-[#65F0D5]"></div>
                    <h2>URANUS</h2>
                </div>
                <img src={arrow} alt="arrow" />
            </div>
            <div className="line"></div>
            <div className="planets" onClick={() => navigate("/Neptune")}>
                <div className="planets-child">
                    <div className="Oval bg-[#497EFA]"></div>
                    <h2>NEPTUNE</h2>
                </div>
                <img src={arrow} alt="arrow" />
            </div>
        </Menu>
    )
}

export default MobileMenu