import { useEffect, useState } from "react";
import { Page } from "../styled-components/PageStyle";
import PlanetInfo from "../components/PlanetInfo";
import MobileMenu from "../components/MobileMenu";
import MercuryImage from "/images/planet-mercury.svg"
import MercuryInterval from "/images/planet-mercury-internal.svg"
import MercuryGeology from "/images/geology-mercury.png"
import TabDesMenu from "../components/TabDesMenu";
import { PlanetObj } from "./Earth";

function Mercury() {
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);
  const object: PlanetObj = {
    name: "mercury",
    planetImage: MercuryImage,
    planetInterval: MercuryInterval,
    planetGeology: MercuryGeology,
    color: "#419EBB",
    description: "Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s.",
    rotTime: "58.6 DAYS",
    revTime: "87.97 DAYS",
    radius: "2,439.7 KM",
    averageTemp: "430°C",
    picHeightMob: "111px",
    picHeightTab: "184px",
    picHeightDes: "290px"
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

export default Mercury