import { lazy, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts } from "./redux/contactsOps";
import { Route, Routes } from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import RestrictedRoute from "./components/RestrictedRoute/RestrictedRoute";

import Layout from "./components/Layout/Layout";
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const RegistrationPage = lazy(() =>
  import("./pages/RegistrationPage/RegistrationPage")
);
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage/ContactsPage"));
const NotFoudPage = lazy(() => import("./pages/NotFoudPage/NotFoudPage"));

import "./App.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/register"
          element={
            // <RestrictedRoute>
            <RegistrationPage />
            // </RestrictedRoute>
            // <RestrictedRoute
            //   redirectTo="/contacts"
            //   component={<RegistrationPage />}
            // />
          }
        />
        <Route
          path="/login"
          element={
            // <RestrictedRoute>
            <LoginPage />
            // </RestrictedRoute>
            // <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            // <RestrictedRoute>
            <ContactsPage />
            // </RestrictedRoute>
            // <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
        <Route path="*" element={<NotFoudPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
