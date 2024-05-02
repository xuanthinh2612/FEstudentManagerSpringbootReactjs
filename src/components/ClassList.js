import { useEffect, useState } from 'react';
import * as classService from '../service/classService';

function ClassList() {
    const [classListState, setClassList] = useState([]);

    useEffect(() => {
        const getListData = async () => {
            const res = await classService.getClassList();
            setClassList(res);
        };

        getListData();
    }, []);

    return (
        <div className="container">
            <div className="text-center">
                <h1 className="mt-5 ">Class List</h1>
            </div>
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                    </tr>
                </thead>
                <tbody>
                    {classListState.map((classElement) => {
                        return (
                            <tr key={classElement.id}>
                                <th scope="row">{classElement.id}</th>
                                <td>{classElement.name}</td>
                                <td>{classElement.description}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default ClassList;
