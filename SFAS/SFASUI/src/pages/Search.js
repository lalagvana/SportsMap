import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container as ContainerBase } from "components/misc/Layouts";
import tw from "twin.macro";
import {css} from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
const Container = tw(ContainerBase)`min-h-screen bg-primary-100 text-white font-medium flex justify-center -m-8 mt-2`;

export default () => (
  <AnimationRevealPage>
    <Header />
    <Container>
    </Container>
    <Footer/>
  </AnimationRevealPage>
);
