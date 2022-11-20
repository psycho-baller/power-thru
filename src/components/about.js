import { Flex } from "@chakra-ui/react";
import Earth from "./three-js/earth";
import { Canvas } from "@react-three/fiber";
export default function About() {
  return (
    <section id="about" className="about min-h-screen content">
      <div className="content-title">About</div>

      <Flex className="about-flex">
        <div className="content-text">
          POWER THRU is a tool that aims to support those struggling with
          compulsive addiction to pornographic content. This content is
          extremely addictive and it can have a severe negative impact on the
          mental and spiritual health of those who are inflicted. POWER THRU
          tracks a user's "streak" and visualizes it in an aesthetically
          pleasing way to induce a calming effect on the user and counteract
          the negative stigma that surrounds this topic.
          <br /> <br />
          Whenever the user feels like "relapsing", or indulging in their addiction,
          they should click on the panic button in the top left corner of this webpage.
          This will take them to a page that directs them to support and online resources to
          motivate them and help them stay strong.
          If the user relapses, they should click on the relapse
          button to reset their streak. To set the streak to a particular value, 
          scroll up and enter the date and time of your last relapse in the 
          date-time picker, then click on update. 
          <br /> <br />
          We have provided a section for resources such as books and youtube
          videos to assist users in fighting their addiction. There is also
          a community section to connect users to other people struggling with
          similar addictions. We have also provided motivation quotes floating 
          in the background of this webpage. To view the quotes clearly, press Q.
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
