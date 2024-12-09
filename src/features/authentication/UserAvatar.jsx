import styled from 'styled-components';
import useUser from './useUser';

const StyledUserAvatar = styled.div`
    display: flex;
    gap: 0.8rem;
    align-items: center;
`;

const Avatar = styled.img`
    width: 30px;
    height: 30px;
    object-fit: cover;
    object-position: center;
`;

export default function UserAvatar() {
    const { user } = useUser();
    const { email } = user;
    return (
        <StyledUserAvatar>
            <Avatar src="default-user.jpg" />
            <span>Xin chào, {email}</span>
        </StyledUserAvatar>
    );
}
