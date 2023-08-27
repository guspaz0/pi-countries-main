import styled from "styled-components";

export const PaginationStyle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    button {
        border-radius: 5px;
        padding: 0px;
        height: 20px;
        width: 20px;
    }
    .activePage {
        color: white;
        font-weight: bold;
        background-color: black;
    }
`