import { useEffect } from 'react';
import store from '../store';
import { getDetailClassAction, setLoadingStatusAction } from '../actions/classActions';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import SpinnerIcon from './SpinnerIcon';

function ClassDetailForm(props) {
    const { id } = useParams();

    useEffect(() => {
        store.dispatch(setLoadingStatusAction(true));
        store.dispatch(getDetailClassAction(id));
    }, []);

    return (
        <div className="container">
            <div className="text-center">
                <h1 className="mt-5 ">Class Detail {props.isLoading && SpinnerIcon}</h1>
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
                    {props.classDetail && (
                        <tr key={props.classDetail.id}>
                            <th scope="row">{props.classDetail.id}</th>
                            <td>{props.classDetail.name}</td>
                            <td>{props.classDetail.description}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        classDetail: state.classReducer.item,
        isLoading: state.classReducer.isLoading,
    };
};
export default connect(mapStateToProps)(ClassDetailForm);
