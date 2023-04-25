import {
    LandigHeaderStyled,
    LandigLiStyled,
    LandigNavStyled,
    LandigUlStyled,
    LandigButtonAboutStyled,
    LandigButtonContactStyled,
} from "./LandigPageHeaderStyled";
import TEXTS from "../../TextLenguage";
import ButtonAboutUs from "../button/AboutUs";
import ButtonContact from "../button/Contact";

import SelectOption from "../select-option/SelectOption";
import Logo from "../logo/Logo";
import SignInForm from "../sign-in-form/SignInForm";
import SignUpForm from "../sign-up-form/SignUpForm";
import { useState, useContext } from "react";
import { LanguageContext } from "../lenguage-change/LenguagecContext";
import SigInButton from "../button/SiginInButton";
import SigUpButton from "../button/SignUpButton";
const lenguage = ["EN", "GE"];
const LandigPageHeader = () => {
    const [signInOpen, setSignInOpen] = useState(false);
    const [signUpOpen, setSignUpOpen] = useState(false);
    const [lenguage1, setLenguage] = useState("EN");
    const { language, updateLang } = useContext(LanguageContext);
    updateLang(lenguage1);
    console.log(language);

    const onSignInClick = () => {
        setSignUpOpen(false);
        setSignInOpen(!signInOpen);
    };

    const onSignUpClick = () => {
        setSignInOpen(false);
        setSignUpOpen(!signUpOpen);
    };
    return (
        <>
            <LandigHeaderStyled>
                <LandigNavStyled>
                    <Logo />
                    <LandigUlStyled>
                        <LandigLiStyled>
                            <LandigButtonAboutStyled>
                                {TEXTS[language].aboutus}
                            </LandigButtonAboutStyled>
                        </LandigLiStyled>
                        <LandigLiStyled>
                            <LandigButtonContactStyled>
                                {TEXTS[language].contact}
                            </LandigButtonContactStyled>
                        </LandigLiStyled>

                        <LandigLiStyled>
                            <SigInButton onClick={onSignUpClick} />
                            {signUpOpen && <SignInForm />}
                            {/* <SignInForm /> */}
                        </LandigLiStyled>
                        <LandigLiStyled>
                            <SigUpButton onClick={onSignInClick} />
                            {signInOpen && <SignUpForm />}
                            {/* <SignUpForm /> */}
                        </LandigLiStyled>
                        <LandigLiStyled>
                            <SelectOption
                                onChange={(e) => setLenguage(e.target.value)}
                                option={lenguage}
                            />
                        </LandigLiStyled>
                    </LandigUlStyled>
                </LandigNavStyled>
            </LandigHeaderStyled>
        </>
    );
};
export default LandigPageHeader;
