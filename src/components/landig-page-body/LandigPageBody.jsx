import {
    LandgiWraperStyled,
    LandgiRigthBoxStyled,
    LandgiLeftBoxStyled,
    LandgiTitleStyled,
    LandgiRigthImgStyled,
    LandigInfoSmollboxtyled,
} from "./LandigPageBodyStyled";
import LandigPageImg from "../images-icons/landigMinImg.png";
import LandigInfo from "../landig-page-info/LandigInfo";
import { useContext } from "react";
import { LanguageContext } from "../lenguage-change/LenguagecContext";
import TEXTS from "../../TextLenguage";

const LandigPageBody = () => {
    const { language } = useContext(LanguageContext);

    return (
        <LandgiWraperStyled>
            <LandgiLeftBoxStyled>
                <LandgiTitleStyled>
                    {TEXTS[language].landigTitle}
                </LandgiTitleStyled>
                <LandigInfoSmollboxtyled>
                    <LandigInfo
                        title={TEXTS[language].landigSerchJobTitle}
                        text={TEXTS[language].landigSerchTalant}
                        value={TEXTS[language].getStarted}
                    />
                    <LandigInfo
                        title={TEXTS[language].landigSerchTalantTitle}
                        text={TEXTS[language].landigSerchJob}
                        value={TEXTS[language].getStarted}
                    />
                </LandigInfoSmollboxtyled>
            </LandgiLeftBoxStyled>
            <LandgiRigthBoxStyled>
                <LandgiRigthImgStyled
                    src={LandigPageImg}
                    alt="start work, good job, workWise"
                ></LandgiRigthImgStyled>
            </LandgiRigthBoxStyled>
        </LandgiWraperStyled>
    );
};
export default LandigPageBody;
