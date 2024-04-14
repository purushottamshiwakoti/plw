"use client";
import { useEffect, useState } from "react";
import { Navbar } from "./navbar";
import gsap from "gsap";

export const MainNav = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      setScrollPosition(currentPosition);

      // Example: Animate Navbar opacity based on scroll position
      if (currentPosition > 115) {
        gsap.to(".navbar", { opacity: 1, ease: "circ.inOut" });
      } else {
        gsap.to(".navbar", { opacity: 0 });
      }
    };

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup: remove scroll event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array to run effect only once on component mount

  console.log(scrollPosition);

  return <Navbar className="fixed z-50 top-0 w-full navbar opacity-0" />;
};
