import { useState } from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';

import * as authService from './services/authService'
import AuthContext from "./context/AuthContext";
import Path from './paths';

import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Register from "./components/register/register";
import Login from "./components/login/Login";
import Logout from "./components/logout/Logout";
import GameList from "./components/game-list/GameList";
import GameCreate from "./components/game-create/GameCreate";
import GameDetails from "./components/game-details/GameDetails";


function App() {
  const [auth, setAuth] = useState(() => {
    localStorage.removeItem('accessToken');
        return {}
  });
  const navigate = useNavigate();

  const loginSubmitHandler = async (values) => {
    const result = await authService.Login(values);
    console.log(result);
    setAuth(result);
    localStorage.setItem('accessToken', result.accessToken);


    navigate(Path.Home);
  }

  const registerSubmitHandler = async (values) => {
    const result = await authService.Register(values.email, values.password);
    console.log(result)
    setAuth(result);
    localStorage.setItem('accessToken', result.accessToken);
    navigate(Path.Home);
  };

  const logOutHandler = () => {
    setAuth({});
    localStorage.removeItem('accessToken');
    navigate(Path.Home);
  }


  const contextValues = {
    registerSubmitHandler,
    loginSubmitHandler,
    logOutHandler,
    email: auth.email,
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
          <Route path="logout" element={<Logout />} />
        </Routes>
      </div>
    </AuthContext.Provider>
  )
}

export default App;
