import styled from "styled-components";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";

const SectionWrapper = styled(motion.section)`
  background-color: rgb(20, 20, 20);
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px 0;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 70%;
  height: 345px;

  @media (max-width: 768px) {
    width: 80%;
  }
`;

const ImageBox = styled.div`
  width: 100%;
  height: 125%;
  background: url("/hyperx/Features 2.1 video.png") no-repeat center center/cover;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const AirXText = styled.h1`
  position: absolute;
  top: -39px;
  left: 25px;
  color: white;
  font-size: 3.5rem;
  font-weight: 300;
  margin: 0;

  @media (max-width: 768px) {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 2.5rem;
  }
`;

const AirXText2 = styled.h5`
  font-size: 2rem;
  font-weight: 400;
  color: white;
  margin-top: 100px;
  text-align: left;
  width: 70%;

  @media (max-width: 768px) {
    text-align: center; 
    width: 100%;
  }
`;

export default function Section2() {
  return (
    <SectionWrapper
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }} 
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Container className="d-flex flex-column align-items-center">
        <ImageContainer>
          <AirXText>Air X</AirXText>
          <ImageBox />
        </ImageContainer>
        <AirXText2>Accelerate into a New Era</AirXText2>
      </Container>
    </SectionWrapper>
  );
}
