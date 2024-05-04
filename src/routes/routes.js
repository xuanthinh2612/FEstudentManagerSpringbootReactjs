import configs from '../configs';
import StudentList from '../components/StudentList';
import Home from '../components/Home';
import ClassList from '../components/ClassList';
import StudentEditForm from '../components/StudentEditFrom';
import StudentDetail from '../components/StudentDetail';
import NewStudentForm from '../components/NewStudentFrom';
import NewClassForm from '../components/NewClassForm';
import EditClassForm from '../components/EditClassForm';
import ClassDetailForm from '../components/ClassDetailForm';

const routes = [
    { path: configs.routes.home, element: Home },
    { path: configs.routes.studentList, element: StudentList },
    { path: configs.routes.classList, element: ClassList },
    { path: configs.routes.classDetail, element: ClassDetailForm },
    { path: configs.routes.studentDetail, element: StudentDetail },
    { path: configs.routes.newStudent, element: NewStudentForm },
    { path: configs.routes.newClass, element: NewClassForm },
    { path: configs.routes.editStudent, element: StudentEditForm },
    { path: configs.routes.editClass, element: EditClassForm },
];

export default routes;
