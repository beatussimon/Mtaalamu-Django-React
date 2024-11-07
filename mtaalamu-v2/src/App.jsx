// src/App.jsx
import React from 'react';
import HomePage from './pages/HomePage'; 
import AddNewPost from './pages/AddNewPost'; 
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import PageNotFound from './pages/PageNotFound';
import MainLayout from './layouts/MainLayout';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import AuthLayout from './layouts/AuthLayout'; // Import AuthLayout

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path='add-blog' element={<AddNewPost />} />
          <Route path='*' element={<PageNotFound />} />
        </Route>
        {/* Auth Routes without Main Layout */}
        <Route path='login' element={<AuthLayout><LoginPage /></AuthLayout>} />
        <Route path='signup' element={<AuthLayout><SignUpPage /></AuthLayout>} />
      </>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
