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


const App = () => {
  return (
    <Box as="main" pb={8} id="home">
      <NavBar />
      <div className="md:hidden">
        <PhoneNavbar />
      </div>
      <Container maxW="container.2xl" pt={16}make vh >
        <Timer />
        <Resources />
        <Community />
      </Container>
      <Footer />
    </Box>
  );
};

export default App;