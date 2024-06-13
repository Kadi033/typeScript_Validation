import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login.tsx";
import Register from "./pages/Register.tsx";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
