import { useState } from "react";
import styled from "styled-components";
import SignInForm from "../sign-in-form/SignInForm";

const ButtonSignInStyled = styled.button``;

const ButtonSignIn = () => {
    const [display1, setDisplay] = useState(false);
    const displayNone = () => {
        setDisplay(!display1);
    };
    return (
        <>
            <ButtonSignInStyled type="button" onClick={displayNone}>
                Log in
            </ButtonSignInStyled>
            <SignInForm style={{ display: display1 ? `block` : `none` }} />
        </>
    );
};
export default ButtonSignIn;
