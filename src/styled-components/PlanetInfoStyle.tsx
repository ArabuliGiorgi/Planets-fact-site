import styled from "styled-components";

const PlanetDiv = styled.div<{color: string, picture: string, mobile: string, tablet: string, desktop: string}>`
    width: 100%;
    padding-bottom: 47px;

    .showList{
        width: 100%;
        height: 50px;
        padding: 0 24px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);

        h2{
            font-size: 9px;
            font-weight: 700;
            line-height: 10.08px;
            letter-spacing: 1.93px;
            display: flex;
            align-items: center;
            color: #FFFFFF;
            height: 100%;
            padding: 0 3px;
        }
        #overview{
            border-bottom: ${(props) => props.picture === "overview" ? `4px solid ${props.color}` : 'none'};
        }
        #structure{
            border-bottom: ${(props) => props.picture === "structure" ? `4px solid ${props.color}` : 'none'};
        }
        #surface{
            border-bottom: ${(props) => props.picture === "surface" ? `4px solid ${props.color}` : 'none'};
        }
    }
    .pictureArea{
        margin: 24px 0;
        width: 100%;
        height: 256px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;

        #planet-picture{
            height: ${(props) => props.mobile};
        }
        #geology{
            position: absolute;
            width: 63px;
            left: 50%;
            bottom: 27px;
            transform: translate(-50%, 0);
        }
    }
    .description{
        width: 100%;
        padding: 0 24px;
        margin-bottom: 28px;

        h1{
            font-size: 40px;
            font-weight: 400;
            line-height: 51.76px;
            text-align: center;
            color: #FFFFFF;
            margin-bottom: 16px;
        }
        p{
            font-size: 11px;
            font-weight: 400;
            line-height: 22px;
            text-align: center;
            color: #FFFFFF;
            margin-bottom: 10px;
            opacity: 60%;
            letter-spacing: 1.2px;
        }
        h2{
            font-size: 12px;
            font-weight: 400;
            line-height: 25px;
            text-align: left;
            color: #FFFFFF;
            opacity: 50%;

            span{
                font-weight: 700;
                text-decoration: underline;
            }
        }
    }
    .stats{
        width: 100%;
        padding: 0 24px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;

        .stats-blocks{
            width: 100%;
            height: 48px;
            padding: 0 24px;
            border: 1px solid rgba(255, 255, 255, 0.5);
            display: flex;
            justify-content: space-between;
            align-items: center;

            h2{
                font-size: 8px;
                font-weight: 700;
                line-height: 16px;
                letter-spacing: 0.7272727489471436px;
                text-align: left;
                color: #FFFFFF;
                opacity: 50%;
            }
            h1{
                font-size: 20px;
                font-weight: 400;
                line-height: 25.88px;
                letter-spacing: -0.75px;
                text-align: right;
                color: #FFFFFF;
            }
        }
    }

    @media only screen and (min-width: 720px){
        padding-bottom: 36px;
        max-width: 1110px;
        margin: 0 auto;

        display: grid;
        grid-template-columns: auto auto;
        grid-template-rows: auto auto auto;

        .pictureArea{
            grid-column: 1/3;
            grid-row: 1/2;

            margin: 27px 0 11px;
            height: 422px;

            #planet-picture{
                height: ${(props) => props.tablet};
            }
            #geology{
                width: 103px;
                bottom: 44px;
            }
        }
        .description{
            grid-column: 1/2;
            grid-row: 2/3;

            padding: 0 0 0 39px;
            margin-bottom: 27px;
            max-width: 378px;

            h1{
                font-size: 48px;
                line-height: 62.11px;
                text-align: left;
                margin-bottom: 24px;
            }
            p{
                text-align: left;
                margin-bottom: 32px;
                opacity: 60%;
            }
        }
        .showList{
            width: 321px;
            margin: auto 0 auto auto;
            min-height: 152px;
            padding: 0 40px 0 0;
            flex-direction: column;
            gap: 16px;
            border: none;

            h2{
                span{
                    margin-right: 17px;
                    opacity: 50%;
                }

                width: 100%;
                padding-left: 20px;
                line-height: 25px;
                height: 40px;
            }
            #overview{
                background-color: ${(props) => props.picture === "overview" ? `${props.color}` : 'transparent'};
                border: ${(props) => props.picture === "overview" ? 'none' : '1px solid rgba(255, 255, 255, 0.2)'};
            }
            #structure{
                background-color: ${(props) => props.picture === "structure" ? `${props.color}` : 'transparent'};
                border: ${(props) => props.picture === "structure" ? 'none' : '1px solid rgba(255, 255, 255, 0.2)'};
            }
            #surface{
                background-color: ${(props) => props.picture === "surface" ? `${props.color}` : 'transparent'};
                border: ${(props) => props.picture === "surface" ? 'none' : '1px solid rgba(255, 255, 255, 0.2)'};
            }
        }
        .stats{
            grid-column: 1/3;

            margin: 0 auto;
            padding: 0 39px;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            gap: 0;

            .stats-blocks{
                width: 164px;
                height: 88px;
                padding: 0 15px;
                flex-direction: column;
                justify-content: center;
                gap: 6px;
                align-items: start;

                h1{
                    font-size: 24px;
                    line-height: 31.05px;
                    letter-spacing: -0.9px;
                }
            }
        }
    }

    @media only screen and (min-width: 1440px){
        padding-bottom: 56px;

        .pictureArea{
            grid-column: 1/2;
            grid-row: 1/3;

            margin: 70px 0 18px -18px;
            min-height: 630px;
            min-width: 630px;

            #planet-picture{
                height: ${(props) => props.desktop};
                margin-left: -18px;
            }
            #geology{
                width: 163px;
                bottom: 69px;
            }
        }
        .description{
            grid-column: 2/3;
            grid-row: 1/2;

            align-self: end;
            justify-self: end;
            padding: 0;
            margin-bottom: 39px;
            max-width: 350px;

            h1{
                font-size: 80px;
                font-weight: 400;
                line-height: 103.52px;
                margin-bottom: 23px;
            }
            p{
                font-size: 14px;
                line-height: 25px;
                margin-bottom: 24px;
            }
            h2{
                font-size: 14px;
            }
        }
        .showList{
            width: 350px;
            margin: 0 0 auto auto;
            min-height: 152px;
            padding: 0;

            h2{
                font-size: 12px;
                line-height: 25px;
                letter-spacing: 2.57px;
                padding-left: 28px;
                height: 48px;

                span{
                    margin-right: 28px;
                }                
            }
            #overview:hover{
                background-color: ${(props) => props.picture !== "overview" ? `rgba(216, 216, 216, 0.2)` : ''};
                border: none;
                cursor: pointer;
            }
            #structure:hover{
                background-color: ${(props) => props.picture !== "structure" ? `rgba(216, 216, 216, 0.2)` : ''};
                border: none;
                cursor: pointer;
            }
            #surface:hover{
                background-color: ${(props) => props.picture !== "surface" ? `rgba(216, 216, 216, 0.2)` : ''};
                border: none;
                cursor: pointer;
            }
        }
        .stats{
            grid-column: 1/3;

            padding: 0;

            .stats-blocks{
                width: 255px;
                height: 128px;
                padding: 0 23px;
                gap: 4px;

                h2{
                    font-size: 11px;
                    line-height: 25px;
                    letter-spacing: 1px;
                }
                h1{
                    font-size: 40px;
                    line-height: 51.76px;
                    letter-spacing: -1.5px;
                }
            }
        }
    }
`

export {PlanetDiv}