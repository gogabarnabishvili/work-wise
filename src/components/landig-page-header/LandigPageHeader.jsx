import {
    LandigHeaderStyled,
    LandigLiStyled,
    LandigNavStyled,
    LandigUlStyled,
} from "./LandigPageHeaderStyled";

import ButtonAboutUs from "../button/AboutUs";
import ButtonContact from "../button/Contact";
import ButtonSignIn from "../button/ButtonSignIn";
import ButtonSignUp from "../button/ButtonSignUp";
import SelectOption from "../select-option/SelectOption";
import Logo from "../logo/Logo";

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
                            <ButtonSignIn value="Sign in" />
                        </LandigLiStyled>
                        <LandigLiStyled>
                            <ButtonSignUp />
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
