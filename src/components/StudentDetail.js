import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as studentService from '../service/studentService';
import { pencel, trash } from '../assets/icons';
import { Link, useNavigate } from 'react-router-dom';
import ConfirmModal from './ConfirmModal';
import configs from '../configs';
import store from '../store';
import { getDetailStudentAction } from '../actions/studentActions';
import { connect } from 'react-redux';
// import { getListStudentAction } from '../actions/studentActions';
// import { connect } from 'react-redux';

function StudentDetail() {
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        store.dispatch(getDetailStudentAction(id));
    }, [id]);

    const handleEdit = (studentId) => {
        // navigate(`/edit-student/${studentId}`);
    };
    const handleDelete = (studentId) => {
        // const fetchApi = async () => {
        //     const result = await studentService.deleteStudentById(studentId);
        //     if (result) {
        //         navigate(configs.routes.studentList);
        //     }
        // };
        // fetchApi();
    };

    return (
        <div className="container">
            <div className="d-flex">
                <h1 className="mt-5">Student Detail</h1>
            </div>
            <div className="d-flex justify-content-end">
                <button className="btn btn-outline-success">New</button>
            </div>
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Age</th>
                        <th scope="col">Address</th>
                        <th scope="col">Grade</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {store.getState().studentReducer.item && (
                        <tr>
                            <th scope="row">{store.getState().studentReducer.item.id}</th>
                            <td>
                                {store.getState().studentReducer.item.firstName}
                                {store.getState().studentReducer.item.lastName}
                            </td>
                            <td>{`${store.getState().studentReducer.item.email}`}</td>
                            <td>{store.getState().studentReducer.item.age}</td>
                            <td>{store.getState().studentReducer.item.address}</td>
                            <td>
                                {store.getState().studentReducer.item.schoolClass &&
                                    store.getState().studentReducer.item.schoolClass.name}
                            </td>
                            <td>
                                <ConfirmModal callback={handleEdit} id={store.getState().studentReducer.item.id}>
                                    <span className="text-success m-2">{pencel}</span>
                                </ConfirmModal>
                                <ConfirmModal callback={handleDelete} id={store.getState().studentReducer.item.id}>
                                    <span className="text-danger m-2">{trash}</span>
                                </ConfirmModal>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        student: state.studentReducer.item,
    };
};

export default connect(mapStateToProps)(StudentDetail);
