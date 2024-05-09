import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { pencel, trash, plus } from '../assets/icons';
import configs from '../configs';
import ConfirmModal from './ConfirmModal';
import store from '../store';
import { getListStudentAction, deleteStudentByIdAction } from '../actions/studentActions';
import { connect } from 'react-redux';
import { isAdminUser } from '../service/authService';

function StudentList(props) {
    const navigate = useNavigate();

    useEffect(() => {
        store.dispatch(getListStudentAction());
    }, []);

    const handleEdit = (studentId) => {
        navigate(`/edit-student/${studentId}`);
    };

    const handleDelete = async (studentId) => {
        await store.dispatch(deleteStudentByIdAction(studentId));
    };

    const isAdmin = isAdminUser();

    return (
        <div className="container">
            <div className="d-flex">
                <h1 className="mt-5">Student List</h1>
            </div>
            {isAdmin && (
                <div className="d-flex justify-content-end">
                    <Link to={configs.routes.newStudent} className="btn btn-outline-dark">
                        New <span>{plus}</span>
                    </Link>
                </div>
            )}
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Age</th>
                        <th scope="col">Address</th>
                        <th scope="col">Grade</th>
                        {isAdmin && <th></th>}
                    </tr>
                </thead>
                <tbody>
                    {props.listStudent && props.listStudent.length > 0 ? (
                        <>
                            {props.listStudent.map((student) => {
                                return (
                                    <tr key={student.id}>
                                        <th scope="row">{student.id}</th>
                                        <td>
                                            <Link
                                                className="text-decoration-none"
                                                to={`/student-detail/${student.id}`}
                                            >{`${student.firstName} ${student.lastName}`}</Link>
                                        </td>
                                        <td>{`${student.email}`}</td>
                                        <td>{student.age}</td>
                                        <td>{student.address}</td>
                                        <td>{student.schoolClass && student.schoolClass.name}</td>
                                        {isAdmin && (
                                            <td>
                                                <ConfirmModal callback={handleEdit} param={student.id}>
                                                    <span className="text-success m-2">{pencel}</span>
                                                </ConfirmModal>
                                                <ConfirmModal callback={handleDelete} param={student.id}>
                                                    <span className="text-danger m-2">{trash}</span>
                                                </ConfirmModal>
                                            </td>
                                        )}
                                    </tr>
                                );
                            })}
                        </>
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
        listStudent: state.studentReducer.list,
    };
};

export default connect(mapStateToProps)(StudentList);
