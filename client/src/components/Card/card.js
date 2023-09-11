import styled from 'styled-components';

export const CardStyle = styled.div`
.container{
    margin: 15px;
    border-radius: 10px ;
    width: 30%;
    background-color: #007bff;
    display: inline-block;
    text-decoration: none;
    text-align: center;
    align-content: center;
    transition: box-shadow .3s;
    transition: width .3s ease-out;
    animation: animacion .5s ease-in-out;
}

.container:hover{
    width: 30.5%;
    box-shadow: 10px 10px 20px #d7f8d37e;
    transition: box-shadow .3s;
    transition: width .3s ease-out;

}

.card{
    position: relative;
}
.country{
    position: absolute;
    padding-left: 20px;
    color: #fff;
    -webkit-text-stroke: 1px black;
    font-size: 3vh;
    font-weight: 900;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* Cambia el valor según el número de líneas que deseas mostrar */
    -webkit-box-orient: vertical;
}

.cardImage{
    width: 100%;
    height: auto;
    border-radius: 10px 10px 0 0;
}

.continent{
    margin: 0;
    padding: 0  0 1vh 0;
    color: #fff;
    -webkit-text-stroke: 1px black;
    font-size: 3vh;
    font-weight: 900;
}

@media (max-width: 600px) {
    .container{
        width: 85%;
    }

    .container:hover{
        width: 88%;
        box-shadow: 10px 10px 20px #d7f8d37e;
        transition: box-shadow .3s;
        transition: width .3s ease-out;
    
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

    /* display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    padding: 5px;
    gap: 15px;
    .country {
        display: flex;
        flex-direction: column;
        background-color: gray;
        border-radius: 5px;
        align-items: center;
        justify-content: center;
        img {
            width: 250px;
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
        } 
    }*/

`