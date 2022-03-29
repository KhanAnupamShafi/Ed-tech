import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import AuthProvider from "./context/AuthProvider";
import Course from "./pages/Courses/Course";
import Courses from "./pages/Courses/Courses";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<PrivateRoute />}>
            <Route path=":courseId" element={<Course />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
