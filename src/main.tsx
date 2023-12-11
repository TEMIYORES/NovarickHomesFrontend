import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ToastContainer } from "react-toastify";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
// import { Provider } from "react-redux";
import WithNavbar from "./components/WithNavbar.tsx";
import WithoutNavbar from "./components/WithoutNavbar.tsx";
import PrivateRoute from "./components/PrivateRoute.tsx";
import Home from "./pages/HomePage/HomeScreen.tsx";
import About from "./pages/About/About.tsx";
import Sustainability from "./pages/Sustainability/Sustainability.tsx";
import Contact from "./pages/Contact/Contact.tsx";
// import Houses from "./pages/Houses/Houses.tsx";
// import Investment from "./pages/Investment/Investment.tsx";
// import Lands from "./pages/Lands/Lands.tsx";
import Blog from "./pages/Blog/Blog.tsx";
import Inspection from "./pages/Inspection/Inspection.tsx";
// import Ruby1 from "./pages/Houses/Ruby1/Ruby1.tsx";
// import Ruby2 from "./pages/Houses/Ruby2/Ruby2.tsx";
// import Ruby3 from "./pages/Houses/Ruby3/Ruby3.tsx";
// import Ridgewood from "./pages/Lands/Ridgewood/Ridgewood.tsx";
// import Caribbean from "./pages/Lands/Caribbean/Caribbean.tsx";
// import Buyback from "./pages/Investment/Buyback/Buyback.tsx";
// import Co_ownership from "./pages/Investment/co-ownership/Co_ownership.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      {/* Pages with main Navbar */}
      <Route path="" element={<WithNavbar />}>
        <Route index={true} element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="sustainability" element={<Sustainability />} />
        <Route path="contact" element={<Contact />} />
        <Route path="blog-posts" element={<Blog />} />
        <Route path="inspection" element={<Inspection />} />

        {/* <Route path="houses">
          <Route index={true} element={<Houses />} />
          <Route path="ruby1" element={<Ruby1 />} />
          <Route path="ruby2" element={<Ruby2 />} />
          <Route path="ruby3" element={<Ruby3 />} />
          {/* <Route path="houses" element={<Houses/>}/> */}
        {/* </Route>
        <Route path="lands">
          <Route index={true} element={<Lands />} />
          <Route path="ridgewood" element={<Ridgewood />} />
          <Route path="caribbean-lake-city" element={<Caribbean />} />
          <Route />
        </Route>
        <Route path="investments">
          <Route index={true} element={<Investment />} />
          <Route path="buyback" element={<Buyback />} />
          <Route path="co-ownership" element={<Co_ownership />} />
        </Route>  */}
      </Route>

      {/* Pages without Navbar or custom Navbar */}
      <Route path="" element={<WithoutNavbar />}>
        {/* <Route path="login" element={<Login />} /> */}
        {/* <Route path="forgot-password" element={<ForgotPassword />} /> */}
        {/* <Route path="email-verification" element={<EmailVerification />} /> */}
        {/* <Route path="reset-password" element={<ResetPassword />} /> */}

        {/* Private Routes */}
        <Route path="" element={<PrivateRoute />}>
          {/* <Route path="dashboard" element={<Dashboard />} /> */}
          {/* <Route path="transactions" element={<Transactions />} /> */}
          {/* <Route path="account" element={<Account />} /> */}
          {/* <Route path="supports" element={<Supports />} /> */}
        </Route>
        {/* <Route path="*" element={<NotFound />} /> */}
      </Route>
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <React.StrictMode>
      <ToastContainer />
      <RouterProvider router={router} />
    </React.StrictMode>
  </React.StrictMode>
);
