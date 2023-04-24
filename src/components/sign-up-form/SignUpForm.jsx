import {
    SignInFormSmolBoxStyled,
    SiginFormCanselStyled,
    SiginINFormTitleStyled,
    SiginInFormButtonStyled,
    SiginFormNavButonlStyled,
} from "../sign-in-form/SignInFormStyled";
import styled from "styled-components";
import { useState } from "react";
import LabelInput from "../label-input/LabelInput";
const SignUpFormBoxStyled = styled.div`
    display: none;
`;
const SignUpForm = () => {
    const [display1, setDisplay] = useState(false);
    const displayNone = () => {
        setDisplay(!display1);
    };
    return (
        <>
            <SiginFormNavButonlStyled onClick={displayNone}>
                Sign Up
            </SiginFormNavButonlStyled>
            <SignUpFormBoxStyled
                style={{ display: display1 ? `block` : `none` }}
            >
                <SiginFormCanselStyled onClick={displayNone}>
                    x
                </SiginFormCanselStyled>
                <SiginINFormTitleStyled>
                    Create an Account
                </SiginINFormTitleStyled>
                <LabelInput type="text" name="name" placeholder="Name" />
                <LabelInput type="text" name="Surname" placeholder="Surname" />
                <LabelInput type="eamil" name="email" placeholder="E-mail" />
                <LabelInput
                    type="password"
                    name="password"
                    placeholder="Password"
                />
                <SiginInFormButtonStyled>Sign up </SiginInFormButtonStyled>
            </SignUpFormBoxStyled>
        </>
    );
};
export default SignUpForm;
