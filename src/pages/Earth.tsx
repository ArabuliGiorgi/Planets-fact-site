import { useEffect, useState } from "react";
import { Page } from "../styled-components/PageStyle";
import PlanetInfo from "../components/PlanetInfo";
import MobileMenu from "../components/MobileMenu";
import EarthImage from "/images/planet-earth.svg"
import EarthInterval from "/images/planet-earth-internal.svg"
import EarthGeology from "/images/geology-earth.png"
import TabDesMenu from "../components/TabDesMenu";

export interface PlanetObj{
  name: string,
  planetImage: string,
  planetInterval: string,
  planetGeology: string,
  color: string,
  description: string,
  rotTime: string,
  revTime: string,
  radius: string,
  averageTemp: string,
  picHeightMob: string,
  picHeightTab: string,
  picHeightDes: string
}

function Earth() {
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);
  const object: PlanetObj = {
    name: "earth",
    planetImage: EarthImage,
    planetInterval: EarthInterval,
    planetGeology: EarthGeology,
    color: "#6D2ED5",
    description: "Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.",
    rotTime: "0.99 DAYS",
    revTime: "365.26 DAYS",
    radius: "6,371 KM",
    averageTemp: "16°C",
    picHeightMob: "173px",
    picHeightTab: "285px",
    picHeightDes: "450px"
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

export default Earth