import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./Pages";
import Books from "./Pages/books";
import Team from "./Pages/team";
import Kontak from "./Pages/contact";


function App() {
  return (
    <>
      <div className="container">
        
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/team" element={<Team />} />
            <Route path="/kontak" element={<Kontak />} />
            <Route path="books" element={<Books />} />
          </Routes>
        </BrowserRouter>

      </div>
    </>
  );
}

export default App
