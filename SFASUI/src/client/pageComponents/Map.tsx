import React from 'react';
import tw from 'twin.macro';
// import { YMaps, Placemark } from 'react-yandex-maps';

import AnimationRevealPage from 'client/helpers/AnimationRevealPage';
import { Container as ContainerBase } from 'client/components/misc/Layouts';
import Header from 'client/components/headers/HeaderLight';
import Footer from 'client/components/footers/FiveColumnWithInputForm';

const Container = tw(
    ContainerBase
)`min-h-screen bg-primary-500 text-white font-medium flex justify-center -m-8 mt-2`;

export default () => (
    <AnimationRevealPage>
        <Header />
        <Container>
            {/*<YMaps zoom={17} location={[59.964462, 30.460398]}>*/}
            {/*    <Placemark coordinates={[59.964462, 30.460398]} />*/}
            {/*</YMaps>*/}
        </Container>
        <Footer />
    </AnimationRevealPage>
);
