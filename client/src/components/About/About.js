import styled from 'styled-components'

export const AboutStyle = styled.div`
    h1 {
        align-items: center;
        text-align: center;
        //box-shadow: 2px 2px 5px black;
        text-shadow: 1px 1px 5px white;
    }
    .about {
        padding: 5px;
        margin: 10px;
        background-color: rgba(255,255,0,0.9);
        width: auto;
        border-radius: 5px;
        box-shadow: 2px 2px 5px black;
        text-shadow: 1px 1px 5px white;
        gap: 10px;
        .aptitudes {
            position: relative;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-around;
            border-radius: 5px;
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