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
import GameEdit from './components/game-edit/GameEdit';
import ErrorBoundary from './components/ErrorBoundary';
import AuthGuard from './components/guards/AuthGuard';
// import BaseAuthGuard from './components/guards/BaseAuthGuard';


function App() {


  return (
    <ErrorBoundary>
      <AuthProvider>
        <div id="box">
          <Header />
          <Routes>
            <Route path={Path.Home} element={<Home />} />
            <Route path={Path.All} element={<GameList />} />
            {/* <Route path="game-create" element={<BaseAuthGuard><GameCreate /></BaseAuthGuard>} /> */}
            <Route path={Path.Login} element={<Login />} />
            <Route path={Path.Register} element={<Register />} />
            <Route path={Path.GameDetails} element={<GameDetails />} />

            <Route element={<AuthGuard />}>
              <Route path={Path.GameCreate} element={<GameCreate />} />
              <Route path={Path.GameEdit} element={<GameEdit />} />
              <Route path={Path.Logout} element={<Logout />} />
            </Route>

          </Routes>
        </div>
      </AuthProvider>
    </ErrorBoundary>
  )
}

export default App;
