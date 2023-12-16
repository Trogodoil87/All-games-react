import { Route, Routes, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import * as gameService from "./components/services/gameService";
import * as authService from "./components/services/authServices";
import { AuthContext } from "./contexts/AuthContext";

import { Home } from "./components/Home/Home";
import { Header } from "./components/Header/Header";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { CreateGame } from "./components/CreateGame/CreateGame";
import { Edit } from "./components/GameEdit/Edit";
import { Details } from "./components/GameDetails/Details";
import { Catalog } from "./components/Catalog/Catalog";
import { Logout } from "./components/Logout/Logout";



function App() {
    const [games, setGames] = useState([]);
    const [auth, setAuth] = useState({});

    const navigate = useNavigate();

    useEffect(() => {
        gameService.getAll()
            .then(result => {
                setGames(result);
            })
    }, []);

    const userLogin = (authData) => {
        setAuth(authData);
    }

    const userLogout = () => {
        setAuth({});
    }

    return (
        <AuthContext.Provider value={{ user: auth, userLogin, userLogout }}>
            <div id="box">
                <Header />
                <main id="main-content">
                    {/* <Login /> */}
                    <Routes>
                        <Route path="/" element={<Home games={games} />} />
                        <Route path="/allgames" element={<Catalog />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/logout" element={<Logout />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/create" element={<CreateGame />} />
                        <Route path="/edit/:gameId" element={<Edit />} />
                        <Route path="/details/:gameId" element={<Details />} />
                        <Route path="/catalog" element={<Catalog games={games} />} />
                    </Routes>
                </main>
            </div>
        </AuthContext.Provider>
    );
}

export default App;
