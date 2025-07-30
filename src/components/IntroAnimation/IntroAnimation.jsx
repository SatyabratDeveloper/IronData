import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Logo from "../../assets/logo/idvlogo.png";
import LogoIcon from "../../assets/logo/logo.png";
import LogoText from "../../assets/logo/logo-text.png";

const IntroLoader = () => {
  const [show, setShow] = useState(true);

  const loaderRef = useRef(null);
  const logoBgRef = useRef(null);
  const logoIconRef = useRef(null);
  const logoTextRef = useRef(null);

  useGSAP(() => {
    const isMobile = window.innerWidth < 640;

    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
      onComplete: () => setShow(false),
    });

    // Background Logo
    tl.fromTo(
      logoBgRef.current,
      { opacity: 1 },
      { opacity: 0, rotateY: 360, scale: 0.5, delay: 1, duration: 1 }
    )

      // Main Logo
      .fromTo(
        logoIconRef.current,
        { opacity: 0, scale: 0.5 },
        {
          opacity: 1,
          scale: 1,
          rotateY: 360,
          duration: 0.8,
        },
        "-=0.5"
      )
      .fromTo(
        logoIconRef.current,
        {
          x: 0,
        },
        {
          x: isMobile ? -100 : -200,
          duration: 0.8,
          ease: "power2.out",
        }
      )

      // Logo Text
      .fromTo(
        logoTextRef.current,
        { x: isMobile ? -100 : -150, opacity: 0, zIndex: -10 },
        { x: isMobile ? 60 : 120, opacity: 1, duration: 1.2 }
      )

      // Entire loader
      .to(loaderRef.current, {
        opacity: 0,
        duration: 1,
        delay: 0.3,
      });
  }, []);

  if (!show) return null;

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[9999] bg-white flex items-center justify-center"
    >
      {/* Background Logo */}
      <img
        src={Logo}
        ref={logoBgRef}
        alt="logo background"
        className="absolute w-38 sm:w-68"
      />

      {/* Main Logo */}
      <img
        src={LogoIcon}
        ref={logoIconRef}
        alt="logo_icon"
        className="absolute h-32 sm:h-62"
      />

      {/* Logo Text */}
      <img
        src={LogoText}
        ref={logoTextRef}
        alt="logo_text"
        className="absolute h-32 sm:h-62"
      />
    </div>
  );
};

export default IntroLoader;
