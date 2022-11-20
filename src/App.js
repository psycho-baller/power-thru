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
          <About/>
          <Resources />
          <Community />
        </Container>
        <Footer />
      </Box>
    </ChakraProvider>
  );
};

export default App;