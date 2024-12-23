import { useEffect, useState } from "react";
import { HeaderDiv } from "../styled-components/PageStyle";
import MobileMenu from "./MobileMenu";
import TabDesMenu from "./TabDesMenu";

export default function Header(){
    const [mobileMenu, setMobileMenu] = useState<boolean>(false);
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
        <>
            <HeaderDiv>
                <h1 id="header-font">THE PLANETS</h1>
                <div className={`tablet:hidden ${mobileMenu ? 'opacity-20' : 'opacity-100'}`} onClick={() => setMobileMenu(!mobileMenu)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="17">
                        <g fill="#FFFFFF">
                            <path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z"/>
                        </g>
                    </svg>
                </div>
                <TabDesMenu></TabDesMenu>
            </HeaderDiv>
            {mobileMenu ?
            <MobileMenu setMobileMenu={setMobileMenu}></MobileMenu> :
            <></>          
            }
        </>
    )
}