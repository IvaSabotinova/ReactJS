import { useState } from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';

import * as authService from './services/authService'
import AuthContext from "./context/AuthContext";
import Path from './paths';

import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Register from "./components/register/register";
import GameList from "./components/game-list/GameList";
import GameCreate from "./components/game-create/GameCreate";
import GameDetails from "./components/game-details/GameDetails";


function App() {
  const [auth, setAuth] = useState({});
  const navigate = useNavigate();

  const loginSubmitHandler = async (values) => {
    const result = await authService.Login(values);
    setAuth(result);
    navigate(Path.Home);
  }

  const registerSubmitHandler = async (values) => {
    const result = await authService.Register(values.email, values.password);
    console.log(result)
    setAuth(result)
    navigate(Path.Home);
  }


  const contextValues = {
    loginSubmitHandler,
    registerSubmitHandler,
    email: auth.email ,
    username: auth.username || auth.email,
    isAuthenticated: !!auth.accessToken
  }
  return (
    <AuthContext.Provider value={contextValues}>
      <div id="box">
        <Header />
        <Routes>
          <Route path={Path.Home} element={<Home />} />
          <Route path="games" element={<GameList />} />
          <Route path="game-create" element={<GameCreate />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="games/:gameId" element={<GameDetails />} />
        </Routes>
      </div>
    </AuthContext.Provider>
  )
}

export default App;
