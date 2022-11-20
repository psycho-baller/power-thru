import * as React from "react";
import { motion } from "framer-motion";
import { Heading, Text } from "@chakra-ui/react";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};


const items = [
  {
    dir: "Timer",
    color: "#FF008C",
  },
  {
    dir: "About",
    color: "#D309E1",
  },
  {
    dir: "Resources",
    color: "#9C1AFF",
  },
  {
    dir: "Community",
    color: "#7700FF",
  },
  {
    dir: "Contact",
    color: "#4400FF",
  }
];


export const MenuItem = ({ i }) => {
  // make it the same color as the bg
  // const style = { color: `${items[i].color}` };
  return (
    <motion.li
      // id="content"
      variants={variants}
      // whileHover={{ scale: 1.1 }}
      // whileTap={{ scale: 0.95 }}
      // style={style}
    >
      <Heading
        onClick={() => {
          if (document) {
            const _id = document.getElementById(items[i].dir.toLowerCase());
            if (_id) {
              // wait for the navbar to close
              setTimeout(() => {
                _id.scrollIntoView({ behavior: "smooth" });
              }, 300);
            }
          }
        }}
        color={items[i].color}
        fontSize={{ base: "3rem", sm: "5rem" }}
      >
        {items[i].dir}
      </Heading>
      {/* <div className="icon-placeholder" style={style} />
      <div className="text-placeholder" style={style} /> */}
    </motion.li>
  );
};
