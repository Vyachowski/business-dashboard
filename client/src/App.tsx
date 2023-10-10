import { lazy, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Overview from './pages/Dashboard/Overview';
import TaskList from './pages/Task/TaskList';
import DataAddition from './pages/ManualDataEntry/DataAddition';
import ErrorPage from './pages/Pages/ErrorPage';
import ResetPassword from './pages/Authentication/ResetPassword';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import Integrations from "./pages/Integrations.tsx";

const DefaultLayout = lazy(() => import('./layout/DefaultLayout'));

function App() {
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), 1000);
    }, []);

    return loading ? (
        <Loader />
    ) : (
        <>
            <Routes>
                <Route element={<DefaultLayout />}>
                    <Route
                        index
                        element={
                            <>
                                <PageTitle title="Overview Dashboard | Insightful - Tailwind CSS Admin Dashboard Template" />
                                <Overview />
                            </>
                        }
                    />
                    <Route
                        path="/tasks/task-list"
                        element={
                            <>
                                <PageTitle title="Task List | Insightful - Valuable ideas from your marketing data" />
                                <TaskList />
                            </>
                        }
                    />
                    <Route
                        path="/manual-entry/data-addition"
                        element={
                            <>
                                <PageTitle title="Data addition | Insightful - Valuable ideas from your marketing data" />
                                <DataAddition />
                            </>
                        }
                    />
                    <Route
                        path="/auth/integrations/"
                        element={
                            <>
                                <PageTitle title="Integrations to third-party services | Insightful - Valuable ideas from your marketing data" />
                                <Integrations />
                            </>
                        }
                    />
                    <Route
                        path="/auth/signin"
                        element={
                            <>
                                <PageTitle title="Signin | Insightful - Valuable ideas from your marketing data" />
                                <SignIn />
                            </>
                        }
                    />
                    <Route
                        path="/auth/signup"
                        element={
                            <>
                                <PageTitle title="Signup | Insightful - Valuable ideas from your marketing data" />
                                <SignUp />
                            </>
                        }
                    />
                    <Route
                        path="/auth/reset-password"
                        element={
                            <>
                                <PageTitle title="Reset Password | Insightful - Valuable ideas from your marketing data" />
                                <ResetPassword />
                            </>
                        }
                    />
                    {/* Добавьте этот маршрут для перенаправления всех несуществующих страниц на ErrorPage */}
                    <Route path="*" element={<ErrorPage />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
