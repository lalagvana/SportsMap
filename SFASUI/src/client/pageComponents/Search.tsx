import React from 'react';
import tw from 'twin.macro';

import Header from 'client/components/headers/HeaderLight';
import Footer from 'client/components/footers/FiveColumnWithInputForm';
import AnimationRevealPage from 'client/helpers/AnimationRevealPage';
import { Container as ContainerBase } from 'client/components/misc/Layouts';

const Container = tw(
    ContainerBase
)`min-h-screen bg-primary-100 text-white font-medium flex justify-center -m-8 mt-2`;

export default () => (
    <AnimationRevealPage>
        <Header />
        <Container></Container>
        <Footer />
    </AnimationRevealPage>
);
