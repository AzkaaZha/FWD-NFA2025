import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./Pages";
import Menu from "./Pages/menu";
import Team from "./Pages/team";
import Kontak from "./Pages/contact";


function App() {
  return (
    <>
      <div className="container">
        
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="menu" element={<Menu />} />
            <Route path="/team" element={<Team />} />
            <Route path="/kontak" element={<Kontak />} />
          </Routes>
        </BrowserRouter>

      </div>
    </>
  );
}

export default App
