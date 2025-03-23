import { useRef } from "react";
import styled from "styled-components";
import { Container, Button } from "react-bootstrap";
import { motion, useInView } from "framer-motion";

const Section8Wrapper = styled.section`
  position: relative;
  width: 100%;
  height: 90vh;
  display: flex;
  align-items: flex-end;
  padding: 50px;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 70vh;
    padding: 30px;
  }
`;

const BackgroundImage = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url("/hyperx/airXimg.png") no-repeat center center/cover;
  z-index: -1;
`;

const TextContainer = styled(motion.div)`
  color: white;
  max-width: 500px;
`;

const Heading = styled(motion.h1)`
  font-size: 2.6rem;
  font-weight: 500;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const SubHeading = styled(motion.p)`
  font-size: 1.3rem;
  color: white;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 15px;
`;

const StyledButton = styled(Button)`
  font-size: 1rem;
  padding: 10px 20px;
  font-weight: 400;
  border-radius: 0px;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:first-child {
    background-color: rgb(255, 255, 255);
    color: black;
    border: none;

    &:hover {
      background-color: black;
      color: white;
    }
  }

  &:last-child {
    background-color: transparent;
    border: none;
    outline: none;
    color: white;

    &:hover {
      background-color: rgba(29, 22, 22, 0.23);
    }
  }
`;

export default function Section8() {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: false, threshold: 0.3 });

  return (
    <Section8Wrapper>
      <BackgroundImage
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />

      <Container>
        <TextContainer
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Heading
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Air X
          </Heading>
          <SubHeading
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Accelerate into a New Era
          </SubHeading>
          <ButtonGroup
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <StyledButton>Order Now</StyledButton>
            <StyledButton>Learn More</StyledButton>
          </ButtonGroup>
        </TextContainer>
      </Container>
    </Section8Wrapper>
  );
}
