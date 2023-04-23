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
const LandigPageBody = () => {
    return (
        <LandgiWraperStyled>
            <LandgiLeftBoxStyled>
                <LandgiTitleStyled>
                    Where Top Talent Meets Top Companies
                </LandgiTitleStyled>
                <LandigInfoSmollboxtyled>
                    <LandigInfo
                        title="I’m a Freelancer"
                        text="Get the opportunity that boost your"
                        value="Get Started"
                    />
                    <LandigInfo
                        title="I Want to Hire"
                        text="Find your desirableFreelancer"
                        value="Get Started"
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
