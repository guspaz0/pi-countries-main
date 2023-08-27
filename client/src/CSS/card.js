import styled from 'styled-components';

export const CardStyle = styled.div`
    display: flex;
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
    }
`