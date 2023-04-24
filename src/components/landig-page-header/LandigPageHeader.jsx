import {
    LandigHeaderStyled,
    LandigLiStyled,
    LandigNavStyled,
    LandigUlStyled,
} from "./LandigPageHeaderStyled";

import ButtonAboutUs from "../button/AboutUs";
import ButtonContact from "../button/Contact";

import SelectOption from "../select-option/SelectOption";
import Logo from "../logo/Logo";
import SignInForm from "../sign-in-form/SignInForm";
import SignUpForm from "../sign-up-form/SignUpForm";

const lenguage = ["geo", "eng"];
const LandigPageHeader = () => {
    return (
        <>
            <LandigHeaderStyled>
                <LandigNavStyled>
                    <Logo />
                    <LandigUlStyled>
                        <LandigLiStyled>
                            <ButtonAboutUs />
                        </LandigLiStyled>
                        <LandigLiStyled>
                            <ButtonContact />
                        </LandigLiStyled>

                        <LandigLiStyled>
                            <SignInForm />
                        </LandigLiStyled>
                        <LandigLiStyled>
                            <SignUpForm />
                        </LandigLiStyled>
                        <LandigLiStyled>
                            <SelectOption option={lenguage} />
                        </LandigLiStyled>
                    </LandigUlStyled>
                </LandigNavStyled>
            </LandigHeaderStyled>
        </>
    );
};
export default LandigPageHeader;
