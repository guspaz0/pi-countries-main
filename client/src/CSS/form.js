import styled from "styled-components";

export const FormStyle = styled.div`
    display: flex;
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
    }
    .selectCountry {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        .countryChild {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin: 20px;
        }
    }
`