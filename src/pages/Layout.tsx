import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "../components/Header";

const navigationLinks: string[] = [
    "/Mercury",
    "/Venus",
    "/Earth",
    "/Mars",
    "/Jupiter",
    "/Saturn",
    "/Uranus",
    "/Neptune",
];

export default function Layout(){
    const location = useLocation();
    const pathname = location.pathname;
    const navigate = useNavigate();
    useEffect(() => {
        if(navigationLinks.includes(pathname)){
            navigate(pathname);
        }else{
            navigate("/Earth");
        }
    }, []);

    return(
        <>
            <Header></Header>
            <Outlet/>
        </>
        
    )
}