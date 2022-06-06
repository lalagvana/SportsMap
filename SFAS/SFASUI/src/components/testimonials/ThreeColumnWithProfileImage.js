import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { Container } from "components/misc/Layouts.js";
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-7.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "images/svg-decorator-blob-8.svg";
import SpbuLogo from "images/logo-spbu.svg"
import KrasLogo from "images/logo-kras.svg"
import AdmLogo from "images/logo-adm.png"

const Testimonials = tw.div`flex flex-col lg:flex-row items-center lg:items-stretch lg:h-1/4`;
const TestimonialContainer = tw.div`mt-0 lg:w-1/3`;
const Testimonial = tw.div`px-4 text-center max-w-xs mx-auto flex flex-col items-center`;

const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none -z-20 absolute left-0 top-0 h-56 w-56 opacity-15 transform -translate-x-2/3 -translate-y-12 text-teal-400`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none -z-20 absolute right-0 bottom-0 h-64 w-64 opacity-15 transform translate-x-2/3 text-yellow-500`}
`;

export default () => {
  return (
    <Container>
        <Testimonials>
            <TestimonialContainer key={1}>
              <Testimonial>
              <img src={SpbuLogo} alt=""/>
              </Testimonial>
            </TestimonialContainer>
            <TestimonialContainer key={2}>
              <Testimonial>
              <img src={AdmLogo} alt=""/>
              </Testimonial>
            </TestimonialContainer>
            <TestimonialContainer key={3}>
              <Testimonial>
              <img src={KrasLogo} alt="" />
              </Testimonial>
            </TestimonialContainer>
        </Testimonials>      
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};
