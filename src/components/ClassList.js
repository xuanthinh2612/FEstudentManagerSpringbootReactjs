import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as classService from '../service/classService';
import { Link } from 'react-router-dom';
import configs from '../configs';
import { pencel, plus, trash } from '../assets/icons';
import ConfirmModal from './ConfirmModal';

function ClassList() {
    const [classListState, setClassList] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const getListData = async () => {
            const res = await classService.getClassList();
            setClassList(res);
        };

        getListData();
    }, []);

    const handleEdit = (classId) => {
        navigate(`/edit-class/${classId}`);
    };

    const handleDelete = () => {};

    return (
        <div className="container">
            <div className="text-center">
                <h1 className="mt-5 ">Class List</h1>
            </div>
            <div className="d-flex justify-content-end">
                <Link to={configs.routes.newClass} className="btn btn-outline-dark">
                    New <span>{plus}</span>
                </Link>
            </div>

            <table className="table mt-4">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {classListState.map((classElement) => {
                        return (
                            <tr key={classElement.id}>
                                <th scope="row">{classElement.id}</th>
                                <td>
                                    <Link className="text-decoration-none" to={`/class-detail/${classElement.id}`}>
                                        {classElement.name}
                                    </Link>{' '}
                                </td>
                                <td>{classElement.description}</td>
                                <td>
                                    <ConfirmModal callback={handleEdit} id={classElement.id}>
                                        <span className="text-success m-2">{pencel}</span>
                                    </ConfirmModal>
                                    <ConfirmModal callback={handleDelete} id={handleEdit.id}>
                                        <span className="text-danger m-2">{trash}</span>
                                    </ConfirmModal>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default ClassList;
