import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { AuthProvider } from "./context/AuthState";
import { ContactProvider } from "./context/ContactState";
import Loader from "./components/Loader";

const Home = lazy(() => import("./pages/Home"));
const UserDetail = lazy(() => import("./pages/UserDetail"));
const Navbar = lazy(() => import("./components/Navbar"));
const SignUp = lazy(() => import("./pages/SignUp"));
const SignIn = lazy(() => import("./pages/SignIn"));

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <ContactProvider>
          <Navbar />
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/user/:id" element={<UserDetail />} />
              <Route path="/signUp" element={<SignUp />} />
              <Route path="/signIn" element={<SignIn />} />
            </Routes>
          </Suspense>
        </ContactProvider>
      </AuthProvider>
    </Router>
  );
};

export default App;
