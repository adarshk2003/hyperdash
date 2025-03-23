import styled from "styled-components";
import { Container, Button } from "react-bootstrap";
import { motion } from "framer-motion";

const SectionWrapper = styled.section`
  background-color: white;
  width: 100%;
  overflow: hidden;
`;

const TopContainer = styled(motion.div)`
  width: 100%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 40px;

  @media (max-width: 768px) {
    height: auto;
    padding: 20px;
  }
`;

const BottomContainer = styled.div`
  width: 100%;
  height: 50vh;
  position: relative;
  display: flex; /* Added */
  justify-content: center; /* Centers the image */
  align-items: center; /* Centers vertically */
  overflow: hidden; /* Prevents any overflow issues */

  @media (max-width: 768px) {
    height: auto;
    min-height: 300px;
  }
`;

const ImageBox = styled(motion.div)`
  width: 100%;
  height: 100%;
  background: url("/hyperx/Features 2.3 Img.png") no-repeat center center/cover;
  max-width: 100%; 
  position: relative;
  overflow: hidden; 

  @media (max-width: 768px) {
    height: 250px;
  }
`;


const Heading = styled.h1`
  font-size: 3rem;
  font-weight: 500;
  margin-bottom: 10px;
  color: black;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SubHeading = styled.h3`
  font-size: 2.2rem;
  font-weight: 400;
  color: black;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

const ImageTextContainer = styled(motion.div)`
  position: absolute;
  top: 20px;
  left: 40px;
  color: white;
  max-width: 60%;

  @media (max-width: 768px) {
    position: relative;
    top: auto;
    left: auto;
    max-width: 100%;
    padding: 15px;
  }
`;

const Paragraph = styled.p`
  font-size: 1rem;
  color: black;
  line-height: 2;
  max-width: 370px;
  word-wrap: break-word;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 15px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const OrderButton = styled(Button)`
  background-color: black;
  color: white;
  border: none;
  padding: 10px 24px;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 0px;

  &:hover {
    background-color: white;
    color: black;
    border: none;
  }

  &:focus, &:active {
    outline: none !important;
    box-shadow: none !important;
  }
`;

const LearnMoreButton = styled(Button)`
  background-color: transparent;
  color: black;
  border: 2px solid white;
  padding: 10px 24px;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 0px;

  &:hover {
    background-color: black;
    color: white;
  }

  &:focus, &:active {
    outline: none !important;
    box-shadow: none !important;
  }
`;




export default function Section4() {
  return (
    <SectionWrapper>
      <Container>
        <TopContainer
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: false, amount: 0.2 }} 
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Heading>Air X</Heading>
          <SubHeading>Accelerate into a New Era</SubHeading>
        </TopContainer>

        <BottomContainer>
          <ImageBox
            initial={{ scale: 0.9, opacity: 0 }} 
            whileInView={{ scale: 1, opacity: 1 }} 
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
          <ImageTextContainer
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
            </Paragraph>
            <ButtonGroup>
              <OrderButton>Order Now</OrderButton>
              <LearnMoreButton>Learn More</LearnMoreButton>
            </ButtonGroup>
          </ImageTextContainer>
        </BottomContainer>
      </Container>
    </SectionWrapper>
  );
}
