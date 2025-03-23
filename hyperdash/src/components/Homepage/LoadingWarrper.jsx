import { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const LoadingWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
  color: white;
  font-family: "Orbitron", sans-serif;
  z-index: 9999;
`;

const LoadingText = styled(motion.h1)`
  font-size: 3rem;
  font-weight: bold;
  letter-spacing: 2px;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export default function LoadingScreen({ onComplete }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onComplete(); // Notify parent component that loading is done
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isVisible) return null; // Remove the loading screen after fading out

  return (
    <LoadingWrapper>
      <LoadingText
        initial={{ opacity: 1, scale: 1 }}
        animate={{ opacity: 0, scale: 1.2 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        Hyper Dash
      </LoadingText>
    </LoadingWrapper>
  );
}
