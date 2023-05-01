import React from 'react';

import { Header } from 'src/client/shared/components/Header';
import { Footer } from 'src/client/shared/components/Footer';
import { AnimationReveal } from 'src/client/shared/components/AnimationReveal';

import { Filters } from "./components/Filters/Filters";

export const Catalog = () => {
    return (
        <AnimationReveal>
            <Header />
            <main>
                <Filters />
            </main>
            <Footer />
        </AnimationReveal>
    );
};
