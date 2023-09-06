import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../src/pages/home/Home";
import Layout from "./components/layout/Layout";
import Login from "./pages/auth/Login";
import Contact from "./pages/Contact";
import Regsiter from "./pages/auth/Register";
import About from "./pages/About";
import Forgot from "./pages/auth/Forgot";
import Reset from "./pages/auth/Reset";
import LoginWithCode from "./pages/auth/LoginWithCode";
import Verify from "./pages/auth/Verify";
import Profile from "./pages/profile/Profile";
import BuySell from "./pages/auth/BuySell";
import Buy from "./pages/auth/Buy";
import ChangePassword from "./pages/changePassword/ChangePassword";
import UserList from "./pages/userList/UserList";
import BuyCryptoPayment from "./components/buyCryptoPayment/BuyCryptoPayment";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BuySuccess from "./components/success and error/BuySuccess";
import SellSuccessPage from "./components/success and error/SellSuccessPage";

import {
  getLoginStatus,
  getUser,
  selectIsLoggedIn,
  selectUser,
} from "./redux/features/auth/AuthSlice";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Sell from "./pages/auth/Sell";
axios.defaults.withCredentials = true;

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  useEffect(() => {
    dispatch(getLoginStatus());
    if (isLoggedIn && user === null) {
      dispatch(getUser());
    }
  }, [dispatch, isLoggedIn, user]);

  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Regsiter />} />
            <Route path="/forgot" element={<Forgot />} />
            <Route path="/resetPassword/:resetToken" element={<Reset />} />

            <Route path="/loginWithCode/:email" element={<LoginWithCode />} />
            <Route path="/verify/:verificationToken" element={<Verify />} />
            <Route path="/buyCryptoPayment" element={<BuyCryptoPayment />} />

            <Route
              path="/profile"
              element={
                <Layout>
                  <Profile />
                </Layout>
              }
            />

            <Route path="/buy&sell" element={<BuySell />} />

            <Route
              path="/changePassword"
              element={
                <Layout>
                  <ChangePassword />
                </Layout>
              }
            />

            <Route
              path="/BuySuccess"
              element={
                <Layout>
                  <BuySuccess />
                </Layout>
              }
            />

            <Route
              path="/SellSuccess"
              element={
                <Layout>
                  <SellSuccessPage />
                </Layout>
              }
            />
            <Route
              path="/buyCrypto"
              element={
                <Layout>
                  <Buy />
                </Layout>
              }
            />

            <Route
              path="/sellCrypto"
              element={
                <Layout>
                  <Sell />
                </Layout>
              }
            />

            <Route
              path="/users"
              element={
                <Layout>
                  <UserList />
                </Layout>
              }
            />
          </Routes>
        </GoogleOAuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
