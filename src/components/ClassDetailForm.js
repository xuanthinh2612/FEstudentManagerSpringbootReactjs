function ClassDetailForm() {
    const schoolClass = {
        id: 1,
        name: '12A8',
        description: 'no description for this fucking class',
    };
    return (
        <div className="container">
            <div className="text-center">
                <h1 className="mt-5 ">Class Detail</h1>
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
                    <tr key={schoolClass.id}>
                        <th scope="row">{schoolClass.id}</th>
                        <td>{schoolClass.name}</td>
                        <td>{schoolClass.description}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default ClassDetailForm;
