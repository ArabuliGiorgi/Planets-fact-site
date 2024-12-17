import { useEffect, useState } from "react"
import data from "../data.json"
import { PlanetDiv } from "../styled-components/PlanetStyle"
import linkIcon from "/images/icon-source.svg"
import { useLocation } from "react-router-dom"

const PlanetInfo: React.FC<{
    Planet: typeof data[0]
}> = ({Planet}) => {
    const [picture, setPicture] = useState<string>("overview");
    const location = useLocation();
    const pathname = location.pathname;
    useEffect(()=>{
        setPicture("overview");
    }, [pathname]);

    return(
        <PlanetDiv color={Planet.color} picture={picture} mobile={Planet.imgSizes.mobile} tablet={Planet.imgSizes.tablet} desktop={Planet.imgSizes.desktop}>
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
                <img src={`${picture === "structure" ? Planet.images.internal : Planet.images.planet}`} alt="planet" id="planet-picture"/>
                <img src={Planet.images.geology} alt="geology" id="geology" className={`${picture === "surface" ? 'block' : 'hidden'}`}/>
            </div>
            <div className="description">
                <h1>{Planet.name.toUpperCase()}</h1>
                <p>{picture === "overview" ? Planet.overview.content : (picture === "structure" ? Planet.structure.content : Planet.geology.content)}</p>
                <div className="flex items-center justify-center tablet:justify-start gap-[4px]">
                    <h2>Source : 
                        <a target="_blank" href={picture === "overview" ? Planet.overview.source : (picture === "structure" ? Planet.structure.source : Planet.geology.source)}>
                            <span>Wikipedia</span>
                        </a>
                    </h2>
                    <img src={linkIcon} alt="source" />
                </div>
            </div>
            <div className="stats">
                <div className="stats-blocks">
                    <h2>ROTATION TIME</h2>
                    <h1>{Planet.rotation.toUpperCase()}</h1>
                </div>
                <div className="stats-blocks">
                    <h2>REVOLUTION TIME</h2>
                    <h1>{Planet.revolution.toUpperCase()}</h1>
                </div>
                <div className="stats-blocks">
                    <h2>RADIUS</h2>
                    <h1>{Planet.radius.toUpperCase()}</h1>
                </div>
                <div className="stats-blocks">
                    <h2>AVERAGE TEMP.</h2>
                    <h1>{Planet.temperature.toUpperCase()}</h1>
                </div>
            </div>
        </PlanetDiv>
    )
}

export default PlanetInfo