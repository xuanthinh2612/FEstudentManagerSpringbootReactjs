import { useEffect, useMemo, useState } from 'react';
import * as studentService from '../service/studentService';
import { Link, useNavigate } from 'react-router-dom';
import { pencel, trash, plus } from '../assets/icons';
import configs from '../configs';
import ConfirmModal from './ConfirmModal';
import store from '../store';
import { getListStudentAction } from '../actions/studentActions';
import { connect } from 'react-redux';

function StudentList() {
    const navigate = useNavigate();

    useEffect(() => {
        store.dispatch(getListStudentAction());
    }, []);

    console.log(store.getState().studentReducer);

    const handleEdit = (studentId) => {
        navigate(`/edit-student/${studentId}`);
    };

    console.log();
    const handleDelete = (studentId) => {
        // const fetchApi = async () => {
        //     const result = await studentService.deleteStudentById(studentId);
        //     if (result) {
        //         const newStudentList = studentList.filter((student) => student.id !== studentId);
        //         setStudentList(newStudentList);
        //     }
        // };
        // fetchApi();
    };

    return (
        <div className="container">
            <div className="d-flex">
                <h1 className="mt-5">Student List</h1>
            </div>
            <div className="d-flex justify-content-end">
                <Link to={configs.routes.newStudent} className="btn btn-outline-dark">
                    New <span>{plus}</span>
                </Link>
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
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {store.getState().studentReducer.list &&
                        store.getState().studentReducer.list.map((student) => {
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
                                    <td>
                                        <ConfirmModal callback={handleEdit} id={student.id}>
                                            <span className="text-success m-2">{pencel}</span>
                                        </ConfirmModal>
                                        <ConfirmModal callback={handleDelete} id={student.id}>
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

const mapStateToProps = (state) => {
    return {
        students: state.studentReducer.list,
    };
};

export default connect(mapStateToProps)(StudentList);
