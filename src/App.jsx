import { lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import { AuthProvider } from "./context/AuthState";
import { ContactProvider } from "./context/ContactState";

const Home = lazy(() => import("./pages/Home"));
const UserDetail = lazy(() => import("./pages/UserDetail"));

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <ContactProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user/:id" element={<UserDetail />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/signIn" element={<SignIn />} />
          </Routes>
        </ContactProvider>
      </AuthProvider>
    </Router>
  );
};

export default App;
