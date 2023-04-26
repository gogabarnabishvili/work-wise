import styled from "styled-components";
import logo from "../images-icons/logo.png";
const LogoH1Styled = styled.h1`
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 30px;
`;
const LogoImgStyled = styled.img``;

const Logo = () => {
  return (
    <LogoH1Styled>
      <LogoImgStyled src={logo} alt="work wise logo, job,find"></LogoImgStyled>
      WorkWise
    </LogoH1Styled>
  );
};
export default Logo;
