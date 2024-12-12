import { useEffect, useState } from "react";
import { Page } from "../styled-components/PageStyle";
import PlanetInfo from "../components/PlanetInfo";
import MobileMenu from "../components/MobileMenu";
import NeptuneImage from "/images/planet-neptune.svg"
import NeptuneInterval from "/images/planet-neptune-internal.svg"
import NeptuneGeology from "/images/geology-neptune.png"
import TabDesMenu from "../components/TabDesMenu";
import { PlanetObj } from "./Earth";

function Neptune() {
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);
  const object: PlanetObj = {
    name: "neptune",
    planetImage: NeptuneImage,
    planetInterval: NeptuneInterval,
    planetGeology: NeptuneGeology,
    color: "#2D68F0",
    description: `Neptune's atmosphere is 80% hydrogen and 19% helium. A trace amount of methane is also present. Prominent absorption bands of methane exist at wavelengths above 600 nm, in the red and infrared portion of the spectrum.`,
    rotTime: "16.08 HOURS",
    revTime: "164.79 YEARS",
    radius: "24,622 KM",
    averageTemp: "-201°C",
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

export default Neptune