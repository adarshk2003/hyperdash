import { useEffect, useState, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

const SectionWrapper = styled.section`
  background-color: rgb(20, 20, 20);
  width: 100%;
  padding: 50px 0;

  @media (max-width: 768px) {
    padding: 30px 0;
  }
`;

const FeatureBox = styled.div`
  text-align: center;
  color: white;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const FeatureTitle = styled.p`
  font-size: 1rem;
  font-weight: 500;
  color: #bbb;
  margin-bottom: 5px;

  @media (max-width: 576px) {
    font-size: 0.9rem;
  }
`;

const Number = styled.h2`
  font-size: 3rem;
  font-weight: 400;
  color: #fff;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 576px) {
    font-size: 2rem;
  }
`;

const pulse = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0.5; }
  100% { opacity: 1; }
`;

const PlusSign = styled.span`
  font-size: 2rem;
  margin-left: 5px;
  color: #fff;
  animation: ${pulse} 1s infinite;

  @media (max-width: 576px) {
    font-size: 1.5rem;
  }
`;

const FeatureUnit = styled.p`
  font-size: 2.1rem;
  font-weight: 300;
  color: #ccc;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }

  @media (max-width: 576px) {
    font-size: 1.5rem;
  }
`;

const useAnimatedNumber = (target, duration, start) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startValue = 0;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      setCount(Math.floor(progress * target));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [target, duration, start]);

  return count;
};

export default function Section6() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const maxPower = useAnimatedNumber(1200, 2000, isVisible);
  const range = useAnimatedNumber(516, 1500, isVisible);
  const chargeTime = useAnimatedNumber(12, 1000, isVisible);
  const speed = useAnimatedNumber(2, 1500, isVisible);

  return (
    <SectionWrapper ref={sectionRef}>
      <Container>
        <Row>
          <Col lg={3} md={6} sm={6} xs={12}>
            <FeatureBox>
              <FeatureTitle>Max Power</FeatureTitle>
              <Number>{maxPower}<PlusSign>+</PlusSign></Number>
              <FeatureUnit>hp</FeatureUnit>
            </FeatureBox>
          </Col>

          <Col lg={3} md={6} sm={6} xs={12}>
            <FeatureBox>
              <FeatureTitle>EPA estimated range up to</FeatureTitle>
              <Number>{range}</Number>
              <FeatureUnit>mi</FeatureUnit>
            </FeatureBox>
          </Col>

          <Col lg={3} md={6} sm={6} xs={12}>
            <FeatureBox>
              <FeatureTitle>Minutes to charge 200 miles</FeatureTitle>
              <Number>{chargeTime}</Number>
              <FeatureUnit>mins</FeatureUnit>
            </FeatureBox>
          </Col>

          <Col lg={3} md={6} sm={6} xs={12}>
            <FeatureBox>
              <FeatureTitle>0-60 mph</FeatureTitle>
              <Number>{"<" + speed}</Number>
              <FeatureUnit>sec</FeatureUnit>
            </FeatureBox>
          </Col>
        </Row>
      </Container>
    </SectionWrapper>
  );
}
