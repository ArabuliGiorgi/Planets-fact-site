import { Page } from "../styled-components/PageStyle";
import { useParams } from "react-router-dom";
import data from "../data.json"
import PlanetInfo from "./PlanetInfo";

export default function Planet(){
    const { planetName } = useParams();
    const planet = data.find((planet) => planet.name === planetName) || data[2];

    return(
        <Page>
            <PlanetInfo Planet={planet}></PlanetInfo>
        </Page>
    )
}