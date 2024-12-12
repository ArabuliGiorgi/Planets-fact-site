import { useEffect, useState } from "react";
import { Page } from "../styled-components/PageStyle";
import PlanetInfo from "../components/PlanetInfo";
import MobileMenu from "../components/MobileMenu";
import VenusImage from "/images/planet-venus.svg"
import VenusInterval from "/images/planet-venus-internal.svg"
import VenusGeology from "/images/geology-venus.png"
import TabDesMenu from "../components/TabDesMenu";
import { PlanetObj } from "./Earth";

function Venus() {
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);
  const object: PlanetObj = {
    name: "venus",
    planetImage: VenusImage,
    planetInterval: VenusInterval,
    planetGeology: VenusGeology,
    color: "#EDA249",
    description: "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.",
    rotTime: "243 DAYS",
    revTime: "224.7 DAYS",
    radius: "6,051.8 KM",
    averageTemp: "471°C",
    picHeightMob: "154px",
    picHeightTab: "253px",
    picHeightDes: "400px"
  }

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

  return (
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
      <PlanetInfo Planet={object}></PlanetInfo>
      }
    </Page>
  )
}

export default Venus