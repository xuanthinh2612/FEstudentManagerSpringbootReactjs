import configs from '../configs';
import StudentList from '../components/StudentList';
import Home from '../components/Home';
import ClassList from '../components/ClassList';
import StudentEditForm from '../components/StudentEditFrom';
import StudentDetail from '../components/StudentDetail';
import NewStudentForm from '../components/NewStudentFrom';

const routes = [
    { path: configs.routes.home, element: Home },
    { path: configs.routes.studentList, element: StudentList },
    { path: configs.routes.classList, element: ClassList },
    // { path: configs.routes.classDetail, element: Upload },
    { path: configs.routes.studentDetail, element: StudentDetail },
    { path: configs.routes.newStudent, element: NewStudentForm },
    // { path: configs.routes.newClass, element: Upload },
    { path: configs.routes.editStudent, element: StudentEditForm },
    // { path: configs.routes.editClass, element: Upload },
];

export default routes;
