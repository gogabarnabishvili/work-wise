import styled from "styled-components";

const SiginUpBuutonStyled = styled.button`
  background-color: #000000;
  color: #ffffff;
  border: none;
  font-size: 22px;
  border-radius: 30px;
  padding: 5px 20px;
  width: 100px
  font-weight: 400;
`;

const SigUpButton = (props) => {
  return (
    <SiginUpBuutonStyled onClick={props.onClick}>Join</SiginUpBuutonStyled>
  );
};
export default SigUpButton;
