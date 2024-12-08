import styled from 'styled-components';

const StyledLogo = styled.div`
    text-align: center;
`;

const Img = styled.img`
    height: 10rem;
    width: auto;
    border-radius: 9999px;
`;

export default function Logo() {
    return (
        <StyledLogo>
            <Img src="logo.jpg" />
        </StyledLogo>
    );
}
