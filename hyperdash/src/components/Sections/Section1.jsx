import styled from "styled-components";
import { Container, Button } from "react-bootstrap";
import { motion } from "framer-motion";

const SectionWrapper = styled(motion.section)`
  position: relative;
  width: 100%;
  height: 90vh;
  background: url("/hyperx/Hero Image.png") no-repeat center center/cover;
  display: flex;
  align-items: flex-end; 
  justify-content: center;
  text-align: center;
  color: white;
  margin-top: 64px; 
  padding-bottom: 40px;
`;

const StyledButton = styled(Button)`
  background-color: transparent;
  border: 1px solid white;
  padding: 3px 14px; 
  font-size: 0.9rem; 
  border-radius: 0; 
  &:hover {
    background-color: rgba(0, 0, 0, 0.9);
  }
`;

export default function Section1() {
  return (
    <SectionWrapper
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <Container>
        <StyledButton>Test drive</StyledButton>
      </Container>
    </SectionWrapper>
  );
}
