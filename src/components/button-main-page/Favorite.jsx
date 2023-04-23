import styled from "styled-components";
import faworiteIcon from "../images-icons/faworite.png";
const FaworiteButtonStled = styled.button``;
const FaworiteIconStyled = styled.img``;
const Faworit = () => {
    return (
        <FaworiteButtonStled>
            <FaworiteIconStyled src={faworiteIcon} alt="good job" />
        </FaworiteButtonStled>
    );
};
export default Faworit;
