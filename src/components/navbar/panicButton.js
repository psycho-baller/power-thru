import { Heading } from "@chakra-ui/react";

export default function panicBotton({ shiftX, shiftY }) {

  return (
    <a href="https://emergency.nofap.com/"
    className="panic-button"
    target="_blank"
    //   position={"absolute"}
      left={shiftX}
      top={shiftY}
      // overflow="hidden"
      cursor={"pointer"}
      as="h1"
      size="lg"
      letterSpacing="tighter"
    //   py={2}
    //   px={4}
    // width="0"
    // height="0"
      // bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
      
    >
      Panic Button
    </a>
  );
}
