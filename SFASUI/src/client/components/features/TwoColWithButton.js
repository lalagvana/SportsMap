import React from "react";
import tw from "twin.macro";
import Image from "next/image";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import FieldIcon from "../../images/field.svg";
import PeopleIcon from "../../images/people.svg";

const SectionHeading = tw.h2`text-4xl sm:text-5xl font-medium tracking-wide text-center`;

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24 items-center`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-6/12 flex-shrink-0 relative`;
const TextColumn = styled(Column)((props) => [
  tw`md:w-6/12 mt-16 md:mt-0`,
  props.textOnLeft
    ? tw`md:mr-12 lg:mr-16 md:order-first`
    : tw`md:ml-12 lg:ml-16 md:order-last`,
]);

const TextContent = tw.div`lg:py-8 text-center md:text-right`;
const Heading = tw(
  SectionHeading
)`mt-4 font-black text-right text-3xl sm:text-4xl lg:text-5xl md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-500`;

export default ({
  heading = (
    <>
      6435 <span tw="text-primary-500"></span>
    </>
  ),
  description = "Спортивных сооружений расположено в Санкт-Петербурге",
  imageCss = null,
}) => {
  return (
    <Container>
      <TwoColumn>
        <TextColumn>
          <ImageColumn>
            <Image src={FieldIcon} alt="" />
          </ImageColumn>
          <TextContent>
            <Heading>
              <span tw="text-primary-500">6435</span>
            </Heading>
            <Description>{description}</Description>
          </TextContent>
        </TextColumn>
        <TextColumn>
          <ImageColumn>
            <Image src={PeopleIcon} alt="" />
          </ImageColumn>
          <TextContent>
            <Heading>
              <span tw="text-primary-500">44%</span>
            </Heading>
            <Description>
              {"Жителей Санкт-Петербурга регулярно занимаются спортом"}
            </Description>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};
