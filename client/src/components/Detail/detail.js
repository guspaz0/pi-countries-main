import styled from "styled-components";

export const DetailStyle = styled.div`
    grid-column: 2;
    .modal{
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: #1111116f;
    backdrop-filter: blur(10px);
    display:flex;
    color: #fff;
    opacity: 1;
    transition: opacity .6s;
    animation: animacion .5s ease-in-out;
}

.modalShow{
    opacity: 1;
    transition: opacity .6s;
    pointer-events: unset;
}

.modalContainer{
    margin: auto;
    width: 90%;
    max-width: 700px;
    max-height: 90%;
    background-color: black;
    border-radius: 6px;
    padding: 3em 2.5em;
    /* display: grid; */
    gap: 3em;
    display: flex;

}

.modalImageContainer{
    display: grid;
    background-color: rgb(47, 47, 47);
    padding: 0.5em 1em;
    border-radius: 6px;
    width: 50%;

}

.modalIde{
    text-align: center;
    background-color: rgb(70, 70, 70);
    padding: 0.5em 1em;
    border-radius: 6px;
    border: 1px;
}

.modalTitle{
    
    text-align: center;
    background-color: rgb(70, 70, 70);
    padding: 0.5em 1em;
    border-radius: 6px;
    border: 1px;
    font-size: 2.5rem;
}

.modalInformationContainer{
    
    display: grid;
    place-items: center;
    background-color: rgb(47, 47, 47);
    padding: 0.5em 1em 2em 1em;
    border-radius: 6px;
    width: 50%;
}

.modalInformationTitle{
    text-align: center;
    background-color: rgb(70, 70, 70);
    padding: 0.5em 1em;
    border-radius: 6px;
    border: 1px;
    width: 70%;
    font-size: 130%;
}

/* .modal__close{
    background-color: rgb(70, 70, 70);
    padding: 1.5em 2em;
    border-radius: 6px;
    border: 1px;
    text-decoration: none;
    color: #fff;
    padding: 1em 3em;
    border: 1px solid;
    border-radius: 6px;
    display: inline-block;
    font-weight: 300;
    transition: background-color .3s;
} */

.modalCloseContainer {
    text-align: center;
    margin: 0 .5vw;
    border: 0;
    background-image: linear-gradient(
      150deg,
      #9500ff,
      #09f,
      #00ddff);
      border-radius: 8px;
      color: white;
      /* display:flex; */
      font-size: 2vh;
      padding: 1vh 0.5vh;
      cursor: pointer;
      transition: .3s;
    }
    .modalClose{
      font-size: 3vh;
      border-radius: 8px;
      background-color: #111;
      padding: .5vh 1vh;
      transition: .3s;
    }

    .modalClose:hover{
        background: none;
    }

/* .modal--show{

} */

@media (max-width: 800px) {
    
    .modalContainer{
        display: grid;
        overflow-y: scroll;
        margin: 10vw;
    }

    .modalInformationContainer{
        width: 50vw;
    }
    .modalImageContainer{
        text-align: center;
        width: 50vw;
    }

    .modalImg{
        width: 100%;
    }
}

@keyframes animacion {
    0% {
      opacity: 0;
      transform: translateY(-20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`