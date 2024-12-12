import styled from "styled-components";

const MenuDiv = styled.div`
    display: none;

    @media only screen and (min-width: 720px){
        min-height: 25px;
        width: 665px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        h1{
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
        h1{
            height: 100%;
            display: flex;
            align-items: end;
            cursor: pointer;
        }
        h1:hover{
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

export {MenuDiv}