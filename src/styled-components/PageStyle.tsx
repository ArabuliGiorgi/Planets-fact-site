import styled from "styled-components";
import stars from "/images/background-stars.svg"

const Page = styled.div`
    width: 100%;
    min-height: 100vh;
    background-image: url(${stars});
    background-repeat: no-repeat;
    background-size: 1010px 851px;
    background-position: 50% -92px;
    position: relative;

    @media only screen and (min-width: 720px){
        background-size: 1532px 1291px;
        background-position: 50% -134px;
    }
`;

const HeaderDiv = styled.div`
    width: 100%;
    padding: 16px 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);

    #header-font{
        font-size: 28px;
        font-weight: 400;
        line-height: 36.23px;
        letter-spacing: -1.05px;
        text-align: left;
        color: #FFFFFF;
    }

    @media only screen and (min-width: 720px){
        padding: 32px 51px 27px;
        flex-direction: column;
        gap: 39px;        
    }

    @media only screen and (min-width: 1440px){
        height: 85px;
        align-items: end;
        padding: 0 40px 27px 32px;
        flex-direction: row;
        gap: 0;

        #header-font{
            margin-top: 22px;
        }
    }
`

const Menu = styled.div`
    padding: 24px;
    width: 100%;
    position: absolute;
    background-color: #070724;
    z-index: 1;

    .planets{
        width: 100%;
        height: 65px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .planets-child{
            display: flex;
            align-items: center;
            gap: 25px;

            .Oval{
                height: 20px;
                width: 20px;
                border-radius: 50%;
            }
            h2{
                font-size: 15px;
                font-weight: 700;
                line-height: 25px;
                letter-spacing: 1.36px;
                color: #FFFFFF;
            }
        }
        img{
            margin-right: 8px;
        }
    }
    .line{
        width: 100%;
        height: 1px;
        background-color: #FFFFFF;
        opacity: 10%;
    }
`

const MenuDiv = styled.div`
    display: none;

    @media only screen and (min-width: 720px){
        min-height: 25px;
        width: 665px;
        display: block;

        nav{
            width: 100%;
            height: 100%;
        }
        ul{
            height: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        li{
            font-size: 11px;
            font-weight: 700;
            line-height: 25px;
            letter-spacing: 2.5px;
            text-align: left;
            color: #FFFFFF;
            opacity: 75%;
        }
    }

    @media only screen and (min-width: 1440px){
        height: 100%;
        li{
            height: 100%;
            display: flex;
            align-items: end;
            cursor: pointer;
        }
        li:hover{
            opacity: 100%;
        }
        #mercury:hover{
            border-top: 4px solid #419EBB;
        }
        #venus:hover{
            border-top: 4px solid #EDA249;
        }
        #earth:hover{
            border-top: 4px solid #6D2ED5;
        }
        #mars:hover{
            border-top: 4px solid #D14C32;
        }
        #jupiter:hover{
            border-top: 4px solid #D83A34;
        }
        #saturn:hover{
            border-top: 4px solid #CD5120;
        }
        #uranus:hover{
            border-top: 4px solid #1EC1A2;
        }
        #neptune:hover{
            border-top: 4px solid #2D68F0;
        }
    }
`

export {Page, Menu, MenuDiv, HeaderDiv}