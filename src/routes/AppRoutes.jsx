import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
// import About from "../pages/About";
// import Projects from "../pages/Projects";
// import Contact from "../pages/Contact";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>

        <Route path="/" element={<Home />} />

        {/* <Route path="/about" element={<About />} /> */}

        {/* <Route path="/projects" element={<Projects />} /> */}

        {/* <Route path="/contact" element={<Contact />} /> */}
</Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;