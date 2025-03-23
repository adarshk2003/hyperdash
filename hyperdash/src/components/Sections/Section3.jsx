import styled from "styled-components";
import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";

const SectionWrapper = styled.section`
  background-color: rgb(30, 30, 30);
  width: 100%;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 80px 0;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 768px) {
    padding: 80px 0;
  }
`;

const ImageBox = styled.div`
  width: 100%;
  height: 90vh;
  background: url("/hyperx/Features 2.2 Image.png") no-repeat right center/cover;

  @media (max-width: 768px) {
    min-height: 250px;
    background-position: center;
  }
`;

const ContentWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 90vh;
  color: white;
  padding: 100px;
`;

const Heading = styled.h1`
  font-size: 2.6rem;
  font-weight: 500;
  margin-bottom: 20px;
`;

const SubHeading = styled.h3`
  font-size: 1.8rem;
  font-weight: 400;
  margin-bottom: 30px;
  color: #ccc;
`;

const Paragraph = styled.p`
  font-size: 0.9rem;
  line-height: 2;
  color: white;
  max-width: 370px;
  word-wrap: break-word;
  margin-bottom: 15px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 25px;
`;

const StyledButton1 = styled(Button)`
  background-color: white;
  color: black;
  border: none;
  padding: 10px 24px;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 0px;
  &:hover {
    background-color: black;
    color: white;
  }
`;

const StyledButton2 = styled(Button)`
  background-color: rgb(30, 30, 30);
  color: white;
  padding: 10px 24px;
  font-size: 1rem;
  font-weight: 500;
  border: none;
  border-radius: 0px;

  &:hover {
    background-color: white;
    color: black;
  }

  &:focus,
  &:active {
    outline: none !important;
    box-shadow: none !important;
  }
`;

export default function Section3() {
  return (
    <SectionWrapper>
      <Container fluid>
        <Row className="align-items-center">
          <Col md={6} className="d-flex align-items-stretch">
            <ContentWrapper
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: false, amount: 0.2 }} 
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Heading>Lexo Z</Heading>
              <SubHeading>Accelerate into a New Era</SubHeading>
              <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
              </Paragraph>
              <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
              </Paragraph>
              <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
              </Paragraph>
              <ButtonWrapper>
                <StyledButton1>Order Now</StyledButton1>
                <StyledButton2 className="shadow-none">Learn more</StyledButton2>
              </ButtonWrapper>
            </ContentWrapper>
          </Col>
          <Col md={6} className="p-0">
            <ImageContainer>
              <ImageBox />
            </ImageContainer>
          </Col>
        </Row>
      </Container>
    </SectionWrapper>
  );
}
