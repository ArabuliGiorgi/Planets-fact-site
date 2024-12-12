import styled from "styled-components";

const Menu = styled.div`
    padding: 24px 24px 47px;
    width: 100%;

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

export {Menu}