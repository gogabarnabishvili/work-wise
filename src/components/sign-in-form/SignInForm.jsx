import ButtonSignIn from "../button/ButtonSignIn";
import ButtonSignUp from "../button/ButtonSignUp";
import LabelInput from "../label-input/LabelInput";

import {
    SiginFormCanselStyled,
    SiginINFormBoxStyled,
    SiginINFormTitleStyled,
    SiginInFormButtonStyled,
    SignInFormSmolBoxStyled,
} from "./SignInFormStyled";

const SignInForm = (props) => {
    return (
        <SiginINFormBoxStyled style={props.style}>
            <SiginFormCanselStyled>X</SiginFormCanselStyled>

            <SiginINFormTitleStyled>Welcome</SiginINFormTitleStyled>
            <LabelInput type="eamil" name="email" placeholder="E-mail" />
            <LabelInput
                type="password"
                name="password"
                placeholder="Password"
            />
            <SiginInFormButtonStyled>Log In</SiginInFormButtonStyled>
            <SignInFormSmolBoxStyled>
                <SiginInFormButtonStyled>
                    Don’t Have An Account?
                </SiginInFormButtonStyled>
                <ButtonSignUp />
            </SignInFormSmolBoxStyled>
        </SiginINFormBoxStyled>
    );
};
export default SignInForm;
