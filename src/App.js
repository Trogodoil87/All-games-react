import { Route, Routes } from "react-router-dom";

import { Home } from "./components/home/Home";
import { Header } from "./components/header/Header";
import { Login } from "./components/login/Login";
import { Register } from "./components/register/Register";
import { CreateGame } from "./components/create-game/CreateGame";

function App() {
  return (
    <div id="box">
      <Header />
      <main id="main-content">
        {/* <Login /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allgames" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/create" element={<CreateGame />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
