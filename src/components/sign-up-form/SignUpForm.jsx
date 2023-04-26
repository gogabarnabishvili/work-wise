import {
    SignInFormSmolBoxStyled,
    SiginFormCanselStyled,
    SiginINFormTitleStyled,
    SiginInFormButtonStyled,
    SiginFormNavButonlStyled,
} from "../sign-in-form/SignInFormStyled";
import styled from "styled-components";
import { useState, useContext } from "react";
import LabelInput from "../label-input/LabelInput";

import { LanguageContext } from "../lenguage-change/LenguagecContext";
import TEXTS from "../../TextLenguage";
const SignUpFormBoxStyled = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    width: 30%;
    height: 50vh;
    background-color: black;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    transform: translate(-50%, -50%);
`;
const SignUpForm = () => {
    const { language } = useContext(LanguageContext);
    // const [display1, setDisplay] = useState(false);
    // const displayNone = () => {
    //     setDisplay(!display1);
    // };
    return (
        <>
            {/* <SiginFormNavButonlStyled onClick={displayNone}>
                {TEXTS[language].signup}
            </SiginFormNavButonlStyled> */}
            {/* {display1 && ()}
            {!display1 && <div></div>} */}
            <SignUpFormBoxStyled
            // style={{ display: display1 ? `block` : `none` }}
            >
                {/* <SiginFormCanselStyled onClick={displayNone}>
                    x
                </SiginFormCanselStyled> */}
                <SiginINFormTitleStyled>
                    {TEXTS[language].createAccount}
                </SiginINFormTitleStyled>
                <LabelInput
                    type="text"
                    name="name"
                    placeholder={TEXTS[language].name}
                />
                <LabelInput
                    type="text"
                    name="Surname"
                    placeholder={TEXTS[language].surname}
                />
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
            </SignUpFormBoxStyled>
        </>
    );
};
export default SignUpForm;
