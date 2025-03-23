import { useRef } from "react";
import styled from "styled-components";
import { motion, useInView } from "framer-motion";
import { Container, Row, Col } from "react-bootstrap";

const SectionWrapper = styled.section`
  background-color: rgb(10, 10, 10);
  padding: 50px 0;
`;

const ImageRow = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 50px;
  flex-wrap: wrap;
`;

const ImageBox = styled(motion.img)`
  width: 24%;
  height: auto;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const TextContent = styled(motion.div)`
  color: white;
  text-align: left;
  padding: 20px;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Heading = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 15px;
  color: white;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  color: #ccc;
  line-height: 1.5;
`;

const ImageBoxContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding: 20px;
  justify-content: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const SmallImage = styled(motion.img)`
  width: 100%;
  height: auto;
`;

const Section2LeftImage = styled(motion.img)`
  width: 100%;
  height: auto;
  display: block;
  margin: auto;

  @media (max-width: 768px) {
    width: 80%;
  }
`;

const Section2RightContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-right: 100px;

  @media (max-width: 1024px) {
    margin-right: 50px;
  }

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
    margin-right: 0;
  }
`;

const Section2RightImage = styled(motion.img)`
  width: 90%;
  height: auto;
  display: block;
  max-width: 100%;

  @media (max-width: 768px) {
    width: 80%;
  }
`;

const Section3Image = styled(motion.img)`
  width: 56%;
  height: auto;
  display: block;
  margin: auto;

  @media (max-width: 768px) {
    width: 80%;
    margin-left: 10%;
  }
`;

export default function Section7() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const isInView1 = useInView(ref1, { triggerOnce: false, threshold: 0.2 });
  const isInView2 = useInView(ref2, { triggerOnce: false, threshold: 0.2 });
  const isInView3 = useInView(ref3, { triggerOnce: false, threshold: 0.2 });

  return (
    <SectionWrapper>
      <Container>
        <Row>
          <Col xs={12}>
            <ImageRow
              ref={ref1}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <ImageBox
                src="/hyperx/img1.png"
                alt="Image 1"
                whileHover={{ scale: 1.05 }}
              />
              <ImageBox
                src="/hyperx/Performance Img.png"
                alt="Image 2"
                whileHover={{ scale: 1.05 }}
              />
              <ImageBox
                src="/hyperx/img3.png"
                alt="Image 3"
                whileHover={{ scale: 1.05 }}
              />
            </ImageRow>
          </Col>
        </Row>

        <Row className="align-items-center mt-5">
          <Col md={5} className="d-flex justify-content-center">
            <Section2LeftImage
              ref={ref2}
              src="/hyperx/Sustainable img.png"
              alt="Left Image"
              initial={{ opacity: 0, x: -50, scale: 0.8 }}
              animate={isInView2 ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: -50, scale: 0.8 }}
              transition={{ duration: 1 }}
            />
          </Col>
          <Col md={5}>
            <Section2RightContainer
              ref={ref2}
              initial={{ opacity: 0, x: 50, scale: 0.8 }}
              animate={isInView2 ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: 50, scale: 0.8 }}
              transition={{ duration: 1 }}
            >
              <Section2RightImage
                src="/hyperx/Air X img.png"
                alt="Right Image"
              />
              <TextContent>
                <Heading>Model X Performance</Heading>
                <Paragraph>
                  Experience next-level innovation with advanced aerodynamics and cutting-edge technology.
                </Paragraph>
              </TextContent>
            </Section2RightContainer>
          </Col>
        </Row>

        <Row className="align-items-center mt-5">
          <Col md={5} className="d-flex justify-content-center">
            <ImageBoxContainer
              ref={ref3}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 1, staggerChildren: 0.2 }}
            >
              <SmallImage src="/hyperx/img1.png" alt="Small 1" />
              <SmallImage src="/hyperx/img2.png" alt="Small 2" />
              <SmallImage src="/hyperx/img3.png" alt="Small 3" />
              <SmallImage src="/hyperx/img4.png" alt="Small 4" />
            </ImageBoxContainer>
          </Col>
          <Col md={7} className="d-flex justify-content-center">
            <Section3Image
              ref={ref3}
              src="/hyperx/imgRightLarge.png"
              alt="Right Large Image"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView3 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 1 }}
            />
          </Col>
        </Row>
      </Container>
    </SectionWrapper>
  );
}
