import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

const SectionWrapper = styled.section`
  background-color: rgba(2, 2, 2, 1);
  width: 100%;
  overflow: hidden;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
`;

const ImageBox = styled.div`
  width: 100%;
  height: 100vh;
  background: url("/hyperx/Model-X-Specs-Hero-Desktop-LHD 1.png") no-repeat left center/cover;

  @media (max-width: 768px) {
    height: 300px;
    background-position: center;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  color: white;
  padding: 40px;

  @media (max-width: 768px) {
    height: auto;
    padding: 20px;
  }
`;

const SubHeading = styled(motion.h2)`
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 30px;
  color: white;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureItem = styled(motion.div)`
  font-size: 1rem;
  font-weight: 500;
  color: white;
  padding: 15px 10px;
  display: flex;
  flex-direction: column;
`;

const FeatureTitle = styled.span`
  font-weight: 500;
  color: #f5f5f5;
`;

const FeatureValue = styled.span`
  font-weight: 400;
  color: #ccc;
  font-size: 0.9rem;
  margin-top: 5px;
`;

export default function Section5() {
  return (
    <SectionWrapper>
      <Container fluid>
        <Row className="align-items-center">
          <Col md={6} className="p-0">
            <ImageContainer>
              <ImageBox />
            </ImageContainer>
          </Col>
          <Col md={6}>
            <ContentWrapper>
              <SubHeading
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                Model Air X Specifications
              </SubHeading>
              <FeaturesGrid>
                {[
                  { title: "Range (EPA est.)", value: "Up to 300 miles" },
                  { title: "Acceleration", value: "4.5s 0-60 mph" },
                  { title: "Peak Power", value: "400 hp" },
                  { title: "Wheels", value: "19’’ or 20’’" },
                  { title: "Towing", value: "2000 pounds" },
                  { title: "Seating", value: "Up to 5" },
                  { title: "Drag Coefficient", value: "0.28 cd" },
                  { title: "Top Speed", value: "130 mph" },
                ].map((feature, index) => (
                  <FeatureItem
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                  >
                    <FeatureTitle>{feature.title}</FeatureTitle>
                    <FeatureValue>{feature.value}</FeatureValue>
                  </FeatureItem>
                ))}
              </FeaturesGrid>
            </ContentWrapper>
          </Col>
        </Row>
      </Container>
    </SectionWrapper>
  );
}
