import { lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserDetail from "./pages/UserDetail";
const Home = lazy(() => import("./page/Home"));
const UserDetail = lazy(() => import("./pages/UserDetail"));

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<UserDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
