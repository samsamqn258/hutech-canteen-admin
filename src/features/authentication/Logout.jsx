import { HiOutlineLogout } from 'react-icons/hi';
import ButtonIcon from '../../ui/ButtonIcon';
import useLogout from './useLogout';

export default function Logout() {
    const { isLoading, logout } = useLogout();

    return (
        <ButtonIcon disabled={isLoading} onClick={() => logout()}>
            <HiOutlineLogout />
        </ButtonIcon>
    );
}
