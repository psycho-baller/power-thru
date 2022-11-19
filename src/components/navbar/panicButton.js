import { Heading } from "@chakra-ui/react";

export default function panicBotton({ shiftX, shiftY }) {
  return (
    <Heading
    //   position={"absolute"}
      left={shiftX}
      top={shiftY}
      // overflow="hidden"
      cursor={"pointer"}
      whiteSpace={"nowrap"}
      as="h1"
      size="lg"
      letterSpacing="tighter"
    //   py={2}
    //   px={4}
    // width="0"
    // height="0"
      // bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
      onClick={() => {
        if (document) {
          const _id_ = document.getElementById("home");
          if (_id_) {
            _id_.scrollIntoView({ behavior: "smooth" });
          }
        }
      }}
    >
      Panic Button
    </Heading>
  );
}
