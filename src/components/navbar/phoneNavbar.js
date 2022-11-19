import { useRef, useState } from "react";
import { motion, useCycle } from "framer-motion";
// import useDimensions from "../../lib/use-dimensions";
import { MenuToggle } from "./menuToggle";
import { Navigation } from "./navigation";
import Logo from "./logo";
// import useScrollBlock from "../../lib/useScrollBlock";
const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

function PhoneNavbar() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
//   const { height } = useDimensions(containerRef);
//   const [blockScroll, allowScroll] = useScrollBlock();
//   const toggleScroll = () => {
//     if (isOpen) {
//       allowScroll();
//     } else {
//       blockScroll();
//     }
//   };

  return (
    <motion.nav
      className="nav"
      initial={false}
      animate={isOpen ? "open" : "closed"}
    //   custom={height}
      ref={containerRef}
      onClick={() => {
        toggleOpen();
        // toggleScroll();
      }}
    >
      <motion.div className="background" variants={sidebar} />
      <Navigation />
      <MenuToggle
      // toggle={() => toggleOpen()}
      />
      <Logo shiftX={61} shiftY={4} />
    </motion.nav>
  );
}

export default PhoneNavbar;
