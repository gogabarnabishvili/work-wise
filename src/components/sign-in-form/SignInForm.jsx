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
import { useContext } from "react";
import { LanguageContext } from "../lenguage-change/LenguagecContext";
import TEXTS from "../../TextLenguage";
const SignInForm = () => {
    const { language } = useContext(LanguageContext);
    // const [display1, setDisplay] = useState(false);
    // const displayNone = () => {
    //     setDisplay(!display1);
    // };
    return (
        <>
            {/* <SiginFormNavButonlStyled onClick={displayNone}>
                {TEXTS[language].signin}
            </SiginFormNavButonlStyled> */}
            <SiginINFormBoxStyled
            // style={{ display: display1 ? `block` : `none` }}
            >
                {/* <SiginFormCanselStyled onClick={displayNone}>
                    X
                </SiginFormCanselStyled> */}

                <SiginINFormTitleStyled>Welcome</SiginINFormTitleStyled>
                <LabelInput
                    type="eamil"
                    name="email"
                    placeholder={TEXTS[language].email}
                />
                <LabelInput
                    type="password"
                    name="password"
                    placeholder={TEXTS[language].password}
                />
                <SiginInFormButtonStyled>
                    {TEXTS[language].signin}
                </SiginInFormButtonStyled>
                <SignInFormSmolBoxStyled>
                    <SiginInFormButtonStyled>
                        {TEXTS[language].doHaveAcc}
                    </SiginInFormButtonStyled>
                </SignInFormSmolBoxStyled>
            </SiginINFormBoxStyled>
        </>
    );
};
export default SignInForm;
