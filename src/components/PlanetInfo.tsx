import { useState } from "react"
import { PlanetObj } from "../pages/Earth"
import { PlanetDiv } from "../styled-components/PlanetInfoStyle"
import linkIcon from "/images/icon-source.svg"

const PlanetInfo: React.FC<{
    Planet: PlanetObj
}> = ({Planet}) => {
    const [picture, setPicture] = useState<string>("overview");
    return(
        <PlanetDiv color={Planet.color} picture={picture} mobile={Planet.picHeightMob} tablet={Planet.picHeightTab} desktop={Planet.picHeightDes}>
            <div className="showList">
                <h2 
                id="overview" 
                className={`${picture === "overview" ? 'opacity-100' : 'opacity-50'}`}
                onClick={() => setPicture('overview')}
                ><span className="hidden tablet:block">01</span>OVERVIEW</h2>
                <h2 
                id="structure" 
                className={`${picture === "structure" ? 'opacity-100' : 'opacity-50'}`}
                onClick={() => setPicture('structure')}
                ><span className="hidden tablet:block">02</span>STRUCTURE</h2>
                <h2 
                id="surface" 
                className={`${picture === "surface" ? 'opacity-100' : 'opacity-50'}`}
                onClick={() => setPicture('surface')}
                ><span className="hidden tablet:block">03</span>SURFACE</h2>
            </div>
            <div className="pictureArea">
                <img src={`${picture === "structure" ? Planet.planetInterval : Planet.planetImage}`} alt="planet" id="planet-picture"/>
                <img src={Planet.planetGeology} alt="geology" id="geology" className={`${picture === "surface" ? 'block' : 'hidden'}`}/>
            </div>
            <div className="description">
                <h1>{Planet.name.toUpperCase()}</h1>
                <p>{Planet.description}</p>
                <div className="flex items-center justify-center tablet:justify-start gap-[4px]">
                    <h2>Source : <span>Wikipedia</span></h2>
                    <img src={linkIcon} alt="source" />
                </div>
            </div>
            <div className="stats">
                <div className="stats-blocks">
                    <h2>ROTATION TIME</h2>
                    <h1>{Planet.rotTime}</h1>
                </div>
                <div className="stats-blocks">
                    <h2>REVOLUTION TIME</h2>
                    <h1>{Planet.revTime}</h1>
                </div>
                <div className="stats-blocks">
                    <h2>RADIUS</h2>
                    <h1>{Planet.radius}</h1>
                </div>
                <div className="stats-blocks">
                    <h2>AVERAGE TEMP.</h2>
                    <h1>{Planet.averageTemp}</h1>
                </div>
            </div>
        </PlanetDiv>
    )
}

export default PlanetInfo