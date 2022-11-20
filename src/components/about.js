import { Flex } from "@chakra-ui/react";
import Earth from "./three-js/earth";
import { Canvas } from "@react-three/fiber";
export default function About() {
  return (
    <section id="about" className="about min-h-screen content">
      <div className="content-title">About</div>

      <Flex className="">
        <div className="content-text">
          POWER THRU is a tool that aims to support those struggling with
          compulsive addiction to pornographic content. This content is
          extremely addictive and it can have a severe negative impact on the
          mental and spiritual health of those who are inflicted. POWER THRU
          tracks a user's "streak" and visualizes it in an aesthetically
          pleasing way to induce a calming effect on the user and counterract
          the negative stigma that surrounds this topic.
          <br /> <br />
          To set a streak ...
          <br /> <br />
          We have also provided ...
          <br /> <br />
          This was developed for Code The Change 2022, which addresses the
          prompt of creating a software to promote healthy and sustainable
          living for general populations.{" "}
          <a
            href="https://github.com/psycho-baller/power-thru"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            Click here to view the source code for this project.
          </a>
        </div>
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
          }}
        >
          <Earth />
        </Canvas>
      </Flex>
    </section>
  );
}
