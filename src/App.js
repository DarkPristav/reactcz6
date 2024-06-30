import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Comedy from './pages/Comedy';
import Serials from './pages/Serials';
import Horrors from './pages/Horrors';
import Error from './Error';
import SharedLayout from './pages/SharedLayout';
import OmeMovie from "./components/OmeMovie"
import Movies from "./components/Movies"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SharedLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/comedy" element={<Comedy />} />
          <Route path="/serials" element={<Serials />} />
          <Route path="/horrors" element={<Horrors />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="all-movies/:movieId" element={<OmeMovie />}/>
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
