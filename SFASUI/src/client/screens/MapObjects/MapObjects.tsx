import React from 'react';
import tw from 'twin.macro';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

import { AnimationReveal } from 'src/client/shared/components/AnimationReveal';
import { Container as ContainerBase } from 'src/client/shared/components/Misc/Layouts';
import { Header } from 'src/client/shared/components/Header';
import { Footer } from 'src/client/shared/components/Footer';
import { useFacilities } from '../../shared/utils/api/facilities';

const Container = tw(
    ContainerBase
)`min-h-screen bg-primary-500 text-white font-medium flex justify-center -m-8 mt-2`;

export const MapObjects = () => {
    const { data: sportObjectsList, error } = useFacilities();
    console.log(error)
    return (
        <AnimationReveal>
            <Header />
            <Container>
                <YMaps>
                    <Map
                        width={'100%'}
                        height={'100vh'}
                        defaultState={{ center: [59.9386, 30.3141], zoom: 13 }}
                    />
                    {sportObjectsList?.data.map(({ x, y }) => (
                        <Placemark geometry={[x, y]} />
                    ))}
                </YMaps>
            </Container>
            <Footer />
        </AnimationReveal>
    );
};
