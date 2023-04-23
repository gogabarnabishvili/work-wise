import {
    LandigH1Styled,
    LandigHeaderStyled,
    LandigImgStyled,
    LandigLiStyled,
    LandigNavStyled,
    LandigUlStyled,
} from "./LandigPageHeaderStyled";
import logo from "../images-icons/logo.png";
import ButtonAboutUs from "../button/AboutUs";
import ButtonContact from "../button/Contact";
import ButtonSignIn from "../button/ButtonSignIn";
import ButtonSignUp from "../button/ButtonSignUp";
import SelectOption from "../select-option/SelectOption";
{
    /* <img src={logo} alt="work wise"/> */
}
const lenguage = ["geo", "eng"];
const LandigPageHeader = () => {
    return (
        <>
            <LandigHeaderStyled>
                <LandigNavStyled>
                    <LandigH1Styled>
                        <LandigImgStyled
                            src={logo}
                            alt="work wise logo, job,find"
                        ></LandigImgStyled>
                        WorkWise
                    </LandigH1Styled>
                    <LandigUlStyled>
                        <LandigLiStyled>
                            <ButtonAboutUs />
                        </LandigLiStyled>
                        <LandigLiStyled>
                            <ButtonContact />
                        </LandigLiStyled>

                        <LandigLiStyled>
                            <ButtonSignIn />
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
