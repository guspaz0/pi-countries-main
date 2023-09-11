import styled from "styled-components";

export const LandingStyle = styled.div`
background-image: url('https://wallpapercave.com/wp/wp7860650.jpg');
background-repeat: no-repeat;
background-size: cover;
width: 100vw;
height: 100vh;
margin:0;
padding: 0;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
.LandingHeader {
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
    backdrop-filter: blur(10px);
}
.LadingTitle {
    background: linear-gradient(to right, #9500ff, #09f, #00ddff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    /* color: white; */
    font-family: 'calibri';
    margin: 2vh 0;
    font-size: 10vw;
    text-align: center;
    transition: font-size 0.4s;
}
.LandingHeader:hover {
    background-color: transparent;
}
.LandingParagraph {
    border-radius: 10px;
    margin: 0 9vw;
    padding: 1vh 1vw;
    font-size: 3vh;
    text-align: justify;
    display: inline-block;
    backdrop-filter: blur(10px);
}
.LandingAbout {
    color: white;
    padding: 0px;
    text-align: center;
    
}
`