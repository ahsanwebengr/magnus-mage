import React, { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Loader from './components/Loader';

const Dashboard = lazy(() => import('./pages/Dashboard'));
const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));
const Forget = lazy(() => import('./pages/Forget'));
const ResetPassword = lazy(() => import('./pages/ResetPassword'));
const VerifyOtp = lazy(() => import('./pages/VerifyOtp'));
const NotFound = lazy(() => import('./pages/NotFound'));

const ProtectedRoute = ({ element }) => {
  const isUserLoggedIn = localStorage.getItem('user') !== null;
  return isUserLoggedIn ? element : <Navigate to="/" />;
};

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/forget' element={<Forget />} />
        <Route path='/reset' element={<ResetPassword />} />
        <Route path='/verify-otp' element={<VerifyOtp />} />
        <Route path='/dashboard' element={<ProtectedRoute element={<Dashboard />} />}
        />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default App;
