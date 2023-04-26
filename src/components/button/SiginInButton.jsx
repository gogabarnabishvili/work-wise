import styled from "styled-components";

const SiginInBuutonStyled = styled.button`
  background-color: #f4f4f4;
  color: #000000;
  border: none;
  font-size: 22px;
  border-radius: 30px;
  padding: 5px 20px;
  width: 100px
  font-weight: 400;
`;

const SigInButton = (props) => {
  return (
    <SiginInBuutonStyled onClick={props.onClick}>Log in</SiginInBuutonStyled>
  );
};
export default SigInButton;
