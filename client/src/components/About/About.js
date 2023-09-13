import styled from 'styled-components'

export const AboutStyle = styled.div`

.aboutTitle {
    margin: 0;
    text-align: center;
    background: linear-gradient(to right, #9500ff, #09f, #00ddff);

    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: 'Kanit';
    font-size: 4vh;
    font-weight: 900;
    text-align: center;
}
    .about {
        h2 {
            align-items: center;
            text-align: center;
        }
        h3 {
            align-items: center;
            text-align: center;
            font-weight: 200;
        }
        padding: 5px;
        margin: 10px;
        background-color: rgb(70, 70, 70);
        width: auto;
        border-radius: 5px;
        box-shadow: 2px 2px 5px black;
        //text-shadow: 1px 1px 5px white;
        color: white;
        gap: 10px;
        .aptitudes {
            position: relative;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-around;
            border-radius: 5px;
            color: black;
            ;
        }
        .imgtext {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            box-shadow: 2px 2px 5px black;
            border-radius: 5px;
            background-color: white;
            padding: 5px;
        }
    }

    .aboutMe {
        margin: 5px;
        border-style: solid;
        border-width: 2px;
        border-radius: 5px;
    }
    /* .aboutApp {
        border-style: solid;
        border-radius: 5px;
    } */

    img {
        width: 100px;
    }
    button {
        background-color: yellow;
        border-radius: 5px;
    }
    button:hover{
        background-color: black;
    }
`