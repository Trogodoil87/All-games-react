import { Route, Routes } from "react-router-dom";

import { Home } from "./components/home/Home";
import { Header } from "./components/header/Header";
import { Login } from "./components/login/Login";
import { Register } from "./components/register/Register";
import { CreateGame } from "./components/create-game/CreateGame";
import { Edit } from "./components/edit/Edit";
import { Details } from "./components/details/Details";

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
          <Route path="/edit/:gameId" element={<Edit />} />
          <Route path="/details/:gameId" element={<Details />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
