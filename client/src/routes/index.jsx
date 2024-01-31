import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error from "../../components/Error";
import Home from "../../components/Home";
import Login from "../../components/Login";
import Profile from "../../components/Profile";
import Register from "../../components/Register";
import Header from "../layout/Header";

const Index = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Index;
