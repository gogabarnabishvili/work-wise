import LabelInput from "../label-input/LabelInput";
import { useState } from "react";
import {
    SiginFormCanselStyled,
    SiginINFormBoxStyled,
    SiginINFormTitleStyled,
    SiginInFormButtonStyled,
    SignInFormSmolBoxStyled,
    SiginFormNavButonlStyled,
} from "./SignInFormStyled";

const SignInForm = () => {
    const [display1, setDisplay] = useState(false);
    const displayNone = () => {
        setDisplay(!display1);
    };
    return (
        <>
            <SiginFormNavButonlStyled onClick={displayNone}>
                Sign In
            </SiginFormNavButonlStyled>
            <SiginINFormBoxStyled
                style={{ display: display1 ? `block` : `none` }}
            >
                <SiginFormCanselStyled onClick={displayNone}>
                    X
                </SiginFormCanselStyled>

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
                </SignInFormSmolBoxStyled>
            </SiginINFormBoxStyled>
        </>
    );
};
export default SignInForm;
