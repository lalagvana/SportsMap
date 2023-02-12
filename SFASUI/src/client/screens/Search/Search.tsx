import React from 'react';
import tw from 'twin.macro';

import { Header } from 'src/client/shared/components/Header';
import { Footer } from 'src/client/shared/components/Footer';
import { AnimationReveal } from 'src/client/shared/components/AnimationReveal';
import { Container as ContainerBase } from 'src/client/shared/components/Misc/Layouts';

const Container = tw(ContainerBase)`min-h-screen bg-primary-100 text-white font-medium flex justify-center -m-8 mt-2`;

export const Search = () => {
    return (
        <AnimationReveal>
            <Header />
            <Container />
            <Footer />
        </AnimationReveal>
    );
};
