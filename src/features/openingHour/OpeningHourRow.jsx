import { format } from 'date-fns';
import Table from '../../ui/Table';
import styled from 'styled-components';
// import Menus from '../../ui/Menus';
// import { HiPencil, HiTrash } from 'react-icons/hi2';
// import Modal from '../../ui/Modal';
// import ConfirmDelete from '../../ui/ConfirmDelete';

const Number = styled.div`
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--color-grey-600);
`;

const Name = styled.div`
    font-size: 1.6rem;
    font-weight: 600;
    color: var(--color-grey-600);
`;
export default function OpeningHourRow({ openingHour }) {
    const {
        // _id: openingHourID,
        name,
        monday,
        tuesday,
        wednesday,
        thursday,
        friday,
        saturday,
        sunday,
        createdAt,
    } = openingHour;

    // const { isDeleting, deleteLocation } = useDeleteLocation();

    return (
        <Table.Row>
            <Name>{name}</Name>
            <Number>
                {monday.open} - {monday.close}
            </Number>
            <Number>
                {tuesday.open} - {tuesday.close}
            </Number>
            <Number>
                {wednesday.open} - {wednesday.close}
            </Number>
            <Number>
                {thursday.open} - {thursday.close}
            </Number>
            <Number>
                {friday.open} - {friday.close}
            </Number>
            <Number>
                {saturday.open}-{saturday.close}
            </Number>
            <Number>
                {sunday.open} - {sunday.close}
            </Number>
            <Number>{format(new Date(createdAt), 'dd-MM-yyyy')} </Number>
            <div>
                {/* <Modal>
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
                    </Menus.Menu>
                    <Modal.Window name="delete-location">
                        <ConfirmDelete
                            resourceName="vị trí"
                            disabled={isDeleting}
                            onConfirm={() => deleteLocation(locationID)}
                        />
                    </Modal.Window>
                </Modal> */}
            </div>
        </Table.Row>
    );
}
