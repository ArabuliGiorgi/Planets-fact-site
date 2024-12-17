import { useNavigate } from "react-router-dom"
import { MenuDiv } from "../styled-components/PageStyle"

const TabDesMenu: React.FC = () => {
    const navigate = useNavigate();

    return (
        <MenuDiv>
            <h1 onClick={() => navigate("/Mercury")} id="mercury">MERCURY</h1>
            <h1 onClick={() => navigate("/Venus")} id="venus">VENUS</h1>
            <h1 onClick={() => navigate("/Earth")} id="earth">EARTH</h1>
            <h1 onClick={() => navigate("/Mars")} id="mars">MARS</h1>
            <h1 onClick={() => navigate("/Jupiter")} id="jupiter">JUPITER</h1>
            <h1 onClick={() => navigate("/Saturn")} id="saturn">SATURN</h1>
            <h1 onClick={() => navigate("/Uranus")} id="uranus">URANUS</h1>
            <h1 onClick={() => navigate("/Neptune")} id="neptune">NEPTUNE</h1>
        </MenuDiv>
    )
}

export default TabDesMenu