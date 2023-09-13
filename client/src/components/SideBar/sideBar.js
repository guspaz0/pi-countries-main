import styled from 'styled-components';

export const SideBarStyle = styled.div`

ul {
    margin:0;
    padding:0;
}

li {
    list-style: none;
    min-height: 100px;
}

.sideMenu {
    grid-column: 1;
    position: sticky;
    top: 0;
    background-color: white;
    width:300px;
    height: 200vh;
    box-sizing: border-box;
    padding: 5px 5px 5px 5px;
    transition: width 0.5s ease-in;
}

.sideMenu.inactive{
    width: 100px;
    background-color: white;
}

.toggleIcon{
    width: 50%;
    height: 50%;
    max-width: 50px;
    min-width: 20px;

}
.sideMenu .topSection .logo img{
    margin-left: .1vw;
    width: 75%;
    height: 75%;
    max-width: 50px;
    min-width: 20px;
    margin-bottom: 10px;
    overflow: hidden;
    display: inline-block;
    transition: margin-top .9s;
}

.sideMenu .topSection{
    position: relative;
    max-height: 20vh;
}
.sideMenu.inactive .topSection .logo img{
    margin-top: 2vh;
    margin-left: -3vh;
    width: 60px;
    transition: margin-top .9s;
}

.sideMenu .topSection .toggleMenu{
    color: #3333;
    font-size: 20px;
    position: absolute;
    top:5px;
    right: 40px;
    transform: translateY(-0%);
    cursor: pointer;
    transition: transform 0.3s ease-in;
    transition: right 0.8s;
}

.sideMenu.inactive .topSection .toggleMenu{
    right: 20px;
    transform: rotate(180deg);
    transition: transform 0.5s ease-in;
    transition: right 0.8s;
}

.sideMenu .mainMenu .menuItem{
    background-color: #fff;
    color: #333;
    text-decoration: none;
    font-size: 15px;
    display: block;
    font-weight: 600;
    text-align:left;
    cursor: pointer;
    transition: margin-top .9s;
}

.sideMenu .mainMenu .menuItem:hover{
    background-color: #e6e6e6;
    color: #333;
    transition: color .2s;
}

.sideMenu.inactive .mainMenu .menuItem{
    pointer-events: none;
    margin-top: 3vh;
    transition: margin-top .9s;
}

.sideMenu .mainMenu .menuItem .menuIcon{
    display: inline-block;
    width: 75%;
    height: 75%;
    max-width: 50px;
    font-size: 20px;
    line-height: 40px;
    text-align:center;
    /* padding-left: 10%; */
    
}

.sideMenu .mainMenu .menuItem span{
    position: absolute;
    display: inline-block;
    line-height: 40PX;
    opacity: 1;
    transition: opacity .7s ease-in;
}

.sideMenu.inactive .mainMenu .menuItem span{
    opacity: 0;
    width: 0;
    height: 0px;
    overflow: hidden;
    transition: opacity .7s ease-in;
}

.sideMenu .mainMenu .subMenu{
    color: #333;
    margin-left: 10px;
    text-align:left;
    border-left: 1px solid #666;
    box-sizing: border-box;
    padding: 0 10px;
    max-height: 0px;
    overflow: hidden;
    transition: max-height .8s;
}
.sideMenu .mainMenu .subMenu.active{
    max-height: 400px;
    overflow-y: scroll;
    transition: max-height .8s;
}
.sideMenu .mainMenu .subMenu button{
    display: inline-block;
    align-items: center;
    padding: 1vh 6vh;
    background-color: #f2f2f2;
    color: #333;
    border-radius: 4px;
    text-align: center;
    text-decoration: none;
    transition: background-color 0.3s ease;
    cursor: pointer;
}

.sideMenu .mainMenu .subMenu button:hover {
    background-color: #333;
    color: #f2f2f2;
    transition: color .2s;
}


.sideMenu .mainMenu .subMenu label {
    display: inline-block;
    margin: 3px 0;
}

.sideMenu .mainMenu .subMenu button {
    display: inline-block;
    margin: 5px;
}


.filters-bar{
    /* display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around; */

    button {
        height: 25px;
        width: 60px;
    }
}


@media (max-width: 700px) {

    .sideMenu{
        align-content: center;
        width: 100vw;
        min-width: 60px;
        padding: 20px 5px 20px 20%;
    }

    .toggleIcon{
        margin-left: -2vw;
    }

    .sideMenu.inactive{
        width: 15vw;
        height: 10px;
        min-width: 60px;
    }
}
`