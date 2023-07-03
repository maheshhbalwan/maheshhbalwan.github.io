import { Routes, Route, Navigate, HashRouter } from "react-router-dom";

import MainLayout from "./layout/MainLayout";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import Portfolio from "./pages/portfolio/Portfolio";

function App() {
  return (
    <>
      <HashRouter>
        <MainLayout>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} />
            {/* <Route path="*" element={<Error404 />} /> */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </MainLayout>
      </HashRouter>
    </>
  );
}

export default App;
