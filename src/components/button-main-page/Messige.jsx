import styled from "styled-components";
import messigeIcon from "../images-icons/mesige.png";
const MessigeButtonStled = styled.button``;
const MessigeIconStyled = styled.img``;
const Messige = () => {
    return (
        <MessigeButtonStled>
            <MessigeIconStyled src={messigeIcon} alt="good job" />
        </MessigeButtonStled>
    );
};
export default Messige;
