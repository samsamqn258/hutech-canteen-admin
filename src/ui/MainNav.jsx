import {
    HiOutlineCube,
    HiOutlineHome,
    HiOutlineScale,
    HiOutlineUser,
} from 'react-icons/hi';
import { SiNextra } from 'react-icons/si';
import { MdOutlineLocationOn } from 'react-icons/md';
import { FaCodeBranch } from 'react-icons/fa';
import { MdOutlineInventory2 } from 'react-icons/md';
import { BiCategory } from 'react-icons/bi';
import { GoClock } from 'react-icons/go';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
`;

const StyledNavLink = styled(NavLink)`
    &:link,
    &:visited {
        display: flex;
        align-items: center;
        gap: 1.2rem;

        color: var(--color-grey-600);
        font-size: 1.6rem;
        font-weight: 500;
        padding: 1.2rem 2.4rem;
        transition: all 0.3s;
    }

    &:hover,
    &:active,
    &.active:link,
    &.active:visited {
        color: var(--color-grey-800);
        background-color: var(--color-grey-50);
        border-radius: var(--border-radius-sm);
    }

    & svg {
        width: 2.4rem;
        height: 2.4rem;
        color: var(--color-grey-400);
        transition: all 0.3s;
    }

    &:hover svg,
    &:active svg,
    &.active:link svg,
    &.active:visited svg {
        color: var(--color-brand-600);
    }
`;

export default function MainNav() {
    return (
        <nav>
            <NavList>
                <li>
                    <StyledNavLink to="/dashboard">
                        <HiOutlineHome />
                        <span>Trang chủ</span>
                    </StyledNavLink>
                </li>

                <li>
                    <StyledNavLink to="/location">
                        <MdOutlineLocationOn />
                        <span>Vị trí</span>
                    </StyledNavLink>
                </li>
                <li>
                    <StyledNavLink to="/opening-hour">
                        <GoClock />
                        <span>Giờ hoạt động</span>
                    </StyledNavLink>
                </li>
                <li>
                    <StyledNavLink to="/store">
                        <FaCodeBranch />
                        <span>Chi nhánh</span>
                    </StyledNavLink>
                </li>
                <li>
                    <StyledNavLink to="/inventory">
                        <MdOutlineInventory2 />
                        <span>Kho hàng</span>
                    </StyledNavLink>
                </li>
                <li>
                    <StyledNavLink to="/product">
                        <HiOutlineCube />
                        <span>Sản phẩm</span>
                    </StyledNavLink>
                </li>
                <li>
                    <StyledNavLink to="/category">
                        <BiCategory />
                        <span>Danh mục</span>
                    </StyledNavLink>
                </li>
                <li>
                    <StyledNavLink to="/side-dish">
                        <SiNextra />
                        <span>Món phụ</span>
                    </StyledNavLink>
                </li>
                <li>
                    <StyledNavLink to="/user">
                        <HiOutlineUser />
                        <span>Tài khoản</span>
                    </StyledNavLink>
                </li>
            </NavList>
        </nav>
    );
}
