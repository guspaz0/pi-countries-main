import styled from "styled-components";

export const FormStyle = styled.div`
    grid-column: 2;
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

`