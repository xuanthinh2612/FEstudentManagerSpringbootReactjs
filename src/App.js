import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DefaultLayout } from './Layout';
import routes from './routes';
function App() {
    // const DefaultLayout = DefaultLayout;
    return (
        <BrowserRouter>
            <Routes>
                {routes.map((route, index) => {
                    const Page = route.element;
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <DefaultLayout>
                                    <Page />
                                </DefaultLayout>
                            }
                        ></Route>
                    );
                })}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
