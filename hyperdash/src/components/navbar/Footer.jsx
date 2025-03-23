import styled from "styled-components";
import { Container } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";

const FooterWrapper = styled.footer`
  width: 100%;
  background-color: black;
  color: white;
  padding: 50px 0;
`;

const SubscribeSection = styled.div`
  margin-bottom: 30px;
`;

const SubscribeHeading = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

const EmailInputWrapper = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid white;
  padding-bottom: 5px;
  max-width: 250px;
`;

const EmailInput = styled.input`
  background: transparent;
  border: none;
  outline: none;
  color: white;
  width: 100%;
  font-size: 1rem;
  padding: 5px;

  &::placeholder {
    color: white;
    opacity: 0.7;
  }
`;

const ArrowIcon = styled(FaArrowRight)`
  font-size: 1.2rem;
  cursor: pointer;
`;

const FooterSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;

const FooterColumns = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 50px;
  width: 100%;
`;

/* Unique style for 3-3 group */
const ThreeThreeGroup = styled.div`
  display: flex;
  gap: 40px;
  margin-left: 30px;
`;

const ThreeThreeColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px; /* Medium-Large gap between text links */
`;

/* Unique style for 4-4 group */
const FourFourGroup = styled.div`
  display: flex;
  gap: 40px;
`;

const FourFourColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterLink = styled.p`
  margin: 0;
  cursor: pointer;
  font-size: 0.95rem;

  &:hover {
    text-decoration: underline;
  }
`;

const BoldFooterLink = styled(FooterLink)`
  font-weight: bold;
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <SubscribeSection>
          <SubscribeHeading>Subscribe to our newsletter</SubscribeHeading>
          <EmailInputWrapper>
            <EmailInput type="email" placeholder="Enter your email" />
            <ArrowIcon />
          </EmailInputWrapper>
        </SubscribeSection>
        <FooterSection>
          <FooterColumns>
            {/* Left Side - 3-3 Group */}
            <ThreeThreeGroup>
              <ThreeThreeColumn>
                <BoldFooterLink>Air X</BoldFooterLink>
                <BoldFooterLink>Lexo Z</BoldFooterLink>
                <BoldFooterLink>Gravity 9</BoldFooterLink>
              </ThreeThreeColumn>
              <ThreeThreeColumn>
                <FooterLink>Fleet</FooterLink>
                <FooterLink>Company</FooterLink>
                <FooterLink>Stories</FooterLink>
              </ThreeThreeColumn>
            </ThreeThreeGroup>

            {/* Right Side - 4-4 Group */}
            <FourFourGroup>
              <FourFourColumn>
                <FooterLink>Purchasing</FooterLink>
                <FooterLink>Charging</FooterLink>
                <FooterLink>Insurance</FooterLink>
                <FooterLink>Service</FooterLink>
              </FourFourColumn>
              <FourFourColumn>
                <FooterLink>Spaces</FooterLink>
                <FooterLink>Investors</FooterLink>
                <FooterLink>Career</FooterLink>
                <FooterLink>Contact Us</FooterLink>
              </FourFourColumn>
            </FourFourGroup>
          </FooterColumns>
        </FooterSection>
      </Container>
    </FooterWrapper>
  );
}
