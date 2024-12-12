import { useEffect, useState } from "react";
import { Page } from "../styled-components/PageStyle";
import PlanetInfo from "../components/PlanetInfo";
import MobileMenu from "../components/MobileMenu";
import UranusImage from "/images/planet-uranus.svg"
import UranusInterval from "/images/planet-uranus-internal.svg"
import UranusGeology from "/images/geology-uranus.png"
import TabDesMenu from "../components/TabDesMenu";
import { PlanetObj } from "./Earth";

function Uranus() {
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);
  const object: PlanetObj = {
    name: "uranus",
    planetImage: UranusImage,
    planetInterval: UranusInterval,
    planetGeology: UranusGeology,
    color: "#1EC1A2",
    description: `Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.`,
    rotTime: "17.2 HOURS",
    revTime: "84 YEARS",
    radius: "25,362 KM",
    averageTemp: "-195°C",
    picHeightMob: "176px",
    picHeightTab: "290px",
    picHeightDes: "458px"
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

export default Uranus