import { format } from 'date-fns';
import Table from '../../ui/Table';
import styled from 'styled-components';
import Menus from '../../ui/Menus';
import { HiPencil, HiTrash } from 'react-icons/hi2';
import Modal from '../../ui/Modal';
import ConfirmDelete from '../../ui/ConfirmDelete';
import { useDeleteLocation } from './useDeleteLocation';

const Name = styled.div`
    font-size: 1.6rem;
    font-weight: 600;
    color: var(--color-grey-600);
`;

const Number = styled.div`
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--color-grey-600);
`;
export default function LocationRow({ location }) {
    const {
        _id: locationID,
        location_name,

        createdAt,
        latitude,
        longitude,
    } = location;

    const { isDeleting, deleteLocation } = useDeleteLocation();

    return (
        <Table.Row>
            <Name>{locationID}</Name>
            <Name>{location_name}</Name>

            <span>{format(new Date(createdAt), 'dd-MM-yyyy')}</span>
            <Number>{longitude} </Number>
            <Number>{latitude} </Number>
            <div>
                <Modal>
                    <Menus.Menu>
                        <Menus.Toggle id={locationID} />
                        <Menus.List id={locationID}>
                            <Menus.Button icon={<HiPencil />}>
                                Chỉnh sửa
                            </Menus.Button>
                            <Modal.Open opens="delete-location">
                                <Menus.Button icon={<HiTrash />}>
                                    Xóa
                                </Menus.Button>
                            </Modal.Open>
                        </Menus.List>
                        <Modal.Window name="delete-location">
                            <ConfirmDelete
                                resourceName="vị trí"
                                disabled={isDeleting}
                                onConfirm={() => deleteLocation(locationID)}
                            />
                        </Modal.Window>
                    </Menus.Menu>
                </Modal>
            </div>
        </Table.Row>
    );
}
