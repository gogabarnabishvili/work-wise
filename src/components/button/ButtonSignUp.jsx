import styled from "styled-components";
import SignUpForm from "../sign-up-form/SignUpForm";
import { useState } from "react";
const ButtonSignUpStyled = styled.button``;

const ButtonSignUp = (props) => {
    const [display1, setDisplay] = useState(false);
    const displayNone = () => {
        setDisplay(!display1);
    };
    return (
        <>
            <ButtonSignUpStyled type="button" onClick={displayNone}>
                Sign up
            </ButtonSignUpStyled>
            <SignUpForm style={{ display: display1 ? `block` : `none` }} />
        </>
    );
};
export default ButtonSignUp;
