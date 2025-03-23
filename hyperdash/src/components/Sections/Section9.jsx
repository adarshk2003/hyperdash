import { useState } from "react";
import styled from "styled-components";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Section9Wrapper = styled.section`
  width: 100%;
  padding: 50px 0;
  background-color: black;
  overflow: hidden;
`;

const Section1 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const Heading = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  text-align: left;
`;

const Arrows = styled.div`
  display: flex;
  gap: 15px;
  font-size: 1.5rem;
  color: white;
  cursor: pointer;
`;

const SliderWrapper = styled.div`
  display: flex;
  overflow: hidden;
  width: 90%;
  margin: auto;
`;

const SliderContent = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: ${({ index }) => `translateX(-${index * 25}%)`};
`;

const StyledCard = styled(Card)`
  background: none;
  border: none;
  text-align: left;
  color: white;
  flex: 0 0 25%;
  padding: 10px;
`;

const CardImage = styled(Card.Img)`
  height: 250px;
  border-radius: 0px;
  object-fit: cover;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
    border-radius: 10px;
  }
`;

const CardTitle = styled(Card.Title)`
  font-size: 1rem;
  font-weight: bold;
`;

const CardText = styled(Card.Text)`
  font-size: 0.9rem;
`;

const images = [
  { src: "/hyperx/story1.png", title: "Lorem Ipsum", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { src: "/hyperx/story2.png", title: "Lorem Ipsum", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { src: "/hyperx/story3.png", title: "Lorem Ipsum", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { src: "/hyperx/story4.png", title: "Lorem Ipsum", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
];

export default function Section9() {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <Section9Wrapper>
      <Container>
        <Section1>
          <Heading>Our Stories</Heading>
          <Arrows>
            <FaArrowLeft onClick={handlePrev} />
            <FaArrowRight onClick={handleNext} />
          </Arrows>
        </Section1>

        <SliderWrapper>
          <SliderContent index={index}>
            {images.concat(images).map((item, i) => (
              <StyledCard key={i}>
                <CardImage src={item.src} />
                <Card.Body>
                  <CardTitle>{item.title}</CardTitle>
                  <CardText>{item.text}</CardText>
                </Card.Body>
              </StyledCard>
            ))}
          </SliderContent>
        </SliderWrapper>
      </Container>
    </Section9Wrapper>
  );
}
