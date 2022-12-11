import React from 'react';
import tw from 'twin.macro';

import AnimationRevealPage from 'client/helpers/AnimationRevealPage';
import Header from 'client/components/headers/HeaderLight';
import Footer from 'client/components/footers/FiveColumnWithInputForm';
import ContactUsForm from 'client/components/forms/TwoColContactUsWithIllustrationFullForm';
import ContactDetails from 'client/components/cards/ThreeColContactDetails';

const Address = tw.span`leading-relaxed`;
const AddressLine = tw.span`block`;
const Email = tw.span`text-sm mt-6 block text-gray-500`;
const Phone = tw.span`text-sm mt-0 block text-gray-500`;

export default () => {
    return (
        <AnimationRevealPage>
            <Header />
            <ContactUsForm />
            <ContactDetails
                cards={[
                    {
                        title: 'Санкт-Петербург',
                        description: (
                            <>
                                <Address>
                                    <AddressLine>
                                        Администрация Красногвардейского района
                                        Сектор физической культуры и спорта
                                    </AddressLine>
                                    <AddressLine>
                                        Среднеохтинский пр., д. 50
                                    </AddressLine>
                                </Address>
                                <Email />
                                <Phone>+7 (812) 576-86-15</Phone>
                            </>
                        ),
                    },
                ]}
            />
            <Footer />
        </AnimationRevealPage>
    );
};
