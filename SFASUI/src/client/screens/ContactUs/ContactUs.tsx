import React from 'react';
import tw from 'twin.macro';

import { AnimationReveal } from 'src/client/shared/components/AnimationReveal';
import { Header } from 'src/client/shared/components/Header';
import { Footer } from 'src/client/shared/components/Footer';

import { Form } from 'src/client/screens/ContactUs/components/Form';
import { Details } from 'src/client/screens/ContactUs/components/Details';

const Address = tw.span`leading-relaxed`;
const AddressLine = tw.span`block`;
const Email = tw.span`text-sm mt-6 block text-gray-500`;
const Phone = tw.span`text-sm mt-0 block text-gray-500`;

export const ContactUs = () => {
    return (
        <AnimationReveal>
            <Header />
            <Form />
            <Details
                cards={[
                    {
                        title: 'Санкт-Петербург',
                        description: (
                            <>
                                <Address>
                                    <AddressLine>
                                        Администрация Красногвардейского района Сектор физической культуры и спорта
                                    </AddressLine>
                                    <AddressLine>Среднеохтинский пр., д. 50</AddressLine>
                                </Address>
                                <Email />
                                <Phone>+7 (812) 576-86-15</Phone>
                            </>
                        ),
                    },
                ]}
            />
            <Footer />
        </AnimationReveal>
    );
};
