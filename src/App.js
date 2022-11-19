import './App.css';
// import NavBar from './components/navbar';
import Timer from './components/Timer';
// import dynamic from "next/dynamic";
import NavBar from "./components/navbar/index";
import { Box, Container } from "@chakra-ui/react";
import Footer from "./components/footer";
import PhoneNavbar from "./components/navbar/phoneNavbar";
import Resources from './components/resources';
import Community from './components/community';
import { ChakraProvider } from "@chakra-ui/react";

const App = () => {
  return (
    <ChakraProvider>
      <Box as="main" pb={8} id="home">
        <NavBar />
        <div className="md:hidden">
          <PhoneNavbar />
        </div>
        <Container maxW="container.xl" pt={16}>
          
          <Timer />
          <Resources />
          <Community />
        </Container>
        <Footer />
      </Box>
    </ChakraProvider>
  );
};

export default App;