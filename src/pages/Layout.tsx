import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

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
        <Outlet/>
    )
}