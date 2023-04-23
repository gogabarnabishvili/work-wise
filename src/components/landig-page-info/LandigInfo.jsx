import {
    LandigButtonStyled,
    LandigInfoBoxStyled,
    LandigIconStyled,
    LandigParagrapStyled,
    LandigInfoH3Styled,
} from "./LandigInfoStyled";
import linkIcon from "../images-icons/linkicons.png";
const LandigInfo = (props) => {
    return (
        <LandigInfoBoxStyled>
            <LandigInfoH3Styled>{props.title}</LandigInfoH3Styled>
            <LandigParagrapStyled>{props.text}</LandigParagrapStyled>
            <LandigButtonStyled type="button">
                {props.value}
                <LandigIconStyled
                    src={linkIcon}
                    alt="workWise,see job, start work, freelancer"
                />
            </LandigButtonStyled>
        </LandigInfoBoxStyled>
    );
};
export default LandigInfo;
