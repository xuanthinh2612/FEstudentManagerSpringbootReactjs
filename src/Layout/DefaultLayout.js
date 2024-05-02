import Navbar from '../components/Navbar';

function DefaultLayout({ children }) {
    return (
        <>
            <Navbar />
            <div className="container min-vh-100">{children}</div>
            <footer className="footer py-3 bg-light">
                <div className="container d-flex justify-content-center">
                    <span className="text-muted">Student Management System.</span>
                </div>
            </footer>
        </>
    );
}

export default DefaultLayout;
