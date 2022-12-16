import React from 'react';
import tw from 'twin.macro';
// import { YMaps, Placemark } from 'react-yandex-maps';

import { AnimationReveal } from 'client/shared/components/AnimationReveal';
import { Container as ContainerBase } from 'client/shared/components/Misc/Layouts';
import { Header } from 'client/shared/components/Header';
import { Footer } from 'client/shared/components/Footer';

const Container = tw(
    ContainerBase
)`min-h-screen bg-primary-500 text-white font-medium flex justify-center -m-8 mt-2`;

export const Map = () => (
    <AnimationReveal>
        <Header />
        <Container>
            {/*<YMaps zoom={17} location={[59.964462, 30.460398]}>*/}
            {/*    <Placemark coordinates={[59.964462, 30.460398]} />*/}
            {/*</YMaps>*/}
        </Container>
        <Footer />
    </AnimationReveal>
);
