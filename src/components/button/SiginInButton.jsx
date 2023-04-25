import styled from "styled-components";

const SiginInBuutonStyled = styled.button``;

const SigInButton = (props) => {
    return (
        <SiginInBuutonStyled onClick={props.onClick}>
            Sign in
        </SiginInBuutonStyled>
    );
};
export default SigInButton;
