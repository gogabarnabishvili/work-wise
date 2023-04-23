import Logo from "../logo/Logo";
import {
    MainpageHeaderStyled,
    MainpageImgStyled,
    MainpageLiStyled,
    MainpageNavStyled,
    MainpageUlStyled,
} from "./MainPageHeaderStyled";
import messige from "../images-icons/mesige.png";
import Faworit from "../button-main-page/Favorite";
import Messige from "../button-main-page/Messige";
import Profile from "../button-main-page/Profile";
const MainPageHeader = () => {
    return (
        <MainpageHeaderStyled>
            <MainpageNavStyled>
                <Logo />
                <MainpageUlStyled>
                    <MainpageLiStyled>
                        <Messige />
                    </MainpageLiStyled>
                    <MainpageLiStyled>
                        <Faworit />
                    </MainpageLiStyled>
                    <MainpageLiStyled>
                        <Profile />
                    </MainpageLiStyled>
                </MainpageUlStyled>
            </MainpageNavStyled>
        </MainpageHeaderStyled>
    );
};
export default MainPageHeader;
