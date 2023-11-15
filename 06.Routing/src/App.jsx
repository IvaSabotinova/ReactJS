import Navigation from './components/Navigation'
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Contacts from './components/Contacts';
import About from './components/About';
import CharactersList from './components/CharactersList';
import CharacterDetails from './components/CharacterDetails';
import NotFound from './components/NotFount';

function App() {


  return (
    <>
    
      <h1>Routing exercise</h1>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about/*' element={<About />} />
        {/* <Route path='about/' element={<About />}>
          <Route path="about-us" element={<AboutUs />}></Route>
          <Route path="our-mission" element={<Mission />}></Route>
          <Route path="our-values" element={<Values />}></Route>
        </Route> */}
        <Route path='contacts' element={<Contacts />} />
        <Route path='characters' element={<CharactersList />} />
        <Route path='characters/:id' element={<CharacterDetails />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <footer>All rights reserved &copy;</footer>
    </>
  )
}

export default App
