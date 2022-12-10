import React from "react";
import AnimationRevealPage from "client/helpers/AnimationRevealPage.js";
import { Container as ContainerBase } from "client/components/misc/Layouts";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { YMaps, Placemark } from "react-yandex-maps";
import Header from "client/components/headers/light.js";
import Footer from "client/components/footers/FiveColumnWithInputForm.js";
const Container = tw(
  ContainerBase
)`min-h-screen bg-primary-500 text-white font-medium flex justify-center -m-8 mt-2`;

export default () => (
  <AnimationRevealPage>
    <Header />
    <Container>
      <YMaps zoom={17} location={[59.964462, 30.460398]}>
        <Placemark coordinates={[59.964462, 30.460398]} />
      </YMaps>
    </Container>
    <Footer />
  </AnimationRevealPage>
);
