import styled from "styled-components";

const SiginUpBuutonStyled = styled.button``;

const SigUpButton = (props) => {
    return (
        <SiginUpBuutonStyled onClick={props.onClick}>
            Sign Up
        </SiginUpBuutonStyled>
    );
};
export default SigUpButton;
