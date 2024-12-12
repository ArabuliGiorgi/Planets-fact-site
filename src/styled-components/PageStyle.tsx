import styled from "styled-components";
import stars from "/images/background-stars.svg"

const Page = styled.div`
    width: 100%;
    min-height: 100vh;
    background-image: url(${stars});
    background-repeat: no-repeat;
    background-size: 1010px 851px;
    background-position: 50% -92px;

    .header{
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
    }

    @media only screen and (min-width: 720px){
        background-size: 1532px 1291px;
        background-position: 50% -134px;

        .header{
            padding: 32px 51px 27px;
            flex-direction: column;
            gap: 39px;
        }
    }

    @media only screen and (min-width: 1440px){
        .header{
            height: 85px;
            align-items: end;
            padding: 0 40px 27px 32px;
            flex-direction: row;
            gap: 0;
        }
        #header-font{
            margin-top: 22px;
        }
    }
`;

export {Page}