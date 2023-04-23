import styled from "styled-components";
import profileIcon from "../images-icons/profile.png";
const ProfileButtonStled = styled.button``;
const ProfileIconStyled = styled.img``;
const Profile = () => {
    return (
        <ProfileButtonStled>
            <ProfileIconStyled src={profileIcon} alt="good job" />
        </ProfileButtonStled>
    );
};
export default Profile;
