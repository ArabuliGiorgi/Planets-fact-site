import { useNavigate } from "react-router-dom"
import { MenuDiv } from "../styled-components/PageStyle"

const TabDesMenu: React.FC = () => {
    const navigate = useNavigate();
    const planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];

    return (
        <MenuDiv>
            <nav>
                <ul>
                    {planets.map((element) => (
                        <li key={element} onClick={() => navigate(`/${element}`)} id={`${element.toLowerCase()}`}>{element.toUpperCase()}</li>
                    ))}
                </ul>
            </nav>
        </MenuDiv>
    )
}

export default TabDesMenu