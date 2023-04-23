import {
    SignInFormSmolBoxStyled,
    SiginFormCanselStyled,
    SiginINFormTitleStyled,
    SiginInFormButtonStyled,
} from "../sign-in-form/SignInFormStyled";
import styled from "styled-components";

import LabelInput from "../label-input/LabelInput";
const SignUpFormBoxStyled = styled.div`
    display: none;
`;
const SignUpForm = (props) => {
    return (
        <SignUpFormBoxStyled style={props.style}>
            <SiginFormCanselStyled>x</SiginFormCanselStyled>
            <SiginINFormTitleStyled>Create an Account</SiginINFormTitleStyled>
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
    );
};
export default SignUpForm;
