import './App.css';
import Timer from './components/Timer';
import NavBar from "./components/navbar/index";
import { Box, Container } from "@chakra-ui/react";
import Footer from "./components/footer";
import PhoneNavbar from "./components/navbar/phoneNavbar";
import Resources from './components/resources';
import Community from './components/community';
import { ChakraProvider } from "@chakra-ui/react";
import About from './components/about';
import { useState } from 'react';

const App = () => {
  const [opacity, setOpacity] = useState("opacity-100");

  window.addEventListener("keydown", (e) => {
    if (e.key === "q") {
      if (opacity === "opacity-30") {
        setOpacity("opacity-100");
      } else {
        setOpacity("opacity-30");
      }
    }
  });

  return (
    <ChakraProvider>
      <Box as="main" pb={8} id="home" className={opacity}>

        <NavBar />
        <div className="md:hidden">
          <PhoneNavbar />
        </div>
        <Container maxW="container.xl" pt={20}>
          <Timer />
          <About />
          <Resources />
          <Community />
        </Container>
        <Footer />
      </Box>
    </ChakraProvider>
  );
};

export default App;