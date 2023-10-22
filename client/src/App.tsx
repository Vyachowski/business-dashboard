import { lazy, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Overview from './pages/Dashboard/Overview';
import SeoOverview from './pages/Dashboard/SeoOverview.tsx';
import PpcOverview from './pages/Dashboard/PpcOverview.tsx';
import InsightTaskList from './pages/Task/InsightTaskList.tsx';
import DataAddition from './pages/ManualDataEntry/DataAddition';
import ErrorPage from './pages/Pages/ErrorPage';
import ResetPassword from './pages/Authentication/ResetPassword';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import Integrations from "./pages/Integrations.tsx";

const DefaultLayout = lazy(() => import('./layout/DefaultLayout'));
export const baseUrl = 'https://business-dahboard-client.onrender.com';
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
                      path="/dashboard/seo-traffic"
                      element={
                        <>
                          <PageTitle title="SEO Overview Dashboard | Insightful - Tailwind CSS Admin Dashboard Template" />
                          <SeoOverview />
                        </>
                      }
                    />
                  <Route
                    path="/dashboard/ppc-traffic"
                    element={
                      <>
                        <PageTitle title="PPC Overview Dashboard | Insightful - Tailwind CSS Admin Dashboard Template" />
                        <PpcOverview />
                      </>
                    }
                  />
                    <Route
                        path="/activities/insight-task-list"
                        element={
                            <>
                                <PageTitle title="Task List | Insightful - Valuable ideas from your marketing data" />
                                <InsightTaskList />
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
                        path="/auth/sign-in"
                        element={
                            <>
                                <PageTitle title="Signin | Insightful - Valuable ideas from your marketing data" />
                                <SignIn />
                            </>
                        }
                    />
                    <Route
                        path="/auth/sign-up"
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
                    <Route path="*" element={<ErrorPage />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
