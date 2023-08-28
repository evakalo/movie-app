// components/ResponsiveComponent.js
import { useState, useEffect } from "react";

import BurgerNav from "./BurgerNav";
//import Nav from "./Nav";
import Nav from "./Nav";

const ResponsiveNavigation = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1025);
    };

    // Set initial viewport state
    handleResize();

    // Add event listener to track window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <h1 style={{ color: "white", textAlign: "center", marginTop: "40px" }}>
        Critic cine
      </h1>
      {isMobile ? <BurgerNav /> : <Nav />}
    </div>
  );
};

export default ResponsiveNavigation;
