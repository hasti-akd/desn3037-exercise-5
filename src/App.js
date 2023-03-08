import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Box, Container } from '@mui/system';


import * as React from "react";

import { Route, BrowserRouter, Routes } from "react-router-dom";
import About from "./components/About";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import Menu from "./components/Menu";

function App() {
  return (
    <div className="App">

      <Container maxWidth="sm" sx = {{ mt: 5 }}>

      <BrowserRouter>
        <Box sx = {{ mb: 3 }}>
          <Menu />
        </Box>

        <Routes>
          <Route exact path="about" element={<About />} />
          <Route exact path="clients" element={<Clients />} />
          <Route exact path="contact" element={<Contact />} />
        </Routes>

      </BrowserRouter>

      </Container>

    </div>
  );
}

export default App;
