import styled from "styled-components";

export const FormStyle = styled.div`
    grid-column: 2;
    /* display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: auto;
    .form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-weight: bold;
    }
    .error {
        color: red;
        font-weight: bold;
        font-weight: 15px;
    } */
    .modalFormSection{
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    //background-color: #111111bd;
    backdrop-filter: blur(10px);
    display:grid;
    color: white; 
    opacity: 0;
    pointer-events: none;
    transition: opacity .4s ease-in;
}

.modalFormContainer{
    margin: auto;
    width: 26vw;
    max-width: auto;
    max-height: 95%;
    //background-color: rgba(150, 200, 255, 0.87);
    border-radius: 6px;
    /* padding: 4vh 4vh; */
    /* display: grid; */
    gap: 1vh;
    display: grid;
    place-items: center;
    grid-template-columns: repeat(2,1fr);
    grid-template-areas: '.modalImage .modalInformation ';
}
.modalFormSection.active{
    opacity: 1;
    pointer-events: unset;
    transition: opacity .4s ease-in;
}

.modalInformation{
    display: grid;
    place-items: center;
    width: 100%;
    padding: 2vw;
}

.exitButton{
    border-radius: 0 ;
    align-self: start;
    justify-self: end;
    /* margin: 1vh 0 1.2vh 4vw;
    padding-left: 4vh; */
    height: 40px;
    border: none;
    background-color: #DAFFFB;
    font-size: 20px;
    cursor: pointer;
}

.exitButton:hover{
    background-color: #6ffaec;
}


.formTitle{
    margin: 0;
    text-align: center;
    background: linear-gradient(to right, #9500ff, #09f, gray);

    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: 'Kanit';
    font-size: 4vh;
    font-weight: 900;
    text-align: center;
}


.inputContainer{
    background-color: rgb(47, 47, 47);
    border-radius: 10px;
    margin: 1vh;
    padding: 1vh .5vh;
    width: 20vw;
    display:grid;
    color: white;
    box-shadow: 2px 2px 5px black;
    //text-shadow: 1px 1px 5px white;
}

.inputBox{
    margin: .5vh;
    max-width: 85%;
    min-width: 85%;
    box-shadow: 2px 2px 5px black;
}

.inputBox2{
    margin: .5vh;
    max-width: 65%;
    min-width: 90%;
    box-shadow: 2px 2px 5px black;
}
.textBox{
    font-size: 2vh;
    margin-left: .5vw;
}

.inputLabel{
    font-size: 10vh;
}

.formButtons{
    display: flex;
    align-items: center;
}
.formButton {
    margin: 0 .5vw;
    border: 0;
    background-image: linear-gradient(150deg, #9500ff, #09f, gray);
    border-radius: 8px;
    color: white;
    /* display:flex; */
    font-size: 2vh;
    padding: 1vh 0.5vh;
    cursor: pointer;
    transition: .3s;
}
.textButton{
    border-radius: 8px;
    background-color: #111;
    padding: .5vh 1vh;
    transition: .3s;
}

.textButton:hover{
    background: none;
}

.Form{
    padding: 1vw;
    background-color: aliceblue;
}
.listSelect{
    width: 300px;
    height: 150px;
}


p{
    margin: 0;
}

.selecCountries{
    border-radius: 3px;
    margin: .5vw;
    padding: .5vw;
    background-color: rgb(70, 70, 70);
    max-height: 120px;
    overflow-y: scroll;
}

.textAlert{
    font-size: 2vh;
    margin-left: .5vw;
    color: red;
}
// Mio
.selectContainer {
    background-color: rgb(47, 47, 47);
    border-radius: 10px;
    margin: 1vh;
    padding: 1vh .5vh;
    width: auto;
    box-shadow: 2px 2px 5px black;
}
.searchCountry {
    margin: .5vh;
    max-width: 85%;
    min-width: 85%;
    color: white;
}
.selectCountry {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: white;
    //display:grid;
    .countryChild {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 20px;
    }
    }
    .submit {
        border-radius: 8px;
        border: 1px solid transparent;
        padding: 0.6em 1.2em;
        font-size: 1em;
        font-weight: 500;
        font-family: inherit;
        background-color: white;
        cursor: pointer;
        transition: border-color 0.25s;
        }
    .submit:hover {
        border-color: #646cff;
    }
    .submit:focus,
    .submit:focus-visible {
        outline: 4px auto -webkit-focus-ring-color;
    }

@media (max-width: 1340px) {
    .modalFormContainer{
        width: 60vw;
    }

    .inputContainer{
        width: 50vw;
    }
}

@media (max-width: 400px) {
    .modalFormContainer{
        max-width: 100%;
        width: 270px;
        margin: 10vh 10vw;
    }

    .inputContainer{
        width: 60vw;
    }
}



`