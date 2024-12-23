import { Menu } from "../styled-components/PageStyle"
import arrow from "/images/icon-chevron.svg"
import data from "../data.json"
import { useNavigate } from "react-router-dom"

const MobileMenu: React.FC<{
    setMobileMenu: React.Dispatch<React.SetStateAction<boolean>>
}> = ({setMobileMenu}) => {
    const nav = useNavigate();
    const navigate = (str: string) => {
        nav(str);
        setMobileMenu(false);
    };
    const planets = data;

    return(
        <Menu>
            {planets.map((element) => (
                <div key={element.name}>
                    <div className="planets" onClick={() => navigate(`/${element.name}`)}>
                        <div className="planets-child">
                            <div className={`Oval`} style={{backgroundColor: element.mobileColor}}></div>
                            <h2>{element.name.toUpperCase()}</h2>
                        </div>
                        <img src={arrow} alt="arrow" />
                    </div>
                    {element !== planets[planets.length - 1] ? <div className="line"></div> : ''}
                </div>
            ))}
        </Menu>
    )
}

export default MobileMenu