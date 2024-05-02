import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as studentService from '../service/studentService';
import { pencel, trash } from '../assets/icons';
import { Link, useNavigate } from 'react-router-dom';
import ConfirmModal from './ConfirmModal';
import configs from '../configs';
import store from '../store';
import { getDetailStudentAction, deleteStudentByIdAction } from '../actions/studentActions';
import { connect } from 'react-redux';
// import { getListStudentAction } from '../actions/studentActions';

function StudentDetail(props) {
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        store.dispatch(getDetailStudentAction(id));
    }, [id]);

    const handleEdit = (studentId) => {
        navigate(`/edit-student/${studentId}`);
    };
    const handleDelete = async (studentId) => {
        await store.dispatch(deleteStudentByIdAction(studentId));
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
                    {props.student ? (
                        <tr>
                            <th scope="row">{props.student.id}</th>
                            <td>
                                {props.student.firstName}
                                {props.student.lastName}
                            </td>
                            <td>{`${props.student.email}`}</td>
                            <td>{props.student.age}</td>
                            <td>{props.student.address}</td>
                            <td>{props.student.schoolClass && props.student.schoolClass.name}</td>
                            <td>
                                <ConfirmModal callback={handleEdit} id={props.student.id}>
                                    <span className="text-success m-2">{pencel}</span>
                                </ConfirmModal>
                                <ConfirmModal callback={handleDelete} id={props.student.id}>
                                    <span className="text-danger m-2">{trash}</span>
                                </ConfirmModal>
                            </td>
                        </tr>
                    ) : (
                        <tr className="text-center">
                            <td colSpan={7}>No Data To Show.</td>
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
