import { useEffect, useState } from "react";
import { Page } from "../styled-components/PageStyle";
import { useParams } from "react-router-dom";
import data from "../data.json"
import PlanetInfo from "./PlanetInfo";
import MobileMenu from "./MobileMenu";
import TabDesMenu from "../components/TabDesMenu";

export default function Planet(){
    const [mobileMenu, setMobileMenu] = useState<boolean>(false);
    const { planetName } = useParams();
    const planet = data.find((planet) => planet.name === planetName) || data[2];
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 720) {
                setMobileMenu(false);
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
    
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return(
        <Page>
            <div className="header">
                <h1 id="header-font">THE PLANETS</h1>
                <div className={`tablet:hidden ${mobileMenu ? 'opacity-20' : 'opacity-100'}`} onClick={() => setMobileMenu(!mobileMenu)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="17">
                        <g fill="#FFFFFF">
                            <path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z"/>
                        </g>
                    </svg>
                </div>
                <TabDesMenu></TabDesMenu>
            </div>
            {mobileMenu ? 
            <MobileMenu setMobileMenu={setMobileMenu}></MobileMenu> :
            <PlanetInfo Planet={planet}></PlanetInfo>
            }
        </Page>
    )
}