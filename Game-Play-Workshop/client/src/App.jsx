import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from "./context/AuthContext";
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


  return (
    <AuthProvider>
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
    </AuthProvider>
  )
}

export default App;
